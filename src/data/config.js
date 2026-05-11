// ─── COURSE CONFIGURATION ────────────────────────────────────────────────────
// Edit this file to update branding, site details, questions and settings.
// After editing: commit in GitHub Desktop → push → Vercel redeploys automatically.

export const CONFIG = {
  // ── Branding ──────────────────────────────────────────────────────────────
  orgName: "Caswells Group",
  courseTitle: "Embroidery Machine Operator Training",
  brandPrimary: "#08488D",
  brandSecondary: "#EC1C24",
  brandAccent: "#53BF96",
  brandAccent2: "#4077B2",
  logoUrl: "https://www.caswellsgroup.com/Content/Images/CG-full-colour-logo-RGB.svg",
  logoUrlDark: "",

  // ── Admin ─────────────────────────────────────────────────────────────────
  adminPassword: "caswells2025",
  qhseManager: "Mike Wilkinson",

  // ── Assessment ────────────────────────────────────────────────────────────
  passmark: 80,
  maxAttempts: 3,

  // ── EmailJS (completion notifications) ───────────────────────────────────
  emailjs: {
    serviceId: "service_lphj3jw",
    templateId: "template_zgaz4qw",
    publicKey: "4rQoJPxmMeGSfuagE",
    toEmail: "qhse@caswellsgroup.com",
  },

  // ── Site ─────────────────────────────────────────────────────────────────
  site: {
    id: "billingham",
    name: "Billingham",
    entity: "D.R. Caswell Ltd",
    address: "Lagonda Road, Billingham, TS23 4JA",
    department: "Embroidery Department",
    qhseManager: "Mike Wilkinson",
    responsiblePerson: "Paul Murphy",
  },

  // ── Course-specific references ────────────────────────────────────────────
  references: {
    ra: "CAS22 REV 3",
    coshh: "COSHH-CAS-01",
    cop: "Section 4.4.1",
    op: "OP-11",
    tgn: "TGN-02 v2026.2",
    pssr: "WSE No. S09120 (Thurra Limited)",
    videoUrl: "https://www.youtube.com/embed/cUkHH6LyvTQ",
  },
};

