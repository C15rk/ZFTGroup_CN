import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function AtZFTGroupSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "人才战略：以价值创造者为本",
    "塑造舞台、共创事业、共享价值、战略招人",
    "管理用人 、激励留人、绩效育人",
  ];

  const leftParagraphs = [
    [
      "在朝晖，我们设计了科学合理的薪酬体",
      "系，充分享有法定的所有保障；同时，",
      "员工有机会参与企业全球化布局的进",
      "程，提升、感受不一样的世界观；员工",
      "们工作之余的闲暇活动同样精彩，我们",
      "配备了健身中心、各类球类场地，以及",
      "文化活动中心，全方位提升员工在朝晖",
      "的幸福指数。",
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
      className={`bottom-sheet-overlay atzft-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet atzft-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header atzft-sheet-header">
          <h2 className="atzft-sheet-title atzft-sheet-title-bilingual">
            <span className="atzft-sheet-title-cn">在朝晖</span>
            <span className="atzft-sheet-title-en" aria-label="At ZFT Group">
              <span className="atzft-sheet-title-line">At</span>
              <span className="atzft-sheet-title-line">ZFT Group</span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close atzft-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close at ZFT group"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="atzft-content">
          <div
            ref={leadRef}
            className={`atzft-lead atzft-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="atzft-line-wrap">
                <div className="atzft-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="atzft-body-grid">
            <div className="atzft-body-left">
              {leftParagraphs.map((paragraph, paragraphIndex) => (
                <div key={`left-${paragraphIndex}`} className="atzft-paragraph">
                  {paragraph.map((line, lineIndex) => (
                    <div
                      key={`${line}-${lineIndex}`}
                      className={
                        lineIndex === paragraph.length - 1
                          ? "atzft-line-no-justify"
                          : undefined
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="atzft-body-right">
              <img
                className="atzft-side-image"
                src="/azftg.webp"
                alt="At ZFT Group visual"
              />
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
