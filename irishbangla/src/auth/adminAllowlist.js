/**
 * Comma-separated list in VITE_ADMIN_ALLOWED_EMAILS (e.g. "a@x.com,b@y.com").
 * Falls back to the primary operations inbox if unset.
 */
export function getAdminAllowedEmails() {
  const raw = import.meta.env.VITE_ADMIN_ALLOWED_EMAILS;
  const fallback = "fineanswer2025@gmail.com";
  if (!raw || typeof raw !== "string") {
    return [fallback.trim().toLowerCase()];
  }
  return raw
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export function isEmailAllowedForAdmin(email) {
  if (!email || typeof email !== "string") return false;
  const list = getAdminAllowedEmails();
  return list.includes(email.trim().toLowerCase());
}
