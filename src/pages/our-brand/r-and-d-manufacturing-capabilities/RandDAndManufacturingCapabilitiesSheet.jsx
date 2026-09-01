import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function RandDAndManufacturingCapabilitiesSheet({
  isOpen,
  onClose,
}) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);
  const leadLines = [
    "We have the ability to develop, design and manufacture the entire chain of filter",
    "materials and applications, which is rare in the world.",
  ];

  const introText =
    "It originated from Tongxiang Jianmin Filter Material Co., Ltd., which has 30 years of experience in material manufacturing and specializes in research and development, industrial manufacturing, engineering application and market promotion of filtration, separation and purification materials.";

  const bodyParagraphs = [
    "We have a research and development team of more than 100 people and more than 30 years of industry experience, which supports us to continuously iterate and innovate in products and systems and keep moving forward in technology.",
    "In terms of global layout, we have established manufacturing bases covering Cambodia, China and Malaysia with a total area of more than 180,000 square meters, equipped with more than 100 automated production lines. This powerful manufacturing network not only ensures the maximum release of production capacity, but also ensures the smooth delivery of orders worldwide.",
    "In terms of technical equipment, the equipment used is mainly domestic and Japanese high-end, ensuring the efficiency and accuracy of the production process. We provide a PLM system for full life cycle management, covering all aspects of device design, development, manufacturing and testing to meet the diverse needs of global customers.",
    "At the same time, we have built our own physical, chemical, reliability and environmental assessment laboratories with CNAS qualifications, and introduced advanced LIMS management systems to ensure the accuracy and traceability of test data.",
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
      className={`bottom-sheet-overlay rdmc-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet rdmc-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header rdmc-sheet-header">
          <h2 className="rdmc-sheet-title">
            <span className="rdmc-sheet-title-line">R&D AND</span>
            <span className="rdmc-sheet-title-line">MANUFACTURING</span>
            <span className="rdmc-sheet-title-line">CAPABILITIES</span>
          </h2>
          <button
            className="bottom-sheet-close rdmc-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close R&D and manufacturing capabilities"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>
        <div className="rdmc-sheet-content">
          <img
            className="rdmc-hero-image"
            src="/rdamcpic.webp"
            width="8001"
            height="3593"
            alt="R&D and manufacturing capabilities"
          />

          <div
            ref={leadRef}
            className={`rdmc-lead rdmc-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="rdmc-line-wrap">
                <div className="rdmc-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="rdmc-split-grid">
            <div className="rdmc-split-left">
              <p>{introText}</p>
            </div>
            <div className="rdmc-split-right">
              <img
                className="rdmc-info-image"
                src="/rdamcinfo.webp?v=20260225"
                alt="R&D capability overview"
              />
            </div>
          </div>

          <div
            className="rdmc-photo-grid"
            aria-label="R&D manufacturing gallery"
          >
            <img src="/rdamcpic1.webp" alt="R&D manufacturing 1" />
            <img src="/rdamcpic2.webp" alt="R&D manufacturing 2" />
            <img src="/rdamcpic3.webp" alt="R&D manufacturing 3" />
            <img src="/rdamcpic4.webp" alt="R&D manufacturing 4" />
          </div>

          <div className="rdmc-body-copy">
            {bodyParagraphs.map((paragraph, index) => (
              <p key={`${paragraph}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
