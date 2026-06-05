import { useEffect, useRef, useState } from "react";
import { destinationFlagUrl } from "../data/bookTripDestinations";

const EARTH_MAP =
  "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg";

const GLOBE_PX = 124;
/**
 * Fixed longitude rotation (radians). Tuned so Europe / South Asia land sits
 * beneath the orbiting flags and the office + destination pins.
 */
const FIXED_ROTATION = 1.52;
/** Extra texture shift (0–1 wrap) — fine-tunes map under markers */
const MAP_LNG_SHIFT = 0.30;

/** Approximate marker positions on the globe (% of ball area). */
const OFFICE_SPOT = { x: 62, y: 55 };

const DESTINATION_SPOTS = {
  IE: { x: 44, y: 35 },
  GB: { x: 46, y: 33 },
  CA: { x: 30, y: 32 },
  US: { x: 26, y: 40 },
  AU: { x: 72, y: 62 },
  DE: { x: 48, y: 34 },
  NL: { x: 47, y: 33 },
  NZ: { x: 76, y: 66 },
  AE: { x: 58, y: 49 },
  FR: { x: 45, y: 34 },
};

function getDestSpot(code) {
  return DESTINATION_SPOTS[code] ?? { x: 45, y: 34 };
}

function pctToPx(pct, size) {
  return (pct / 100) * size;
}

/** Curved route path between two points (quadratic bezier bulging over the sphere). */
function buildRoutePath(x1, y1, x2, y2) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const cx = mx - dy * 0.22;
  const cy = my + dx * 0.22 - Math.hypot(dx, dy) * 0.12;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

function buildMatteTexture(img) {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imageData;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = r * 0.299 + g * 0.587 + b * 0.114;
    /* Blue-marble oceans are dark blue — NOT low-lum land */
    const isOcean = b > r + 10 && b > g - 5;

    if (isOcean) {
      /* Pure white ocean */
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    } else {
      /* Medium-dark grey land — mockup contrast against white ocean */
      const land = Math.max(105, Math.min(125, 112 + (128 - lum) * 0.08));
      data[i] = land;
      data[i + 1] = land;
      data[i + 2] = land;
    }
  }

  return { data, width: canvas.width, height: canvas.height };
}

function sampleTexture(texture, u, v) {
  const x = Math.min(texture.width - 1, Math.max(0, Math.floor(u * texture.width)));
  const y = Math.min(texture.height - 1, Math.max(0, Math.floor(v * texture.height)));
  const i = (y * texture.width + x) * 4;
  return [texture.data[i], texture.data[i + 1], texture.data[i + 2]];
}

function drawSphere(ctx, texture, size, rotationY) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 1;
  const imageData = ctx.createImageData(size, size);
  const out = imageData.data;

  const cosR = Math.cos(rotationY);
  const sinR = Math.sin(rotationY);
  const lx = 0.3;
  const ly = 0.5;
  const lz = 0.9;
  const lLen = Math.hypot(lx, ly, lz);

  for (let py = 0; py < size; py += 1) {
    for (let px = 0; px < size; px += 1) {
      const dx = (px - cx) / radius;
      const dy = -(py - cy) / radius;
      const i = (py * size + px) * 4;

      if (dx * dx + dy * dy > 1) {
        out[i + 3] = 0;
        continue;
      }

      const nz = Math.sqrt(1 - dx * dx - dy * dy);
      const rx = dx * cosR - nz * sinR;
      const rz = dx * sinR + nz * cosR;
      const ry = dy;

      let lng = Math.atan2(rz, -rx);
      if (lng < 0) lng += Math.PI * 2;
      const lat = Math.asin(Math.max(-1, Math.min(1, ry)));
      let u = lng / (Math.PI * 2) + MAP_LNG_SHIFT;
      u -= Math.floor(u);
      const v = 0.5 - lat / Math.PI;

      const [r, g, b] = sampleTexture(texture, u, v);
      const isOcean = r > 240 && g > 240 && b > 240;
      const ndotl = (dx * lx + dy * ly + nz * lz) / lLen;

      if (isOcean) {
        /* Keep ocean white — only a whisper of sphere shading */
        const shade = 0.98 + 0.02 * ndotl;
        const white = Math.round(255 * shade);
        out[i] = white;
        out[i + 1] = white;
        out[i + 2] = white;
      } else {
        const diffuse = 0.9 + 0.1 * ndotl;
        out[i] = Math.min(255, Math.round(r * diffuse));
        out[i + 1] = Math.min(255, Math.round(g * diffuse));
        out[i + 2] = Math.min(255, Math.round(b * diffuse));
      }
      out[i + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

export default function BookTripGlobe({ countries, selectedCode }) {
  const orbitCountries = countries.slice(0, 10);
  const destSpot = getDestSpot(selectedCode);

  const canvasRef = useRef(null);
  const textureRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  const officeX = pctToPx(OFFICE_SPOT.x, GLOBE_PX);
  const officeY = pctToPx(OFFICE_SPOT.y, GLOBE_PX);
  const destX = pctToPx(destSpot.x, GLOBE_PX);
  const destY = pctToPx(destSpot.y, GLOBE_PX);
  const routePath = buildRoutePath(officeX, officeY, destX, destY);

  useEffect(() => {
    let active = true;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (!active) return;
      textureRef.current = buildMatteTexture(img);
      setMapReady(true);
    };
    img.src = EARTH_MAP;
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!mapReady || !canvasRef.current || !textureRef.current) return;

    const canvas = canvasRef.current;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = Math.round(GLOBE_PX * dpr);
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    drawSphere(ctx, textureRef.current, size, FIXED_ROTATION);
  }, [mapReady]);

  return (
    <div className="booktrip-globe" aria-hidden="true">
      <div className="booktrip-globe__stage">
        <div className="booktrip-globe__orbit">
          <span className="booktrip-globe__ring" />
          <ul className="booktrip-globe__flags">
            {orbitCountries.map((country, index) => (
              <li
                key={country.code}
                className={country.code === selectedCode ? "is-active" : ""}
                style={{
                  "--orbit-index": index,
                  "--orbit-count": orbitCountries.length,
                }}
              >
                <img
                  src={destinationFlagUrl(country.code)}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="booktrip-globe__ball-wrap">
          <div className="booktrip-globe__ball">
            <canvas ref={canvasRef} className="booktrip-globe__canvas" />
            <div className="booktrip-globe__shade" />
            <div className="booktrip-globe__highlight" />
          </div>

          <svg
            className="booktrip-globe__route"
            viewBox={`0 0 ${GLOBE_PX} ${GLOBE_PX}`}
            preserveAspectRatio="xMidYMid meet"
          >
            <path className="booktrip-globe__route-glow" d={routePath} />
            <path className="booktrip-globe__route-line" d={routePath} />
          </svg>

          <div
            className="booktrip-globe__pin booktrip-globe__pin--office"
            style={{ left: `${OFFICE_SPOT.x}%`, top: `${OFFICE_SPOT.y}%` }}
          >
            <span className="booktrip-globe__pulse" />
            <span className="booktrip-globe__dot" />
          </div>

          <div
            className="booktrip-globe__pin booktrip-globe__pin--dest"
            style={{ left: `${destSpot.x}%`, top: `${destSpot.y}%` }}
          >
            <span className="booktrip-globe__pin-stem" />
            <img
              src={destinationFlagUrl(selectedCode)}
              alt=""
              width={22}
              height={22}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
