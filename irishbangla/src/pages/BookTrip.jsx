import BookingForm from "../components/booktrip/BookingForm";
import ContactCard from "../components/booktrip/ContactCard";
import "../styles/BookTrip.css";

export default function BookTrip() {
  return (
    <div className="booktrip-page">
      <div className="booktrip-page__bg" aria-hidden="true" />

      <header className="booktrip-hero">
        <h1 className="booktrip-hero__title">Book Your Global Journey</h1>
        <p className="booktrip-hero__lead">
          Plan your international journey with confidence. Our global team will contact you
          shortly.
        </p>
      </header>

      <div className="booktrip-shell">
        <ContactCard />
        <BookingForm />
      </div>
    </div>
  );
}
