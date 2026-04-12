import { useMemo, useState } from "react";
import "../styles/Service.css";
import {
  FaPlane,
  FaPassport,
  FaGlobeEurope,
  FaHotel,
  FaSuitcaseRolling,
} from "react-icons/fa";
import ServiceDetailModal from "./ServiceDetailModal";
import { ToursBody, VisaBody, IrelandBody, HotelBody, ConsultancyBody } from "./ServiceDetailBodies";

const SERVICE_DETAIL_COMPONENTS = {
  tours: ToursBody,
  visa: VisaBody,
  ireland: IrelandBody,
  hotel: HotelBody,
  consultancy: ConsultancyBody,
};

const Services = ({ onEnquiryClick }) => {
  const [openId, setOpenId] = useState(null);

  const cards = useMemo(
    () => [
      {
        id: "tours",
        icon: <FaPlane />,
        title: "Tours & Travel Packages",
        benefit: "All-inclusive, stress-free travel",
        ideal: "Families & groups",
        text: "Customized domestic and international tour packages including flights, accommodation, and guided travel experiences.",
        color: "#5EBD00",
      },
      {
        id: "visa",
        icon: <FaPassport />,
        title: "Visa Processing Services",
        benefit: "High approval rate, expert documentation",
        ideal: "First-time travellers",
        text: "Professional visa assistance for tourist, business, and visit visas with accurate documentation and application support.",
        color: "#FEAC1E",
      },
      {
        id: "ireland",
        icon: <FaGlobeEurope />,
        title: "Ireland & Europe Travel",
        benefit: "Specialist Irish / EU destination plans",
        ideal: "Dream-trip planners",
        text: "Specialized travel services for Ireland and European destinations, ensuring smooth planning and hassle-free journeys.",
        color: "#00875A",
      },
      {
        id: "hotel",
        icon: <FaHotel />,
        title: "Hotel & Accommodation",
        benefit: "Budget-fit comfort bookings",
        ideal: "Solo & couple travellers",
        text: "Affordable hotel bookings and accommodation arrangements tailored to your comfort and travel needs.",
        color: "#5EBD00",
      },
      {
        id: "consultancy",
        icon: <FaSuitcaseRolling />,
        title: "Travel Consultancy",
        benefit: "360° pre-departure support",
        ideal: "First-timers & corporates",
        text: "End-to-end travel consultation including itinerary planning, travel insurance guidance, and pre-departure support.",
        color: "#FEAC1E",
      },
    ],
    []
  );

  const activeCard = cards.find((c) => c.id === openId);
  const DetailBody = openId ? SERVICE_DETAIL_COMPONENTS[openId] : null;

  return (
    <section className="services-section">
      <div className="services-left">
        <p className="services-guide-kicker">Comprehensive services guide</p>
        <h2>Our Services</h2>
        <p className="services-guide-lead">
          IrishBangla is your trusted bridge between <strong>Bangladesh &amp; Ireland</strong> — from packaged tours and visa support to hotels and
          full travel consultancy. Every step is handled with care, accuracy, and transparency.
        </p>

       

        <button type="button" className="services-enquiry-btn" onClick={onEnquiryClick}>
          Send your enquiry
        </button>
      </div>

      <div className="services-grid">
        {cards.map((card) => (
          <article className="service-card" key={card.id}>
            <div
              className="icon"
              style={{
                backgroundColor: `${card.color}20`,
                color: card.color,
              }}
            >
              {card.icon}
            </div>
            <h4>{card.title}</h4>
            <p>{card.text}</p>
            <div className="service-card-meta">
              <span>{card.benefit}</span>
            </div>
            <button type="button" className="service-card-readmore" onClick={() => setOpenId(card.id)}>
              Read more
              <span className="service-card-readmore-chevron" aria-hidden>
                →
              </span>
            </button>
          </article>
        ))}
      </div>

      <ServiceDetailModal open={Boolean(openId)} title={activeCard?.title ?? ""} onClose={() => setOpenId(null)}>
        {DetailBody ? <DetailBody /> : null}
      </ServiceDetailModal>
    </section>
  );
};

export default Services;
