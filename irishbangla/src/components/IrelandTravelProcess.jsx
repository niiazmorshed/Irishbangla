import "../styles/irelandTravel.css";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

import galleryA from "../assets/irelandpic/mark-de-jong-NELRuCfHxxU-unsplash.jpg";
import galleryB from "../assets/irelandpic/zihao-chen-m5PzbFyN2-U-unsplash.jpg";
import galleryC from "../assets/irelandpic/wynand-van-poortvliet-dQXXN0cvZnI-unsplash.jpg";

const toc = [
  { id: "intro", title: "Introduction" },
  { id: "key-facts", title: "Key Facts" },
  { id: "visa-needed", title: "Visa vs Visa-Free" },
  { id: "regions", title: "Regions" },
  { id: "visa-types", title: "Visa Types" },
  { id: "process", title: "Application Process" },
  { id: "checklist", title: "Document Checklist" },
  { id: "fees", title: "Fees & Time" },
  { id: "arrival", title: "After Arrival (IRP)" },
  { id: "refusals", title: "Refusals & Appeals" },
  { id: "resources", title: "Resources" },
];

const regionCards = [
  {
    title: "South Asia (India, Pakistan, Sri Lanka)",
    lines: [
      "Primary processing hub: Embassy of Ireland in New Delhi",
      "Submission via VFS Global",
      "Biometrics mandatory in India and Pakistan",
      "Students generally expected to show €10,000/year (plus tuition)",
      "2026 update: attend VAC within 30 days of AVATS completion",
    ],
  },
  {
    title: "China",
    lines: [
      "BIVS may apply for eligible UK visa holders endorsed with BIVS",
      "Hukou required with certified English translation",
      "All non-English/Irish documents require certified translation",
    ],
  },
  {
    title: "Gulf (UAE, Qatar, Kuwait, Bahrain)",
    lines: [
      "UAE and Qatar citizens are visa-exempt for short stays up to 90 days",
      "Expat residents must apply based on passport nationality",
      "Many files route via Embassy of Ireland, Abu Dhabi",
      "2026 update: clear return-plan proof advised in UAE",
    ],
  },
  {
    title: "Mexico",
    lines: [
      "Short-stay visits up to 90 days are visa-exempt",
      "Border checks still require funds, valid passport, and return ticket",
      "Long stay over 90 days still requires D visa",
    ],
  },
];

const processSteps = [
  "Determine visa type and check if SSVWP/BIVS applies.",
  "Complete AVATS form, pay fees, print and sign summary form.",
  "Prepare original supporting documents and certified translations.",
  "Submit via embassy/consulate/VFS as instructed in your jurisdiction.",
  "Attend biometrics appointment if required.",
  "Track decision; respond quickly to additional document requests.",
  "If approved, travel with full supporting file for port-of-entry checks.",
];

const feeRows = [
  ["Short Stay C (Single)", "EUR 60", "Typically 4-8 weeks"],
  ["Short Stay C (Multiple)", "EUR 100", "Typically 4-8 weeks"],
  ["Long Stay D (Single)", "EUR 60", "Typically 4-12 weeks"],
  ["Long Stay D (Multiple)", "EUR 100", "Typically 4-12 weeks"],
  ["Transit", "EUR 60", "Typically 2-4 weeks"],
  ["IRP registration (arrival)", "EUR 300", "Within 90 days after arrival"],
];

const resources = [
  ["Immigration Service Delivery (ISD)", "https://www.irishimmigration.ie"],
  ["AVATS", "https://www.visas.inis.gov.ie"],
  ["Department of Foreign Affairs", "https://www.ireland.ie"],
  ["VFS Global Ireland", "https://www.vfsglobal.com/ireland"],
  ["Citizens Information", "https://www.citizensinformation.ie"],
];

const quickFacts = [
  ["System", "ISD + DFA"],
  ["Visa Portal", "AVATS"],
  ["Schengen", "Not included"],
  ["Short Stay", "Up to 90 days"],
  ["IRP Fee", "EUR 300"],
  ["Appeal Window", "Usually 2 months"],
];

