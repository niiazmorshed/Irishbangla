import { useMemo, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { getInformationTopic, informationTopics } from "../data/informationTopics";
import "../styles/InformationTopic.css";
import { ScrollReveal } from "../components/ScrollReveal";

function Disclaimer() {
  return (
    <section className="info-disclaimer" role="note" aria-label="Disclaimer">
      <div className="info-disclaimer-icon" aria-hidden="true">⚠</div>
      <div>
        <h3>Disclaimer</h3>
        <p>
          This information is provided for general guidance only. Requirements,
          fees, policies, and thresholds may change at any time according to Irish
          government rules and official sources.
        </p>
        <p className="info-disclaimer-muted">
          Always confirm details from official websites before making decisions.
        </p>
      </div>
    </section>
  );
}

function Table({ table }) {
  return (
    <div className="info-table-wrap" role="region" aria-label={table?.caption || "Table"}>
      <table className="info-table">
        <thead>
          <tr>
            {table.columns.map((c) => (
              <th scope="col" key={c}>{c}</th>
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

export default function InformationTopic() {
  const { topic } = useParams();
  const contentRef = useRef(null);
  const mobileNavRef = useRef(null);

  const current = useMemo(() => getInformationTopic(topic), [topic]);
  const currentIndex = useMemo(
    () => informationTopics.findIndex((t) => t.slug === topic),
    [topic]
  );

  // Scroll mobile nav tab into view when topic changes
  useEffect(() => {
    if (mobileNavRef.current && current) {
      const activeBtn = mobileNavRef.current.querySelector(".active");
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
    // Scroll content area to top on topic change
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [topic, current]);

  const SidebarTopicList = () => (
    <ul className="info-topic-list">
      {informationTopics.map((t) => {
        const TopicIcon = t.icon;
        const active = t.slug === (current?.slug ?? topic);
        return (
          <li key={t.slug}>
            <Link
              className={`info-topic-link${active ? " active" : ""}`}
              to={`/information/${t.slug}`}
            >
              <span className="info-topic-icon" aria-hidden="true">
                <TopicIcon />
              </span>
              <span className="info-topic-label">{t.title}</span>
              {active && <span className="info-topic-active-dot" aria-hidden="true" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  if (!current) {
    return (
      <ScrollReveal as="main" className="info-page" y={18}>
        <section className="info-hero info-hero--fallback">
          <div className="info-hero-inner">
            <p className="info-eyebrow">INFORMATION</p>
            <h1>Topic not found</h1>
            <p className="info-lead">
              The page you requested does not exist. Please choose a topic from
              the list below.
            </p>
          </div>
        </section>

        {/* Mobile tab navigation */}
        <nav className="info-mobile-nav" ref={mobileNavRef} aria-label="Topics">
          {informationTopics.map((t) => {
            const Icon = t.icon;
            return (
              <Link key={t.slug} className="info-mobile-tab" to={`/information/${t.slug}`}>
                <span className="info-mobile-tab-icon" aria-hidden="true"><Icon /></span>
                <span>{t.title}</span>
              </Link>
            );
          })}
        </nav>

        <section className="info-shell">
          <aside className="info-sidebar" aria-label="Topic navigation">
            <div className="info-sidebar-header">
              <span className="info-sidebar-dot" />
              <h2>Topics</h2>
            </div>
            <SidebarTopicList />
          </aside>
          <section className="info-content">
            <Disclaimer />
          </section>
        </section>
      </ScrollReveal>
    );
  }

  const Icon = current.icon;
  const prev = currentIndex > 0 ? informationTopics[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < informationTopics.length - 1
      ? informationTopics[currentIndex + 1]
      : null;

  return (
    <ScrollReveal as="main" className="info-page" y={18}>
      <section
        className="info-hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(10,92,77,0.93), rgba(10,92,77,0.58)), url(${current.heroImage})`,
        }}
      >
        <div className="info-hero-inner">
          <p className="info-eyebrow">INFORMATION</p>
          <h1>{current.title}</h1>
          <p className="info-lead">{current.lead}</p>
          <div className="info-hero-badges">
            <span className="info-badge">
              <span className="info-badge-icon" aria-hidden="true"><Icon /></span>
              Emerald Visa &amp; Tours
            </span>
            <span className="info-badge subtle">Ireland Complete Travel &amp; Immigration Guide</span>
          </div>
        </div>
      </section>

      {/* Mobile horizontal tab bar — always visible below hero */}
      <nav className="info-mobile-nav" ref={mobileNavRef} aria-label="Topics">
        {informationTopics.map((t) => {
          const TabIcon = t.icon;
          const active = t.slug === current.slug;
          return (
            <Link
              key={t.slug}
              className={`info-mobile-tab${active ? " active" : ""}`}
              to={`/information/${t.slug}`}
            >
              <span className="info-mobile-tab-icon" aria-hidden="true"><TabIcon /></span>
              <span>{t.title}</span>
            </Link>
          );
        })}
      </nav>

      <section className="info-shell">
        <aside className="info-sidebar" aria-label="Topic navigation">
          <div className="info-sidebar-header">
            <span className="info-sidebar-dot" />
            <h2>Topics</h2>
          </div>
          <SidebarTopicList />

          {current.sources?.length > 0 && (
            <div className="info-sources">
              <h3>Sources</h3>
              <ul>
                {current.sources.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        <section className="info-content" ref={contentRef}>
          {current.sections.map((sec) => (
            <article className="info-card" key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.table ? (
                <Table table={sec.table} />
              ) : (
                <ul className="info-bullets">
                  {sec.bullets?.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <div className="info-nav">
            {prev ? (
              <Link className="info-nav-link info-nav-link--prev" to={`/information/${prev.slug}`}>
                <span className="info-nav-arrow">←</span>
                <span>
                  <span className="info-nav-kicker">Previous</span>
                  <span className="info-nav-title">{prev.title}</span>
                </span>
              </Link>
            ) : <span />}

            {next ? (
              <Link className="info-nav-link info-nav-link--next" to={`/information/${next.slug}`}>
                <span>
                  <span className="info-nav-kicker">Next</span>
                  <span className="info-nav-title">{next.title}</span>
                </span>
                <span className="info-nav-arrow">→</span>
              </Link>
            ) : <span />}
          </div>

          <Disclaimer />
        </section>
      </section>
    </ScrollReveal>
  );
}