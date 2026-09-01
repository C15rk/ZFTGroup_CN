import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function AtZFTGroupSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "Talent Strategy:",
    "Focus on value creators, build platforms, co-create",
    "the business, share value, recruit strategically,",
    "manage effectively, retain through incentives, and",
    "develop through performance.",
  ];

  const leftParagraphs = [
    "At ZFT Group we have designed a fair and well structured compensation system that fully provides employees with the benefits that reward success. Employees have the opportunity to participate in the company globalization program with multiple operational bases across USA, Europe, Middle East and Asia.",
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
      className={`bottom-sheet-overlay atzft-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet atzft-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header atzft-sheet-header">
          <h2 className="atzft-sheet-title">
            <span className="atzft-sheet-title-line">AT ZFT GROUP</span>
          </h2>
          <button
            className="bottom-sheet-close atzft-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close at ZFT group"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="atzft-content">
          <div
            ref={leadRef}
            className={`atzft-lead atzft-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="atzft-line-wrap">
                <div className="atzft-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="atzft-body-grid">
            <div className="atzft-body-left">
              {leftParagraphs.map((paragraph, index) => (
                <p key={`left-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="atzft-body-right">
              <img
                className="atzft-side-image"
                src="/azftg.webp"
                alt="At ZFT Group visual"
              />
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
