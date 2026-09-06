import { useEffect, useRef, useState } from "react";

export default function HistoryOfJeffel({ isVisible = false }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "洁弗Jeﬀel成立于1998年，前身是由新加坡凯华膜",
    "注资成立凯华膜技术有限公司。",
  ];

  const introLines = [
    "历经20余年，洁弗由单一的",
    "膜技术专业公司快速成长为：",
    "提供给水、中水回用、废水处",
    "理、水净化的全方位解决方案",
    "的技术产品供应商。",
  ];

  const bodyParagraphs = [
    "我们为不同行业的水净化需求提供合适高价值的应用解决方案：从需求分析，工",
    "况分析，方案设计，产品试样，测试评估，技术标准化到安装调试的一整套成熟",
    "的方案流程，高效解决问题，满足差异显著的客户需求。",
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
        <h3 className="hjf-template__chronicle-title">发展历史</h3>
        <img
          className="hjf-template__chronicle-image"
          src="/hojchronicle.webp"
          alt="Jeffel development history"
        />
      </section>
    </div>
  );
}
