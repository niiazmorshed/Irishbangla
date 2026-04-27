import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLeaf, FaComments, FaBalanceScale } from "react-icons/fa";
import "../styles/AboutUs.css";

import imgCliffs from "../assets/hero/cliffs.jpg";
import imgCity from "../assets/hero/other.jpg";
import imgWild from "../assets/hero/wild.jpg";

function useCountUp(target, { duration = 1600, enabled }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, enabled]);

  return value;
}

const pillars = [
  {
    icon: <FaLeaf aria-hidden />,
    title: "Ireland expertise",
    text: "On-the-ground knowledge of routes, visas, and stays across Ireland and Europe.",
  },
  {
    icon: <FaComments aria-hidden />,
    title: "Global support, clear communication",
    text: "Clear guidance in Bangla and English—whether you’re travelling from Bangladesh or any other country, from first call to return.",
  },
  {
    icon: <FaBalanceScale aria-hidden />,
    title: "Transparency",
    text: "Straightforward pricing and honest timelines. No hidden fees, no vague promises.",
  },
];

export default function AboutUs({ onEnquiryClick }) {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const statsStarted = useRef(false);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !statsStarted.current) {
          statsStarted.current = true;
          setStatsActive(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const travellers = useCountUp(2500, { enabled: statsActive });
  const destinations = useCountUp(40, { enabled: statsActive });
  const visaRate = useCountUp(98, { enabled: statsActive });

  const handleEnquiry = useCallback(() => {
    onEnquiryClick?.();
  }, [onEnquiryClick]);

  return (
    <section className="about-section" ref={sectionRef} aria-labelledby="about-heading">
      <div className="about-shell">
        <div className="about-collage">
          <div className="about-collage-rings" aria-hidden />
          <div className="about-collage-stack">
            <div className="about-photo about-photo--a">
              <img src={imgCliffs} alt="Cliffs of Moher, Ireland" loading="lazy" />
            </div>
            <div className="about-photo about-photo--b">
              <img src={imgCity} alt="Urban skyline — our Dhaka hub" loading="lazy" />
            </div>
            <div className="about-photo about-photo--c">
              <img src={imgWild} alt="Irish coastline" loading="lazy" />
            </div>
          </div>

          <div className="about-hub-card" aria-label="Dhaka and Dublin hubs">
            <span className="about-hub-kicker">Hubs</span>
            <span className="about-hub-title">Dhaka ↔ Dublin</span>
            <span className="about-hub-label">One team, global travellers</span>
          </div>

          <div className="about-trust-badge">
            <span className="about-trust-badge-inner">10+ years of trust</span>
          </div>
        </div>

        <div className="about-content">
          <p className="about-kicker">About Irish Bangla</p>

          <h2 id="about-heading" className="about-editorial">
            One-stop travel solution to the <em className="about-emerald">Emerald Isle</em> — for travellers from any country.
          </h2>

          <p className="about-lead">
            Irish Bangla Tours &amp; Travels is headquartered in <strong>Dhaka</strong> with an international presence in <strong>Dublin</strong>. We support
            travellers from <strong>multiple countries</strong> with trip planning for <strong>Ireland</strong> (and Europe) — tours, stays, and practical visa
            guidance in one place.
          </p>

          <div className="about-stats" aria-live="polite">
            <div className="about-stat">
              <span className="about-stat-value">{travellers.toLocaleString()}+</span>
              <span className="about-stat-label">Travellers served</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">{destinations}+</span>
              <span className="about-stat-label">Destinations</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">{visaRate}%</span>
              <span className="about-stat-label">Visa approval rate</span>
            </div>
          </div>

          <div className="about-pillars">
            {pillars.map((p) => (
              <div className="about-pillar" key={p.title}>
                <div className="about-pillar-icon">{p.icon}</div>
                <h3 className="about-pillar-title">{p.title}</h3>
                <p className="about-pillar-text">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="about-ctas">
            <button type="button" className="about-btn about-btn--primary" onClick={() => navigate("/book-trip")}>
              Plan your trip
            </button>
            <button type="button" className="about-btn about-btn--ghost" onClick={handleEnquiry}>
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
