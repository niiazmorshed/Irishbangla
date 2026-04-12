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
          <h1>Ireland Visa from Bangladesh</h1>
          <p>Complete Visa Processing Support with Personalized Guidance</p>
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
          <span>Ireland Visa</span> | We Process Ireland Visa from Bangladesh
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Getting an Ireland visa from Bangladesh is challenging due to the
          remote location of the Irish Embassy. All Bangladeshi nationals must
          submit applications via the Embassy of Ireland in New Delhi.
        </motion.p>

        <motion.div
          className="highlight-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FaPassport />
          <p>
            Submit your passport and documents in Dhaka. We forward them to New
            Delhi and manage the entire process for you.
          </p>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="visa-section soft-bg">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Process of Ireland Visa Application
        </motion.h2>

        <div className="process-grid">
          {[
            {
              icon: <FaFileAlt />,
              title: "Online Application",
              text:
                "Applicants must complete the official Irish Online Visa Application Form via INIS.",
            },
            {
              icon: <FaUserCheck />,
              title: "Documents & Summary",
              text:
                "Submit the generated summary sheet along with passport and supporting documents.",
            },
            {
              icon: <FaUniversity />,
              title: "Embassy Processing",
              text:
                "Documents are forwarded to the Embassy of Ireland in New Delhi for assessment.",
            },
          ].map((item, i) => (
            <motion.div
              className="process-card"
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
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
            <h3>Short Stay Visa</h3>
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
            <h3>Long Stay Visa</h3>
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
            <h3>Student Visa</h3>
            <p>
              Complete admission and visa processing support for Irish student
              visas.
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
          Common Supporting Documents
        </motion.h2>

        <motion.ul
          className="doc-list"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <li>Original passport with previous passports</li>
          <li>Online visa summary application page</li>
          <li>Two passport-size photographs</li>
          <li>Cover letter explaining purpose and expenses</li>
          <li>Invitation / NOC / Employer letter (if applicable)</li>
          <li>Bank statement & financial proof (last 6 months)</li>
        </motion.ul>
      </section>

      {/* FEES & TIME */}
      <section className="visa-section">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Fees & Processing Time
        </motion.h2>

        <div className="timeline-grid">
          {[
            "Visit Visa: ~20 working days",
            "Study Visa: ~6 weeks",
            "Business Visa: 3–7 working days",
            "Critical Skills Employment: ~10 working days",
          ].map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {t}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="visa-cta">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Irish Visa Refused?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          We assist with refusal analysis and appeal preparation.
        </motion.p>

        <motion.button
          className="primary-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Talk to a Visa Expert
        </motion.button>
      </section>

    </ScrollReveal>
  );
}
