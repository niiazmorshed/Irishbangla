import "../styles/contact.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState, forwardRef } from "react";

const ContactSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://formsubmit.co/ajax/fineanswer2025@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          date: formData.date,
          message: formData.message,
          _subject: "New Consultation Booking",
          _captcha: false,
        }),
      }
    );

    if (response.ok) {
      setSuccessMessage("✅ Your meeting has been scheduled successfully!");
      setFormData({ name: "", phone: "", date: "", message: "" });
    } else {
      setSuccessMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-wrapper" ref={ref}>
      <div className="contact-container">
        {/* LEFT PANEL */}
        <div className="contact-left">
          <p className="contact-tag">Contact Us</p>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-desc">
            Reach us anytime for guidance on universities, visas, applications,
            scholarships, and more. Our advisors respond within 24 hours.
          </p>

          <div className="contact-info">
            <p>📍 House 76/A, Road 11, Banani, Dhaka 1213</p>
            <p>📞 +880 1725-982743</p>
            <p>📧 info@irishbangla.com</p>
          </div>

          <div className="social-icons">
            <a href="https://www.facebook.com/FineanswerStudyAbroad" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/fineanswerstudyabroad/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/fineanswer_study_abroad/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@FineAnswerStudyAbroad/videos" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-card">
          <h3 className="form-title">Book a Free Consultation</h3>

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Appointment Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="send-btn">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
