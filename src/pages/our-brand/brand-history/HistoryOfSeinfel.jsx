import { useEffect, useRef, useState } from "react";

export default function HistoryOfSeinfel({ isVisible = false }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "三十多年来，歆弗Seinfel始终是朝晖股份技术基因",
    "的核心，并致力于空气过滤专业领域的研发与制造。",
  ];

  const introLines = [
    "作为朝晖股份旗下的专业空气",
    "过滤品牌，我们不仅深得集团",
    "三十余载的行业精髓，更拥有",
    "从滤材研发、设备制造到系统",
    "定制的全链路自主权与检测实",
    "力。",
  ];

  const bodyParagraphs = [
    [
      "我们的产品和服务涵盖整个空气过滤系统领域，包括家用、商用及工业空气净化、地面清洁过滤以及汽车过滤。",
    ],
    [
      "我们拥有一支超过100人的专业研发团队，为客户提供多样化的净化解决方案。",
    ],
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

      <div className="hsf-template__copy-grid">
        <div className="hsf-template__intro">
          {introLines.map((line, index) => (
            <div key={`${line}-${index}`}>{line}</div>
          ))}
        </div>

        <div className="hsf-template__body">
          {bodyParagraphs.map((paragraph, paragraphIndex) => (
            <div
              key={`paragraph-${paragraphIndex}`}
              className="hsf-template__paragraph"
            >
              {paragraph.map((line, lineIndex) => (
                <div
                  key={`${line}-${lineIndex}`}
                  className="hsf-template__line-wrap"
                >
                  <div
                    className="hsf-template__line"
                    style={{ "--line-index": paragraphIndex + lineIndex }}
                  >
                    {line}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <img
        className="hsf-template__info-image"
        src="/hosinfo.webp?v=20260225"
        alt="Seinfel information"
      />

      <section className="hsf-template__chronicle">
        <h3 className="hsf-template__chronicle-title">发展历史</h3>

        <img
          className="hsf-template__chronicle-image"
          src="/hoschronicle.webp"
          alt="Seinfel development history"
        />
      </section>
    </div>
  );
}
