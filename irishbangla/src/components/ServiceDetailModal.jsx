import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ServiceDetailModal({ open, title, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="service-detail-root" role="dialog" aria-modal="true" aria-labelledby="service-detail-title">
      <button type="button" className="service-detail-backdrop" aria-label="Close details" onClick={onClose} />
      <div className="service-detail-panel">
        <div className="service-detail-panel-inner">
          <header className="service-detail-header">
            <h2 id="service-detail-title">{title}</h2>
            <button type="button" className="service-detail-close" onClick={onClose} aria-label="Close">
              <span aria-hidden>×</span>
            </button>
          </header>
          <div className="service-detail-scroll">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
