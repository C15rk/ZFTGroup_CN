import { useEffect, useRef, useState } from "react";

export default function HistoryOfCofon({ isVisible = false }) {
  const leadRef = useRef(null);
  const introRef = useRef(null);
  const bodyRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);
  const [hasIntroAnimated, setHasIntroAnimated] = useState(false);
  const [hasBodyAnimated, setHasBodyAnimated] = useState(false);

  const leadLines = [
    '"COFON" is a professional brand of environmental management materials.',
  ];

  const introLines = [
    "It originated from Tongxiang Jianmin Filter Material Co., Ltd., which has 30 years of experience in material manufacturing and specializes in research and development, industrial manufacturing, engineering application and market promotion of filtration, separation and purification materials.",
  ];

  const bodyParagraphs = [
    "Its products include electret melt-blown for air filtration, high-efficiency glass fiber paper special filter paper, PTFE (polytetrafluoroethylene) air filter membrane, PP (polypropylene) hollow fiber microfiltration membrane, PVDF (polyvinylidene fluoride) homogeneous ultrafiltration membrane, PVDF composite membrane, PES (polyethersulfone) homogeneous ultrafiltration membrane and other filter materials. Products have been sold to Europe, North America, Australia, Japan, South Korea, Taiwan and other regions.",
    "In the field of air filtration, COFON has an experimental center listed by the Filtration and Separation Technology Professional Committee (CFS) of the China Technology Market Association, and has established close cooperative relations with universities such as Hangzhou Dianzi University and South China University of Technology. It is in a leading position in China in the research of new materials and testing and evaluation levels.",
    'In the field of water treatment, relying on the "Membrane and Water Treatment Technology" Engineering Research Center of the Ministry of Education of Zhejiang University as its technical support, it is in a leading position in China in the research and development of membrane materials such as microfiltration, ultrafiltration, nanofiltration, and reverse osmosis.',
  ];

  useEffect(() => {
    if (!isVisible) {
      setHasLeadAnimated(false);
      setHasIntroAnimated(false);
      setHasBodyAnimated(false);
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

  useEffect(() => {
    if (!isVisible || !introRef.current || hasIntroAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasIntroAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(introRef.current);
    return () => observer.disconnect();
  }, [isVisible, hasIntroAnimated]);

  useEffect(() => {
    if (!isVisible || !bodyRef.current || hasBodyAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasBodyAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(bodyRef.current);
    return () => observer.disconnect();
  }, [isVisible, hasBodyAnimated]);

  return (
    <div className="hcf-template">
      <img
        className="hcf-template__hero-image"
        src="/hoc.webp"
        width="8001"
        height="3593"
        alt="History of Cofon"
      />

      <div
        ref={leadRef}
        className={`hcf-template__lead hcf-template__lines ${hasLeadAnimated ? "is-visible" : ""}`}
      >
        {leadLines.map((line, index) => (
          <div key={`${line}-${index}`} className="hcf-template__line-wrap">
            <div
              className="hcf-template__line"
              style={{ "--line-index": index }}
            >
              {line}
            </div>
          </div>
        ))}
      </div>

      <div
        ref={introRef}
        className={`hcf-template__intro hcf-template__lines hcf-template__lines-no-float ${hasIntroAnimated ? "is-visible" : ""}`}
      >
        {introLines.map((line, index) => (
          <div key={`${line}-${index}`} className="hcf-template__line-wrap">
            <div
              className="hcf-template__line"
              style={{ "--line-index": index }}
            >
              {line}
            </div>
          </div>
        ))}
      </div>

      <div
        ref={bodyRef}
        className={`hcf-template__body hcf-template__lines hcf-template__lines-no-float ${hasBodyAnimated ? "is-visible" : ""}`}
      >
        {bodyParagraphs.map((paragraph, index) => (
          <div
            key={`${paragraph}-${index}`}
            className="hcf-template__paragraph hcf-template__line-wrap"
          >
            <div
              className="hcf-template__line"
              style={{ "--line-index": index }}
            >
              {paragraph}
            </div>
          </div>
        ))}
      </div>

      <section className="hcf-template__chronicle">
        <h3 className="hcf-template__chronicle-title">Development History</h3>
        <img
          className="hcf-template__chronicle-image"
          src="/hocchronicle.webp"
          alt="Cofon development history"
        />
      </section>
    </div>
  );
}
