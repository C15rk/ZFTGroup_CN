import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function SustainableDevelopmentESGSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "朝晖30余年，始终专注于环境治理，不忘初心，",
    "肩负使命；洁净环境，创造绿色未来。",
  ];

  const bodyText = [
    "面对气候问题加剧和国际形势不确定性的挑战，朝晖股份积极关注并践",
    "行ESG可持续发展理念，为利益相关方创造价值，树立负责任的国际企业",
    "形象，持续创造经济、社会与绿色可持续价值。",
  ];
  const badgeTitles = ["环境 Environmental", "社会 Social", "政府 Governance"];
  const environmentalDetails = [
    {
      title: "循环材料",
      text: "朝晖自主研发环保高效、低碳、可循环利用、可降解滤材，独特的技术重新定义过滤产品的未来。",
    },
    {
      title: "空气净化",
      text: "朝晖空气净化过滤系统可有效去除气态、固态污染物，通过优化原料的供给和过程控制，以及不断优化生产流程，减少能源消耗和废弃物排放，从而实现可持续发展、实现绿色生产。",
    },
    {
      title: "水资源管理",
      text: "朝晖致力于为人们提供安全、纯净的饮用水源，工业、市政、印染、煤矿山等受污染地表水、海水处理，确保每一滴水的安全与纯净。",
    },
  ];
  const socialParagraphs = [
    "朝晖与所在社区建立友好关系，积极承担企业的社会责任，在全球运营的过程中，主动适应海外的社会环境，尊重当地宗教和风俗习惯，与当地人民和谐相处，造福当地社会和人民，树立中国企业的良好形象。",
    "朝晖秉承“致力于提高品质与服务，满足客户需求”的经营方针，将切实履行产品责任作为我们工作的重中之重。",
  ];
  const governanceParagraphs = [
    "朝晖高度重视风险管控意识，建立涵盖“业务部门、合规管理部门、合规稽查部门”的风险管理三道防线。",
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
      className={`bottom-sheet-overlay sde-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet sde-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header sde-sheet-header">
          <h2 className="sde-sheet-title sde-sheet-title-bilingual">
            <span className="sde-sheet-title-cn">可持续发展 & ESG</span>
            <span
              className="sde-sheet-title-en"
              aria-label="Sustainable Development & ESG"
            >
              <span className="sde-sheet-title-line">
                Sustainable Development
              </span>
              <span className="sde-sheet-title-line">& ESG</span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close sde-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close sustainable development and ESG"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="sde-sheet-content">
          <img
            className="sde-hero-image"
            src="/sdesg.webp"
            width="8001"
            height="3594"
            alt="Sustainable development and ESG"
          />

          <div
            ref={leadRef}
            className={`sde-lead sde-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="sde-line-wrap">
                <div className="sde-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="sde-split-grid">
            <div className="sde-split-left">
              <div className="sde-intro-copy">
                {bodyText.map((line, index) => (
                  <div key={`${line}-${index}`}>{line}</div>
                ))}
              </div>
              <img
                className="sde-info-image"
                src="/sdesginfo.webp"
                alt="Sustainable development ESG information"
              />
            </div>
          </div>
          <div className="sde-badge-stack">
            {badgeTitles.map((title, index) => (
              <div
                key={title}
                className={`sde-card-row ${index <= 2 ? "sde-card-row-detail" : ""}`}
              >
                <div className="wrap">
                  <div className="badge-shell">
                    <span
                      className="badge-side badge-side-left"
                      aria-hidden="true"
                    />
                    <span className="badge">
                      <span className="badge-title">{title}</span>
                    </span>
                    <span
                      className="badge-side badge-side-right"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                {index === 0 ? (
                  <div className="sde-card-right-copy">
                    {environmentalDetails.map((item) => (
                      <div
                        key={item.title + item.text}
                        className="sde-card-right-block"
                      >
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                ) : index === 1 ? (
                  <div className="sde-card-right-copy sde-card-right-copy-social">
                    {socialParagraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${paragraph}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                  </div>
                ) : index === 2 ? (
                  <div className="sde-card-right-copy sde-card-right-copy-social">
                    {governanceParagraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${paragraph}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
