import { useEffect } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function CorporateCultureValues({ isOpen, onClose }) {
  const sections = [
    {
      title: "使命",
      lead: ["洁净环境创造绿色未来"],
      body: [
        "朝晖的事业，是我们全体朝晖人的矢志不渝追求的梦想，我们庄严的宣",
        "誓我们的使命是：洁净环境，创造绿色未来。",
      ],
    },
    {
      title: "愿景",
      lead: ["成为环境治理行业最具竞争力企业"],
      body: [
        "朝晖立誓依靠全体干部的持续奋斗，立足环境治理事业，成为环境治理",
        "行业最具竞争力企业。",
      ],
    },
    {
      title: "价值观",
      lead: [
        "格物明德，敬业进取",
        "乐于承担，勇于创新",
        "真诚合作，共同发展",
      ],
      body: [
        "朝晖人要以自强不息、奋斗进取、追求卓越为核心，以格物明德，敬业",
        "进取；乐于承担，勇于创新；真诚合作，共同发展为价值准则，立志成",
        "为朝晖事业的奋斗者。",
      ],
    },
    {
      title: "经营方针",
      lead: [
        "市场源自诚信",
        "质量决定生存",
        "技术见证产品",
        "思想创造未来",
      ],
      body: ["致力于提高品质与服务，满足客户需求。"],
    },
  ];

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("body-no-scroll");
    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  return (
    <div
      className={`bottom-sheet-overlay ccv-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet ccv-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header ccv-sheet-header">
          <h2 className="ccv-sheet-title ccv-sheet-title-bilingual">
            <span className="ccv-sheet-title-cn">企业文化与价值观</span>
            <span
              className="ccv-sheet-title-en"
              aria-label="Corporate Culture & Values"
            >
              <span className="ccv-sheet-title-line">Corporate Culture</span>
              <span className="ccv-sheet-title-line">& Values</span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close ccv-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close corporate culture values"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="ccv-content">
          <img
            className="ccv-hero-image"
            src="/ccvpic.webp"
            width="8001"
            height="3593"
            alt="Corporate culture values overview"
          />

          <div className="ccv-body-grid">
            <div className="ccv-body-right">
              {sections.map((section) => (
                <section key={section.title} className="ccv-copy-section">
                  <h3 className="ccv-copy-title">{section.title}</h3>
                  <p className="ccv-copy-lead">
                    {section.lead.map((line, index) => (
                      <span key={`${line}-${index}`}>
                        {line}
                        {index < section.lead.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </p>
                  <p className="ccv-copy-body">
                    {section.body.map((line, index) => (
                      <span key={`${line}-${index}`}>
                        {line}
                        {index < section.body.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </p>
                </section>
              ))}
            </div>
            <div className="ccv-body-left">
              <img
                className="ccv-side-image"
                src="/ccvpic1.webp"
                alt="Corporate culture values visual"
              />
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
