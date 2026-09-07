import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function CollaborationOpportunitiesSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "我们积极寻求与理念相同、标准一致的合作伙",
    "伴开展合作。",
  ];

  const leftParagraphs = [
    [
      "我们积极寻找和把握各方合作机会。",
      "无论是与商业伙伴、科研机构的产学",
      "研合作，还是与行业协会的交流合",
      "作，我们都能够迅速响应，充分利用",
      "这些机会推动企业的技术创新和市场",
      "拓展。",
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
      className={`bottom-sheet-overlay co-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet co-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header co-sheet-header">
          <h2 className="co-sheet-title co-sheet-title-bilingual">
            <span className="co-sheet-title-cn">合作机会</span>
            <span
              className="co-sheet-title-en"
              aria-label="Collaboration Opportunities"
            >
              <span className="co-sheet-title-line">Collaboration</span>
              <span className="co-sheet-title-line">Opportunities</span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close co-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close collaboration opportunities"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="co-content">
          <img
            className="co-hero-image"
            src="/copic.webp"
            width="8001"
            height="3594"
            alt="Collaboration opportunities overview"
          />

          <div
            ref={leadRef}
            className={`co-lead co-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="co-line-wrap">
                <div className="co-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="co-body-grid">
            <div className="co-body-left">
              {leftParagraphs.map((paragraph, paragraphIndex) => (
                <div
                  key={`left-${paragraphIndex}`}
                  className="co-paragraph"
                >
                  {paragraph.map((line, lineIndex) => (
                    <div
                      key={`${line}-${lineIndex}`}
                      className={
                        lineIndex === paragraph.length - 1
                          ? "co-line-no-justify"
                          : undefined
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="co-body-right">
              {["/copic1.webp", "/copic2.webp"].map((src, index) => (
                <img
                  key={src}
                  className="co-side-image"
                  src={src}
                  alt={`Collaboration opportunities visual ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
