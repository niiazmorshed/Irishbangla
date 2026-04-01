import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../styles/IrelandStays.css";

import imgCliffs from "../assets/hero/cliffs.jpg";
import imgDublin from "../assets/hero/dublin.jpg";
import imgWild from "../assets/hero/wild2.jpg";

const stays = [
  {
    title: "Wild Atlantic Cottage Escape",
    location: "Doolin, County Clare",
    price: "€180",
    period: "/night",
    rating: "4.9",
    image: imgCliffs,
  },
  {
    title: "Dublin City Boutique Stay",
    location: "Dublin City Centre",
    price: "€220",
    period: "/night",
    rating: "4.8",
    image: imgDublin,
  },
  {
    title: "Connemara Lakeside Lodge",
    location: "Galway, Connemara",
    price: "€200",
    period: "/night",
    rating: "4.7",
    image: imgWild,
  },
];

export default function IrelandStays() {
  const navigate = useNavigate();

  return (
    <section className="ireland-stays">
      <div className="ireland-stays-inner">
        <header className="ireland-stays-header">
          <h2>Flexible travel plans for every explorer</h2>
          <p>
            Curate your Ireland itinerary with confidence — from coastal drives
            and city breaks to quiet countryside retreats. We help you plan the
            right stay, the right pace, and the right route.
          </p>
        </header>

        <div className="ireland-stays-grid">
          {stays.map((s) => (
            <article className="ireland-stay-card" key={s.title}>
              <div className="ireland-stay-image">
                <img src={s.image} alt={s.title} loading="lazy" />
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
          ))}
        </div>

        <div className="ireland-stays-cta">
          <button className="ireland-stays-btn" onClick={() => navigate("/book-trip")}>
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
}

