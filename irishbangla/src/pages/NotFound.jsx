import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPlane } from "react-icons/fa";
import "../styles/NotFound.css";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <main className="notfound-page">
      <section className="notfound-card" aria-labelledby="notfound-title">
        <p className="notfound-kicker">404</p>
        <h1 id="notfound-title">Page not found</h1>
        <p className="notfound-copy">
          We could not find the page you requested. It may have moved, or the link may be incorrect.
        </p>
        <p className="notfound-path" aria-label="Requested path">
          {pathname}
        </p>

        <div className="notfound-actions">
          <Link className="notfound-btn notfound-btn--primary" to="/">
            <FaHome aria-hidden="true" />
            Home
          </Link>
          <Link className="notfound-btn" to="/information">
            <FaInfoCircle aria-hidden="true" />
            Information
          </Link>
          <Link className="notfound-btn" to="/book-trip">
            <FaPlane aria-hidden="true" />
            Book Trip
          </Link>
        </div>
      </section>
    </main>
  );
}
