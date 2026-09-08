import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function CareerOpportunitiesDevelopmentSheet({
  isOpen,
  onClose,
}) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "员工行为准则：敬重事业，追求卓越",
    "主动积极，恪尽职守；勤奋好学，敢于竞争",
    "信仰诚信，广泛合作；共同发展，共铸辉煌",
    "追求真理，彰显品德",
  ];

  const leftParagraphs = [
    [
      "在朝晖，我们充分关注员工的成长通道",
      "与成长过程，我们实行多通道发展机",
      "制，鼓励岗位轮换，全方位提升自我能",
      "力，也支持健康的竞聘与晋升，员工有",
      "充分的自主选择权和专项提升可能，一",
      "展所长。",
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
      className={`bottom-sheet-overlay cod-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet cod-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header cod-sheet-header">
          <h2 className="cod-sheet-title cod-sheet-title-bilingual">
            <span className="cod-sheet-title-cn">工作机会与发展</span>
            <span
              className="cod-sheet-title-en"
              aria-label="Career Opportunities and Development"
            >
              <span className="cod-sheet-title-line">Career Opportunities</span>
              <span className="cod-sheet-title-line">& Development</span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close cod-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close career opportunities and development"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="cod-content">
          <div
            ref={leadRef}
            className={`cod-lead cod-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="cod-line-wrap">
                <div className="cod-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="cod-body-grid">
            <div className="cod-body-left">
              {leftParagraphs.map((paragraph, paragraphIndex) => (
                <div key={`left-${paragraphIndex}`} className="cod-paragraph">
                  {paragraph.map((line, lineIndex) => (
                    <div
                      key={`${line}-${lineIndex}`}
                      className={
                        lineIndex === paragraph.length - 1
                          ? "cod-line-no-justify"
                          : undefined
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="cod-body-right">
              <img
                className="cod-side-image"
                src="/codpic.webp"
                alt="Career opportunities and development visual"
              />
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
