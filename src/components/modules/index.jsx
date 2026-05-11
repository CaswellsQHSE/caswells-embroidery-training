// ─── EMBROIDERY MACHINE OPERATOR TRAINING — ALL MODULES ─────────────────────
import React, { useState } from "react";
import { Card, Box, SectionHeader, NavRow, DataTable } from "../UI";

// ══════════════════════════════════════════════════════════════════════════════
// 0 — WELCOME
// ══════════════════════════════════════════════════════════════════════════════
export function Welcome({ cfg, onNext }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <SectionHeader tag="Embroidery Machine Training" icon="🏠"
        title={`Welcome to ${cfg.orgName} Embroidery Machine Operator Training`}
        desc="This course covers everything you need to know to operate the SWF embroidery machines safely at the Billingham site." />

      <Box type="info" title="What this course covers" icon="📋">
        <ul>
          <li>The SWF embroidery machines — what they are and how they work</li>
          <li>All hazards identified in the risk assessment (CAS22 REV 3)</li>
          <li>Safe operating procedures for every task</li>
          <li>Needle changing, sharps handling, and fragment recovery</li>
          <li>Lubrication with Odif LB5 (COSHH controls)</li>
          <li>Compressed air safety</li>
          <li>Emergency procedures — emergency stop, needle-stick, fire</li>
          <li>A 10-question assessment with an 80% pass mark</li>
        </ul>
      </Box>

      <Card title="Your details" icon="👤">
        <div className="grid-2">
          <div className="admin-field">
            <label>Your name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="First and last name" />
          </div>
          <div className="admin-field">
            <label>Your role</label>
            <input value={role} onChange={e => setRole(e.target.value)} placeholder="e.g. Embroidery Operator" />
          </div>
        </div>
      </Card>

      <Box type="warning" title="Before you begin" icon="⚠️">
        <p>This training replaces the need to read the full OP-11 and CAS22 documents before first use, but you must still
        follow all procedures described in those documents during your day-to-day work. Paper copies are held under QHSE
        document control and are available on request from {cfg.qhseManager}.</p>
        <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "1rem", cursor: "pointer" }}>
          <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
            style={{ marginTop: "3px", flexShrink: 0 }} />
          <span>I understand that completing this training does not replace following safe working procedures on site. I will
          operate the machines only as trained and authorised.</span>
        </label>
      </Box>

      <NavRow onNext={onNext} nextDisabled={!name.trim() || !role.trim() || !agreed}
        nextLabel="Start training →" />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 1 — THE MACHINES
// ══════════════════════════════════════════════════════════════════════════════
export function Machine({ cfg, onNext, onBack }) {
  return (
    <div>
      <SectionHeader tag="Module 1" icon="⚙️" title="The SWF Embroidery Machines"
        desc="What the machines are, how they work, and what's in the embroidery department at Billingham." />

      <Box type="info" title="What is an embroidery machine?" icon="🧵">
        <p>The SWF machines stitch patterns, logos and text directly onto garments using a row of needles moving at high speed.
        Each needle carries a different colour thread from the overhead spool rail, through tensioners and guides, down to
        the needle bar. The rotary hook beneath the needle bar catches the thread to form each stitch.</p>
        <p>The machines run automatically once a design programme is loaded. During operation, the needle bar, rotary hooks,
        take-up levers, and drive shaft are all moving simultaneously at high speed.</p>
      </Box>

      <Card title="Machines at Billingham — Embroidery Department" icon="🏭">
        <DataTable
          headers={["No.", "Model", "Serial Number", "Configuration"]}
          rows={[
            ["1", "SWF K-VH1512D", "P493001",   "15-needle, 12-head"],
            ["2", "SWF K-VH1512D", "D511 2001", "15-needle, 12-head"],
            ["3", "SWF K-VH1506C", "C6040704",  "15-needle, 6-head"],
            ["4", "SWF E-VH1206C", "C6400905",  "12-needle, 6-head"],
            ["5", "SWF T-1201C",   "N.P.T.S.",  "12-needle, 1-head (cap/tubular specialist)"],
          ]}
        />
        <p style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "#6b7280" }}>
          All machines are manufactured by SunStar Co. Ltd and use Groz-Beckert DB x K5 Nm 75/11 needles.
          Annual service is carried out by GK Services. Reference: CAS22 REV 3.
        </p>
      </Card>

      <Card title="Watch — Machine in operation" icon="🎬">
        <p>The video below shows one of the Billingham SWF machines running a production embroidery cycle.
        Notice the speed of the needle bar and how quickly the heads move between positions.</p>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden",
          borderRadius: "8px", marginTop: "0.75rem" }}>
          <iframe
            src={cfg.references.videoUrl}
            title="SWF Embroidery Machine in Operation — Caswells Group Billingham"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Box type="warning" icon="⚠️" title="What to notice">
          <ul>
            <li>The needle bar moves continuously at high speed during operation</li>
            <li>All 15 needle positions on each head move simultaneously</li>
            <li>The frame moves the garment beneath the needle bar — fingers near this area during operation would cause serious injury</li>
            <li>The machine stops automatically at thread break or end of programme</li>
          </ul>
        </Box>
      </Card>

      <Card title="Key machine components" icon="🔧">
        <DataTable
          headers={["Component", "Location", "What it does"]}
          rows={[
            ["Needle bar", "Front of each head", "Holds up to 15 needles; moves vertically at high speed during stitching"],
            ["Rotary hook", "Below needle bar", "Catches thread to form each stitch; must be lubricated every 4 hours"],
            ["Take-up lever", "Above needle bar", "Controls thread tension; moves rapidly during operation"],
            ["Control panel", "Between machine pairs", "Touchscreen showing design, colour sequence; START/STOP buttons"],
            ["Emergency stop", "Between heads at chest height", "Red mushroom button with yellow surround — twist to release"],
            ["Main power switch", "Base of control pedestal", "Switches machine fully off — required before needle changes"],
            ["16A CEE socket", "Wall (labelled DB11 WAY 21)", "Industrial power connection — isolates the machine from supply"],
          ]}
        />
      </Card>

      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 2 — HAZARDS OVERVIEW
