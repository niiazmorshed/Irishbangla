import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import Breadcrumbs from "./Breadcrumbs";
import { informationTopics } from "../data/informationTopics";
import { serviceTopics } from "../data/serviceTopics";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const infoCloseTimer = useRef(null);
  const servicesCloseTimer = useRef(null);
  const tourismCloseTimer = useRef(null);
  const lastScrollYRef = useRef(0);
  const previousPathnameRef = useRef(pathname);

  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [tourismOpen, setTourismOpen] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  // Hide / show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.matchMedia("(max-width: 900px)").matches;

      if (isMobile) {
        setShow(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      setShow(currentScrollY < lastScrollYRef.current || currentScrollY < 80);
      lastScrollYRef.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(infoCloseTimer.current);
      clearTimeout(servicesCloseTimer.current);
      clearTimeout(tourismCloseTimer.current);
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

  const closeNavigation = useCallback(() => {
    clearTimeout(infoCloseTimer.current);
    clearTimeout(servicesCloseTimer.current);
    clearTimeout(tourismCloseTimer.current);
    setInfoOpen(false);
    setServicesOpen(false);
    setTourismOpen(false);
    setMenuOpen(false);
  }, []);

  // Close dropdowns/drawer after any route change, including navigation outside this component.
  useEffect(() => {
    if (previousPathnameRef.current === pathname) return;
    previousPathnameRef.current = pathname;

    const closeTimer = window.setTimeout(closeNavigation, 0);
    return () => window.clearTimeout(closeTimer);
  }, [pathname, closeNavigation]);

  const handleTrackingSearch = () => {
    if (!trackingId.trim()) return;
    navigate(`/track/${trackingId.trim()}`);
    setTrackingId("");
    closeNavigation();
  };

  const scrollToPageTop = useCallback(() => {
    const scroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    if (typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(() => window.requestAnimationFrame(scroll));
      return;
    }

    window.setTimeout(scroll, 0);
  }, []);

  const handleHomeNavigation = useCallback(
    (event) => {
      event?.preventDefault();
      event?.stopPropagation();
      closeNavigation();
      if (pathname !== "/") {
        navigate("/");
      }
      scrollToPageTop();
    },
    [closeNavigation, navigate, pathname, scrollToPageTop]
  );

  const infoItems = useMemo(
    () =>
      informationTopics.map((t) => ({
        to: `/information/${t.slug}`,
        label: t.title,
      })),
    []
  );

  const serviceItems = useMemo(
    () =>
      serviceTopics.map((t) => ({
        to: `/services/${t.slug}`,
        title: t.title,
        description: t.menuDescription,
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

  const handleTourismEnter = useCallback(() => {
    if (isMobile()) return;
    clearTimeout(tourismCloseTimer.current);
    setTourismOpen(true);
  }, []);

  const handleTourismLeave = useCallback(() => {
    if (isMobile()) return;
    tourismCloseTimer.current = setTimeout(() => setTourismOpen(false), 120);
  }, []);

  const handleTourismClick = useCallback(() => {
    if (!isMobile()) return;
    setTourismOpen((v) => !v);
  }, []);

  return (
    <header className={`navbar ${show ? "show" : "hide"}`}>
      <button
        type="button"
        className={`nav-drawer-backdrop ${menuOpen ? "open" : ""}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeNavigation}
      />

      <div className="nav-container">

        {/* LEFT */}
        <div className="nav-left">
          <div
            className="nav-logo"
            onClick={handleHomeNavigation}
          >
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
              onClick={handleHomeNavigation}
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
              closeNavigation();
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
                    closeNavigation();
                  }}
                >
                  {it.label}
                </NavLink>
              ))}
            </div>
          </li>

          {/* TOURISM */}
          <li
            className={`nav-item info tourism${tourismOpen ? " open" : ""}`}
            onMouseEnter={handleTourismEnter}
            onMouseLeave={handleTourismLeave}
            onClick={handleTourismClick}
          >
            <span className="nav-item-toggle" role="button" aria-haspopup="menu" aria-expanded={tourismOpen}>
              <span>Tourism</span>
              <FaChevronDown className={`dropdown-arrow ${tourismOpen ? "open" : ""}`} />
            </span>
            <div
              className={`info-menu${tourismOpen ? " open" : ""}`}
              onMouseEnter={() => {
                if (isMobile()) return;
                clearTimeout(tourismCloseTimer.current);
              }}
              onMouseLeave={handleTourismLeave}
            >
              <Link
                to="/#tourism-ireland"
                className="info-link"
                onClick={(e) => {
                  e.stopPropagation();
                  closeNavigation();
                }}
              >
                Tourism overview
              </Link>
              <NavLink
                to="/tourism-ireland/guide"
                className={({ isActive }) =>
                  isActive ? "info-link active" : "info-link"
                }
                onClick={(e) => {
                  e.stopPropagation();
                  closeNavigation();
                }}
              >
                Full travel guide
              </NavLink>
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
              {serviceItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "mega-item active" : "mega-item"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    closeNavigation();
                  }}
                >
                  <span className="mega-item-title">{item.title}</span>
                  <span className="mega-item-desc">{item.description}</span>
                </NavLink>
              ))}
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
              closeNavigation();
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
