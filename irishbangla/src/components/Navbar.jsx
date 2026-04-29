import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import Breadcrumbs from "./Breadcrumbs";
import { informationTopics } from "../data/informationTopics";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const infoCloseTimer = useRef(null);
  const servicesCloseTimer = useRef(null);

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

  // Close dropdowns after navigation
  useEffect(() => {
    setInfoOpen(false);
    setServicesOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(infoCloseTimer.current);
      clearTimeout(servicesCloseTimer.current);
    };
  }, []);

  // Lock scroll when mobile drawer is open
  useEffect(() => {
    if (!menuOpen) return;
    const mq = window.matchMedia("(max-width: 900px)");
    if (!mq.matches) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

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

  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 900px)").matches;

  // ── Information dropdown handlers ──────────────────────────────────
  const handleInfoEnter = useCallback(() => {
    if (isMobile()) return;
    clearTimeout(infoCloseTimer.current);
    setInfoOpen(true);
  }, []);

  const handleInfoLeave = useCallback(() => {
    if (isMobile()) return;
    // Delay gives the cursor time to move into the dropdown menu
    infoCloseTimer.current = setTimeout(() => setInfoOpen(false), 120);
  }, []);

  const handleInfoClick = useCallback(() => {
    // Mobile: toggle on tap
    if (!isMobile()) return;
    setInfoOpen((v) => !v);
  }, []);

  // ── Services dropdown handlers ──────────────────────────────────────
  const handleServicesEnter = useCallback(() => {
    if (isMobile()) return;
    clearTimeout(servicesCloseTimer.current);
    setServicesOpen(true);
  }, []);

  const handleServicesLeave = useCallback(() => {
    if (isMobile()) return;
    servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 120);
  }, []);

  const handleServicesClick = useCallback(() => {
    if (!isMobile()) return;
    setServicesOpen((v) => !v);
  }, []);

  return (
    <header className={`navbar ${show ? "show" : "hide"}`}>
      <button
        type="button"
        className={`nav-drawer-backdrop ${menuOpen ? "open" : ""}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />

      <div className="nav-container">

        {/* LEFT */}
        <div className="nav-left">
          <div className="nav-logo" onClick={() => navigate("/")}>
            🍀 <span>Emerald Visa &amp; Tours</span>
          </div>
        </div>

        {/* MENU */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>

          {/* Home */}
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
                setInfoOpen(false);
                setServicesOpen(false);
              }}
            >
              Home
            </NavLink>
          </li>

          {/* Company */}
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
            About us
          </li>

          {/* INFORMATION DROPDOWN */}
          <li
            className={`nav-item info${infoOpen ? " open" : ""}`}
            onMouseEnter={handleInfoEnter}
            onMouseLeave={handleInfoLeave}
            onClick={handleInfoClick}
          >
            <span className="nav-item-toggle" role="button" aria-haspopup="menu" aria-expanded={infoOpen}>
              <span>Information</span>
              <FaChevronDown className={`dropdown-arrow ${infoOpen ? "open" : ""}`} />
            </span>

            {/* The dropdown menu itself — hover over it cancels the close timer */}
            <div
              className={`info-menu${infoOpen ? " open" : ""}`}
              onMouseEnter={() => {
                if (isMobile()) return;
                clearTimeout(infoCloseTimer.current);
              }}
              onMouseLeave={handleInfoLeave}
            >
              {infoItems.map((it) => (
                <NavLink
                  key={it.to}
                  to={it.to}
                  className={({ isActive }) =>
                    isActive ? "info-link active" : "info-link"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
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
            className={`nav-item services${servicesOpen ? " open" : ""}`}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
            onClick={handleServicesClick}
          >
            <span className="nav-item-toggle" role="button" aria-haspopup="menu" aria-expanded={servicesOpen}>
              <span>Services</span>
              <FaChevronDown className={`dropdown-arrow ${servicesOpen ? "open" : ""}`} />
            </span>
            <div
              className={`mega-menu${servicesOpen ? " open" : ""}`}
              onMouseEnter={() => {
                if (isMobile()) return;
                clearTimeout(servicesCloseTimer.current);
              }}
              onMouseLeave={handleServicesLeave}
            >
              <div className="mega-item">Visa Consultancy</div>
              <div className="mega-item">Cross-Border Visa Processing</div>
              <div className="mega-item">Visa Processing in Bangladesh</div>
              <div className="mega-item">E-Visa Processing</div>
              <div className="mega-item">Express Consultation</div>
              <div className="mega-item">Document Legalization</div>
            </div>
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
            <button className="tracking-btn" onClick={handleTrackingSearch}>
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
          role="button"
          tabIndex={0}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setMenuOpen(!menuOpen);
            }
          }}
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