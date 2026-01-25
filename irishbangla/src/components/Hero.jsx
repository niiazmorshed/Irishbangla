import { useState, useEffect } from "react";
import "../styles/Hero.css";

import cliffs from "../assets/hero/cliffs.jpg";
import titanic from "../assets/hero/belfest.jpg";
import dublin from "../assets/hero/other.jpg";

const slides = [
  {
    image: cliffs,
    title: "Explore Ireland",
    subtitle: "Your trusted partner for Ireland",
    desc: "Discover the breathtaking Cliffs of Moher and the natural beauty of Ireland. From dramatic coastlines to lush green landscapes, we help you explore iconic destinations while ensuring a smooth, memorable, and well-guided travel experience.",
  },
  {
    image: titanic,
    title: "Visit Titanic Belfast",
    subtitle: "History meets innovation",
    desc: "Step into history at Titanic Belfast, where Ireland’s maritime legacy comes alive. Explore interactive exhibits, world-class attractions, and inspiring stories that connect the past with modern innovation.",
  },
  {
    image: dublin,
    title: "Study, Work & Travel",
    subtitle: "Your Irish journey starts here",
    desc: "We provide complete support for study, work, and travel opportunities in Ireland. From tour packages and university admissions to work permits and visa guidance, we make your journey simple, reliable, and stress-free.",
  },
];

export default function Hero({ onConsultClick, onServiceClick }) {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay" />

          <div className="hero-inner">
            <div className="hero-content">
              <span className="hero-eyebrow">{slide.subtitle}</span>

              <h1 className="hero-title">{slide.title}</h1>

              <p className="hero-desc">{slide.desc}</p>

              <div className="hero-actions">
                <button
                  className="btn-primary"
                  onClick={onConsultClick}
                >
                  Book a Consultation
                </button>

                <button
                  className="btn-secondary"
                  onClick={onServiceClick}
                >
                  Explore Services
                </button>
              </div>

              <div className="hero-trust">
                ✓ Trusted by 1,000+ students & travelers
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
