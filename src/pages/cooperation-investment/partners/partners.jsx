import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function PartnersSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "Choosing ZFT Group means choosing a reliable partner with more than 30 years",
    "of filtration experience.",
  ];

  const leftParagraphs = [
    "ZFT Group focuses on establishing long-term and stable strategic partnerships with outstanding companies in and outside the industry. We are cooperating with leading companies in many fields in the world. Through strong alliances, we jointly develop the market, share resources and complement each other’s strengths. These partners not only enhance the market influence of ZFT Group, but also bring us more innovative ideas and business opportunities.",
  ];

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("body-no-scroll");
    setHasLeadAnimated(false);

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !leadRef.current || hasLeadAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasLeadAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(leadRef.current);
    return () => observer.disconnect();
  }, [isOpen, hasLeadAnimated]);

  return (
    <div
      className={`bottom-sheet-overlay partners-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet partners-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header partners-sheet-header">
          <h2 className="partners-sheet-title">
            <span className="partners-sheet-title-line">PARTNERS</span>
          </h2>
          <button
            className="bottom-sheet-close partners-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close partners"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="partners-content">
          <img
            className="partners-hero-image"
            src="/partnerspic.webp"
            width="8001"
            height="3593"
            alt="Partners overview"
          />

          <div
            ref={leadRef}
            className={`partners-lead partners-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="partners-line-wrap">
                <div
                  className="partners-line"
                  style={{ "--line-index": index }}
                >
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="partners-body-grid">
            <div className="partners-body-left">
              {leftParagraphs.map((paragraph, index) => (
                <p key={`left-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="partners-body-right">
              <img
                className="partners-side-image"
                src="/partnerspic1.webp"
                alt="Partners side visual"
              />
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
