import { useEffect } from "react";
import SiteFooter from "../../components/layout/SiteFooter.jsx";

const certificateImages = [
  "/ccc1.webp",
  "/ccc2.webp",
  "/ccc3.webp",
  "/ccc4.webp",
  "/ccc5.webp",
  "/ccc6.webp",
  "/ccc7.webp",
  "/ccc8.webp",
  "/ccc9.webp",
  "/ccc10.webp",
  "/ccc11.webp",
  "/ccc12.webp",
];

export default function CorproateHonors({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("body-no-scroll");

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  return (
    <div
      className={`bottom-sheet-overlay corporate-honors-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet corporate-honors-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header corporate-honors-header">
          <h2 className="corporate-honors-title corporate-honors-title-bilingual">
            <span className="corporate-honors-title-cn">企业荣誉</span>
            <span
              className="corporate-honors-title-en"
              aria-label="Corporate Certification"
            >
              <span className="corporate-honors-title-line">CORPORATE</span>
              <span className="corporate-honors-title-line">CERTIFICATION</span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close corporate-honors-close"
            type="button"
            onClick={onClose}
            aria-label="Close corporate honors"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="corporate-honors-content">
          <img
            className="corporate-honors-hero-image"
            src="/cprhnr.webp"
            width="4000"
            height="1796"
            alt="Corporate honors overview"
          />

          <div className="corporate-honors-certificates">
            <div className="corporate-honors-divider" />
            <div className="corporate-honors-grid">
              {certificateImages.map((src, index) => (
                <img
                  key={src}
                  className="corporate-honors-grid-image"
                  src={src}
                  alt={`Corporate honors certificate ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
