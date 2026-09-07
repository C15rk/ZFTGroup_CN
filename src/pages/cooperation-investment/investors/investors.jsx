import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function InvestorsSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = ["朝晖股份始终保持着诚信、透明和负责任的态度。"];

  const leftParagraphs = [
    [
      "我们为投资者提供清晰的投资回报预",
      "期并积极履行信息披露义务，确保",
      "投资者的权益得到充分保障。同时，",
      "我们也积极寻求与投资者的深度合",
      "作，共同推动企业的快速发展。",
    ],
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
          <h2 className="investors-sheet-title investors-sheet-title-bilingual">
            <span className="investors-sheet-title-cn">投资者</span>
            <span className="investors-sheet-title-en" aria-label="Investors">
              <span className="investors-sheet-title-line">Investors</span>
              <span className="investors-sheet-title-line" aria-hidden="true">
                &nbsp;
              </span>
            </span>
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
              {leftParagraphs.map((paragraph, paragraphIndex) => (
                <div
                  key={`left-${paragraphIndex}`}
                  className="investors-paragraph"
                >
                  {paragraph.map((line, lineIndex) => (
                    <div
                      key={`${line}-${lineIndex}`}
                      className={
                        lineIndex === paragraph.length - 1
                          ? "investors-line-no-justify"
                          : undefined
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
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
