import { useEffect, useRef, useState } from "react";

export default function HistoryOfJeffel({ isVisible = false }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "Founded in 1998, the predecessor was Kaihua Membrane Technology Co., Ltd.,",
    "which was established by Singapore Kaifa.",
  ];

  const introLines = [
    "After more than 20 years, Jeffel has grown rapidly from a single membrane technology professional company to a technology product supplier that provides comprehensive solutions for water, reclaimed water reuse, wastewater treatment, and water purification.",
  ];

  const bodyParagraphs = [
    "We provide suitable high-value application solutions for water purification needs in different industries: a complete set of mature solution processes from demand analysis, operating condition analysis, solution design, product samples, test evaluation, technical standardization to installation and commissioning, efficiently solving problems and meeting significantly different customer needs.",
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
    <div className="hjf-template">
      <img
        className="hjf-template__hero-image"
        src="/hoj.webp"
        width="8001"
        height="3593"
        alt="History of Jeffel"
      />

      <div
        ref={leadRef}
        className={`hjf-template__lead hjf-template__lines ${hasLeadAnimated ? "is-visible" : ""}`}
      >
        {leadLines.map((line, index) => (
          <div key={`${line}-${index}`} className="hjf-template__line-wrap">
            <div
              className="hjf-template__line"
              style={{ "--line-index": index }}
            >
              {line}
            </div>
          </div>
        ))}
      </div>

      <img
        className="hjf-template__info-image"
        src="/hojinfo.webp"
        alt="Jeffel information"
      />

      <div className="hjf-template__intro hjf-template__lines hjf-template__lines-no-float is-visible">
        {introLines.map((line, index) => (
          <div key={`${line}-${index}`} className="hjf-template__line-wrap">
            <div
              className="hjf-template__line"
              style={{ "--line-index": index }}
            >
              {line}
            </div>
          </div>
        ))}
      </div>

      <div className="hjf-template__body hjf-template__lines hjf-template__lines-no-float is-visible">
        {bodyParagraphs.map((paragraph, index) => (
          <div
            key={`${paragraph}-${index}`}
            className="hjf-template__paragraph hjf-template__line-wrap"
          >
            <div
              className="hjf-template__line"
              style={{ "--line-index": index }}
            >
              {paragraph}
            </div>
          </div>
        ))}
      </div>

      <section className="hjf-template__chronicle">
        <h3 className="hjf-template__chronicle-title">Development History</h3>
        <img
          className="hjf-template__chronicle-image"
          src="/hojchronicle.webp"
          alt="Jeffel development history"
        />
      </section>
    </div>
  );
}
