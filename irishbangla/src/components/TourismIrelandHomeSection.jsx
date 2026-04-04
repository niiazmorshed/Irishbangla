import { useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/TourismPages.css";
import cliffs from "../assets/hero/cliffs.jpg";
import dublin from "../assets/hero/dublin.jpg";
import wild from "../assets/hero/wild.jpg";

const GUIDE_PATH = "/tourism-ireland/guide";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

const highlights = [
  {
    title: "Visa & entry",
    text: "Short-stay rules, Bangladeshi nationals, documents, and INIS links.",
    icon: "📋",
  },
  {
    title: "Top destinations",
    text: "Dublin, Wild Atlantic Way, UNESCO sites, and scenic drives.",
    icon: "🗺️",
  },
  {
    title: "Stay & tours",
    text: "B&Bs to luxury hotels, guided tours, and adventure picks.",
    icon: "🏨",
  },
  {
    title: "Practical tips",
    text: "Seasons, budget, transport on the left, and emergency numbers.",
    icon: "✈️",
  },
];

export default function TourismIrelandHomeSection() {
  const navigate = useNavigate();

  const goGuide = useCallback(() => {
    navigate(GUIDE_PATH);
  }, [navigate]);

  return (
    <section id="tourism-ireland" className="tourism-home tourism-page til-landing" aria-labelledby="tourism-ireland-heading">
      <div className="til-hero til-hero--home">
        <div className="til-hero-grid">
          <motion.div
            className="til-hero-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
          >
            <p className="til-kicker">🍀 Tourism in Ireland</p>
            <h2 id="tourism-ireland-heading" className="til-title">
              Your complete travel guide
            </h2>
            <p className="til-lead">
              From the Cliffs of Moher to the streets of Dublin — everything you need to explore the Emerald Isle.
            </p>
            <div className="til-hero-cta-row">
              <motion.button
                type="button"
                className="til-btn til-btn-primary"
                onClick={goGuide}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Check details
              </motion.button>
              <span className="til-hero-deco" aria-hidden="true">
                <span className="til-pin" />
                <svg className="til-path" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path
                    d="M8 72 Q40 8 112 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 6"
                    strokeLinecap="round"
                  />
                  <path d="M108 18 L118 22 L112 28 Z" fill="currentColor" />
                </svg>
              </span>
            </div>
          </motion.div>

          <motion.div
            className="til-collage"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="til-collage-stack">
              <img src={cliffs} alt="Cliffs of Moher" className="til-img til-img-sm" />
              <img src={wild} alt="Irish coastline" className="til-img til-img-sm" />
            </div>
            <div className="til-collage-tall">
              <img src={dublin} alt="Dublin" className="til-img til-img-tall" />
              <button
                type="button"
                className="til-play"
                aria-label="Open full travel guide"
                onClick={goGuide}
              >
                <span className="til-play-icon" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="til-section">
        <div className="til-container">
          <h3 className="til-h2 til-center">What you will find</h3>
          <p className="til-subtil til-center">Four pillars of planning — expanded on the full guide page.</p>
          <div className="til-card-grid">
            {highlights.map((h, i) => (
              <motion.article
                key={h.title}
                className="til-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
              >
                <span className="til-card-icon" aria-hidden>
                  {h.icon}
                </span>
                <h4 className="til-h3">{h.title}</h4>
                <p className="til-card-text">{h.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="til-section til-cta-band">
        <div className="til-container til-cta-inner">
          <div>
            <h3 className="til-h2 til-cta-title">Céad míle fáilte</h3>
            <p className="til-body til-cta-sub">Open the full guide for tables, visa checklists, and official links.</p>
          </div>
          <motion.button
            type="button"
            className="til-btn til-btn-primary til-btn-lg"
            onClick={goGuide}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Open full guide
          </motion.button>
        </div>
      </section>
    </section>
  );
}
