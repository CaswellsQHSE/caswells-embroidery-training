import React, { useState, useCallback } from "react";
import { CONFIG, QUESTIONS, MODULES } from "./data/config";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import AdminPanel from "./components/AdminPanel";
import {
  Welcome, Machine, Hazards, Operation, Needles,
  Lubrication, CompressedAir, Emergency, Assessment, Certificate
} from "./components/modules/index.jsx";
import "./App.css";

export default function App() {
  const [cfg, setCfg] = useState(CONFIG);
  const [questions, setQuestions] = useState(QUESTIONS);
  const [currentModule, setCurrentModule] = useState(0);
  const [completedModules, setCompletedModules] = useState([]);
  const [answers, setAnswers] = useState({});
  const [attempts, setAttempts] = useState(0);
  const [passed, setPassed] = useState(false);
  const [learner, setLearner] = useState({ name: "", role: "" });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const goTo = useCallback((idx) => {
    setCurrentModule(idx);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const completeAndNext = useCallback((idx) => {
    setCompletedModules((prev) => prev.includes(idx) ? prev : [...prev, idx]);
    goTo(idx + 1);
  }, [goTo]);

  const submitAssessment = useCallback((ans) => {
    setAnswers(ans);
    setAttempts((a) => a + 1);
    const score = questions.filter((q, i) => ans[i] === q.correct).length;
    const p = (score / questions.length) * 100 >= cfg.passmark;
    setPassed(p);
    if (p) setCompletedModules((prev) => prev.includes(8) ? prev : [...prev, 8]);
    goTo(9);
  }, [questions, cfg.passmark, goTo]);

  const retake = useCallback(() => {
    setAnswers({});
    goTo(8);
  }, [goTo]);

  const openAdmin = useCallback(() => {
    const pass = window.prompt("Enter admin password:");
    if (pass === cfg.adminPassword) setAdminOpen(true);
    else if (pass !== null) window.alert("Incorrect password.");
  }, [cfg.adminPassword]);

  const sharedProps = { cfg: { ...cfg, learnerName: learner.name, learnerRole: learner.role } };

  const moduleComponents = [
    <Welcome {...sharedProps} onNext={(name, role) => { setLearner({ name, role }); completeAndNext(0); }} />,
    <Machine {...sharedProps} onNext={() => completeAndNext(1)} onBack={() => goTo(0)} />,
    <Hazards {...sharedProps} onNext={() => completeAndNext(2)} onBack={() => goTo(1)} />,
    <Operation {...sharedProps} onNext={() => completeAndNext(3)} onBack={() => goTo(2)} />,
    <Needles {...sharedProps} onNext={() => completeAndNext(4)} onBack={() => goTo(3)} />,
    <Lubrication {...sharedProps} onNext={() => completeAndNext(5)} onBack={() => goTo(4)} />,
    <CompressedAir {...sharedProps} onNext={() => completeAndNext(6)} onBack={() => goTo(5)} />,
    <Emergency {...sharedProps} onNext={() => completeAndNext(7)} onBack={() => goTo(6)} />,
    <Assessment cfg={cfg} questions={questions} attempts={attempts}
      maxAttempts={cfg.maxAttempts} onSubmit={submitAssessment} onBack={() => goTo(7)} />,
    <Certificate cfg={{ ...cfg, learnerName: learner.name, learnerRole: learner.role }} questions={questions} answers={answers} passed={passed}
      attempts={attempts} onRetake={retake} onBack={() => goTo(8)} />,
  ];

  const pct = Math.round((completedModules.length / MODULES.length) * 100);

  return (
    <div className="app-shell" style={{
      "--brand": cfg.brandPrimary,
      "--secondary": cfg.brandSecondary,
      "--accent": cfg.brandAccent
    }}>
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
      <Sidebar cfg={cfg} modules={MODULES} current={currentModule} completed={completedModules}
        progress={pct} open={sidebarOpen} onNavigate={goTo} />
      <div className="main-area">
        <TopBar title={MODULES[currentModule]?.label}
          subtitle={`${cfg.courseTitle} — ${cfg.orgName}`}
          onMenuClick={() => setSidebarOpen((v) => !v)}
          onAdminClick={openAdmin} />
        <div className="content-area">
          <div className="content-inner">
            {moduleComponents[currentModule]}
          </div>
        </div>
      </div>
      {adminOpen && (
        <AdminPanel cfg={cfg} questions={questions}
          onSave={(newCfg, newQs) => { setCfg(newCfg); setQuestions(newQs); setAdminOpen(false); }}
          onClose={() => setAdminOpen(false)} />
      )}
    </div>
  );
}
