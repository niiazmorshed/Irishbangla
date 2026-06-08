import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getServiceTopic, serviceTopics } from "../data/serviceTopics";
import "../styles/ServicePages.css";

import imgCliffs from "../assets/hero/cliffs.jpg";
import imgDublin from "../assets/hero/dublin.jpg";
import imgWild from "../assets/hero/wild.jpg";
import imgWild2 from "../assets/hero/wild2.jpg";
import imgHidden from "../assets/hero/hidden.jpg";
import imgAncient from "../assets/hero/ancient.jpg";
import imgOther from "../assets/hero/other.jpg";
import imgNorthern from "../assets/hero/northern.jpg";
import imgSummer from "../assets/hero/summer.jpg";
import imgMood1 from "../assets/hero/mood1.jpg";
import imgMood2 from "../assets/hero/mood2.jpg";
import imgBelfast from "../assets/hero/belfest.jpg";
import imgScene from "../assets/irelandpic/scene.jpg";
import imgScene2 from "../assets/irelandpic/scene2.jpg";
import imgScene3 from "../assets/irelandpic/scene3.jpg";
import imgTour from "../assets/irelandpic/tour.jpg";
import imgMark from "../assets/irelandpic/mark-de-jong-NELRuCfHxxU-unsplash.jpg";
import imgZihao from "../assets/irelandpic/zihao-chen-m5PzbFyN2-U-unsplash.jpg";

const SERVICE_GALLERY = {
  "visa-consultancy": [imgCliffs, imgWild, imgScene, imgTour, imgMood1],
  "cross-border-visa-processing": [imgWild2, imgNorthern, imgScene2, imgMark, imgBelfast],
  "visa-application-support": [imgDublin, imgScene3, imgMood2, imgOther, imgSummer],
  "e-visa-processing": [imgHidden, imgZihao, imgTour, imgScene, imgWild],
  "express-consultation": [imgAncient, imgCliffs, imgWild2, imgScene2, imgMood1],
  "document-legalization": [imgAncient, imgNorthern, imgTour, imgScene3, imgDublin],
};

