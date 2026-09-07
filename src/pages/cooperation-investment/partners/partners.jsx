import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function PartnersSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "选择朝晖，就是选择了一个有30余年过滤经验",
    "的踏实合作伙伴。",
  ];

  const leftParagraphs = [
    [
      "朝晖企业注重与行业内外的优秀企业",
      "建立长期稳定的战略合作关系。我们",
      "正与世界多个领域的头部企业展开合",
      "作，通过强强联合，我们共同开拓市",
      "场，实现资源共享和优势互补。这些",
      "合作伙伴不仅提升了朝晖企业的市场",
      "影响力，也为我们带来了更多的创新",
      "思路和业务机会。",
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
      className={`bottom-sheet-overlay partners-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet partners-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header partners-sheet-header">
          <h2 className="partners-sheet-title partners-sheet-title-bilingual">
            <span className="partners-sheet-title-cn">合作伙伴</span>
            <span className="partners-sheet-title-en" aria-label="Partners">
              <span className="partners-sheet-title-line">Partners</span>
              <span className="partners-sheet-title-line" aria-hidden="true">
                &nbsp;
              </span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close partners-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close partners"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="partners-content">
          <img
            className="partners-hero-image"
            src="/partnerspic.webp"
            width="8001"
            height="3593"
            alt="Partners overview"
          />

          <div
            ref={leadRef}
            className={`partners-lead partners-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="partners-line-wrap">
                <div
                  className="partners-line"
                  style={{ "--line-index": index }}
                >
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="partners-body-grid">
            <div className="partners-body-left">
              {leftParagraphs.map((paragraph, paragraphIndex) => (
                <div
                  key={`left-${paragraphIndex}`}
                  className="partners-paragraph"
                >
                  {paragraph.map((line, lineIndex) => (
                    <div key={`${line}-${lineIndex}`}>{line}</div>
                  ))}
                </div>
              ))}
            </div>
            <div className="partners-body-right">
              {["/partnerspic1.webp", "/partnerspic2.webp", "/partnerspic3.webp"].map(
                (src, index) => (
                  <img
                    key={src}
                    className="partners-side-image"
                    src={src}
                    alt={`Partners side visual ${index + 1}`}
                  />
                ),
              )}
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