// ══════════════════════════════════════════════════════════════════════════════
export function Hazards({ cfg, onNext, onBack }) {
  return (
    <div>
      <SectionHeader tag="Module 2" icon="⚠️" title="Hazards — What Can Go Wrong"
        desc="Eight hazards have been identified in CAS22 REV 3. Understanding each hazard is the first step to controlling it." />

      <Box type="warning" title="This module is based on CAS22 REV 3" icon="📋">
        <p>The risk assessment (CAS22 REV 3, {cfg.qhseManager}, 08/05/2026) identified eight hazards associated
        with operating the SWF embroidery machines. All have been assessed and controls put in place. You need to
        know and follow those controls.</p>
      </Box>

      {[
        { icon: "🖐️", title: "1. Entrapment — limbs, hair, jewellery",
          risk: "Moving parts including the needle, hook, take-up lever, pulley, and drive shaft can entrap loose clothing, long hair, jewellery, or lanyards.",
          controls: ["Long hair must be tied back before use", "Jewellery, scarves, and lanyards must be removed or secured", "Keep hands, fingers, and head away from all moving parts during operation", "Machine must be STOPPED before any hands-near-needle task"] },
        { icon: "⚡", title: "2. Electrocution / electrical contact",
          risk: "The machine operates at 16A industrial supply via a CEE connector. Damaged cables or unauthorised repairs create electrocution risk.",
          controls: ["Inspect the power cable and CEE connector before each shift", "All electrical faults must be reported immediately — machine out of service", "All electrical equipment is PAT tested annually", "Operators must not attempt electrical repairs"] },
        { icon: "👂", title: "3. Noise-induced hearing loss",
          risk: "Measured noise level at operator position: 81 dB(A) — above the Lower Exposure Action Value of 80 dB(A) under the Control of Noise at Work Regulations 2005.",
          controls: ["Ear plugs are available under each machine at all times", "Use is strongly encouraged during extended operation", "You have been informed of the noise risk as part of this training", "Noise assessment will be repeated if machine configuration changes"] },
        { icon: "🏃", title: "4. Slips, trips, and falls",
          risk: "Trailing threads, waste fabric, and floor debris in the operating zone.",
          controls: ["Keep floors clear of threads, waste fabric, and debris", "Clean up spills immediately", "Safety footwear must be worn at all times in the operational area"] },
        { icon: "💪", title: "5. Manual handling — musculoskeletal injury",
          risk: "Repetitive framing of garments is a known upper limb disorder (ULD) risk. Lifting and moving stock adds to the load.",
          controls: ["Use correct framing technique as trained — neutral wrist position, even tension", "Task rotation should be applied where practicable", "Use trolleys for moving garment stock", "Report persistent wrist, shoulder, or neck discomfort to your manager immediately"] },
        { icon: "🪡", title: "6. Needle-stick injury / sharps puncture wound",
          risk: "Groz-Beckert Nm 75/11 needles are fine-gauge and capable of causing puncture wounds during changing, handling, or retrieval of fragments.",
          controls: ["Machine OFF before needle changes — always", "Cut-resistant gloves (EN 388) and safety glasses (EN 166) mandatory for needle tasks", "All used/broken needles into the Sharpsafe container — never loose waste bins", "Any needle-stick injury must be reported and an incident form completed"] },
        { icon: "💥", title: "7. Needle fragment ejection",
          risk: "Needles can break at operating speed, ejecting fine metal fragments that are difficult to locate.",
          controls: ["Safety glasses must be worn during needle tasks and breakage investigations", "Systematically check the area for all fragments before restarting after any breakage", "Needles must be inspected before use and replaced if bent or damaged"] },
        { icon: "🛢️", title: "8. COSHH — Odif LB5 lubricant (flammable aerosol / sensitiser)",
          risk: "Odif LB5 is classified H222 Extremely Flammable Aerosol. It contains a skin sensitiser. The rotary hook is lubricated every 4 hours — this is a routine, frequent exposure task.",
          controls: ["Nitrile gloves (EN 374) and safety glasses (EN 166) mandatory during lubrication", "No ignition sources during or after use — ventilation must be maintained", "Minimum effective quantity only — do not over-spray", "Dispose of empty cans as hazardous waste — not general waste"] },
      ].map((h, i) => (
        <Card key={i} title={h.title} icon={h.icon} style={{ marginBottom: "1rem" }}>
          <p style={{ color: "#6b7280", marginBottom: "0.5rem" }}><strong>Risk: </strong>{h.risk}</p>
          <ul>{h.controls.map((c, j) => <li key={j}>{c}</li>)}</ul>
        </Card>
      ))}

      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 3 — SAFE OPERATION
// ══════════════════════════════════════════════════════════════════════════════
export function Operation({ cfg, onNext, onBack }) {
  return (
    <div>
      <SectionHeader tag="Module 3" icon="▶️" title="Safe Operation"
        desc="Pre-use checks, start-up, loading garments, running the machine, and end-of-shift shutdown. Follow OP-11 at all times." />

      <Card title="6.1 Pre-use checks — before every shift" icon="✅">
        <Box type="warning" title="STOP if any defect is found" icon="🛑">
          <p>If any of the checks below fail, do not start the machine. Report immediately to your manager.</p>
        </Box>
        <ol>
          <li>Visually inspect the machine for damage, loose components, or unusual wear</li>
          <li>Confirm all head guards and safety covers are in place and secure</li>
          <li>Check all needles — replace any bent, blunted, or damaged needle before starting</li>
          <li>Confirm thread paths are correctly set on all heads with no tangled thread</li>
          <li>Check all bobbin cases are properly seated</li>
          <li>Inspect the power cable and 16A CEE connector for visible damage</li>
          <li>Confirm the work area is clear of trailing threads, waste fabric, and trip hazards</li>
          <li>Confirm the Sharpsafe sharps container is in place at the workstation</li>
          <li>Confirm required PPE is available and serviceable</li>
          <li>Check whether the rotary hook lubrication schedule is due (every 4 hours)</li>
        </ol>
      </Card>

      <Card title="6.2 Machine start-up" icon="🟢">
        <ol>
          <li>Ensure no persons have hands or body parts near any machine head</li>
          <li>Connect the machine to the 16A CEE wall socket (labelled DB11 WAY 21)</li>
          <li>Switch on using the main power switch at the base of the control pedestal</li>
          <li>Allow the SWF control screen to complete its initialisation sequence</li>
          <li>Load the design file — confirm correct design, colour sequence, and frame size</li>
          <li>Confirm the green indicator light is lit and the machine is in ready state</li>
        </ol>
      </Card>

      <Card title="6.3 Loading and framing garments" icon="👕">
        <ol>
          <li>Select the correct embroidery frame for the garment type and design size</li>
          <li>Frame the garment using correct technique — even tension, neutral wrist position, avoid twisting</li>
          <li>Fit the framed garment onto the machine arm securely in the frame guides</li>
          <li>Confirm the frame is not obstructing any moving part and the design position is correct</li>
        </ol>
        <Box type="info" icon="💪" title="ULD reminder">
          <p>Task rotation should be applied where practicable. Report persistent wrist, shoulder, or neck discomfort
          to your manager or {cfg.qhseManager} immediately.</p>
        </Box>
      </Card>

      <Card title="6.4 Normal operation" icon="▶️">
        <ol>
          <li>Stand clear of all moving parts at all times</li>
          <li>Press the green START button on the head or control panel to begin</li>
          <li>Monitor the machine — watch for thread breaks, unusual sounds, needle strikes, or frame movement</li>
          <li>Do not leave the machine running unattended during active production</li>
          <li>The machine stops automatically at end of programme — check garment before removing</li>
        </ol>
        <Box type="warning" icon="👂" title="Noise — 81 dB(A) at operator position">
          <p>This is above the Lower Exposure Action Value (80 dB(A)). Ear plugs are available under each machine.
          Their use is strongly encouraged during extended production runs.</p>
        </Box>
      </Card>

      <Card title="6.10 End-of-shift shutdown" icon="🔴">
        <ol>
          <li>Complete any final embroidery cycle and remove all garments from frames</li>
          <li>Press STOP on all active heads — confirm all heads are stationary</li>
          <li>Check whether the rotary hook lubrication schedule is due — lubricate if required</li>
          <li>Clean down machine heads and working area</li>
          <li>Remove all waste thread, fabric scraps, and packaging from the work area</li>
          <li>Check the Sharpsafe container — if ¾ full, seal and notify {cfg.qhseManager}</li>
          <li>Switch the machine OFF at the main power switch on the control pedestal</li>
          <li>Report any faults, defects, or near misses to your manager before leaving</li>
        </ol>
      </Card>

      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 4 — NEEDLES & SHARPS
// ══════════════════════════════════════════════════════════════════════════════
export function Needles({ cfg, onNext, onBack }) {
  return (
    <div>
      <SectionHeader tag="Module 4" icon="🪡" title="Needles, Sharps & Fragment Recovery"
        desc="Needle changing, thread-break recovery, broken needle fragment recovery, and sharps disposal." />

      <Box type="warning" title="Key rule — always" icon="🛑">
        <p><strong>The machine MUST be switched OFF before any needle-changing task.</strong><br />
        Cut-resistant gloves (EN 388) and safety glasses (EN 166) are mandatory. No exceptions.</p>
      </Box>

      <Card title="Needle specification" icon="📌">
        <p><strong>Groz-Beckert DB x K5 Nm 75/11 (FFG/SES)</strong></p>
        <ul>
          <li>Fine-gauge — fully capable of causing a puncture wound</li>
          <li>FFG/SES surface finish — broken fragments are fine and can be hard to locate after ejection</li>
          <li>Packs of 10 — handling and disposal of individual needles is a routine task requiring consistent PPE use</li>
          <li>Replace at the first sign of bending, blunting, or damage — do not continue running a suspect needle</li>
        </ul>
      </Card>

      <Card title="6.5 Thread-break recovery" icon="🧵">
        <ol>
          <li>The machine stops automatically on a thread break</li>
          <li>Do not place hands near the needle area until fully stopped</li>
          <li>Identify the broken thread and affected head number</li>
          <li>Re-thread the affected needle: overhead spool rail → thread guides → tensioners → take-up lever → lower guides → needle</li>
          <li>Ensure thread is fully seated in all guides and tensioners</li>
          <li>Check the needle — if bent or blunted, proceed to needle changing below</li>
          <li>Press START to resume — monitor closely for the first few stitches</li>
        </ol>
      </Card>

      <Card title="6.6 Needle changing" icon="🔄">
        <ol>
          <li>Press the red STOP button. Confirm the machine is stationary.</li>
          <li><strong>Switch the main power OFF</strong> at the control pedestal base switch</li>
          <li>Put on cut-resistant gloves (EN 388) and safety glasses (EN 166)</li>
          <li>Using the needle clamp screw, loosen the needle in the affected position</li>
          <li>Remove the needle carefully — treat the tip as sharp at all times. Do not place loose needles on the worksurface.</li>
          <li>Inspect the removed needle. If bent, broken, or blunted — place directly into the Sharpsafe container</li>
          <li>Select a new Groz-Beckert DB x K5 Nm 75/11 needle</li>
          <li>Insert with the flat side correctly oriented (flat side to the rear)</li>
          <li>Tighten the needle clamp screw securely</li>
          <li>Confirm the needle is straight and fully seated before removing gloves</li>
          <li>Switch power back ON. Test-stitch on scrap fabric before resuming production.</li>
        </ol>
      </Card>

      <Card title="6.6a Needle breakage — fragment recovery" icon="💥">
        <Box type="warning" icon="🚨" title="Treat every breakage as a serious event">
          <p>A broken needle at operating speed ejects fine metal fragments. All fragments must be located before
          the machine restarts.</p>
        </Box>
        <ol>
          <li>Press the <strong>EMERGENCY STOP</strong> (red mushroom button between heads — twist to release) immediately</li>
          <li>Wait until the machine is completely stationary before approaching</li>
          <li>Put on safety glasses (EN 166) before approaching the machine</li>
          <li>Systematically search the machine head area, frame, garment, and floor for all fragments</li>
          <li>Do not use bare hands to retrieve fragments</li>
          <li>Place all fragments into the Sharpsafe container</li>
          <li>Only restart once all fragments are accounted for and a replacement needle is fitted</li>
          <li><strong>Report all needle breakages to your manager</strong> and record on the near-miss log</li>
        </ol>
      </Card>

      <Card title="Sharps disposal — Sharpsafe container" icon="🗑️">
        <p>A Sharpsafe 0.6L sharps container (yellow lid) is located at the workstation.</p>
        <ul>
          <li>All used, broken, or bent needles go directly into this container — no exceptions</li>
          <li>Never discard loose into general waste, recycling bins, or packaging</li>
          <li>When the container is ¾ full — seal it and notify {cfg.qhseManager} for replacement</li>
          <li>Disposal is via certified hazardous waste contractor — do not put in general waste</li>
        </ul>
      </Card>

      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 5 — LUBRICATION & COSHH
// ══════════════════════════════════════════════════════════════════════════════
export function Lubrication({ cfg, onNext, onBack }) {
  return (
    <div>
      <SectionHeader tag="Module 5" icon="🛢️" title="Machine Lubrication & COSHH"
        desc="Odif LB5 is an extremely flammable aerosol. Using it safely is a COSHH requirement — not optional." />

      <Box type="warning" title="COSHH-CAS-01 applies to all lubrication tasks" icon="⚠️">
        <p>The full COSHH assessment (COSHH-CAS-01) for Odif LB5 is held under QHSE document control.
        This module summarises the key controls you must follow.</p>
      </Box>

      <Card title="What is Odif LB5?" icon="🛢️">
        <DataTable
          headers={["Property", "Detail"]}
          rows={[
            ["Product name", "Odif LB5 VD Embroidery Lubricant (ODIF-LB5VD)"],
            ["Classification", "Aerosol Category 1 — H222 EXTREMELY FLAMMABLE AEROSOL"],
            ["Pressurised container", "H229 — may burst if heated above 50°C"],
            ["Sensitiser", "Contains tall-oil fatty N,N-dimethylamides — may cause allergic skin/respiratory reaction (EUH208)"],
            ["Propellant", "Butane/propane (50–83% of formulation) — heavier than air, can travel to ignition sources"],
            ["Signal word", "DANGER"],
          ]}
        />
      </Card>

      <Card title="Lubrication schedule — per manufacturer" icon="📅">
        <DataTable
          headers={["Component", "Frequency", "Method"]}
          rows={[
            ["Rotary hook (crochet)", "Every 4 working hours", "One short burst to lubrication notch with spool cases removed"],
            ["Head trimmer parts", "Every 40 working hours", "Per manufacturer diagram on LB5 label"],
            ["Needle bar", "Every 80 working hours", "Per manufacturer diagram"],
            ["Needle bar driver / linear bearing", "Every 80 working hours", "Per manufacturer diagram"],
            ["Connecting rod", "Every 80 working hours", "Per manufacturer diagram"],
          ]}
        />
        <p style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "#6b7280" }}>
          The lubrication schedule is printed on the LB5 aerosol can. The rotary hook (every 4 hours) is
          the most frequent task — it must be logged on the machine lubrication record.
        </p>
      </Card>

      <Card title="PPE and controls — mandatory" icon="🧤">
        <Box type="warning" icon="🧤" title="PPE is mandatory — no exceptions">
          <ul>
            <li><strong>Hands:</strong> Nitrile rubber gloves (EN 374) — prevents skin contact with sensitiser</li>
            <li><strong>Eyes:</strong> Safety glasses (EN 166) — prevents aerosol splash</li>
          </ul>
        </Box>
        <ul>
          <li>Use the minimum effective amount — do not over-spray</li>
          <li>No smoking, naked flames, or ignition sources during or after use until vapours disperse</li>
          <li>Do not spray toward electrical components or heated surfaces</li>
          <li>Good ventilation must be maintained at all times during lubrication</li>
          <li>Wash hands thoroughly after handling</li>
          <li>Remove and launder contaminated clothing before re-use</li>
        </ul>
      </Card>

      <Card title="Storage and disposal" icon="📦">
        <ul>
          <li><strong>Storage:</strong> Upright, in original packaging, in a cool area away from the machines — maximum 50°C</li>
          <li>Keep away from all ignition sources, oxidising agents, and electrical equipment</li>
          <li><strong>Disposal:</strong> Empty or used aerosol cans are hazardous waste — must go to certified hazardous waste contractor</li>
          <li>Never pierce, incinerate, or place in general waste — even after emptying</li>
        </ul>
      </Card>

      <Card title="First aid — Odif LB5 exposure" icon="🩺">
        <DataTable
          headers={["Exposure route", "Immediate action"]}
          rows={[
            ["Skin contact", "Wash thoroughly with soap and water. If allergic reaction develops — seek medical attention."],
            ["Eye contact", "Irrigate with clean water for minimum 15 minutes holding eyelids open. Seek medical attention."],
            ["Inhalation", "Move to fresh air. If allergic respiratory symptoms develop — seek medical attention urgently."],
            ["Spill", "Eliminate ignition sources. Ventilate area. Contain with non-combustible absorbent. Report to manager."],
          ]}
        />
        <p style={{ marginTop: "0.75rem", fontSize: "0.875rem" }}>
          Emergency contact: Odif +33 (0)1 45 42 59 59 (INRS/ORFILA) | UK Poisons: 0344 892 0111
        </p>
      </Card>

      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 6 — COMPRESSED AIR
// ══════════════════════════════════════════════════════════════════════════════
export function CompressedAir({ cfg, onNext, onBack }) {
  return (
    <div>
      <SectionHeader tag="Module 6" icon="💨" title="Compressed Air Safety"
        desc="The SIP wall-mounted air hose reel is used for cleaning lint and thread debris from the machines. Using it incorrectly can cause serious injury." />

      <Card title="The compressed air system at Billingham" icon="🔧">
        <DataTable
          headers={["Item", "Detail"]}
          rows={[
            ["Compressor", "Abac Spinn 11 (11kW, screw compressor) — S/N ITJ410134"],
            ["Air receiver", "Air Com Italy, 270 litre horizontal — S/N 991393"],
            ["System operating pressure", "10 Bar"],
            ["Distribution point in embroidery area", "SIP Super Major retractable air hose reel — wall-mounted"],
            ["Point-of-use tool", "Pistol-grip blow gun with yellow airline"],
            ["PSSR Written Scheme", "WSE No. S09120 (Thurra Limited) — next examination due 13/08/2026"],
          ]}
        />
        <Box type="info" icon="📋" title="PSSR compliance">
          <p>The compressed air system is examined under Written Scheme S09120 in compliance with the Pressure
          Systems Safety Regulations 2000. The system must not be used beyond the next examination date.
          Next working examination: <strong>13/08/2026</strong>.</p>
        </Box>
      </Card>

      <Card title="What the blow gun is used for" icon="✅">
        <ul>
          <li>Removing lint, thread, and dust from machine heads between production runs</li>
          <li>Cleaning the hook and bobbin area after bobbin changes</li>
          <li>Clearing thread debris from the work surface</li>
        </ul>
      </Card>

      <Card title="How to use the blow gun safely" icon="💨">
        <ol>
          <li>Put on safety glasses (EN 166) before using the blow gun</li>
          <li>Check the inline isolator valve on the hose reel station is open</li>
          <li>Inspect the hose and fittings visually — report any damage or leaks immediately</li>
          <li>Confirm no other persons are in the immediate working area before applying air</li>
          <li>Apply air in short, controlled bursts to remove lint and debris</li>
          <li>After use, return the hose to the reel and close the inline isolator valve</li>
        </ol>
      </Card>

      <Box type="warning" title="STRICTLY PROHIBITED — compressed air" icon="🚫">
        <ul>
          <li><strong>Never direct the blow gun at any person</strong> — under any circumstances</li>
          <li><strong>Never use the blow gun to clean clothing being worn</strong> — high-pressure air can cause air embolism</li>
          <li><strong>Never use near open LB5 lubricant or any flammable substance</strong></li>
          <li><strong>Do not use the system if the PSSR examination is overdue</strong></li>
          <li>Do not attempt to adjust, repair, or modify any part of the compressed air system</li>
        </ul>
      </Box>

      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 7 — EMERGENCY PROCEDURES
// ══════════════════════════════════════════════════════════════════════════════
export function Emergency({ cfg, onNext, onBack }) {
  return (
    <div>
      <SectionHeader tag="Module 7" icon="🚨" title="Emergency Procedures"
        desc="Know what to do before an emergency happens. These procedures could prevent serious injury." />

      <Card title="Emergency stop — location and use" icon="🛑">
        <Box type="warning" icon="🔴" title="Emergency Stop button">
          <p>Red mushroom-head button in a yellow surround, labelled <strong>EMERGENCY STOP</strong>, located between
          adjacent machine heads at chest height. <strong>Twist to release.</strong></p>
        </Box>
        <p>Press the emergency stop immediately in the event of:</p>
        <ul>
          <li>Any entrapment of a person's body, hair, or clothing in the machine</li>
          <li>Any serious injury at the machine</li>
          <li>Uncontrolled machine behaviour (machine won't stop normally)</li>
          <li>Fire or smoke from the machine or nearby</li>
          <li>Needle breakage requiring fragment search (see Module 4)</li>
        </ul>
        <Box type="info" icon="ℹ️">
          <ul>
            <li>Do not attempt to pull hands free from moving parts — press STOP first</li>
            <li>Call for help immediately</li>
            <li>Do not release the emergency stop until the cause is identified and safe</li>
            <li>Report to manager — record on incident log</li>
          </ul>
        </Box>
      </Card>

      <Card title="Needle-stick injury" icon="🩸">
        <ol>
          <li>Apply pressure to the wound with a clean dressing</li>
          <li>Report immediately to your manager and trained first aider</li>
          <li>Complete an accident/incident report form</li>
          <li>Seek medical attention if the wound is deep or does not stop bleeding</li>
        </ol>
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
          First aiders at {cfg.site.name}: check the first aid board at reception for current names.
        </p>
      </Card>

      <Card title="Odif LB5 — accidental exposure" icon="🧪">
        <DataTable
          headers={["Situation", "Action"]}
          rows={[
            ["Skin contact", "Wash with soap and water. Allergic reaction → seek medical attention."],
            ["Eye contact", "Irrigate with clean water for 15 minutes. Seek medical attention."],
            ["Inhalation", "Fresh air. Respiratory symptoms → urgent medical attention."],
            ["Large spill", "Eliminate ignition sources. Ventilate. Contain with non-combustible material. Do not allow to enter drains. Report to manager."],
          ]}
        />
      </Card>

      <Card title="Fire involving LB5 or compressed air" icon="🔥">
        <Box type="warning" icon="🚨" title="Evacuate — do not fight">
          <p>Do not attempt to tackle a flammable aerosol or compressed air fire. Your safety comes first.</p>
        </Box>
        <ol>
          <li>Activate the nearest fire alarm call point</li>
          <li>Evacuate via the nearest emergency exit to the muster point (front car park)</li>
          <li>Call 999</li>
          <li>Do not re-enter the building</li>
        </ol>
        <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.5rem" }}>
          Foam, CO₂, or dry powder extinguishers are available in the embroidery area. Do not use water jet on aerosol fires.
          Fire service: Cleveland Fire Brigade.
        </p>
      </Card>

      <Box type="info" title="Young persons in the embroidery area" icon="👤">
        <p>Young persons (under 18) must not operate the machine, handle needles, or handle the LB5 aerosol under any
        circumstances. All school visits to the embroidery area require completion of TGN-02 v2026.2 (Young Person Site
        Safety Briefing) before entry. Refer to {cfg.qhseManager} for Young Person risk assessment requirements.</p>
      </Box>

      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 8 — ASSESSMENT
// ══════════════════════════════════════════════════════════════════════════════
export function Assessment({ cfg, questions, attempts, maxAttempts, onSubmit, onBack }) {
  const [selected, setSelected] = useState({});

  const allAnswered = Object.keys(selected).length === questions.length;
  const attemptsLeft = maxAttempts - attempts;

  return (
    <div>
      <SectionHeader tag="Assessment" icon="✏️" title="Knowledge Check"
        desc={`Answer all ${questions.length} questions. You need ${cfg.passmark}% to pass. Pass mark: ${Math.ceil(questions.length * cfg.passmark / 100)} out of ${questions.length} correct.`} />

      {attempts > 0 && (
        <Box type="warning" icon="🔄" title={`Attempt ${attempts + 1} of ${maxAttempts}`}>
          <p>You have {attemptsLeft} attempt{attemptsLeft !== 1 ? "s" : ""} remaining.</p>
        </Box>
      )}

      {questions.map((q, qi) => (
        <Card key={qi} title={`Question ${qi + 1} of ${questions.length}`}>
          <p style={{ fontWeight: 600, marginBottom: "0.75rem" }}>{q.q}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {q.opts.map((opt, oi) => {
              const isSelected = selected[qi] === oi;
              return (
                <label key={oi} style={{
                  display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer",
                  padding: "0.6rem 0.75rem", borderRadius: "6px", border: "1.5px solid",
                  borderColor: isSelected ? "var(--brand)" : "#e5e7eb",
                  background: isSelected ? "#eff6ff" : "white",
                  transition: "all 0.15s"
                }}>
                  <input type="radio" name={`q${qi}`} checked={isSelected}
                    onChange={() => setSelected(s => ({ ...s, [qi]: oi }))}
                    style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>
        </Card>
      ))}

      <NavRow onBack={onBack} onNext={() => onSubmit(selected)}
        nextLabel={`Submit assessment →`} nextDisabled={!allAnswered} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 9 — CERTIFICATE
// ══════════════════════════════════════════════════════════════════════════════
export function Certificate({ cfg, questions, answers, passed, attempts, onRetake, onBack }) {
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailError, setEmailError] = useState("");

  const score = questions.filter((q, i) => answers[i] === q.correct).length;
  const pct = Math.round((score / questions.length) * 100);
  const todayRef = React.useRef(new Date());
  const today = todayRef.current;
  const dateStr = today.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
  const refresherDate = new Date(today);
  refresherDate.setFullYear(refresherDate.getFullYear() + 1);
  const refresherStr = refresherDate.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
  const certRef = React.useRef(`EMB-${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}${String(today.getDate()).padStart(2,"0")}-${String(Math.floor(Math.random()*9000)+1000)}`);
  const ref = certRef.current;

  const sendEmail = async () => {
    if (!cfg.emailjs?.serviceId || !cfg.emailjs?.publicKey) return;
    setSending(true);
    setEmailError("");
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(cfg.emailjs.serviceId, cfg.emailjs.templateId, {
        to_email: cfg.emailjs.toEmail,
        name: "Embroidery Operator",
        role: "Embroidery Machine Operator",
        site: cfg.site.name,
        score: `${score}/${questions.length} (${pct}%)`,
        date: dateStr,
        reference: ref,
        refresher_due: refresherStr,
        course: cfg.courseTitle,
      }, cfg.emailjs.publicKey);
      setEmailSent(true);
    } catch (e) {
      console.error(e);
      setEmailError("Email failed to send. Please notify " + cfg.qhseManager + " manually.");
    } finally {
      setSending(false);
    }
  };

  // Auto-send on first pass render
  React.useEffect(() => {
    if (passed) sendEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!passed) {
    return (
      <div>
        <SectionHeader tag="Assessment result" icon="❌" title="Not yet passed" />
        <Box type="warning" title={`Score: ${score}/${questions.length} (${pct}%)`} icon="📊">
          <p>You need {cfg.passmark}% to pass. You scored {pct}%.</p>
          {attempts < cfg.maxAttempts
            ? <p>You have {cfg.maxAttempts - attempts} attempt{cfg.maxAttempts - attempts !== 1 ? "s" : ""} remaining. Review the modules and try again.</p>
            : <p>You have used all {cfg.maxAttempts} attempts. Please speak to {cfg.qhseManager} to arrange further training before operating the machines.</p>}
        </Box>
        <Card title="Review your answers" icon="📋">
          {questions.map((q, i) => {
            const correct = answers[i] === q.correct;
            return (
              <div key={i} style={{ marginBottom: "1.25rem", paddingBottom: "1rem",
                borderBottom: i < questions.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                <p style={{ fontWeight: 600, marginBottom: "0.4rem" }}>
                  {correct ? "✅" : "❌"} Q{i+1}: {q.q}
                </p>
                <p style={{ fontSize: "0.875rem", color: correct ? "#065f46" : "#991b1b" }}>
                  Your answer: {q.opts[answers[i]] ?? "Not answered"}
                </p>
                {!correct && (
                  <p style={{ fontSize: "0.875rem", color: "#1e40af", marginTop: "0.25rem" }}>
                    Correct: {q.opts[q.correct]}. {q.explain}
                  </p>
                )}
              </div>
            );
          })}
        </Card>
        <NavRow onBack={onBack}
          onNext={attempts < cfg.maxAttempts ? onRetake : null}
          nextLabel="Retake assessment →"
          nextDisabled={attempts >= cfg.maxAttempts} />
      </div>
    );
  }

  return (
    <div>
      <SectionHeader tag="Assessment passed" icon="📜"
        title={`${cfg.orgName} — ${cfg.courseTitle}`}
        desc="You have successfully completed this training module." />

      {/* ── Printable certificate card ── */}
      <div id="certificate-card" style={{
        background: "#ffffff",
        border: "3px solid #08488D",
        borderRadius: "12px",
        padding: "2rem 2.5rem",
        marginBottom: "1.5rem",
        boxShadow: "0 4px 20px rgba(8,72,141,0.12)"
      }}>
        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
          {cfg.logoUrl
            ? <img src={cfg.logoUrl} alt={cfg.orgName} style={{ height: "48px", maxWidth: "220px", objectFit: "contain" }} />
            : <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#08488D" }}>{cfg.orgName}</span>
          }
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #dce4ef", margin: "0 0 1.25rem" }} />

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#08488D", marginBottom: "4px" }}>Certificate of Completion</div>
          <div style={{ fontSize: "0.85rem", color: "#718096" }}>{cfg.courseTitle}</div>
        </div>

        {/* Score panel */}
        <div style={{ background: "#08488D", borderRadius: "8px", padding: "1.25rem", textAlign: "center", marginBottom: "1.5rem" }}>
          <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{pct}%</div>
          <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.8)", marginTop: "4px" }}>{score} / {questions.length} correct</div>
        </div>

        {/* Meta grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem 1.5rem", marginBottom: "1.25rem" }}>
          {[
            ["SITE", cfg.site.name],
            ["DATE COMPLETED", dateStr],
            ["REFERENCE", ref],
            ["REFRESHER DUE", refresherStr],
          ].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#718096", marginBottom: "3px" }}>{label}</div>
              <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#08488D" }}>{val}</div>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #dce4ef", margin: "0 0 0.75rem" }} />
        <div style={{ fontSize: "0.72rem", color: "#718096", textAlign: "center" }}>
          Issued by {cfg.site?.qhseManager || cfg.qhseManager} · {cfg.orgName} · {cfg.site?.address || ""}
        </div>
      </div>

      {/* ── Action buttons ── */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <button className="btn btn-primary" onClick={() => window.print()}>
          🖨 Print certificate
        </button>
        {!emailSent ? (
          <button className="btn btn-ghost" onClick={sendEmail} disabled={sending}>
            {sending ? "Sending…" : "✉ Send to QHSE"}
          </button>
        ) : (
          <button className="btn btn-ghost" disabled style={{ color: "#166534" }}>✓ Email sent</button>
        )}
      </div>

      {emailError && (
        <div style={{ fontSize: "0.82rem", color: "#991b1b", background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: "6px", padding: "0.6rem 1rem", marginBottom: "1rem" }}>
          {emailError}
        </div>
      )}
      {emailSent && (
        <div style={{ fontSize: "0.82rem", color: "#166534", background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "6px", padding: "0.6rem 1rem", marginBottom: "1rem" }}>
          Completion notification sent to {cfg.emailjs?.toEmail}.
        </div>
      )}

      <Box type="info" title="Next steps" icon="📋">
        <ul>
          <li>Your completion has been notified to {cfg.qhseManager} by email</li>
          <li>This certificate reference should be retained in your training file</li>
          <li>You may now operate the SWF embroidery machines at Billingham, subject to being on the authorised operator register</li>
          <li>Refresher training is due: <strong>{refresherStr}</strong></li>
          <li>Always follow OP-11 and CAS22 REV 3 during day-to-day operations</li>
        </ul>
      </Box>

      <Card title="Review — all answers" icon="📋">
        {questions.map((q, i) => {
          const correct = answers[i] === q.correct;
          return (
            <div key={i} style={{ marginBottom: "1rem", paddingBottom: "1rem",
              borderBottom: i < questions.length - 1 ? "1px solid #f3f4f6" : "none" }}>
              <p style={{ fontWeight: 600, marginBottom: "0.3rem", fontSize: "0.9rem" }}>
                {correct ? "✅" : "❌"} Q{i+1}: {q.q}
              </p>
              {!correct && (
                <p style={{ fontSize: "0.82rem", color: "#1e40af" }}>
                  Correct: {q.opts[q.correct]}. {q.explain}
                </p>
              )}
            </div>
          );
        })}
      </Card>
    </div>
  );
}
