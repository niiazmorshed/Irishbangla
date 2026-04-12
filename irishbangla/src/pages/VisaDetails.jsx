import { useLocation } from "react-router-dom";
import "../styles/VisaDetails.css";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  getVisaCategory,
  getVisaCountry,
  visaCategories,
  visaCountries,
} from "../data/irelandVisaGuide";

export default function VisaDetails() {
  const { state } = useLocation();
  const fromCountryCode = state?.fromCountryCode;
  const categoryKey = state?.categoryKey;

  const country = fromCountryCode ? getVisaCountry(fromCountryCode) : null;
  const category = categoryKey ? getVisaCategory(categoryKey) : null;

  const hasSelection = Boolean(country && category);

  return (
    <ScrollReveal as="div" className="visa-details-page" y={22}>
      {/* Header */}
      <div className="visa-header">
        <h1>{hasSelection ? `${category.label} for Ireland — from ${country.name}` : "Ireland Visa Guide"}</h1>

        <div className="visa-steps">
          <span className={`step ${hasSelection ? "" : "active"}`}>Basic Information</span>
          <span className={`step ${hasSelection ? "active" : ""}`}>Requirements</span>
          <span className="step">Embassy Details</span>
          <span className="step highlight">Book a Consultation</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="visa-content">
        {/* LEFT */}
        <div className="visa-main">
          <h2>{hasSelection ? "Required Documents (Checklist)" : "Quick Reference"}</h2>
          <p className="subtitle">
            {hasSelection
              ? category.purpose
              : "Select your country and visa category from the home page search to view a tailored checklist."}
          </p>

          <div className="doc-accordion">
            {hasSelection ? (
              <>
                <InfoBlock title="Type" value={category.type} />
                <InfoBlock title="Duration" value={category.duration} />
                <InfoBlock title="Who can apply" value={category.whoCanApply} />

                <div className="visa-divider" />

                {category.documents.map((d, idx) => (
                  <DocumentItem
                    key={d}
                    number={String(idx + 1)}
                    title={d}
                    text=""
                    compact
                  />
                ))}

                {category.notes?.length ? (
                  <>
                    <div className="visa-divider" />
                    <h3 className="visa-subhead">Important Notes</h3>
                    <ul className="visa-bullets">
                      {category.notes.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <div className="visa-divider" />
                <Disclaimer />
              </>
            ) : (
              <>
                <h3 className="visa-subhead">Visa Requirements by Country</h3>
                <div className="visa-table-wrap" role="region" aria-label="Visa requirements table">
                  <table className="visa-table">
                    <thead>
                      <tr>
                        <th>Country</th>
                        <th>Visa Required?</th>
                        <th>Waiver Available?</th>
                        <th>Embassy Handling</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visaCountries.map((c) => (
                        <tr key={c.code}>
                          <td>{c.name}</td>
                          <td>{c.visaRequired}</td>
                          <td>{c.waiver}</td>
                          <td>{c.embassyHandling}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="visa-divider" />
                <h3 className="visa-subhead">Visa Categories</h3>
                <ul className="visa-bullets">
                  {visaCategories.map((v) => (
                    <li key={v.key}>
                      <strong>{v.label}:</strong> {v.type} — Fee: {v.fee} — Processing: {v.processing}
                    </li>
                  ))}
                </ul>

                <div className="visa-divider" />
                <Disclaimer />
              </>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <aside className="visa-sidebar">
          <h4>{hasSelection ? "Your Selection" : "Ireland Visa Guide"}</h4>

          {hasSelection ? (
            <>
              <div className="visa-kv">
                <span>From</span>
                <strong>{country.name}</strong>
              </div>
              <div className="visa-kv">
                <span>Destination</span>
                <strong>Ireland</strong>
              </div>
              <div className="visa-kv">
                <span>Category</span>
                <strong>{category.label}</strong>
              </div>

              <div className="visa-divider sidebar" />

              <div className="visa-kv">
                <span>Visa Required?</span>
                <strong>{country.visaRequired}</strong>
              </div>
              <div className="visa-kv">
                <span>Waiver</span>
                <strong>{country.waiver}</strong>
              </div>
              <div className="visa-kv">
                <span>Embassy Handling</span>
                <strong>{country.embassyHandling}</strong>
              </div>

              <div className="visa-divider sidebar" />

              <div className="visa-kv">
                <span>Processing</span>
                <strong>{category.processing}</strong>
              </div>
              <div className="visa-kv">
                <span>Fee</span>
                <strong>{category.fee}</strong>
              </div>

              <button className="primary-btn">Start Application</button>
            </>
          ) : (
            <>
              <p className="visa-side-note">
                Use the visa search on the home page to see country-specific and category-specific requirements.
              </p>
              <button className="primary-btn">Book a Consultation</button>
            </>
          )}
        </aside>
      </div>
    </ScrollReveal>
  );
}

/* Reusable document item */
function DocumentItem({ number, title, text, compact = false }) {
  return (
    <div className={`doc-item ${compact ? "compact" : ""}`}>
      <div className="doc-title">
        <span>{number}</span>
        <h3>{title}</h3>
      </div>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function InfoBlock({ title, value }) {
  return (
    <div className="visa-info-block">
      <div className="visa-info-title">{title}</div>
      <div className="visa-info-value">{value}</div>
    </div>
  );
}

function Disclaimer() {
  return (
    <div className="visa-disclaimer" role="note" aria-label="Disclaimer">
      <strong>Disclaimer:</strong> Requirements, fees, processing times, waivers and policies may change at any time
      according to Irish government rules and official sources. Always verify via official websites before applying.
    </div>
  );
}
