import "../styles/irelandTravel.css";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import {
  FaPassport,
  FaFileAlt,
  FaUniversity,
  FaClock,
  FaUserCheck,
  FaGraduationCap,
  FaShieldAlt,
  FaGlobeAsia,
  FaMapMarkedAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function IrelandTravelProcess() {
  return (
    <ScrollReveal as="main" className="ireland-visa-page" y={20}>
      {/* HERO */}
      <section className="visa-hero">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="visa-hero-kicker">Travel to Ireland</p>
          <h1>Ireland Visa Guidance (2026)</h1>
          <p className="visa-hero-sub">
            Region-specific submission hubs, documentation standards, and refusal-proof essentials — designed for clarity and professionalism.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="visa-section">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Regional submission hubs (where your case is decided)
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Irish visa processing depends on where you apply from and your passport nationality. Use the guidance below to prepare the correct pathway before you
          book an appointment or submit biometrics.
        </motion.p>

        <div className="bento-grid">
          <motion.article
            className="bento-card bento-card--wide"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <header className="bento-head">
              <div className="bento-icon" aria-hidden>
                <FaGlobeAsia />
              </div>
              <div>
                <h3 className="bento-title">India, Pakistan &amp; Sri Lanka (South Asia hub)</h3>
                <p className="bento-subtitle">Decisions typically handled via the Embassy of Ireland in New Delhi.</p>
              </div>
            </header>

            <ul className="bento-list">
              <li>
                <strong>Submission centre</strong>: Applications must be submitted through <strong>VFS Global</strong>.
              </li>
              <li>
                <strong>Biometrics</strong>: Mandatory for all applicants in India and Pakistan (fingerprints + digital photo).
              </li>
              <li>
                <strong>Financial proof</strong>: Show consistent financial history. For students, this often requires showing at least{" "}
                <strong>€10,000 available for each year of study</strong>, in addition to tuition fees.
              </li>
              <li>
                <strong>VFS “30‑day rule” (2026)</strong>: Complete your appointment at the Visa Application Centre (VAC) within{" "}
                <strong>30 days</strong> of completing your online AVATS form, or the application may expire.
              </li>
            </ul>
          </motion.article>

          <motion.article
            className="bento-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <header className="bento-head">
              <div className="bento-icon" aria-hidden>
                <FaMapMarkedAlt />
              </div>
              <div>
                <h3 className="bento-title">China (BIVS + Hukou)</h3>
                <p className="bento-subtitle">Translation standards are strict.</p>
              </div>
            </header>

            <ul className="bento-list">
              <li>
                <strong>British‑Irish Visa Scheme (BIVS)</strong>: If you have a UK visitor visa endorsed with “BIVS,” you may be able to travel to Ireland
                without a separate visa.
              </li>
              <li>
                <strong>Hukou</strong>: Provide your Household Registration with a certified English translation.
              </li>
              <li>
                <strong>Translations</strong>: Every document not in English or Irish (including employment letters and bank remarks) must be translated by a
                certified professional.
              </li>
            </ul>
          </motion.article>

          <motion.article
            className="bento-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <header className="bento-head">
              <div className="bento-icon" aria-hidden>
                <FaPassport />
              </div>
              <div>
                <h3 className="bento-title">Gulf countries (UAE, Qatar, Kuwait, Bahrain)</h3>
                <p className="bento-subtitle">Passport nationality determines visa need.</p>
              </div>
            </header>

            <ul className="bento-list">
              <li>
                <strong>Visa‑exempt status</strong>: Citizens of the UAE and Qatar are currently visa‑exempt for short stays (up to 90 days).
              </li>
              <li>
                <strong>Non‑citizen residents</strong>: Expats must apply based on their passport nationality.
              </li>
              <li>
                <strong>Processing hub</strong>: Most applications from this region are routed through the Embassy of Ireland in Abu Dhabi.
              </li>
              <li>
                <strong>UAE update (2026)</strong>: Ensure return travel plans are clearly documented due to stricter scrutiny on overstays.
              </li>
            </ul>
          </motion.article>

          <motion.article
            className="bento-card bento-card--accent"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <header className="bento-head">
              <div className="bento-icon" aria-hidden>
                <FaClock />
              </div>
              <div>
                <h3 className="bento-title">Mexico (major 2026 policy change)</h3>
                <p className="bento-subtitle">Short stays waived; long stays still need a visa.</p>
              </div>
            </header>

            <ul className="bento-list">
              <li>
                <strong>Visa waiver</strong>: As of <strong>April 6, 2026</strong>, Mexico is visa‑exempt for tourism/business visits up to 90 days.
              </li>
              <li>
                <strong>Entry requirements</strong>: Passport valid for 6 months, proof of sufficient funds, and a return ticket at the border.
              </li>
              <li>
                <strong>Long stay</strong>: For work or study exceeding 90 days, a <strong>D visa</strong> is still required through the Embassy in Mexico City.
              </li>
            </ul>
          </motion.article>
        </div>
      </section>

      {/* PROCESS */}
      <section className="visa-section soft-bg">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Core application flow (high level)
        </motion.h2>

        <div className="steps-grid">
          {[
            {
              icon: <FaFileAlt />,
              title: "Online application (AVATS)",
              text: "Complete the online application and print the summary sheet. Keep names, dates, and addresses consistent across documents.",
            },
            {
              icon: <FaUserCheck />,
              title: "Appointment + biometrics (where required)",
              text: "Book the correct VAC, attend within required timeframes, and submit biometrics if your region requires it.",
            },
            {
              icon: <FaUniversity />,
              title: "Processing and decision",
              text: "Your file is assessed by the relevant embassy/processing hub based on your submission location and nationality.",
            },
          ].map((item, i) => (
            <motion.div
              className="step-card"
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="step-icon" aria-hidden>
                {item.icon}
              </div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-text">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VISA CATEGORIES */}
      <section className="visa-section">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Visa Categories of Ireland
        </motion.h2>

        <div className="category-grid">
          <motion.div
            className="category-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FaClock />
            <h3>Short stay (C)</h3>
            <p>
              Business, Tourist, Conference, Visit Family/Friends, Exam,
              Medical, Training and more (≤ 90 days).
            </p>
          </motion.div>

          <motion.div
            className="category-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FaUniversity />
            <h3>Long stay (D)</h3>
            <p>
              Employment, Scientific Researcher, Join Family and other long-term
              categories.
            </p>
          </motion.div>

          <motion.div
            className="category-card highlight-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FaGraduationCap />
            <h3>Study</h3>
            <p>
              Document readiness and admissions support for Irish study pathways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="visa-section soft-bg">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Critical documentation checklist
        </motion.h2>

        <div className="bento-grid bento-grid--compact">
          <motion.article
            className="bento-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <header className="bento-head">
              <div className="bento-icon" aria-hidden>
                <FaFileAlt />
              </div>
              <div>
                <h3 className="bento-title">Cover letter</h3>
                <p className="bento-subtitle">Make it watertight.</p>
              </div>
            </header>
            <ul className="bento-list">
              <li>
                State why you are going, where you are staying, who is paying, and your day-by-day plan (if applicable).
              </li>
              <li>
                Prove why you will return home (job, family, property, ongoing study/business).
              </li>
            </ul>
          </motion.article>

          <motion.article
            className="bento-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <header className="bento-head">
              <div className="bento-icon" aria-hidden>
                <FaExclamationTriangle />
              </div>
              <div>
                <h3 className="bento-title">Financial discipline</h3>
                <p className="bento-subtitle">Avoid red flags.</p>
              </div>
            </header>
            <ul className="bento-list">
              <li>Show a 6-month history of regular income.</li>
              <li>Avoid large, unexplained last-minute deposits.</li>
            </ul>
          </motion.article>

          <motion.article
            className="bento-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <header className="bento-head">
              <div className="bento-icon" aria-hidden>
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="bento-title">Medical insurance</h3>
                <p className="bento-subtitle">Required evidence.</p>
              </div>
            </header>
            <ul className="bento-list">
              <li>Private medical insurance with minimum coverage of €30,000 for the duration of your stay.</li>
            </ul>
          </motion.article>
        </div>
      </section>

      {/* FEES & TIME */}
      <section className="visa-section">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Fees & processing time (typical)
        </motion.h2>

        <div className="fees-grid">
          {[
            { label: "Single entry", fee: "€60", time: "15–20 working days" },
            { label: "Multiple entry", fee: "€100", time: "15–20 working days" },
            { label: "Transit", fee: "€25", time: "10–15 working days" },
            { label: "Study / long stay", fee: "€60", time: "6–8 weeks" },
          ].map((row, i) => (
            <motion.div
              className="fee-card"
              key={row.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="fee-row">
                <div className="fee-label">{row.label}</div>
                <div className="fee-fee">{row.fee}</div>
              </div>
              <div className="fee-time">{row.time}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="visa-section soft-bg">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Dealing with refusals
        </motion.h2>

        <div className="refusal-grid">
          <motion.div className="refusal-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3>Use the refusal reason codes</h3>
            <p>
              If you receive a refusal letter, focus on the stated reasons (for example, finances or contradictions) and fix the exact weakness with documents
              and explanations.
            </p>
          </motion.div>
          <motion.div
            className="refusal-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
          >
            <h3>Appeal window</h3>
            <p>
              In most cases, you have around <strong>2 months</strong> to submit an appeal (generally free of charge) to the Appeals Officer in Dublin or the
              relevant embassy channel.
            </p>
          </motion.div>
        </div>

        <div className="visa-cta-bar">
          <div className="visa-cta-text">
            <div className="visa-cta-title">Want a document review?</div>
            <div className="visa-cta-sub">
              We can help structure your cover letter, finances, and supporting evidence to match your region’s processing expectations.
            </div>
          </div>
          <motion.button className="primary-btn" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            Talk to a Visa Expert
          </motion.button>
        </div>
      </section>

    </ScrollReveal>
  );
}
