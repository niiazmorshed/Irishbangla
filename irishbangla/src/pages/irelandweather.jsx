import React from "react";
import "../styles/irelandWeather.css";

import imgRain from "../assets/hero/rainy.jpg";
import imgSummer from "../assets/hero/summer.jpg";
import imgMood1 from "../assets/hero/mood1.jpg";
import imgMood2 from "../assets/hero/mood2.jpg";
import imgMood3 from "../assets/hero/mood3.jpg";

export default function IrelandWeather() {
  return (
    <>
      {/* SECTION 1 – RAINY MODE (IMAGE RIGHT) */}
      <section className="editorial-section full-screen fade-in">
        <div className="editorial-grid image-right">
          <div className="editorial-text">
            <h2>Ireland is always ON mode</h2>
            <p className="dropcap">
              Rain is not a season in Ireland — it’s a lifestyle. Light drizzles,
              sudden showers, and misty skies keep the country fresh, green, and
              alive throughout the year.
            </p>
            <p>
              Instead of slowing life down, rain powers it. Streets stay busy,
              cafés stay warm, and nature stays vibrant. A rain jacket is all
              you need to keep moving.
            </p>
            <p>
              In Ireland, plans don’t get cancelled because of rain — they adapt.
              Because Ireland never switches off.
            </p>
          </div>
          <div className="editorial-image">
            <img src={imgRain} alt="Rainy Ireland landscape" />
          </div>
        </div>
      </section>

      {/* SECTION 2 – SUMMER MODE (IMAGE LEFT) */}
      <section className="editorial-section full-screen fade-in">
        <div className="editorial-grid image-left">
          <div className="editorial-image">
            <img src={imgSummer} alt="Irish summer weather" />
          </div>
          <div className="editorial-text">
            <h2>Soft sunshine & long days</h2>
            <p className="dropcap">
              When the sun comes out in Ireland, it feels like a celebration.
              Summers are mild, comfortable, and full of long daylight hours.
            </p>
            <p>
              Sunshine appears unexpectedly, often followed by light rain —
              creating rainbows, dramatic skies, and perfect travel moments.
            </p>
            <p>
              It’s the best time for festivals, coastal drives, countryside
              walks, and late evenings outdoors.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 – WEATHER MOODS COLLAGE */}
      <section className="editorial-section full-screen fade-in">
        <div className="editorial-grid">
          <div className="editorial-text">
            <h2>Every season, a different mood</h2>
            <p className="dropcap">
              Ireland’s weather changes fast — sometimes in a single hour. Each
              season brings its own rhythm, colour, and charm.
            </p>
            <p>
              Spring feels fresh and hopeful. Autumn turns poetic and moody.
              Winter stays calm, cozy, and quiet — perfect for warm pubs and
              foggy mornings.
            </p>
            <p>
              No matter the season, Ireland keeps moving — alive, welcoming, and
              always ON mode.
            </p>
          </div>
          <div className="image-collage">
            <img src={imgMood1} alt="Irish spring weather" />
            <img src={imgMood2} alt="Irish autumn weather" />
            <img src={imgMood3} alt="Irish winter weather" />
          </div>
        </div>
      </section>
    </>
  );
}