function ServiceTable({ table }) {
  return (
    <div className="svc-table-wrap" role="region" aria-label={table?.caption || "Table"}>
      {table.caption && <p className="svc-table-caption">{table.caption}</p>}
      <table className="svc-table">
        <thead>
          <tr>
            {table.columns.map((c) => (
              <th scope="col" key={c}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionContent({ section }) {
  return (
    <>
      {section.paragraphs?.map((p, i) => (
        <p className="svc-p" key={i}>
          {p}
        </p>
      ))}

      {section.bullets && (
        <ul className="svc-list">
          {section.bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      )}

      {section.numbered && (
        <ol className="svc-list svc-list--numbered">
          {section.numbered.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      )}

      {section.table && <ServiceTable table={section.table} />}

      {section.callout && (
        <div className="svc-callout" role="note">
          <strong>{section.callout.title}</strong>
          <p>{section.callout.text}</p>
        </div>
      )}

      {section.note && <p className="svc-note">{section.note}</p>}
    </>
  );
}

function ServicePills({ activeSlug }) {
  return (
    <nav className="svc-pills" aria-label="All services">
      {serviceTopics.map((t) => (
        <Link
          key={t.slug}
          to={`/services/${t.slug}`}
          className={`svc-pill${t.slug === activeSlug ? " active" : ""}`}
        >
          {t.title}
        </Link>
      ))}
    </nav>
  );
}

export default function ServiceTopic() {
  const { service } = useParams();

  const current = useMemo(() => getServiceTopic(service), [service]);
  const currentIndex = useMemo(
    () => serviceTopics.findIndex((t) => t.slug === service),
    [service]
  );

  const gallery = SERVICE_GALLERY[service] ?? SERVICE_GALLERY["visa-consultancy"];

  if (!current) {
    return (
      <div className="svc-page">
        <div className="svc-wrap svc-fallback">
          <p className="svc-kicker">Services</p>
          <h1>Service not found</h1>
          <p className="svc-lead">Choose a service from the list below.</p>
          <ServicePills activeSlug={service} />
          <Link to="/#services" className="svc-text-link">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = current.icon;
  const prev = currentIndex > 0 ? serviceTopics[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < serviceTopics.length - 1
      ? serviceTopics[currentIndex + 1]
      : null;

  const [g0, g1, g2, g3, g4] = gallery;
  const overview = current.sections[0];
  const second = current.sections[1];
  const featureBullets = overview?.bullets?.slice(0, 4) ?? [];
  const tocTiles = current.toc?.slice(0, 2) ?? [];

  return (
    <div className="svc-page">
      {/* ── Hero ── */}
      <header className="svc-hero">
        <img className="svc-hero-bg" src={current.heroImage} alt="" />
        <div className="svc-hero-shade" aria-hidden="true" />
        <div className="svc-wrap svc-hero-inner">
          <div className="svc-hero-copy">
            <span className="svc-kicker">Services · Emerald Visa &amp; Tours</span>
            <h1>{current.title}</h1>
            <p className="svc-hero-lead">{current.lead}</p>
            <div className="svc-hero-actions">
              <Link to="/book-trip" className="svc-btn svc-btn--white">
                Book consultation
              </Link>
              <Link to="/#services" className="svc-text-link svc-text-link--light">
                ← All services
              </Link>
            </div>
          </div>

          <aside className="svc-float-card svc-float-card--sky">
            <span className="svc-float-icon" aria-hidden="true">
              <Icon />
            </span>
            <h2>{overview?.heading ?? "Service overview"}</h2>
            <p>{current.menuDescription}</p>
            <a href={`#${overview?.id ?? "overview"}`} className="svc-text-link">
              Learn more →
            </a>
          </aside>
        </div>
      </header>

      <ServicePills activeSlug={current.slug} />

      {/* ── Mosaic intro ── */}
      <section className="svc-section svc-mosaic" aria-labelledby="svc-mosaic-title">
        <div className="svc-wrap">
          <div className="svc-split-head">
            <h2 id="svc-mosaic-title" className="svc-h2">
              Step into your gateway
            </h2>
            <p className="svc-split-lead">{current.lead}</p>
          </div>

          <div className="svc-mosaic-grid">
            <figure className="svc-img-frame">
              <img src={g0} alt="" loading="lazy" />
            </figure>
            <figure className="svc-img-frame">
              <img src={g1} alt="" loading="lazy" />
            </figure>
            <figure className="svc-img-frame">
              <img src={g2} alt="" loading="lazy" />
            </figure>

            {tocTiles[0] && (
              <div className="svc-accent svc-accent--rose">
                <span className="svc-accent-dot" aria-hidden="true" />
                <h3>{tocTiles[0].label}</h3>
                <p>{overview?.paragraphs?.[0]?.slice(0, 120)}…</p>
                <a href={`#${tocTiles[0].id}`} className="svc-text-link">
                  View section →
                </a>
              </div>
            )}

            {tocTiles[1] && (
              <div className="svc-accent svc-accent--mint">
                <span className="svc-accent-dot svc-accent-dot--green" aria-hidden="true" />
                <h3>{tocTiles[1].label}</h3>
                <p>{second?.paragraphs?.[0]?.slice(0, 100) ?? second?.heading ?? "Full details inside."}…</p>
                <a href={`#${tocTiles[1].id}`} className="svc-text-link">
                  View section →
                </a>
              </div>
            )}

            <figure className="svc-img-frame">
              <img src={g3} alt="" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      {/* ── Three-column features ── */}
      <section className="svc-section svc-features-row" aria-labelledby="svc-features-title">
        <div className="svc-wrap svc-features-grid">
          <div className="svc-features-copy">
            <h2 id="svc-features-title" className="svc-h2">
              {overview?.heading}
            </h2>
            <ul className="svc-feature-list">
              {featureBullets.map((item, i) => {
                const [title, ...rest] = item.split(" — ");
                return (
                  <li key={i}>
                    <span className="svc-feature-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{title}</strong>
                      {rest.length > 0 && <span>{rest.join(" — ")}</span>}
                    </div>
                  </li>
                );
              })}
            </ul>
            <Link to="/book-trip" className="svc-btn svc-btn--green">
              Get started
            </Link>
          </div>

          <figure className="svc-img-frame svc-img-frame--portrait">
            <img src={g3} alt="" loading="lazy" />
            <figcaption className="svc-portrait-caption">
              <blockquote>&ldquo;Expert guidance at every step of your visa journey.&rdquo;</blockquote>
            </figcaption>
          </figure>

          <div className="svc-side-stack">
            <div className="svc-side-intro">
              <h3 className="svc-h3">{second?.heading ?? "What to expect"}</h3>
              <p>{second?.paragraphs?.[0] ?? current.menuDescription}</p>
            </div>
            <figure className="svc-thumb-card">
              <div className="svc-img-frame svc-img-frame--thumb">
                <img src={g4} alt="" loading="lazy" />
              </div>
              <span className="svc-tag">Guide</span>
              <figcaption>{current.toc?.[2]?.label ?? "Full process"}</figcaption>
            </figure>
            <figure className="svc-thumb-card">
              <div className="svc-img-frame svc-img-frame--thumb">
                <img src={g0} alt="" loading="lazy" />
              </div>
              <span className="svc-tag svc-tag--new">New</span>
              <figcaption>{current.toc?.[3]?.label ?? "Documents"}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Jump links ── */}
      {current.toc?.length > 0 && (
        <div className="svc-jump">
          <div className="svc-wrap svc-jump-inner">
            <span className="svc-jump-label">On this page</span>
            <nav className="svc-jump-links" aria-label="Page sections">
              {current.toc.map((item) => (
                <a href={`#${item.id}`} key={item.id}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* ── Detail sections ── */}
      <div className="svc-detail">
        <div className="svc-wrap svc-detail-grid">
          {current.sections.map((sec, idx) => (
            <article
              className={`svc-block${idx % 2 === 1 ? " svc-block--alt" : ""}`}
              id={sec.id}
              key={sec.id}
            >
              <div className="svc-block-head">
                <span className="svc-block-num">{String(idx + 1).padStart(2, "0")}</span>
                <h2 className="svc-h2 svc-block-title">{sec.heading}</h2>
              </div>
              <div className="svc-block-body">
                <SectionContent section={sec} />
              </div>
              {idx < gallery.length && (
                <figure className="svc-img-frame svc-block-photo">
                  <img src={gallery[idx % gallery.length]} alt="" loading="lazy" />
                </figure>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* ── Bottom band ── */}
      <section className="svc-section svc-bottom" aria-label="More services">
        <div className="svc-wrap">
          <div className="svc-bottom-hero">
            <figure className="svc-img-frame svc-bottom-photo">
              <img src={g1} alt="" loading="lazy" />
            </figure>
            <div className="svc-bottom-copy">
              <h2 className="svc-h2">Ready to start?</h2>
              <p>
                Book a consultation — we&apos;ll match you with the right service for your destination
                and timeline.
              </p>
              <Link to="/book-trip" className="svc-btn svc-btn--green">
                Book consultation
              </Link>
            </div>
          </div>

          <div className="svc-bottom-cards">
            {prev && (
              <Link to={`/services/${prev.slug}`} className="svc-mini-card">
                <div className="svc-img-frame svc-img-frame--card">
                  <img src={prev.heroImage} alt="" loading="lazy" />
                </div>
                <div>
                  <span className="svc-mini-kicker">Previous</span>
                  <strong>{prev.title}</strong>
                </div>
              </Link>
            )}
            {next && (
              <Link to={`/services/${next.slug}`} className="svc-mini-card">
                <div className="svc-img-frame svc-img-frame--card">
                  <img src={next.heroImage} alt="" loading="lazy" />
                </div>
                <div>
                  <span className="svc-mini-kicker">Next</span>
                  <strong>{next.title}</strong>
                </div>
              </Link>
            )}
            <Link to="/#services" className="svc-mini-card svc-mini-card--text">
              <div className="svc-img-frame svc-img-frame--card">
                <img src={g2} alt="" loading="lazy" />
              </div>
              <div>
                <span className="svc-mini-kicker">Explore</span>
                <strong>All services</strong>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="svc-disclaimer svc-wrap" role="note" aria-label="Disclaimer">
        <span aria-hidden="true">⚠</span>
        <div>
          <strong>Disclaimer</strong>
          <p>
            Visa requirements, fees, and processing times change without notice. Always confirm
            current rules with official embassy sources before applying.
          </p>
        </div>
      </section>
    </div>
  );
}
