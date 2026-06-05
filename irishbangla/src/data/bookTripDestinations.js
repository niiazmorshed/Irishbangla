import { flagUrl } from "./irelandVisaGuide";

/** Destination countries offered for booking / visa services */
export const bookTripDestinations = [
  { code: "IE", name: "Ireland", lat: 53.4, lng: -8.2 },
  { code: "GB", name: "United Kingdom", lat: 54.5, lng: -3.0 },
  { code: "CA", name: "Canada", lat: 56.1, lng: -106.3 },
  { code: "US", name: "United States", lat: 39.8, lng: -98.6 },
  { code: "AU", name: "Australia", lat: -25.3, lng: 133.8 },
  { code: "DE", name: "Germany", lat: 51.2, lng: 10.5 },
  { code: "NL", name: "Netherlands", lat: 52.1, lng: 5.3 },
  { code: "NZ", name: "New Zealand", lat: -40.9, lng: 174.9 },
  { code: "AE", name: "United Arab Emirates", lat: 23.4, lng: 53.8 },
  { code: "FR", name: "France", lat: 46.6, lng: 2.2 },
];

export const bookTripOffice = {
  code: "BD",
  name: "Dhaka",
  lat: 23.79,
  lng: 90.41,
};

export function getDestination(code) {
  return bookTripDestinations.find((d) => d.code === code) ?? bookTripDestinations[0];
}

/**
 * High-resolution flag image. Uses FlagCDN vector SVGs so circular flags stay
 * crisp at any size / pixel density. Falls back to the shared `flagUrl` helper
 * only if a code is somehow missing.
 */
export function destinationFlagUrl(code) {
  const safeCode = typeof code === "string" ? code.trim() : "";
  if (safeCode) return `https://flagcdn.com/${safeCode.toLowerCase()}.svg`;

  const fallback = bookTripDestinations[0]?.code;
  return fallback ? `https://flagcdn.com/${fallback.toLowerCase()}.svg` : flagUrl("IE");
}

/** Convert lat/lng to a point on a unit sphere (Three.js Y-up). */
export function latLngToVector3(lat, lng, radius = 1) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}
