import { useState } from "react";
import "../styles/Inspiration.css";

import niImg from "../assets/hero/northern.jpg";
import dublinImg from "../assets/hero/dublin.jpg";
import wildImg from "../assets/hero/wild2.jpg";
import ancientImg from "../assets/hero/ancient.jpg";
import heartImg from "../assets/hero/hidden.jpg";

const places = {
  "Northern Ireland": {
    image: niImg,
    title: "Northern Ireland",
    description:
      "Amazing cliff-walks, Game of Thrones® adventures, Titanic attractions – let Northern Ireland stir your soul.",
    button: "Embrace a Giant Spirit ",
  },
  "Dublin": {
    image: dublinImg,
    title: "Dublin",
    description:
      "A lively capital filled with literary legends, cosy pubs, historic streets and modern energy.",
    button: "Discover Dublin ",
  },
  "Wild Atlantic Way": {
    image: wildImg,
    title: "Wild Atlantic Way",
    description:
      "Rugged coastlines, dramatic cliffs and endless ocean views along one of the world’s longest coastal routes.",
    button: "Explore the Wild ",
  },
  "Ireland's Ancient East": {
    image: ancientImg,
    title: "Ireland's Ancient East",
    description:
      "Step into 5,000 years of history through castles, monasteries and medieval towns.",
    button: "Travel Back in Time ",
  },
  "Ireland's Hidden Heartlands": {
    image: heartImg,
    title: "Hidden Heartlands",
    description:
      "Slow down and explore Ireland’s peaceful lakes, rivers and charming countryside.",
    button: "Find Your Calm ",
  },
};

export default function Inspiration() {
  const [activePlace, setActivePlace] = useState("Northern Ireland");

  const place = places[activePlace];

  return (
    <>
      {/* INSPIRATION SECTION */}
      <section className="inspiration">
        <h2>Looking for inspiration?</h2>
        <p>
          Ireland is a city break, adventure holiday and detoxing retreat all
          wrapped up in an epic road trip. Just mix and match for your perfect
          holiday.
        </p>

        <div className="tabs">
          {Object.keys(places).map((name) => (
            <button
              key={name}
              className={`tab ${activePlace === name ? "active" : ""}`}
              onClick={() => setActivePlace(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </section>

      {/* HERO SECTION */}
      {/* HERO / PLACE SHOWCASE */}
<section className="place-showcase">
  {/* Big Image */}
  <div className="place-image">
    <img src={place.image} alt={place.title} />
  </div>

  {/* Overlapping Card */}
  <div className="place-card">
    <h3>{place.title}</h3>

    <p>{place.description}</p>

    <div className="place-tags">
      <span className="tag green">Nature & Adventure</span>
      <span className="tag">Local Tours</span>
      <span className="tag">Cultural Sites</span>
      <span className="tag">City Visits</span>
    </div>

    <button className="hero-btn">{place.button}</button>
  </div>
</section>

    </>
  );
}
