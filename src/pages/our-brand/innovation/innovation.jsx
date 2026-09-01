import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function InnovationSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "Creativity is the key to the sustainable development of an enterprise.",
  ];

  const leftParagraphs = [
    "We focus on practical applications, problem solving techniques and creative thinking in order that our employees are able to give maximum contribution to the business and ultimately our customers. In order to develop these skills we have founded the ZFT College as a platform for learning and innovation. We regularly hold creative classes and brainstorming sessions to promote innovative thoughts and ideas.",
    "In terms of Product Lifecycle Management together with Industrial Engineering methods (PLM+IE) we have moved to IE3.0 and IE4.0 in order that we can provide customers with visible and available products under full life cycle management. We have established a project management organization and a “Lean Team” which is a cross functional group focussed on maximising value by eliminating waste, fostering agility and enhancing efficiency. This team promote process construction using the proven Japanese Kaizen principles of “change for the better”.",
    "During 2026, equipment will be upgraded to IE4.0+MES (Manufacturing Execution System) and further automation will be implemented to the Cambodia facility.",
    "We uphold the ideals of continual study and self-development, maintaining high morals, dedicated and enterprising, willing to take responsibility, courageous to innovate, offer sincere cooperation, remain people and relationship orientated.",
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
      className={`bottom-sheet-overlay innovation-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet innovation-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header innovation-sheet-header">
          <h2 className="innovation-sheet-title">
            <span className="innovation-sheet-title-line">INNOVATION</span>
          </h2>
          <button
            className="bottom-sheet-close innovation-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close innovation"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="innovation-content">
          <img
            className="innovation-hero-image"
            src="/innovationpic.webp"
            width="8001"
            height="3593"
            alt="Innovation overview"
          />

          <div
            ref={leadRef}
            className={`innovation-lead innovation-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="innovation-line-wrap">
                <div
                  className="innovation-line"
                  style={{ "--line-index": index }}
                >
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="innovation-body-grid">
            <div className="innovation-body-left">
              {leftParagraphs.map((paragraph, index) => (
                <p key={`left-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="innovation-body-right">
              <img
                className="innovation-side-image"
                src="/innovationpic1.webp"
                alt="Innovation side visual"
              />
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
