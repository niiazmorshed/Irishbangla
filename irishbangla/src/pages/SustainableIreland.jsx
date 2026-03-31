import { useEffect } from "react";
import "../styles/sustainableIreland.css";

import imgLocal from "../assets/hero/cliffs.jpg";
import imgTravel from "../assets/hero/belfest.jpg";
import imgNature from "../assets/hero/belfest.jpg";

export default function SustainableIreland() {
  // Scroll reveal
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="page-offset">
      {/* SECTION 1 */}
      <section className="editorial-section full">
        <div className="editorial-grid">
          <div className="editorial-text reveal left">
  <span className="section-eyebrow">SUSTAINABLE IRELAND</span>

  <h2>Live like a local</h2>

  <p className="dropcap">
    One of the best things you can do to stay sustainable is also one of the
    simplest: eat local.
  </p>

  <p>
    Ireland is famed for its exceptional food and drink culture, deeply rooted
    in community and tradition.
  </p>

  {/* STATS */}
  <div className="editorial-stats">
    <div>
      <strong>80%</strong>
      <span>Local produce</span>
    </div>
    <div>
      <strong>300+</strong>
      <span>Farmers markets</span>
    </div>
    <div>
      <strong>Low</strong>
      <span>Carbon footprint</span>
    </div>
  </div>

  {/* CTA */}
  <a href="#" className="editorial-link">
    Explore local experiences →
  </a>
          </div>


          <div className="editorial-image reveal right">
            <img src={imgLocal} alt="Live like a local" />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="editorial-section full alt">
        <div className="editorial-grid reverse">
          <div className="editorial-text reveal right">
            <h2>Travel mindfully</h2>
            <p className="dropcap">
                Sustainable travel in Ireland is easier than ever thanks to
                excellent public transport and compact cities.
              </p>

              <p>
                Trains and buses connect most regions, allowing visitors to move
                comfortably while significantly reducing carbon emissions.
              </p>

              <p>
                Walking and cycling are encouraged in towns and scenic areas,
                offering slower journeys that create deeper connections with
                the landscape and its people.
              </p>

              <ul className="editorial-points">
                <li>Well-connected rail and bus networks</li>
                <li>Cycle-friendly routes and greenways</li>
                <li>Reduced congestion and emissions</li>
              </ul>

              <div className="editorial-stats">
                <div>
                  <strong>50%</strong>
                  <span>Lower emissions</span>
                </div>
                <div>
                  <strong>1,000km+</strong>
                  <span>Greenways</span>
                </div>
              </div>
          </div>

          <div className="editorial-image reveal left">
            <img src={imgTravel} alt="Travel mindfully" />
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="editorial-section full">
        <div className="editorial-grid">
          <div className="editorial-text reveal left">
            <h2>Protect what you love</h2>
            <p className="dropcap">
                Ireland’s landscapes are breathtaking — from rugged coastlines
                to endless green fields.
              </p>

              <p>
                These natural spaces are protected through conservation
                initiatives that balance tourism with preservation.
              </p>

              <p>
                Simple actions such as staying on marked paths, respecting
                wildlife and reducing waste help maintain the integrity of these
                environments.
              </p>

              <ul className="editorial-points">
                <li>Leave no trace principles</li>
                <li>Protected parks and coastlines</li>
                <li>Community-led conservation</li>
              </ul>

              <div className="editorial-stats">
                <div>
                  <strong>6</strong>
                  <span>National parks</span>
                </div>
                <div>
                  <strong>30+</strong>
                  <span>Protected habitats</span>
                </div>
              </div>
          </div>

          <div className="editorial-image reveal right">
            <img src={imgNature} alt="Protect nature" />
          </div>
        </div>
      </section>
    </main>
  );
}
