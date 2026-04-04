import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/TourismPages.css";
import cliffs from "../assets/hero/cliffs.jpg";
import dublin from "../assets/hero/dublin.jpg";
import wild from "../assets/hero/wild.jpg";
import belfest from "../assets/hero/belfest.jpg";

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function GuideSection({ id, title, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`tig-section ${className}`.trim()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionFade}
    >
      <h2 className="tig-h2">{title}</h2>
      {children}
    </motion.section>
  );
}

export default function IrelandTourismGuide() {
  return (
    <div className="tourism-page tig-guide">
      <header className="tig-hero-mini">
        <div className="tig-hero-mini-inner">
          <div>
            <p className="til-kicker">🍀 Tourism in Ireland</p>
            <h1 className="tig-page-title">Your complete travel guide</h1>
            <p className="til-body tig-hero-lead">
              From the Cliffs of Moher to the streets of Dublin — everything you need to explore the Emerald Isle.
            </p>
            <Link to="/#tourism-ireland" className="tig-back">
              ← Back to home (travel guide)
            </Link>
          </div>
          <div className="tig-hero-mini-img">
            <img src={wild} alt="Irish landscape" />
          </div>
        </div>
      </header>

      <div className="tig-toc">
        <div className="tig-container">
          <p className="tig-toc-label">Jump to</p>
          <nav className="tig-toc-links" aria-label="Guide sections">
            <a href="#entry">Entry requirements</a>
            <a href="#destinations">Top destinations</a>
            <a href="#accommodation">Accommodation</a>
            <a href="#tours">Tours &amp; programs</a>
            <a href="#practical">Practical tips</a>
          </nav>
        </div>
      </div>

      <main className="tig-main tig-container">
        <GuideSection id="entry" title="1. Entry requirements">
          <p className="tig-p">
            Before setting off for Ireland, it is essential to understand the entry requirements for your nationality. Ireland is not part of the Schengen Area and operates its own visa policy.
          </p>

          <h3 className="tig-h3">Visa categories</h3>
          <p className="tig-p">Ireland offers several visitor visa types depending on the purpose and duration of your trip:</p>
          <ul className="tig-list">
            <li>
              <strong>Short Stay &apos;C&apos; Visa</strong> — Tourism, visiting family/friends (up to 90 days)
            </li>
            <li>
              <strong>Transit Visa</strong> — For passing through Ireland to another destination
            </li>
            <li>
              <strong>Long Stay &apos;D&apos; Visa</strong> — Stays exceeding 90 days
            </li>
          </ul>

          <h3 className="tig-h3">Visa-free countries</h3>
          <p className="tig-p">Citizens of the following groups typically do not require a visa for short stays in Ireland:</p>
          <div className="tig-table-wrap">
            <table className="tig-table">
              <thead>
                <tr>
                  <th>Country / region</th>
                  <th>Entry status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>European Union (EU)</td>
                  <td>All EU member states — visa-free entry</td>
                </tr>
                <tr>
                  <td>United Kingdom (UK)</td>
                  <td>Visa-free under the Common Travel Area (CTA)</td>
                </tr>
                <tr>
                  <td>United States &amp; Canada</td>
                  <td>Visa-free for stays up to 90 days</td>
                </tr>
                <tr>
                  <td>Australia &amp; New Zealand</td>
                  <td>Visa-free for tourist visits</td>
                </tr>
                <tr>
                  <td>Japan &amp; South Korea</td>
                  <td>Visa-free for short tourism stays</td>
                </tr>
                <tr>
                  <td>Other countries</td>
                  <td>Visa required — check the INIS website</td>
                </tr>
              </tbody>
            </table>
          </div>

          <aside className="tig-callout" role="note">
            <span className="tig-callout-icon" aria-hidden>
              💡
            </span>
            <div>
              <strong>Important note for Bangladeshi nationals</strong>
              <p className="tig-p tig-p-tight">
                Citizens of Bangladesh are required to apply for a Short Stay &apos;C&apos; Tourist Visa before travelling to Ireland. Applications must be submitted to the Irish Naturalisation and Immigration Service (INIS) online. The application fee is approximately €60. Processing time is typically 4–8 weeks, so apply well in advance of your intended travel date.
              </p>
            </div>
          </aside>

          <h3 className="tig-h3">Required documents for tourist visa</h3>
          <ul className="tig-list">
            <li>Valid passport (at least 6 months validity beyond intended stay)</li>
            <li>Completed online visa application form (AVATS)</li>
            <li>Two recent passport-sized photographs</li>
            <li>Travel itinerary and return flight bookings</li>
            <li>Proof of accommodation (hotel bookings or host invitation letter)</li>
            <li>Bank statements for the last 6 months showing sufficient funds</li>
            <li>Travel insurance covering the duration of the visit</li>
            <li>Employment letter / proof of leave approval</li>
          </ul>

          <div className="tig-table-wrap">
            <table className="tig-table">
              <tbody>
                <tr>
                  <th scope="row">Processing time</th>
                  <td>4–8 weeks (apply at least 2 months before travel)</td>
                </tr>
                <tr>
                  <th scope="row">Visa fee</th>
                  <td>€60 for single entry | €100 for multiple entry</td>
                </tr>
                <tr>
                  <th scope="row">Valid stay</th>
                  <td>Up to 90 days for tourist visa holders</td>
                </tr>
                <tr>
                  <th scope="row">Apply online</th>
                  <td>
                    <a href="https://www.visas.inis.gov.ie" target="_blank" rel="noopener noreferrer">
                      www.visas.inis.gov.ie
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </GuideSection>

        <div className="tig-inline-photos">
          <img src={cliffs} alt="Cliffs of Moher" />
          <img src={dublin} alt="Dublin" />
        </div>

        <GuideSection id="destinations" title="2. Top tourist destinations in Ireland">
          <p className="tig-p">
            Ireland offers an extraordinary variety of landscapes, history, and culture. From dramatic coastlines and ancient castles to vibrant cities, there is something for every traveller.
          </p>

          <h3 className="tig-h3">Dublin — the capital city</h3>
          <p className="tig-p">
            Ireland&apos;s capital is a thriving, walkable city brimming with history, culture, and world-class hospitality. Key attractions include:
          </p>
          <ul className="tig-list">
            <li>
              <strong>Trinity College Dublin</strong> — Home of the famous Book of Kells
            </li>
            <li>
              <strong>Dublin Castle</strong> — A landmark of Irish political history
            </li>
            <li>
              <strong>Guinness Storehouse</strong> — The most visited attraction in all of Ireland
            </li>
            <li>
              <strong>Temple Bar</strong> — A lively cultural quarter full of pubs, galleries and restaurants
            </li>
            <li>
              <strong>Phoenix Park</strong> — One of Europe&apos;s largest urban parks
            </li>
          </ul>

          <h3 className="tig-h3">The Wild Atlantic Way</h3>
          <p className="tig-p">
            The Wild Atlantic Way is the world&apos;s longest defined coastal driving route, stretching 2,500 km along Ireland&apos;s rugged west coast. Highlights include:
          </p>
          <ul className="tig-list">
            <li>
              <strong>Cliffs of Moher, Co. Clare</strong> — Towering sea cliffs rising 214 metres above the Atlantic
            </li>
            <li>
              <strong>Connemara National Park, Co. Galway</strong> — Stunning bogland, mountains, and lakes
            </li>
            <li>
              <strong>Skellig Michael, Co. Kerry</strong> — A UNESCO World Heritage Site and Star Wars filming location
            </li>
            <li>
              <strong>The Aran Islands</strong> — Remote islands with ancient stone forts and traditional culture
            </li>
          </ul>

          <h3 className="tig-h3">Other must-see destinations</h3>
          <div className="tig-table-wrap">
            <table className="tig-table">
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Why visit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Giant&apos;s Causeway, Co. Antrim</td>
                  <td>Unique hexagonal basalt columns — UNESCO Heritage Site</td>
                </tr>
                <tr>
                  <td>Ring of Kerry, Co. Kerry</td>
                  <td>Scenic 179 km circular driving route through spectacular landscapes</td>
                </tr>
                <tr>
                  <td>Kilkenny City</td>
                  <td>Ireland&apos;s medieval capital with a stunning castle and vibrant arts scene</td>
                </tr>
                <tr>
                  <td>Glendalough, Co. Wicklow</td>
                  <td>Ancient monastic settlement in a breathtaking glacial valley</td>
                </tr>
                <tr>
                  <td>Galway City</td>
                  <td>Colourful bohemian city famous for festivals, food, and the Gaeltacht</td>
                </tr>
                <tr>
                  <td>Rock of Cashel, Co. Tipperary</td>
                  <td>Dramatic medieval fortress and religious complex on a limestone outcrop</td>
                </tr>
              </tbody>
            </table>
          </div>
        </GuideSection>

        <GuideSection id="accommodation" title="3. Accommodation options" className="tig-section-with-img">
          <div className="tig-section-row">
            <div>
              <p className="tig-p">
                Ireland offers a wide variety of accommodation to suit all budgets and travel styles, from luxury five-star hotels to cosy traditional bed and breakfasts.
              </p>
              <h3 className="tig-h3">Types of accommodation</h3>
              <div className="tig-table-wrap">
                <table className="tig-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Details &amp; average cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Luxury hotels</td>
                      <td>5-star hotels in Dublin, Killarney, and Galway from €200+/night</td>
                    </tr>
                    <tr>
                      <td>Boutique hotels</td>
                      <td>Charming smaller hotels with local character from €100–€180/night</td>
                    </tr>
                    <tr>
                      <td>Bed &amp; Breakfast (B&amp;B)</td>
                      <td>Traditional Irish hospitality with home-cooked breakfast from €60–€100/night</td>
                    </tr>
                    <tr>
                      <td>Self-catering cottages</td>
                      <td>Ideal for families or longer stays; rural cottages from €70–€150/night</td>
                    </tr>
                    <tr>
                      <td>Hostels</td>
                      <td>Budget-friendly dormitory accommodation from €20–€40/night</td>
                    </tr>
                    <tr>
                      <td>Glamping &amp; camping</td>
                      <td>Eco-tourism options in scenic rural areas from €40–€90/night</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tig-side-img">
              <img src={belfest} alt="Irish city atmosphere" />
            </div>
          </div>

          <aside className="tig-callout tig-callout-soft" role="note">
            <span className="tig-callout-icon" aria-hidden>
              💡
            </span>
            <div>
              <strong>Booking tips</strong>
              <p className="tig-p tig-p-tight">
                Book accommodation well in advance — especially during peak season (June–August) and major events like St. Patrick&apos;s Day (17 March) or the Galway International Arts Festival. Use Booking.com, Airbnb, or ireland.com for verified listings.
              </p>
            </div>
          </aside>
        </GuideSection>

        <GuideSection id="tours" title="4. Tours & travel programs in Ireland">
          <p className="tig-p">
            Whether you prefer guided group tours, self-drive adventures, or bespoke private experiences, Ireland has an exceptional range of organised travel programs to choose from.
          </p>

          <h3 className="tig-h3">Guided tours</h3>
          <ul className="tig-list">
            <li>Wild Atlantic Way road trips — Escorted coach tours covering the western coastline</li>
            <li>Dublin city walking tours — Historical and literary tours of the capital</li>
            <li>Irish castles &amp; heritage tours — Multi-day tours of Ireland&apos;s ancient sites</li>
            <li>Ring of Kerry day tours — Departing daily from Killarney and Cork</li>
            <li>Whiskey &amp; food tours — Culinary experiences visiting Irish distilleries and farms</li>
          </ul>

          <h3 className="tig-h3">Adventure &amp; eco tourism</h3>
          <ul className="tig-list">
            <li>Sea kayaking and surfing along the Wild Atlantic Way</li>
            <li>Hiking in Wicklow Mountains and Connemara National Park</li>
            <li>Cycling tours on the Greenway trails in Mayo and Waterford</li>
            <li>Whale-watching and dolphin spotting in West Cork</li>
          </ul>

          <h3 className="tig-h3">Cultural immersion programs</h3>
          <p className="tig-p">Visitors keen to experience authentic Irish culture can participate in:</p>
          <ul className="tig-list">
            <li>Irish language (Gaeilge) immersion weekends in Connemara</li>
            <li>Traditional music sessions (Seisiún) in local pubs in Doolin, Galway, and Dingle</li>
            <li>GAA sports experience — Try Gaelic football or hurling at Croke Park</li>
            <li>Craft and heritage workshops — Pottery, weaving, and blacksmithing with local artisans</li>
          </ul>

          <aside className="tig-callout" role="note">
            <span className="tig-callout-icon" aria-hidden>
              💡
            </span>
            <div>
              <strong>Recommended tour operators</strong>
              <p className="tig-p tig-p-tight">
                Reputable operators include Overland Ireland, Paddywagon Tours, CIÉ Tours, and McCarthy&apos;s Party. Always book through licensed operators registered with Fáilte Ireland (Ireland&apos;s National Tourism Development Authority).
              </p>
            </div>
          </aside>
        </GuideSection>

        <GuideSection id="practical" title="5. Practical travel tips">
          <h3 className="tig-h3">Best time to visit</h3>
          <p className="tig-p">Ireland can be visited year-round, but each season offers a different experience:</p>
          <div className="tig-table-wrap">
            <table className="tig-table">
              <thead>
                <tr>
                  <th>Season</th>
                  <th>What to expect</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Spring (March–May)</td>
                  <td>Mild weather, fewer crowds, St. Patrick&apos;s Day celebrations (17 March)</td>
                </tr>
                <tr>
                  <td>Summer (June–August)</td>
                  <td>Warmest season (avg. 18°C), festivals, long daylight hours — book early!</td>
                </tr>
                <tr>
                  <td>Autumn (Sept–Nov)</td>
                  <td>Stunning foliage, fewer tourists, cosy pub atmosphere</td>
                </tr>
                <tr>
                  <td>Winter (Dec–Feb)</td>
                  <td>Coldest season but magical Christmas markets and festive atmosphere</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="tig-h3">Currency &amp; costs</h3>
          <div className="tig-table-wrap">
            <table className="tig-table">
              <tbody>
                <tr>
                  <th scope="row">Currency</th>
                  <td>Euro (€) — Republic of Ireland | Pound Sterling (£) — Northern Ireland</td>
                </tr>
                <tr>
                  <th scope="row">Daily budget</th>
                  <td>Budget: €60–€80 | Mid-range: €120–€180 | Luxury: €300+</td>
                </tr>
                <tr>
                  <th scope="row">Tipping</th>
                  <td>10–15% in restaurants; rounding up in taxis is appreciated</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="tig-h3">Getting around</h3>
          <ul className="tig-list">
            <li>
              <strong>Car hire</strong> — Recommended for rural areas; drive on the left side of the road
            </li>
            <li>
              <strong>Bus Éireann</strong> — National bus network covering most of Ireland
            </li>
            <li>
              <strong>Irish Rail (Iarnród Éireann)</strong> — Train services between major cities
            </li>
            <li>
              <strong>Dublin Bus &amp; Luas tram</strong> — Efficient city transport in the capital
            </li>
            <li>
              <strong>Taxi &amp; ride-sharing</strong> — FreeNow and Uber available in major cities
            </li>
          </ul>

          <h3 className="tig-h3">Health &amp; safety</h3>
          <ul className="tig-list">
            <li>Ireland has excellent healthcare; EU visitors should carry an EHIC card</li>
            <li>Non-EU visitors are strongly advised to purchase comprehensive travel insurance</li>
            <li>
              Emergency services: Dial <strong>999</strong> or <strong>112</strong> for Police, Fire, and Ambulance
            </li>
            <li>Ireland is generally very safe for tourists; exercise standard city awareness</li>
          </ul>

          <h3 className="tig-h3">Useful contacts</h3>
          <div className="tig-table-wrap">
            <table className="tig-table">
              <thead>
                <tr>
                  <th>Organisation</th>
                  <th>Contact / website</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tourism Ireland (official)</td>
                  <td>
                    <a href="https://www.ireland.com" target="_blank" rel="noopener noreferrer">
                      www.ireland.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Fáilte Ireland</td>
                  <td>
                    <a href="https://www.failteireland.ie" target="_blank" rel="noopener noreferrer">
                      www.failteireland.ie
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>INIS (visa applications)</td>
                  <td>
                    <a href="https://www.visas.inis.gov.ie" target="_blank" rel="noopener noreferrer">
                      www.visas.inis.gov.ie
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Irish Rail booking</td>
                  <td>
                    <a href="https://www.irishrail.ie" target="_blank" rel="noopener noreferrer">
                      www.irishrail.ie
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Bus Éireann</td>
                  <td>
                    <a href="https://www.buseireann.ie" target="_blank" rel="noopener noreferrer">
                      www.buseireann.ie
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Emergency services</td>
                  <td>999 or 112</td>
                </tr>
              </tbody>
            </table>
          </div>
        </GuideSection>

        <footer className="tig-closing">
          <p className="tig-closing-line">
            <strong>Céad Míle Fáilte</strong> — A hundred thousand welcomes!
          </p>
          <p className="tig-p tig-p-tight">
            Ireland awaits you. Plan ahead, embrace the unexpected, and enjoy every moment of the Emerald Isle.
          </p>
          <Link to="/#tourism-ireland" className="til-btn til-btn-outline tig-closing-btn">
            Back to home (travel guide)
          </Link>
        </footer>
      </main>
    </div>
  );
}
