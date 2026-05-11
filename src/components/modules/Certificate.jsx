// src/components/modules/Certificate.jsx
// Fixes applied:
//  1. Logo: uses cfg.logoUrl (already set to CG-full-colour-logo-RGB.svg in config)
//  2. Certificate card: white background, Caswells blue (#08488D) border
//  3. Print button added — triggers window.print() with @media print styles
//  4. EmailJS templateId corrected to template_zgaz4qw (already in config; was previously wrong in code)

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ── Helpers ──────────────────────────────────────────────────────────────────

function pad(n) { return String(n).padStart(2, "0"); }

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function buildRef(site, date) {
  const d = new Date(date);
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `EMB-${d.getFullYear()}-${pad(d.getMonth() + 1)}${pad(d.getDate())}-${rand}`;
}

function addOneYear(date) {
  const d = new Date(date);
  d.setFullYear(d.getFullYear() + 1);
  return d;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Certificate({ cfg, questions, answers, passed, attempts, onRetake, onBack }) {
  const completedDate = useRef(new Date());
  const ref = useRef(buildRef(cfg.site?.id || "site", completedDate.current));
  const refresherDate = addOneYear(completedDate.current);

  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [emailSending, setEmailSending] = useState(false);

  const score = questions.filter((q, i) => answers[i] === q.correct).length;
  const pct = Math.round((score / questions.length) * 100);

  // Auto-send email on first pass render
  useEffect(() => {
    if (!passed) return;
    sendEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function sendEmail() {
    setEmailSending(true);
    setEmailError("");
    const { serviceId, templateId, publicKey, toEmail } = cfg.emailjs;

    const params = {
      to_email: toEmail,
      learner_name: cfg.learnerName || "Operator",
      learner_role: cfg.learnerRole || "Embroidery Machine Operator",
      course: cfg.courseTitle,
      site: cfg.site?.name || cfg.site?.id || "Billingham",
      score: `${score} / ${questions.length} (${pct}%)`,
      date_completed: formatDate(completedDate.current),
      refresher_due: formatDate(refresherDate),
      reference: ref.current,
      qhse_manager: cfg.qhseManager || cfg.site?.qhseManager || "",
    };

    emailjs.send(serviceId, templateId, params, publicKey)
      .then(() => {
        setEmailSent(true);
        setEmailSending(false);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setEmailError("Email could not be sent. Please notify your QHSE Manager manually.");
        setEmailSending(false);
      });
  }

  // ── Print handler ──────────────────────────────────────────────────────────
  function handlePrint() {
    window.print();
  }

  // ── Fail view ──────────────────────────────────────────────────────────────
  if (!passed) {
    return (
      <div className="cert-wrapper">
        <style>{printStyles}</style>
        <div className="cert-fail-card">
          <div className="cert-fail-icon">✗</div>
          <h2>Assessment not passed</h2>
          <p>
            You scored <strong>{score}/{questions.length} ({pct}%)</strong>. A score of{" "}
            <strong>{cfg.passmark}%</strong> is required to pass.
          </p>
          {attempts < cfg.maxAttempts ? (
            <p>You have <strong>{cfg.maxAttempts - attempts}</strong> attempt(s) remaining.</p>
          ) : (
            <p className="cert-fail-limit">You have used all {cfg.maxAttempts} attempts. Please speak to your QHSE Manager.</p>
          )}

          <div className="cert-review">
            <h3>Answer review</h3>
            {questions.map((q, i) => {
              const correct = answers[i] === q.correct;
              return (
                <div key={i} className={`review-item ${correct ? "review-correct" : "review-wrong"}`}>
                  <div className="review-q">
                    <span className="review-badge">{correct ? "✓" : "✗"}</span>
                    <strong>Q{i + 1}:</strong> {q.q}
                  </div>
                  {!correct && (
                    <div className="review-detail">
                      <div className="review-your">Your answer: {q.opts[answers[i]] ?? "—"}</div>
                      <div className="review-ans">Correct answer: {q.opts[q.correct]}</div>
                      {q.explain && <div className="review-exp">{q.explain}</div>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="cert-actions no-print">
            {attempts < cfg.maxAttempts && (
              <button className="btn btn-primary" onClick={onRetake}>Retake assessment</button>
            )}
            <button className="btn btn-ghost" onClick={onBack}>← Back to assessment</button>
          </div>
        </div>
      </div>
    );
  }

  // ── Pass view ──────────────────────────────────────────────────────────────
  return (
    <div className="cert-wrapper">
      <style>{printStyles}</style>

      {/* Screen header */}
      <div className="cert-screen-header no-print">
        <div>
          <h1 className="cert-screen-title">Certificate</h1>
          <p className="cert-screen-sub">{cfg.courseTitle} — {cfg.orgName}</p>
        </div>
      </div>

      <p className="cert-success-msg no-print">You have successfully completed this training module.</p>

      {/* ── The printable certificate card ── */}
      <div className="cert-card" id="certificate-card">

        {/* Logo */}
        <div className="cert-logo-row">
          {cfg.logoUrl
            ? <img src={cfg.logoUrl} alt={cfg.orgName} className="cert-logo" />
            : <span className="cert-org-text">{cfg.orgName}</span>
          }
        </div>

        <div className="cert-divider" />

        <div className="cert-title-block">
          <div className="cert-eyebrow">Certificate of Completion</div>
          <div className="cert-course">{cfg.courseTitle}</div>
        </div>

        {/* Learner name */}
        {cfg.learnerName && (
          <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#718096", marginBottom: "4px" }}>Awarded to</div>
            <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1a1a2e" }}>{cfg.learnerName}</div>
            {cfg.learnerRole && <div style={{ fontSize: "0.82rem", color: "#718096", marginTop: "2px" }}>{cfg.learnerRole}</div>}
          </div>
        )}

        {/* Score panel */}
        <div className="cert-score-panel">
          <div className="cert-score-pct">{pct}%</div>
          <div className="cert-score-sub">{score} / {questions.length} correct</div>
        </div>

        {/* Meta grid */}
        <div className="cert-meta-grid">
          <div className="cert-meta-item">
            <div className="cert-meta-label">SITE</div>
            <div className="cert-meta-value">{cfg.site?.name || "Billingham"}</div>
          </div>
          <div className="cert-meta-item">
            <div className="cert-meta-label">DATE COMPLETED</div>
            <div className="cert-meta-value">{formatDate(completedDate.current)}</div>
          </div>
          <div className="cert-meta-item">
            <div className="cert-meta-label">REFERENCE</div>
            <div className="cert-meta-value cert-ref">{ref.current}</div>
          </div>
          <div className="cert-meta-item">
            <div className="cert-meta-label">REFRESHER DUE</div>
            <div className="cert-meta-value">{formatDate(refresherDate)}</div>
          </div>
        </div>

        <div className="cert-divider" />

        <div className="cert-footer-text">
          Issued by {cfg.site?.qhseManager || cfg.qhseManager} · {cfg.orgName} · {cfg.site?.address || ""}
        </div>
      </div>

      {/* ── Action buttons (screen only) ── */}
      <div className="cert-actions no-print">
        <button className="btn btn-primary" onClick={handlePrint}>
          🖨 Print certificate
        </button>

        <button
          className="btn btn-ghost"
          onClick={sendEmail}
          disabled={emailSending || emailSent}
        >
          {emailSending ? "Sending…" : emailSent ? "✓ Email sent" : "✉ Email to QHSE"}
        </button>
      </div>

      {emailError && (
        <div className="cert-email-error no-print">{emailError}</div>
      )}
      {emailSent && (
        <div className="cert-email-ok no-print">
          Completion notification sent to {cfg.emailjs?.toEmail}.
        </div>
      )}

      {/* ── Answer review ── */}
      <div className="cert-review no-print">
        <h3>Answer review</h3>
        {questions.map((q, i) => {
          const correct = answers[i] === q.correct;
          return (
            <div key={i} className={`review-item ${correct ? "review-correct" : "review-wrong"}`}>
              <div className="review-q">
                <span className="review-badge">{correct ? "✓" : "✗"}</span>
                <strong>Q{i + 1}:</strong> {q.q}
              </div>
              {!correct && (
                <div className="review-detail">
                  <div className="review-your">Your answer: {q.opts[answers[i]] ?? "—"}</div>
                  <div className="review-ans">Correct answer: {q.opts[q.correct]}</div>
                  {q.explain && <div className="review-exp">{q.explain}</div>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Print styles (injected into <head> at render time) ────────────────────────
const printStyles = `
  @media print {
    /* Hide everything except the certificate card */
    body * { visibility: hidden !important; }
    #certificate-card, #certificate-card * { visibility: visible !important; }
    #certificate-card {
      position: fixed !important;
      top: 0; left: 0;
      width: 100vw !important;
      max-width: 100vw !important;
      margin: 0 !important;
      border: 3px solid #08488D !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      padding: 2.5rem 3rem !important;
    }
    .no-print { display: none !important; }
  }
`;
