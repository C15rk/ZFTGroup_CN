import { useEffect, useRef, useState } from "react";

export default function HistoryOfZftGroup({ isVisible = false }) {
  const introRef = useRef(null);
  const compareRef = useRef(null);
  const [hasIntroAnimated, setHasIntroAnimated] = useState(false);
  const [hasCompareAnimated, setHasCompareAnimated] = useState(false);
  const historyLines = [
    // "ZFT Group was founded in 1993. We started with air filtration. After more than 30 years of development, we have formed four major businesses, air filtration, water filtration, filter material research and development, production and integrated application and a range of eco friendly bio-degradable packaging materials.",
  ];
  const detailLinesIntro = ["我们为全球多个行业提供服务"];
  const detailLinesIndustries = [
    "科弗-COFON（材料）、歆弗-SEINFEL（空气过滤）、洁弗-JEFFEL（水",
    "过滤）、REFFECO（环保包装），业务涵盖材料、吸尘器配件、空气净",
    "化系统、汽车滤清器、家用及商用净水系统、工业水与空气处理系统，",
    "以及环保包装。",
  ];
  const detailLinesPartTwo = [
    "如今，我们的客户遍布全球40多个国家，我们对持续产品研发的承诺不",
    "断为朝晖股份旗下品牌开拓更多新市场。",
  ];
  const compareLines = [
    "朝晖股份成立于1993年，起初专注于空气过滤",
    "领域。经过30多年的发展，我们已形成四大业",
    "务板块：空气过滤、水过滤、滤材研发生产及",
    "综合应用，以及一系列环保可降解包装材料、",
    "产品及包装方案。",
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
          <div className="hzg-template__image-gap" />
          <img
            className="hzg-template__side-image"
            src="/webp/zhls.webp"
            alt="ZFT Group industries"
          />
        </div>
      </div>
    </div>
  );
}
