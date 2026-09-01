import { useEffect, useRef, useState } from "react";

export default function HistoryOfZftGroup({ isVisible = false }) {
  const introRef = useRef(null);
  const compareRef = useRef(null);
  const [hasIntroAnimated, setHasIntroAnimated] = useState(false);
  const [hasCompareAnimated, setHasCompareAnimated] = useState(false);
  const historyLines = [
    // "ZFT Group was founded in 1993. We started with air filtration. After more than 30 years of development, we have formed four major businesses, air filtration, water filtration, filter material research and development, production and integrated application and a range of eco friendly bio-degradable packaging materials.",
  ];
  const detailLinesIntro = ["We service multiple industries worldwide."];
  const detailLinesIndustries = [
    "Cofon (filter materials), Seinfel (air filtration), Jeffel (water filtration), Reffeco (environmentally friendly packaging material), covering filter materials, vacuum cleaner filter accessories, air purification systems, automotive filters, household and commercial water purification systems, industrial water and air treatment systems, environmentally friendly packaging.",
  ];
  const detailLinesPartTwo = [
    "Today, our customers are spread across more than 40 countries in the world and our commitment to continued product development continues to open up more new markets for the brands of ZFT Group.",
  ];
  const compareLines = [
    "ZFT Group was founded in 1993. We started with air filtration.",
    "After more than 30 years of development, we have formed four major businesses,",
    "air filtration, water filtration, filter material research and development,",
    "production and integrated application and a range of eco friendly",
    "bio-degradable packaging materials.",
  ];

  useEffect(() => {
    if (!isVisible) {
      setHasIntroAnimated(false);
      setHasCompareAnimated(false);
      return;
    }

    if (!introRef.current || hasIntroAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasIntroAnimated(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(introRef.current);
    return () => observer.disconnect();
  }, [isVisible, hasIntroAnimated]);

  useEffect(() => {
    if (!isVisible || !compareRef.current || hasCompareAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasCompareAnimated(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(compareRef.current);
    return () => observer.disconnect();
  }, [isVisible, hasCompareAnimated]);

  return (
    <div className="hzg-template">
      <img
        className="hzg-template__hero-image"
        src="/hozg.webp"
        width="8001"
        height="3593"
        alt="History of ZFT Group"
      />
      <div
        ref={compareRef}
        className={`hzg-template__compare hzg-template__lines ${hasCompareAnimated ? "is-visible" : ""}`}
      >
        {compareLines.map((line, index) => (
          <div key={line} className="hzg-template__line-wrap">
            <div
              className="hzg-template__line"
              style={{ "--line-index": index }}
            >
              {line}
            </div>
          </div>
        ))}
      </div>
      <div
        ref={introRef}
        className={`hzg-template__intro hzg-template__lines ${hasIntroAnimated ? "is-visible" : ""}`}
      >
        {historyLines.map((line, index) => (
          <div key={line} className="hzg-template__line-wrap">
            <div
              className="hzg-template__line"
              style={{ "--line-index": index }}
            >
              {line}
            </div>
          </div>
        ))}
      </div>
      <div className="hzg-template__content-grid">
        <div className="hzg-template__left hzg-template__lines hzg-template__lines-no-float">
          <div className="hzg-template__lead">
            {detailLinesIntro.map((line, index) => (
              <div key={`${line}-${index}`} className="hzg-template__line-wrap">
                <div
                  className="hzg-template__line"
                  style={{ "--line-index": index }}
                >
                  {line}
                </div>
              </div>
            ))}
          </div>
          <div className="hzg-template__gap" />
          {/* <div className="hzg-template__gap" /> */}
          <div className="hzg-template__body">
            {detailLinesIndustries.map((line, index) => (
              <div key={`${line}-${index}`} className="hzg-template__line-wrap">
                <div
                  className="hzg-template__line"
                  style={{
                    "--line-index": detailLinesIntro.length + 2 + index,
                  }}
                >
                  {line}
                </div>
              </div>
            ))}
            <div className="hzg-template__gap" />
            {detailLinesPartTwo.map((line, index) => (
              <div key={`${line}-${index}`} className="hzg-template__line-wrap">
                <div
                  className="hzg-template__line"
                  style={{
                    "--line-index":
                      detailLinesIntro.length +
                      detailLinesIndustries.length +
                      3 +
                      index,
                  }}
                >
                  {line}
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          className="hzg-template__side-image"
          src="/hzgpic.webp?v=20260225"
          alt="ZFT Group industries"
        />
      </div>
    </div>
  );
}
