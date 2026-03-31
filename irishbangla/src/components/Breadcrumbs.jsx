import { Link, matchPath, useLocation } from "react-router-dom";
import "../styles/Breadcrumbs.css";

const ROUTES = [
  { path: "/", label: "Home" },
  { path: "/book-trip", label: "Book Trip" },
  { path: "/visa-details", label: "Visa Details" },
  {
    path: "/track/:trackingId",
    label: "Track Application",
    getCrumbs: ({ trackingId }) => [
      { label: "Track Application" },
      { label: `Tracking ID: ${trackingId}` },
    ],
  },
  { path: "/ireland-travel-process", label: "Travel Process" },
  { path: "/ireland-weather", label: "Ireland Weather" },
  { path: "/sustainable-ireland", label: "Sustainable Ireland" },
];

function titleCaseFromSlug(slug) {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  if (!pathname) return null;
  if (pathname === "/") return null;

  const matchedRoute = ROUTES.find((r) => matchPath({ path: r.path, end: true }, pathname));
  const match = matchedRoute ? matchPath({ path: matchedRoute.path, end: true }, pathname) : null;

  let crumbs;
  if (matchedRoute?.getCrumbs && match?.params) {
    const computed = matchedRoute.getCrumbs(match.params);
    crumbs = [{ to: "/", label: "Home" }, ...computed.map((c, i) => ({ ...c, key: `c-${i}` }))];
  } else if (matchedRoute) {
    crumbs = [
      { to: "/", label: "Home" },
      { label: matchedRoute.label },
    ];
  } else {
    const parts = pathname.split("/").filter(Boolean);
    crumbs = [{ to: "/", label: "Home" }];
    let acc = "";
    for (const part of parts) {
      acc += `/${part}`;
      crumbs.push({ to: acc, label: titleCaseFromSlug(part) });
    }
  }

  return (
    <nav className="breadcrumb-bar" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {crumbs.map((c, idx) => {
          const isLast = idx === crumbs.length - 1;
          const key = c.key || `${c.label}-${idx}`;

          return (
            <li className="breadcrumb-item" key={key}>
              {idx !== 0 && <span className="breadcrumb-sep">/</span>}

              {c.to && !isLast ? (
                <Link className="breadcrumb-link" to={c.to}>
                  {c.label}
                </Link>
              ) : (
                <span className={`breadcrumb-current ${isLast ? "is-current" : ""}`}>
                  {c.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
