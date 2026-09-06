import { useEffect, useRef, useState } from "react";

export default function SolutionsContent({ isVisible = false }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "依托歆弗、洁弗、科弗和瑞弗四大品牌，我们在气体",
    "过滤、液体过滤及过滤材料领域构建了成熟的产品体",
    "系，广泛应用于小家电、洗地机、扫地机、空气净化",
    "器、通风系统、汽车过滤、水净化、水处理、内包装",
    "等商用、家用及工业用领域。",
  ];

  const whatWeCanDoItems = [
    "我们可基于木棉材料、PP、PTFE、PET、PES等原材料，为客户提供专用型、环保型、低成本的过滤产品、环保包装产品，甚至过滤装置及整体过滤解决方案。",
    "我们可基于PTFE、PVDF、PP、RO、活性碳等原材料，为客户提供工业及家用水净化与过滤解决方案。",
    "我们可在客户现场提供同步设计与开发人员驻场服务，缩短与客户之间的沟通及设计问题解决周期。",
    "我们为客户提供完善的企业标准体系和产品检测评估体系，采用国际标准对材料和产品出具权威的测量与分析报告，并对所提供的产品进行监督监控及一系列保障服务。",
    "我们可为客户提供从工艺到生产的专用设备设计与开发一体化解决方案，以及模具和非标设备。",
    "我们可提供有限授权的项目经理管理服务，秉持“客户至上、引领发展、创新卓越、诚信守正”的价值理念。",
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

      <div className="ps-solutions-body-grid">
        <div className="ps-solutions-title-col">
          <h3 className="ps-solutions-title">我们能做什么</h3>
        </div>
        <div className="ps-solutions-col">
          {whatWeCanDoItems.map((paragraph, index) => (
            <p key={`what-we-can-do-${index}`}>
              <span className="ps-solutions-dot" />
              <span>{paragraph}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
