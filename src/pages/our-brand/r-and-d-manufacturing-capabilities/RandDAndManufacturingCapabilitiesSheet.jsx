import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function RandDAndManufacturingCapabilitiesSheet({
  isOpen,
  onClose,
}) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);
  const leadLines = [
    "我们有着全球为数不多的、完整的滤材到应用",
    "全链路研发、设计、制造的能力。",
  ];

  const introText = [
    "提供从原材料-需求评估-系统",
    "开发-产品制造-检测评估-仓",
    "储物流的一站式解决方案。拥",
    "有千余种原材料库积累及灵活",
    "的开发技术方案，从原材料的",
    "选择与开发，到基于成本与系",
    "统的综合评估，我们能够遴选",
    "出最佳的开发和制造方案。",
  ];
  const bodyParagraphs = [
    [
      "我们拥有超过100人的研发团队以及超过30多年历炼的行业积淀，支持我们在产品与系统上不断迭代创新、技术上不断前行。",
      "",
    ],
    [
      "在全球布局上，我们设立了覆盖中国，马来西亚，柬埔寨及越南，总面积超过18",
      "万平方米的制造基地，并配备了超过100条自动化生产线。这一强大的制造网络",
      "不仅确保了产能的最大化释放，还保障了全球范围内订单的顺利交付。",
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
      className={`bottom-sheet-overlay rdmc-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet rdmc-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header rdmc-sheet-header">
          <h2 className="rdmc-sheet-title rdmc-sheet-title-bilingual">
            <span className="rdmc-sheet-title-cn">研发与制造能力</span>
            <span
              className="rdmc-sheet-title-en"
              aria-label="R&D And Manufacturing Capabilities"
            >
              <span className="rdmc-sheet-title-line">R&D And</span>
              <span className="rdmc-sheet-title-line">
                Manufacturing Capabilities
              </span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close rdmc-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close R&D and manufacturing capabilities"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>
        <div className="rdmc-sheet-content">
          <img
            className="rdmc-hero-image"
            src="/rdamcpic.webp"
            width="8001"
            height="3593"
            alt="R&D and manufacturing capabilities"
          />

          <div
            ref={leadRef}
            className={`rdmc-lead rdmc-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="rdmc-line-wrap">
                <div className="rdmc-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <img
            className="rdmc-info-image"
            src="/rdamcinfo.webp?v=20260225"
            alt="R&D capability overview"
          />

          <div className="rdmc-copy-grid">
            <div className="rdmc-split-left">
              {introText.map((line, index) => (
                <div key={`${line}-${index}`}>{line}</div>
              ))}
            </div>
            <div className="rdmc-body-copy">
              {bodyParagraphs.map((paragraph, paragraphIndex) => (
                <div
                  key={`paragraph-${paragraphIndex}`}
                  className="rdmc-paragraph"
                >
                  {paragraph.map((line, lineIndex) => (
                    <div key={`${line}-${lineIndex}`}>{line}</div>
                  ))}
                </div>
              ))}
              <div
                className="rdmc-photo-grid"
                aria-label="R&D manufacturing gallery"
              >
                <img src="/rdamcpic1.webp" alt="R&D manufacturing 1" />
                <img src="/rdamcpic2.webp" alt="R&D manufacturing 2" />
                <img src="/rdamcpic3.webp" alt="R&D manufacturing 3" />
                <img src="/rdamcpic4.webp" alt="R&D manufacturing 4" />
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </section>
    </div>
  );
}
