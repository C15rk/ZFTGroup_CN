import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function CollaborationOpportunitiesSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "We actively seek opportunities to collaborate with parties who share our core",
    "values and high standards.",
  ];

  const leftParagraphs = [
    "Working with industry, university and research institutes provides development opportunities with our business partners, scientific research and industry’s associations& technology partners which advances accelerated developments of innovative products & solutions.",
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
      className={`bottom-sheet-overlay co-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet co-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header co-sheet-header">
          <h2 className="co-sheet-title">
            <span className="co-sheet-title-line">COLLABORATION</span>
            <span className="co-sheet-title-line">OPPORTUNITIES</span>
          </h2>
          <button
            className="bottom-sheet-close co-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close collaboration opportunities"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="co-content">
          <img
            className="co-hero-image"
            src="/copic.webp"
            width="8001"
            height="3594"
            alt="Collaboration opportunities overview"
          />

          <div
            ref={leadRef}
            className={`co-lead co-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="co-line-wrap">
                <div className="co-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="co-body-grid">
            <div className="co-body-left">
              {leftParagraphs.map((paragraph, index) => (
                <p key={`left-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="co-body-right">
              <img
                className="co-side-image"
                src="/copic1.webp"
                alt="Collaboration opportunities visual"
              />
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
