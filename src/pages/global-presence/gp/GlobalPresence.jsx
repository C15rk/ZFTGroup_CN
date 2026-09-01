import { useEffect } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function GlobalPresenceSheet({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("body-no-scroll");
    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  return (
    <div
      className={`bottom-sheet-overlay gp-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet gp-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header gp-sheet-header">
          <h2 className="gp-sheet-title">
            <span className="gp-sheet-title-line">GLOBAL</span>
            <span className="gp-sheet-title-line">PRESENCE</span>
          </h2>
          <button
            className="bottom-sheet-close gp-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close global presence"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="gp-content">
          <div className="gp-hero-wrap">
            <img
              className="gp-hero-image"
              src="/gppic.webp"
              alt="Global presence"
            />
          </div>
          <SiteFooter />
        </div>
      </section>
    </div>
  );
}
