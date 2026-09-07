import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function InnovationSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = ["创造力是企业持续发展的关键。"];

  const leftParagraphs = [
    [
      "我们专注于实际应用、问题解决技巧",
      "和创造性思维的培养，使员工能够为",
      "企业乃至最终客户创造最大价值。为",
      "提升这些能力，我们成立了 ZFT",
      "COLLEGE 作为学习与创新的平台，定",
      "期举办创意课程和头脑风暴会议，以",
      "促进创新思维与理念的产生。",
    ],
    [
      "在产品全生命周期管理（PLM）与工",
      "业工程方法（IE）的结合应用方面，",
      "我们已推进至 IE3.0 和 IE4.0 阶段，从",
      "而在完整生命周期管理下，为客户提",
      "供可视化、可获得的产品。我们建立",
      "了项目管理组织以及“精益团队",
      "（LEAN TEAM）”，这是一个跨职能",
      "小组，专注于通过消除浪费、提升敏",
      "捷性和提高效率来实现价值最大化。",
      "该团队运用成熟的日本改善",
      "（KAIZEN）理念，推动“持续改进”",
      "的流程建设。",
    ],
    [
      "未来，我们将把设备升级至",
      "IE4.0+MES（制造执行系统）水平，",
      "并在柬埔寨工厂进一步推进自动化建",
      "设。",
    ],
    [
      "我们秉持持续学习与自我提升的理",
      "念，坚持高尚品德、敬业进取、勇于",
      "担当、敢于创新、真诚合作，始终以",
      "人为本，重视关系与协作。",
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
      className={`bottom-sheet-overlay innovation-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet innovation-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header innovation-sheet-header">
          <h2 className="innovation-sheet-title innovation-sheet-title-bilingual">
            <span className="innovation-sheet-title-cn">创新</span>
            <span className="innovation-sheet-title-en" aria-label="Innovation">
              <span className="innovation-sheet-title-line">Innovation</span>
              <span className="innovation-sheet-title-line" aria-hidden="true">&nbsp;</span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close innovation-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close innovation"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="innovation-content">
          <img
            className="innovation-hero-image"
            src="/innovationpic.webp"
            width="8001"
            height="3593"
            alt="Innovation overview"
          />

          <div
            ref={leadRef}
            className={`innovation-lead innovation-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="innovation-line-wrap">
                <div
                  className="innovation-line"
                  style={{ "--line-index": index }}
                >
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="innovation-body-grid">
            <div className="innovation-body-left">
              {leftParagraphs.map((paragraph, paragraphIndex) => (
                <div
                  key={`left-${paragraphIndex}`}
                  className="innovation-paragraph"
                >
                  {paragraph.map((line, lineIndex) => (
                    <div
                      key={`${line}-${lineIndex}`}
                      className={
                        line === "的流程建设。" ||
                        line === "人为本，重视关系与协作。"
                          ? "innovation-line-no-justify"
                          : undefined
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="innovation-body-right">
              <img
                className="innovation-side-image"
                src="/innovationpic1.webp"
                alt="Innovation side visual"
              />
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
