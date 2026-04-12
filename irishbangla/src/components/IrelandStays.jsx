import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../styles/IrelandStays.css";

import imgCliffs from "../assets/hero/cliffs.jpg";
import imgDublin from "../assets/hero/dublin.jpg";
import imgWild from "../assets/hero/wild2.jpg";

const stays = [
  {
    id: "wild-atlantic",
    title: "Wild Atlantic Cottage Escape",
    location: "Doolin, County Clare",
    price: "€180",
    period: "/night",
    rating: "4.9",
    image: imgCliffs,
    backIntro: "Coastal calm near the Cliffs of Moher and traditional music pubs.",
    backBullets: ["Self-drive Wild Atlantic Way legs", "B&B or cottage stays", "Flexible nights (3–7+)"],
  },
  {
    id: "dublin-boutique",
    title: "Dublin City Boutique Stay",
    location: "Dublin City Centre",
    price: "€220",
    period: "/night",
    rating: "4.8",
    image: imgDublin,
    backIntro: "Walkable city break with culture, food, and day-trip options.",
    backBullets: ["Temple Bar & museums nearby", "Luas / DART for Wicklow day trips", "Weekend or midweek bundles"],
  },
  {
    id: "connemara-lodge",
    title: "Connemara Lakeside Lodge",
    location: "Galway, Connemara",
    price: "€200",
    period: "/night",
    rating: "4.7",
    image: imgWild,
    backIntro: "Lakes and bog roads — ideal for slowing down and hiking.",
    backBullets: ["Connemara National Park access", "Galway city within reach", "Nature-first pacing"],
  },
];

export default function IrelandStays() {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(() => ({}));

  const toggleFlip = useCallback((id) => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: coarse)").matches) return;
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <section className="ireland-stays">
      <div className="ireland-stays-inner">
        <header className="ireland-stays-header">
          <h2>Flexible travel plans for every explorer</h2>
          <p>
            Curate your Ireland itinerary with confidence — from coastal drives and city breaks to quiet countryside retreats. We help you plan
            the right stay, the right pace, and the right route.
          </p>
          <p className="ireland-stays-flip-hint" aria-hidden="true">
            <span className="ireland-stays-flip-hint--hover">Hover a card to see more</span>
            <span className="ireland-stays-flip-hint--tap">Tap a card to flip</span>
          </p>
        </header>

        <div className="ireland-stays-grid">
          {stays.map((s) => (
            <div
              key={s.id}
              className={`ireland-stay-flip-wrap ${flipped[s.id] ? "is-flipped" : ""}`}
              onClick={() => toggleFlip(s.id)}
              tabIndex={0}
              role="group"
              aria-label={`${s.title}. Hover or focus to see flexible plan details; on touch, tap to flip.`}
            >
              <div className="ireland-stay-flip-inner">
                <div className="ireland-stay-face ireland-stay-face--front">
                  <article className="ireland-stay-card">
                    <div className="ireland-stay-image">
                      <img src={s.image} alt="" loading="lazy" />
                    </div>
                    <div className="ireland-stay-meta">
                      <div className="ireland-stay-left">
                        <h3>{s.title}</h3>
                        <p>{s.location}</p>
                        <div className="ireland-stay-price">
                          <strong>{s.price}</strong>
                          <span>{s.period}</span>
                        </div>
                      </div>
                      <div className="ireland-stay-rating" aria-label={`Rated ${s.rating} out of 5`}>
                        <FaStar aria-hidden="true" />
                        <span>{s.rating}</span>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="ireland-stay-face ireland-stay-face--back">
                  <div className="ireland-stay-back-inner">
                    <h3>{s.title}</h3>
                    <p className="ireland-stay-back-intro">{s.backIntro}</p>
                    <ul className="ireland-stay-back-list">
                      {s.backBullets.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <p className="ireland-stay-back-foot">Flexible dates · Ask us to tailor nights &amp; route</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ireland-stays-cta">
          <button type="button" className="ireland-stays-btn" onClick={() => navigate("/book-trip")}>
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
}
