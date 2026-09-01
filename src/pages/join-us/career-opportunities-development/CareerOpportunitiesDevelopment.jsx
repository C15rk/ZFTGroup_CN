import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function CareerOpportunitiesDevelopmentSheet({
  isOpen,
  onClose,
}) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "Employee Code of Conduct:",
    "Respect the cause and pursue excellence.",
    "Be proactive and dedicated.",
    "Be diligent in learning and bold in competition.",
    "Uphold integrity and collaborate widely.",
    "Develop together and achieve brilliance collectively.",
    "Pursue truth and demonstrate virtue.",
  ];

  const leftParagraphs = [
    "At ZFT Group, we pay full attention to employees’ career paths and development journey. We implement a multi-channel development system, encourage job rotation to enhance skills comprehensively, and support healthy competition and promotion. Employees have ample autonomy and opportunities for targeted growth, allowing them to fully leverage their strengths.",
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
      className={`bottom-sheet-overlay cod-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet cod-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header cod-sheet-header">
          <h2 className="cod-sheet-title">
            <span className="cod-sheet-title-line">CAREER</span>
            <span className="cod-sheet-title-line">OPPORTUNITIES</span>
            <span className="cod-sheet-title-line">& DEVELOPMENT</span>
          </h2>
          <button
            className="bottom-sheet-close cod-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close career opportunities and development"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="cod-content">
          <div
            ref={leadRef}
            className={`cod-lead cod-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="cod-line-wrap">
                <div className="cod-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="cod-body-grid">
            <div className="cod-body-left">
              {leftParagraphs.map((paragraph, index) => (
                <p key={`left-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="cod-body-right">
              <img
                className="cod-side-image"
                src="/codpic.webp"
                alt="Career opportunities and development visual"
              />
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
