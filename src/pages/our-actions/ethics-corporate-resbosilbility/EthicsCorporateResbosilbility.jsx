import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function EthicsCorporateResbosilbility({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "Ethics and corporate responsibility complement each other in ZFT Group’s",
    "practices, together forming the core values and code of conduct that guide the",
    "company’s development.",
  ];

  const leftParagraphs = [
    "ZFT Group places great emphasis on balancing the interests of all parties to achieve mutual benefit. Even when facing special periods or unusual circumstances, we remain committed to fair transactions and to respecting the rights and interests of our partners, working together to promote the healthy development of the industry. At the same time, we also focus on environmental protection and sustainable development, striving to reduce energy consumption and emissions during production in order to achieve both economic and environmental benefits. We will continue to uphold our moral bottom line and fulfill the responsibilities that an environmental technology enterprise should undertake, creating greater value for society, customers, and employees, and realizing the sustainable development of the company.",
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
      className={`bottom-sheet-overlay ecr-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet ecr-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header ecr-sheet-header">
          <h2 className="ecr-sheet-title">
            <span className="ecr-sheet-title-line">ETHICS</span>
            <span className="ecr-sheet-title-line">& CORPORATE</span>
            <span className="ecr-sheet-title-line">RESPONSIBILITY</span>
          </h2>
          <button
            className="bottom-sheet-close ecr-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close ethics and corporate responsibility"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="ecr-content">
          <img
            className="ecr-hero-image"
            src="/ecrpic.webp"
            width="8001"
            height="3593"
            alt="Ethics and corporate responsibility overview"
          />

          <div
            ref={leadRef}
            className={`ecr-lead ecr-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="ecr-line-wrap">
                <div className="ecr-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="ecr-body-grid">
            <div className="ecr-body-left">
              {leftParagraphs.map((paragraph, index) => (
                <p key={`left-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="ecr-body-right">
              <img
                className="ecr-side-image"
                src="/ecrpic1.webp"
                alt="Ethics and corporate responsibility visual"
              />
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
