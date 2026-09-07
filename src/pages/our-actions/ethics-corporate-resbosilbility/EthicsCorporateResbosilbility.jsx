import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function EthicsCorporateResbosilbility({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "道德与企业职责在朝晖企业的实践中，相辅相",
    "成，共同构成了公司发展的核心价值观和行为",
    "准则。",
  ];

  const leftParagraphs = [
    [
      "朝晖注重平衡各方利益，实现共赢。",
      "即使遇到特殊时期、特殊状况，我们",
      "依然坚持公平交易，尊重合作伙伴的",
      "权益，共同推动行业的健康发展。同",
      "时，我们也关注环境保护和可持续发",
      "展，努力降低生产过程中的能耗和排",
      "放，实现经济效益与环境效益的双",
      "赢。我们将继续坚守道德准则，履行",
      "一个环保科技企业应尽的职责，为社",
      "会、为客户、为员工创造更多的价",
      "值，实现企业的可持续发展。",
    ],
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
      className={`bottom-sheet-overlay ecr-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet ecr-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header ecr-sheet-header">
          <h2 className="ecr-sheet-title ecr-sheet-title-bilingual">
            <span className="ecr-sheet-title-cn">道德与企业职责</span>
            <span
              className="ecr-sheet-title-en"
              aria-label="Morality & Corporate Responsibility"
            >
              <span className="ecr-sheet-title-line">Morality</span>
              <span className="ecr-sheet-title-line">
                & Corporate Responsibility
              </span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close ecr-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close ethics and corporate responsibility"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="ecr-content">
          <img
            className="ecr-hero-image"
            src="/ecrpic.webp"
            width="8001"
            height="3593"
            alt="Ethics and corporate responsibility overview"
          />

          <div
            ref={leadRef}
            className={`ecr-lead ecr-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="ecr-line-wrap">
                <div className="ecr-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="ecr-body-grid">
            <div className="ecr-body-left">
              {leftParagraphs.map((paragraph, paragraphIndex) => (
                <div key={`left-${paragraphIndex}`} className="ecr-paragraph">
                  {paragraph.map((line, lineIndex) => (
                    <div key={`${line}-${lineIndex}`}>{line}</div>
                  ))}
                </div>
              ))}
            </div>
            <div className="ecr-body-right">
              <img
                className="ecr-side-image"
                src="/ecrpic1.webp"
                alt="Ethics and corporate responsibility visual"
              />
            </div>
          </div>
          <div className="ecr-badge-stack">
            <div className="ecr-card-row">
              <div className="wrap">
                <div className="badge-shell">
                  <span
                    className="badge-side badge-side-left"
                    aria-hidden="true"
                  />
                  <span className="badge">
                    <span className="badge-title">企业感谢信</span>
                  </span>
                  <span
                    className="badge-side badge-side-right"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="ecr-letter-gallery" aria-label="Corporate thank-you letters">
              <img src="/le1.webp" alt="企业感谢信 1" />
              <img src="/le2.webp" alt="企业感谢信 2" />
              <img src="/le3.webp" alt="企业感谢信 3" />
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
