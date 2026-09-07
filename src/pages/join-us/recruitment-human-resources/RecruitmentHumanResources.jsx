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
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