// ─── ASSESSMENT QUESTIONS ────────────────────────────────────────────────────
export const QUESTIONS = [
  {
    q: "Before starting the embroidery machine, what must an operator complete?",
    opts: [
      "Sign in at reception",
      "A pre-use check covering the machine, needles, guards, power cable, and work area",
      "Submit a work order to their manager",
      "Check the lubrication log but nothing else is required",
    ],
    correct: 1,
    explain: "OP-11 Section 6.1 requires a pre-use check before every shift, covering the machine, needle condition, guards, power cable, sharps container, and work area cleanliness.",
  },
  {
    q: "The machine MUST be switched OFF before which tasks? (Select the best answer)",
    opts: [
      "Threading and bobbin changes only — needle changing can be done with the machine running slowly",
      "Threading, needle changing, bobbin changing, and any task requiring hands near the needle area",
      "Lubrication only — all other tasks can be done with the machine running",
      "None — the machine has a slow-speed mode designed for maintenance tasks",
    ],
    correct: 1,
    explain: "OP-11 requires the machine to be switched OFF before threading, needle changing, bobbin changing, and any task that requires hands near the needle or hook area.",
  },
  {
    q: "What PPE must be worn when changing needles?",
    opts: [
      "Safety glasses only",
      "Nitrile gloves only",
      "Cut-resistant gloves (EN 388) and safety glasses (EN 166)",
      "No PPE required — needles are changed with the machine off so there is no risk",
    ],
    correct: 2,
    explain: "CAS22 REV 3 and OP-11 specify cut-resistant gloves (EN 388) and safety glasses (EN 166) as mandatory PPE for all needle-changing tasks.",
  },
  {
    q: "A needle breaks during operation. What should the operator do first?",
    opts: [
      "Pick up the fragments with their fingers immediately so they don't get lost",
      "Press the EMERGENCY STOP button and wait until the machine is completely stationary before approaching",
      "Carry on running — the machine will clear the broken needle automatically",
      "Call the QHSE manager before taking any action",
    ],
    correct: 1,
    explain: "OP-11 Section 6.6a: press the EMERGENCY STOP immediately, wait until stationary, then put on safety glasses before approaching. Never handle fragments with bare hands.",
  },
  {
    q: "Where must used, broken, or bent needles be disposed of?",
    opts: [
      "Wrapped in tissue and placed in the general waste bin",
      "Left on the workbench for the maintenance team",
      "The Sharpsafe sharps disposal container at the workstation",
      "The recycling bin",
    ],
    correct: 2,
    explain: "All spent, broken, or bent needles must go directly into the Sharpsafe 0.6L sharps container at the workstation. Never discard into general or recycling waste.",
  },
  {
    q: "How often must the rotary hook be lubricated with Odif LB5?",
    opts: [
      "Once per day at the start of shift",
      "Every 4 working hours",
      "Every 80 working hours",
      "Only when the machine produces a warning sound",
    ],
    correct: 1,
    explain: "The Odif LB5 manufacturer's label specifies rotary hook lubrication every 4 working hours. This is the most frequent lubrication point on the machine.",
  },
  {
    q: "Odif LB5 is classified as an extremely flammable aerosol. Which of the following is correct?",
    opts: [
      "It can be sprayed near the machine's electrical components to penetrate connections",
      "It can be stored next to the machines for easy access during the shift",
      "No smoking, naked flames, or ignition sources are permitted in the area during or after use",
      "Gloves are optional because the sensitiser content is below 1%",
    ],
    correct: 2,
    explain: "COSHH-CAS-01: Odif LB5 is H222 Extremely Flammable Aerosol. All ignition sources must be eliminated during and after use. Nitrile gloves (EN 374) are mandatory regardless of concentration.",
  },
  {
    q: "The compressed air blow gun must NEVER be used for which of the following?",
    opts: [
      "Removing lint from machine heads between production runs",
      "Cleaning the hook area after bobbin changes",
      "Blowing compressed air directly at any person, or cleaning clothing being worn",
      "Clearing thread debris from the work surface",
    ],
    correct: 2,
    explain: "OP-11 Section 6.9: The blow gun must never be directed at any person or used to clean clothing being worn. High-pressure air can cause serious injury including air embolism.",
  },
  {
    q: "The noise level at the operator position in the embroidery department is 81 dB(A). What does this mean?",
    opts: [
      "It is below all action values so no controls are required",
      "It is above the Lower Exposure Action Value (80 dB(A)) — ear plugs must be available and operators must be informed of the risk",
      "It requires mandatory hearing protection zones and all operators must wear ear defenders at all times",
      "The level is too high to operate the machines legally",
    ],
    correct: 1,
    explain: "81 dB(A) exceeds the Lower EAV (80 dB(A)) under the Control of Noise at Work Regulations 2005. Ear plugs are provided under each machine, operators have been informed, and the situation is under review.",
  },
  {
    q: "Which document sets out the step-by-step safe method of operation for the SWF embroidery machines?",
    opts: [
      "CAS22 REV 3 — the risk assessment",
      "COSHH-CAS-01 — the lubricant assessment",
      "OP-11 — the SWF Embroidery Machine Operating Procedure",
      "TGN-02 — the young person site safety briefing",
    ],
    correct: 2,
    explain: "OP-11 (SWF Embroidery Machine — Safe Operation) is the step-by-step operating procedure. CAS22 is the risk assessment, COSHH-CAS-01 covers the lubricant, and TGN-02 covers young person visits.",
  },
];

// ─── MODULE STRUCTURE ─────────────────────────────────────────────────────────
export const MODULES = [
  { id: "welcome",      label: "Welcome",                icon: "🏠" },
  { id: "machine",      label: "The machines",           icon: "⚙️" },
  { id: "hazards",      label: "Hazards overview",       icon: "⚠️" },
  { id: "operation",    label: "Safe operation",         icon: "▶️" },
  { id: "needles",      label: "Needles & sharps",       icon: "🪡" },
  { id: "lubrication",  label: "Lubrication & COSHH",   icon: "🛢️" },
  { id: "compressedair",label: "Compressed air",         icon: "💨" },
  { id: "emergency",    label: "Emergency procedures",   icon: "🚨" },
  { id: "assessment",   label: "Assessment",             icon: "✏️" },
  { id: "certificate",  label: "Certificate",            icon: "📜" },
];
