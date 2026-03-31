import { useEffect, useMemo, useRef, useState } from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import Breadcrumbs from "./Breadcrumbs";
import { informationTopics } from "../data/informationTopics";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const infoRef = useRef(null);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  const isHome = location.pathname === "/";

  // Hide / show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < lastScrollY || window.scrollY < 80);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle tracking search
  const handleTrackingSearch = () => {
    if (!trackingId.trim()) return;
    navigate(`/track/${trackingId.trim()}`);
    setTrackingId("");
    setMenuOpen(false);
  };

  const infoItems = useMemo(
    () =>
      informationTopics.map((t) => ({
        to: `/information/${t.slug}`,
        label: t.title,
      })),
    []
  );

  const isMobileNav = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 900px)").matches;

  useEffect(() => {
    // Close dropdown after navigation
    setInfoOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!infoOpen) return;

    const handlePointerDown = (e) => {
      if (!infoRef.current) return;
      if (infoRef.current.contains(e.target)) return;
      setInfoOpen(false);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setInfoOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [infoOpen]);

  return (
    <header className={`navbar ${show ? "show" : "hide"}`}>
      <div className="nav-container">

        {/* LEFT SIDE (Back + Logo) */}
        <div className="nav-left">
          {!isHome && (
            <button className="back-btn" onClick={() => navigate(-1)}>
              <FaArrowLeft />
              <span>Back</span>
            </button>
          )}

          <div className="nav-logo" onClick={() => navigate("/")}>
            🍀 <span>Emerald Visa & Tours</span>
          </div>
        </div>

        {/* MENU */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li
  className="nav-item"
  onClick={() => {
    navigate("/");
    setTimeout(() => {
      document
        .querySelector(".about-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setMenuOpen(false);
  }}
>
  Company
</li>


          {/* INFORMATION DROPDOWN */}
          <li
            className="nav-item info"
            ref={infoRef}
            onClick={() => {
              // Desktop: hover controls visibility; avoid "sticky open" on click.
              if (!isMobileNav()) return;
              setInfoOpen((v) => !v);
            }}
          >
            Information ▾
            <div className={`info-menu ${infoOpen ? "open" : ""}`}>
              {infoItems.map((it) => (
                <NavLink
                  key={it.to}
                  to={it.to}
                  className={({ isActive }) =>
                    isActive ? "info-link active" : "info-link"
                  }
                  onClick={() => {
                    setMenuOpen(false);
                    setInfoOpen(false);
                  }}
                >
                  {it.label}
                </NavLink>
              ))}
            </div>
          </li>

          {/* SERVICES */}
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

          {/* TRACKING */}
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

          {/* CTA */}
          <li
            className="nav-cta"
            onClick={() => {
              navigate("/book-trip");
              setMenuOpen(false);
            }}
          >
            Book Trip
          </li>
        </ul>

        {/* BURGER */}
        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <Breadcrumbs />
    </header>
  );
}
