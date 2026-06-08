import { useMemo, useState } from "react";
import "../styles/Service.css";
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
        iconUrl: "https://img.icons8.com/?size=100&id=113535&format=png&color=000000",
        title: "Tours & Travel Packages",
        benefit: "All-inclusive, stress-free travel",
        ideal: "Families & groups",
        text: "Customized domestic and international tour packages including flights, accommodation, and guided travel experiences.",
        color: "#5EBD00",
      },
      {
        id: "visa",
        iconUrl: "https://img.icons8.com/?size=100&id=64656&format=png&color=000000",
        title: "Visa Processing Services",
        benefit: "High approval rate, expert documentation",
        ideal: "First-time travellers",
        text: "Professional visa assistance for tourist, business, and visit visas with accurate documentation and application support.",
        color: "#FEAC1E",
      },
      {
        id: "ireland",
        iconUrl: "https://img.icons8.com/?size=100&id=Oma9tSIHTMlv&format=png&color=000000",
        title: "Ireland & Europe Travel",
        benefit: "Specialist Irish / EU destination plans",
        ideal: "Dream-trip planners",
        text: "Ireland-focused trip planning from anywhere in the world — routes, stays, must-see experiences, and a smooth end-to-end journey.",
        color: "#00875A",
      },
      {
        id: "hotel",
        iconUrl: "https://img.icons8.com/?size=100&id=64714&format=png&color=000000",
        title: "Hotel & Accommodation",
        benefit: "Budget-fit comfort bookings",
        ideal: "Solo & couple travellers",
        text: "Affordable hotel bookings and accommodation arrangements tailored to your comfort and travel needs.",
        color: "#5EBD00",
      },
      {
        id: "consultancy",
        iconUrl: "https://img.icons8.com/?size=100&id=37hLtlsVfB4v&format=png&color=000000",
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
    <section className="services-section" id="services">
      <div className="services-left">
        <p className="services-guide-kicker">Comprehensive services guide</p>
        <h2>Our Services</h2>
        <p className="services-guide-lead">
          IrishBangla helps travellers from <strong>any country</strong> plan a smooth trip to <strong>Ireland</strong> — from tours and visa guidance to
          stays and full travel consultancy. Every step is handled with care, accuracy, and transparency.
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
                backgroundColor: "transparent",
              }}
            >
              <img
                className="service-icon-img"
                src={card.iconUrl}
                alt=""
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
              />
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
