import { useState } from "react";
import "../styles/BookTrip.css";

export default function BookTrip() {
  const [status, setStatus] = useState("");

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
        setStatus("✅ Your request has been submitted successfully!");
        e.target.reset();
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please try again later.");
    }
  };

  return (
    <div className="booktrip-page">
      <h1 className="page-title">Book Your Trip </h1>
      <p className="page-subtitle">
        Plan your Ireland journey with confidence. Our experts will contact you shortly.
      </p>

      <div className="booktrip-card">
        {/* LEFT: FORM */}
        <form onSubmit={handleSubmit} className="booktrip-form">
          <input type="hidden" name="_subject" value="New Trip Booking Request" />
          <input type="hidden" name="_template" value="table" />

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" required />
          </div>

          <div className="form-group">
            <label>Travel Type</label>
            <select name="travel_type" required>
              <option value="">Select</option>
              <option>Tourist Visa</option>
              <option>Study Visa</option>
              <option>Business Visa</option>
              <option>Family Visit</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea name="message" rows="4" />
          </div>

          <button type="submit">Submit Request</button>
          {status && <p className="form-status">{status}</p>}
        </form>

        {/* RIGHT: CONTACT INFO */}
        <div className="contact-info">
          <h3>Contact Information</h3>

          <p><strong>📍 Address</strong><br />
            House 76/A, Road 11<br />
            Banani, Dhaka-1213
          </p>

          <p><strong>📞 Phone</strong><br />
            +880 1725-982743
          </p>

          <p><strong>📧 Email</strong><br />
            fineanswer2025@gmail.com
          </p>

          <p><strong>🕒 Office Hours</strong><br />
            Sat – Wed: 10:00 AM – 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}
