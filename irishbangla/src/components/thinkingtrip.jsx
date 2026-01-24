import { useNavigate } from "react-router-dom";
import "../styles/thinkingtrip.css";
import img1 from "../assets/hero/belfest.jpg";
import img2 from "../assets/hero/cliffs.jpg";
import img3 from "../assets/hero/other.jpg";

const trips = [
  {
    title: "Getting here",
    desc: "We help you find the perfect flight or ferry route for a smooth journey to Ireland.",
    btn: "Travelling to Ireland",
    img: img1,
    link: "/ireland-travel-process",
  },
  {
    title: "Ireland’s weather",
    desc: "Learn about seasons, climate, what to pack and how to plan for Ireland’s charm.",
    btn: "Get the forecast",
    img: img2,
    primary: true,
    link: "/ireland-weather",
  },
  {
    title: "Sustainable Ireland",
    desc: "Explore Ireland responsibly with eco-friendly travel tips and experiences.",
    btn: "Go green in Ireland",
    img: img3,
    link: "/sustainable-ireland",
  },
];

export default function ThinkingTrip() {
  const navigate = useNavigate();

  return (
    <section className="thinking-trip">
      <h2>Thinking of a trip to Ireland?</h2>

      <div className="trip-grid">
        {trips.map((item, i) => (
          <div className="trip-card" key={i}>
            <div className="image-wrap">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="trip-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <button
                className={item.primary ? "btn primary" : "btn"}
                onClick={() => item.link && navigate(item.link)}
              >
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
