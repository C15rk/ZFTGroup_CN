import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function RecruitmentHumanResources({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "Recruitment & Human Resources",
    "Build careers with ZFT Group and grow with a global platform.",
  ];

  const leftParagraphs = [
    "朝晖持续建设专业、开放、多元的人才体系，面向全球业务发展吸引优秀人才加入。我们关注员工成长、组织效率与长期价值创造，为团队提供清晰的发展路径与稳定的职业支持。",
    "ZFT Group continues to build a professional, open and diverse talent system, attracting outstanding people to support global business growth. We focus on employee development, organizational efficiency and long-term value creation.",
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
      className={`bottom-sheet-overlay rhr-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet rhr-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header rhr-sheet-header">
          <h2 className="rhr-sheet-title">
            <span className="rhr-sheet-title-line">RECRUITMENT</span>
            <span className="rhr-sheet-title-line">& HUMAN RESOURCES</span>
          </h2>
          <button
            className="bottom-sheet-close rhr-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close recruitment and human resources"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="rhr-content">
          <div
            ref={leadRef}
            className={`rhr-lead rhr-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="rhr-line-wrap">
                <div className="rhr-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="rhr-body-grid">
            <div className="rhr-body-left">
              {leftParagraphs.map((paragraph, index) => (
                <p key={`left-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="rhr-body-right">
              <img
                className="rhr-side-image"
                src="/codpic.webp"
                alt="Recruitment and human resources visual"
              />
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
