import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function InvestorsSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "ZFT Group always maintains an honest, transparent and responsible attitude.",
  ];

  const leftParagraphs = [
    "We provide investors with clear investment return expectations and actively fulfill information disclosure obligations to ensure that investors' rights and interests are fully protected. At the same time, we also actively seek in-depth cooperation with investors to jointly promote the rapid development of the company.",
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
      className={`bottom-sheet-overlay investors-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet investors-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header investors-sheet-header">
          <h2 className="investors-sheet-title">
            <span className="investors-sheet-title-line">INVESTORS</span>
          </h2>
          <button
            className="bottom-sheet-close investors-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close investors"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="investors-content">
          <img
            className="investors-hero-image"
            src="/inpic.webp"
            width="4894"
            height="2743"
            alt="Investors overview"
          />

          <div
            ref={leadRef}
            className={`investors-lead investors-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="investors-line-wrap">
                <div
                  className="investors-line"
                  style={{ "--line-index": index }}
                >
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="investors-body-grid">
            <div className="investors-body-left">
              {leftParagraphs.map((paragraph, index) => (
                <p key={`left-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="investors-body-right">
              <img
                className="investors-side-image"
                src="/inpic1.webp"
                alt="Investors visual"
              />
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
