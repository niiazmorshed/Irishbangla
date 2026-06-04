import { useState } from "react";
import BookTripGlobe from "../BookTripGlobe";
import { bookTripDestinations, getDestination } from "../../data/bookTripDestinations";

const TRAVEL_TYPES = ["Tourist Visa", "Study Visa", "Business Visa", "Family Visit"];

const DEFAULT_DESTINATION = bookTripDestinations[0].code;

export default function BookingForm() {
  const [status, setStatus] = useState("");
  const [destinationCode, setDestinationCode] = useState(DEFAULT_DESTINATION);
  const destination = getDestination(destinationCode);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formsubmit.co/ajax/fineanswer2025@gmail.com", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success === "true") {
        setStatus("Your request has been submitted successfully.");
        e.target.reset();
        setDestinationCode(DEFAULT_DESTINATION);
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <section className="booktrip-form-card">
      <form onSubmit={handleSubmit} className="booktrip-form" noValidate>
        <input type="hidden" name="_subject" value="New Trip Booking Request" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="destination_country" value={destination.name} />

        <div className="booktrip-dest">
          <div className="booktrip-dest__copy">
            <label htmlFor="book-destination" className="booktrip-dest__label">
              Destination Country
            </label>
            <div className="booktrip-select-wrap">
              <select
                id="book-destination"
                name="destination"
                className="booktrip-select"
                value={destinationCode}
                onChange={(e) => setDestinationCode(e.target.value)}
              >
                {bookTripDestinations.map((d) => (
                  <option key={d.code} value={d.code}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
            <p className="booktrip-dest__subtitle">
              Plan your {destination.name} journey with confidence. Our global team will
              contact you shortly.
            </p>
          </div>

          <BookTripGlobe
            countries={bookTripDestinations}
            selectedCode={destinationCode}
          />
        </div>

        <div className="booktrip-fields">
          <div className="booktrip-fields__row">
            <div className="booktrip-ufield">
              <label htmlFor="book-name">Full Name</label>
              <input id="book-name" type="text" name="name" required autoComplete="name" />
            </div>
            <div className="booktrip-ufield">
              <label htmlFor="book-travel-type">Travel Type</label>
              <div className="booktrip-select-wrap booktrip-select-wrap--underline">
                <select id="book-travel-type" name="travel_type" required defaultValue="Study Visa">
                  {TRAVEL_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="booktrip-fields__row">
            <div className="booktrip-ufield">
              <label htmlFor="book-email">Email Address</label>
              <input id="book-email" type="email" name="email" required autoComplete="email" />
            </div>
            <div className="booktrip-ufield">
              <label htmlFor="book-phone">Phone Number</label>
              <input id="book-phone" type="tel" name="phone" required autoComplete="tel" />
            </div>
          </div>

          <div className="booktrip-ufield">
            <textarea
              id="book-message"
              name="message"
              rows={3}
              placeholder="Your Message"
              aria-label="Your Message"
            />
          </div>

          <button type="submit" className="booktrip-submit">
            Submit Request
          </button>

          {status && (
            <p
              className={`booktrip-status${
                status.includes("successfully")
                  ? " booktrip-status--ok"
                  : status === "Sending..."
                  ? ""
                  : " booktrip-status--err"
              }`}
              role="status"
              aria-live="polite"
            >
              {status}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
