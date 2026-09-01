import { useEffect, useRef, useState } from "react";

export default function HistoryOfSeinfel({ isVisible = false }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "Seinfel is at the center of ZFT Group’s DNA for more than 30 years of technology",
    "and is committed to the development and manufacture of air filtration expertise.",
  ];

  const introLines = [
    "As an air filter brand under ZFT Group, we have all of ZFT’s significant experience in the filtration industry, and have the ability to independently develop, manufacture, and test air filter materials, manufacture and test air filter devices, and customize air filter system solutions.",
  ];

  const bodyParagraphs = [
    "Our products and services cover the entire range of air filter systems, including household, commercial and industrial air purification, floor cleaning filtration, automotive filtration, and environmentally friendly packaging products.",
    "We have a team of more than 100 professional R&D engineers providing customers with a wide range of purification solutions.",
  ];

  useEffect(() => {
    if (!isVisible) {
      setHasLeadAnimated(false);
      return;
    }

    if (!leadRef.current || hasLeadAnimated) return;
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
  }, [isVisible, hasLeadAnimated]);

  return (
    <div className="hsf-template">
      <img
        className="hsf-template__hero-image"
        src="/hos.webp"
        width="8001"
        height="3594"
        alt="History of Seinfel"
      />

      <div
        ref={leadRef}
        className={`hsf-template__lead hsf-template__lines ${hasLeadAnimated ? "is-visible" : ""}`}
      >
        {leadLines.map((line, index) => (
          <div key={`${line}-${index}`} className="hsf-template__line-wrap">
            <div
              className="hsf-template__line"
              style={{ "--line-index": index }}
            >
              {line}
            </div>
          </div>
        ))}
      </div>

      <img
        className="hsf-template__info-image"
        src="/hosinfo.webp?v=20260225"
        alt="Seinfel information"
      />

      <div className="hsf-template__intro">{introLines[0]}</div>

      <div className="hsf-template__body">
        {bodyParagraphs.map((paragraph, index) => (
          <div
            key={`${paragraph}-${index}`}
            className="hsf-template__paragraph"
          >
            {paragraph}
          </div>
        ))}
      </div>

      <section className="hsf-template__chronicle">
        <h3 className="hsf-template__chronicle-title">Development History</h3>
        <img
          className="hsf-template__chronicle-image"
          src="/hoschronicle.webp"
          alt="Seinfel development history"
        />
      </section>
    </div>
  );
}
