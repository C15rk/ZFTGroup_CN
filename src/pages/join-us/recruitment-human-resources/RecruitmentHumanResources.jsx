import { useEffect } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function RecruitmentHumanResources({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("body-no-scroll");

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

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
          <h2 className="rhr-sheet-title rhr-sheet-title-bilingual">
            <span className="rhr-sheet-title-cn">人事招聘</span>
            <span
              className="rhr-sheet-title-en"
              aria-label="Recruitment and Human Resources"
            >
              <span className="rhr-sheet-title-line">Recruitment</span>
              <span className="rhr-sheet-title-line">& Human Resources</span>
            </span>
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
          <img
            className="rhr-main-image"
            src="/rqr.webp"
            alt="Recruitment and human resources"
          />
          <p className="rhr-details-link">
            或点击👉🏻
            <a
              href="https://msearch.51job.com/jobs/all/co2565893.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              链接
            </a>
            查看详情
          </p>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
