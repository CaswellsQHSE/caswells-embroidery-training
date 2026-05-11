# Caswells Group — Embroidery Machine Operator Training

A responsive web app for SWF Embroidery Machine operator training at the Billingham site.
Same architecture as the Fire Warden training app. Works on any device, no login required.

---

## Deployment (same process as Fire Warden app)

### Step 1 — GitHub
1. Create a new GitHub repository: `caswells-embroidery-training`
2. Add this project folder via GitHub Desktop → Publish

### Step 2 — Vercel
1. Go to vercel.com → Add New Project → select `caswells-embroidery-training`
2. Click Deploy (React auto-detected)
3. App live at `https://caswells-embroidery-training.vercel.app`

### Step 3 — EmailJS
Uses the same EmailJS account as the Fire Warden app.
In `src/data/config.js`, the `emailjs` section is pre-populated with the same credentials.
Create a new email template (or reuse the fire warden template with a `{{course}}` variable added).

---

## Updating content

Edit `src/data/config.js` for:
- Branding, QHSE manager name, site details
- Assessment questions (add, remove, edit)
- Pass mark and max attempts

Commit and push → Vercel redeploys automatically in ~2 minutes.

---

## Course structure

| Module | Content |
|--------|---------|
| 0. Welcome | Course intro, name/role entry, declaration |
| 1. The machines | SWF K-Series overview, machine register, live YouTube video |
| 2. Hazards overview | All 8 hazards from CAS22 REV 3 with controls |
| 3. Safe operation | Pre-use checks, start-up, framing, running, shutdown |
| 4. Needles & sharps | Thread breaks, needle changing, fragment recovery, sharps disposal |
| 5. Lubrication & COSHH | Odif LB5, COSHH-CAS-01 controls, schedule, first aid |
| 6. Compressed air | Blow gun safety, PSSR WSE S09120, prohibited uses |
| 7. Emergency procedures | E-stop, needle-stick, LB5 exposure, fire |
| 8. Assessment | 10 questions, 80% pass mark, 3 attempts |
| 9. Certificate | Pass/fail, EmailJS notification, answer review |

---

## Document references

This course is grounded in and consistent with:
- **CAS22 REV 3** — Embroidery Machine Risk Assessment
- **COSHH-CAS-01** — Odif LB5 Embroidery Lubricant Assessment
- **OP-11** — SWF Embroidery Machine Operating Procedure
- **CoP Section 4.4.1** — QHSE Code of Practice Manual
- **TGN-02 v2026.2** — Young Person Site Safety Briefing
- **WSE No. S09120** — PSSR Written Scheme (Thurra Limited)

---

## Admin panel

Access via ⚙ Admin button → password: `caswells2025`

Allows session-only changes to branding, EmailJS, site details, questions, and settings.