export default function IrelandTravelProcess() {
  const summary = useMemo(
    () => [
      { label: "Edition", value: "2026 Complete" },
      { label: "Prepared For", value: "International applicants worldwide" },
      { label: "Policy Basis", value: "ISD + DFA official policy" },
      { label: "Version", value: "April 2026" },
    ],
    []
  );

  return (
    <main className="guide-page">
      <section className="guide-gallery">
        <img src={galleryA} alt="Historic architecture in Ireland" />
        <img src={galleryB} alt="Irish cultural interior" />
        <img src={galleryC} alt="Modern educational venue in Ireland" />
      </section>

      <section className="guide-header shell">
        <nav className="guide-breadcrumb" aria-label="Breadcrumb">
          <span>Home</span>
          <span className="crumb-divider">/</span>
          <span>Travel to Ireland</span>
          <span className="crumb-divider">/</span>
          <span aria-current="page">Ireland Visa Guide 2026</span>
        </nav>

        <div className="guide-title-wrap">
          <p className="guide-kicker">Ireland Visa Guide</p>
          <h1>Ireland Visa Guide 2026 - Complete Edition</h1>
          <p className="guide-subtitle">
            A comprehensive reference for travellers, students, workers and families. Covering all nationalities, all visa categories, and step-by-step
            process requirements.
          </p>
        </div>

        <div className="guide-summary-grid">
          {summary.map((item) => (
            <article key={item.label} className="guide-summary-card">
              <p>{item.label}</p>
              <h3>{item.value}</h3>
            </article>
          ))}
        </div>

        <div className="guide-alert">
          <FaExclamationTriangle aria-hidden />
          <p>
            This guide is informational only. Always verify latest requirements at{" "}
            <a href="https://www.irishimmigration.ie" target="_blank" rel="noreferrer">
              irishimmigration.ie
            </a>{" "}
            and{" "}
            <a href="https://www.ireland.ie" target="_blank" rel="noreferrer">
              ireland.ie
            </a>
            . A visa does not guarantee entry; final decision is made at port of entry.
          </p>
        </div>
      </section>

      <section className="guide-tabs-shell">
        <div className="shell guide-tabs" role="tablist" aria-label="Guide sections">
          {toc.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="guide-tab">
              {item.title}
            </a>
          ))}
        </div>
      </section>

      <section className="shell guide-content-layout">
        <article className="guide-main-content">
          <motion.section id="intro" className="guide-section" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>1. Introduction to Ireland and immigration system</h2>
            <p>
              Ireland is an EU member state with a separate immigration regime. Ireland is not in Schengen, so a Schengen visa does not grant entry to Ireland.
              The visa system is administered primarily by Immigration Service Delivery (ISD) and the Department of Foreign Affairs (DFA), with AVATS as the
              official visa application platform.
            </p>
            <ul>
              <li>CTA exists for Irish and British citizens only; it does not provide automatic rights to third-country nationals.</li>
              <li>EU/EEA/Swiss citizens generally do not require a visa to live, work, or study in Ireland.</li>
              <li>Non-CTA nationals entering from UK to Ireland remain subject to Irish immigration control.</li>
            </ul>
          </motion.section>

          <section id="key-facts" className="guide-section">
            <h2>2. Key facts about Ireland (2026)</h2>
            <div className="simple-table">
              <div><strong>Capital</strong><span>Dublin</span></div>
              <div><strong>Currency</strong><span>Euro (EUR)</span></div>
              <div><strong>Schengen</strong><span>No</span></div>
              <div><strong>Common Travel Area</strong><span>Yes (with UK)</span></div>
              <div><strong>Visa Portal</strong><span>AVATS - visas.inis.gov.ie</span></div>
              <div><strong>IRP Registration Fee</strong><span>EUR 300</span></div>
            </div>
          </section>
        </article>

        <aside className="guide-sidebar">
          <div className="sidebar-card">
            <h3>Guide Facts</h3>
            <div className="fact-grid">
              {quickFacts.map(([label, value]) => (
                <article key={label} className="fact-tile">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
          </div>
          <div className="sidebar-card review-card">
            <h3>Need document review?</h3>
            <p>We can help organise your cover letter, funds narrative, and supporting documents for stronger clarity.</p>
            <ul>
              <li>Checklist cleanup</li>
              <li>Finance narrative alignment</li>
              <li>Refusal-risk reduction</li>
            </ul>
            <button type="button" className="cta-btn">
              Talk to a Visa Expert
            </button>
          </div>
        </aside>
      </section>

      <section className="shell guide-main-full">
        <section id="visa-needed" className="guide-section">
          <h2>3. Visa vs visa-free: do you need a visa?</h2>
          <div className="split-card-grid">
            <article className="split-card">
              <h3>Who may not need a visa</h3>
              <ul>
                <li>EU/EEA and Swiss nationals</li>
                <li>UK nationals under CTA rules</li>
                <li>Selected visa-exempt nationalities under Irish regulations</li>
                <li>Eligible SSVWP and BIVS holders (subject to scheme rules)</li>
              </ul>
            </article>
            <article className="split-card">
              <h3>Who needs a visa</h3>
              <ul>
                <li>Nationals of visa-required countries for entry or transit</li>
                <li>Applicants not covered by exemptions/waiver schemes</li>
                <li>Most long-stay applicants for study, work, or join family</li>
              </ul>
            </article>
          </div>
          <p className="note-line">Critical note: a Schengen visa is not valid for entry to Ireland.</p>
        </section>

        <section id="regions" className="guide-section">
          <h2>4. Country categories and regional processing</h2>
          <div className="bento-region-grid">
            {regionCards.map((card) => (
              <article key={card.title} className="region-card">
                <h3>{card.title}</h3>
                <ul>
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="visa-types" className="guide-section">
          <h2>5-12. Visa types, SSVWP, BIVS and eligibility</h2>
          <div className="simple-table">
            <div><strong>Short Stay C</strong><span>Up to 90 days (tourism/business/family/short study)</span></div>
            <div><strong>Long Stay D</strong><span>More than 90 days (study/work/join family)</span></div>
            <div><strong>Transit</strong><span>Airport transit only, no entry permission</span></div>
            <div><strong>SSVWP</strong><span>UK short-stay visa-based waiver for eligible countries</span></div>
            <div><strong>BIVS</strong><span>Applies to Indian and Chinese nationals with eligible BIVS endorsement</span></div>
          </div>
        </section>

        <section id="process" className="guide-section">
          <h2>13. Step-by-step application process</h2>
          <ol className="step-list">
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section id="checklist" className="guide-section">
          <h2>14. Required documents - master checklist</h2>
          <div className="checklist-grid">
            {[
              "Printed and signed AVATS summary form",
              "Valid original passport",
              "Recent passport-size photos as per Irish standards",
              "Fee payment proof",
              "Funds evidence (6-month statements)",
              "Accommodation and itinerary proof",
              "Certified translations (if needed)",
              "Purpose-specific supporting documents",
            ].map((item) => (
              <div key={item} className="check-item">
                <FaCheckCircle aria-hidden />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="fees" className="guide-section">
          <h2>15-16. Visa fees and processing times</h2>
          <div className="simple-table">
            {feeRows.map((row) => (
              <div key={row[0]}>
                <strong>{row[0]}</strong>
                <span>
                  {row[1]} | {row[2]}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="arrival" className="guide-section">
          <h2>17. After arrival - IRP registration</h2>
          <ul>
            <li>Non-EEA nationals staying over 90 days must register for IRP.</li>
            <li>Dublin: Burgh Quay registration office (appointment required).</li>
            <li>Outside Dublin: local Garda immigration registration.</li>
            <li>Standard IRP registration fee: EUR 300.</li>
          </ul>
        </section>

        <section id="refusals" className="guide-section">
          <h2>18-20. Refusals, appeals, preclearance and success tips</h2>
          <div className="split-card-grid">
            <article className="split-card">
              <h3>Common refusal reasons</h3>
              <ul>
                <li>Weak or unclear financial evidence</li>
                <li>Insufficient ties to home country</li>
                <li>Incomplete or inconsistent documentation</li>
                <li>Misrepresentation or false submissions</li>
              </ul>
            </article>
            <article className="split-card">
              <h3>Appeal and re-apply</h3>
              <ul>
                <li>Typical appeal window: within 2 months</li>
                <li>Address every refusal point with fresh evidence</li>
                <li>No misleading documents - high long-term risk</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="resources" className="guide-section">
          <h2>21. Useful contacts and official resources</h2>
          <div className="resource-list">
            {resources.map(([name, url]) => (
              <a key={url} href={url} target="_blank" rel="noreferrer">
                <span>{name}</span>
                <span>{url.replace("https://", "")}</span>
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
