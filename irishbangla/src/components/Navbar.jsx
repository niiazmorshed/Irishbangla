import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  // Hide / show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < lastScrollY || window.scrollY < 80);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Tracking search
  const handleTrackingSearch = () => {
    if (!trackingId.trim()) return;
    navigate(`/track/${trackingId.trim()}`);
    setTrackingId("");
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${show ? "show" : "hide"}`}>
      <div className="nav-container">

        {/* LOGO */}
        <div className="nav-logo" onClick={() => navigate("/")}>
          🍀 <span>Emerald Visa & Tours</span>
        </div>

        {/* MENU */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>

          <li className="nav-item">Company</li>
          <li className="nav-item">Information</li>

          {/* SERVICES DROPDOWN */}
          <li
            className="nav-item services"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services ▾

            {servicesOpen && (
              <div className="mega-menu">
                <div className="mega-item">Visa Consultancy</div>
                <div className="mega-item">Cross-Border Visa Processing</div>
                <div className="mega-item">Visa Processing in Bangladesh</div>
                <div className="mega-item">E-Visa Processing</div>
                <div className="mega-item">Express Consultation</div>
                <div className="mega-item">Document Legalization</div>
              </div>
            )}
          </li>

          {/* TRACKING BOX */}
          <li className="tracking-box">
            <input
              type="text"
              placeholder="Tracking ID"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTrackingSearch()}
            />
            <button onClick={handleTrackingSearch}>
              <FaSearch />
            </button>
          </li>

          <li className="nav-cta" onClick={() => {
  navigate("/book-trip");
  setMenuOpen(false);
}}>
  Book Trip
</li>

        </ul>

        {/* BURGER MENU */}
        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}
