import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getInformationTopic, informationTopics } from "../data/informationTopics";
import "../styles/InformationTopic.css";

function Disclaimer() {
  return (
    <section className="info-disclaimer" role="note" aria-label="Disclaimer">
      <h3>Disclaimer</h3>
      <p>
        This information is provided for general guidance only. Requirements,
        fees, policies, and thresholds may change at any time according to Irish
        government rules and official sources.
      </p>
      <p className="info-disclaimer-muted">
        Always confirm details from official websites before making decisions.
      </p>
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

export default function InformationTopic() {
  const { topic } = useParams();

  const current = useMemo(() => getInformationTopic(topic), [topic]);
  const currentIndex = useMemo(
    () => informationTopics.findIndex((t) => t.slug === topic),
    [topic]
  );

  if (!current) {
    return (
      <main className="info-page">
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

        <section className="info-shell">
          <aside className="info-sidebar">
            <h2>Topics</h2>
            <ul className="info-topic-list">
              {informationTopics.map((t) => {
                const Icon = t.icon;
                return (
                  <li key={t.slug}>
                    <Link className="info-topic-link" to={`/information/${t.slug}`}>
                      <span className="info-topic-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span>{t.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
          <section className="info-content">
            <Disclaimer />
          </section>
        </section>
      </main>
    );
  }

  const Icon = current.icon;
  const prev = currentIndex > 0 ? informationTopics[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < informationTopics.length - 1
      ? informationTopics[currentIndex + 1]
      : null;

  return (
    <main className="info-page">
      <section
        className="info-hero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(10,92,77,0.92), rgba(10,92,77,0.55)), url(${current.heroImage})`,
        }}
      >
        <div className="info-hero-inner">
          <p className="info-eyebrow">INFORMATION</p>
          <h1>{current.title}</h1>
          <p className="info-lead">{current.lead}</p>

          <div className="info-hero-badges">
            <span className="info-badge">
              <span className="info-badge-icon" aria-hidden="true">
                <Icon />
              </span>
              Emerald Visa & Tours
            </span>
            <span className="info-badge subtle">Ireland Complete Travel & Immigration Guide</span>
          </div>
        </div>
      </section>

      <section className="info-shell">
        <aside className="info-sidebar">
          <h2>Topics</h2>
          <ul className="info-topic-list">
            {informationTopics.map((t) => {
              const TopicIcon = t.icon;
              const active = t.slug === current.slug;
              return (
                <li key={t.slug}>
                  <Link
                    className={`info-topic-link ${active ? "active" : ""}`}
                    to={`/information/${t.slug}`}
                  >
                    <span className="info-topic-icon" aria-hidden="true">
                      <TopicIcon />
                    </span>
                    <span>{t.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="info-sources">
            <h3>Sources</h3>
            <ul>
              {current.sources?.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="info-content">
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
              <Link className="info-nav-link" to={`/information/${prev.slug}`}>
                <span className="info-nav-kicker">Previous</span>
                <span className="info-nav-title">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link className="info-nav-link" to={`/information/${next.slug}`}>
                <span className="info-nav-kicker">Next</span>
                <span className="info-nav-title">{next.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </div>

          <Disclaimer />
        </section>
      </section>
    </main>
  );
}

