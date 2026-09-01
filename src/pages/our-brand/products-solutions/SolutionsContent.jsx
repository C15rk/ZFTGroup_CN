import { useEffect, useRef, useState } from "react";

export default function SolutionsContent({ isVisible = false }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "Relying on the four brands of SEINFEL, JEFFEL, COFON and REFFECO,",
    "we have mature product systems in the fields of gas filtration, liquid filtration",
    "and filtration materials, and are applied to home appliances, commercial,",
    "clean, automotive, municipal and other fields.",
  ];

  const leftParagraphs = [
    "We can provide customers with special, environmentally friendly, low-cost filtration, environmentally friendly packaging products and even filter devices and filtration solutions from raw materials such as kapok materials, PP, PTFE, PET, PES;",
    "We can provide customers with industrial and domestic water purification and filtration solutions from raw materials such as carbon, PP, ecological minerals, RO;",
    "We can provide customers with integrated solutions for the design and development of special equipment from process to production, as well as molds and non-standard equipment;",
  ];

  const rightParagraphs = [
    "We provide customers with a sound enterprise standard system and product testing and evaluation system, and use global standards to provide authoritative measurement and analysis reports on materials and products, and supervise and monitor the products we provide to customers and a series of guarantee services.",
    "We can provide customers with synchronous design and development personnel on-site services at the customer site to shorten the communication and design problem solving cycle with customers.",
    "We can provide limited authorized project manager management services, with values: customer first, leadership, innovation and excellence, integrity and ethics.",
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
    <div className="ps-solutions-content">
      <img
        className="ps-solutions-hero"
        src="/pspic.webp"
        width="8001"
        height="3594"
        alt="Solutions overview"
      />

      <div
        ref={leadRef}
        className={`ps-solutions-lead ps-solutions-lines ${hasLeadAnimated ? "is-visible" : ""}`}
      >
        {leadLines.map((line, index) => (
          <div key={`${line}-${index}`} className="ps-solutions-line-wrap">
            <div
              className="ps-solutions-line"
              style={{ "--line-index": index }}
            >
              {line}
            </div>
          </div>
        ))}
      </div>

      <img
        className="ps-solutions-info"
        src="/pspicinfo.webp"
        alt="Solutions info chart"
      />

      <h3 className="ps-solutions-title">What We Can Do</h3>

      <div className="ps-solutions-body-grid">
        <div className="ps-solutions-col">
          {leftParagraphs.map((paragraph, index) => (
            <p key={`left-${index}`}>
              <span className="ps-solutions-dot" />
              <span>{paragraph}</span>
            </p>
          ))}
        </div>
        <div className="ps-solutions-col">
          {rightParagraphs.map((paragraph, index) => (
            <p key={`right-${index}`}>
              <span className="ps-solutions-dot" />
              <span>{paragraph}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
