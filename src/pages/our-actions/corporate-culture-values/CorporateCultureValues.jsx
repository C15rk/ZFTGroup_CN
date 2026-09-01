import { useEffect } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function CorporateCultureValues({ isOpen, onClose }) {
  const sections = [
    {
      title: "MISSION",
      lead: "Clean the environment and create a green future.",
      body: "The work of ZFT Group is the unwavering dream pursued by all of us at ZFT Group. We solemnly declare that our mission is: to clean the environment and create a green future.",
    },
    {
      title: "VISION",
      lead: "To become the most competitive enterprise in the environmental governance industry.",
      body: "ZFT Group pledges to rely on the continued efforts of all its leaders and to stay rooted in the cause of environmental governance, striving to become the most competitive enterprise in the environmental governance industry.",
    },
    {
      title: "VALUES",
      lead: "Investigate things and cultivate virtue; be dedicated and enterprising; be willing to take responsibility and courageous in innovation; cooperate with sincerity and grow together.",
      body: "Staff of ZFT Group should take self-improvement, hard work, progress, and the pursuit of excellence as their core value, and uphold the practices of investigating things and cultivating virtue; dedication and enterprise; willingness to take responsibility and courage for innovation; sincere cooperation and shared development, aspiring to become devoted contributors to the cause of ZFT Group.",
    },
    {
      title: "BUSINESS",
      lead: "The market stems from integrity, quality determines survival, technology validates products, and ideas create the future.",
      body: "We are committed to improving quality and service to meet customer needs.",
    },
  ];

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("body-no-scroll");
    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  return (
    <div
      className={`bottom-sheet-overlay ccv-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet ccv-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header ccv-sheet-header">
          <h2 className="ccv-sheet-title">
            <span className="ccv-sheet-title-line">CORPORATE</span>
            <span className="ccv-sheet-title-line">CULTURE</span>
            <span className="ccv-sheet-title-line">& VALUES</span>
          </h2>
          <button
            className="bottom-sheet-close ccv-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close corporate culture values"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="ccv-content">
          <img
            className="ccv-hero-image"
            src="/ccvpic.webp"
            width="8001"
            height="3593"
            alt="Corporate culture values overview"
          />

          <div className="ccv-body-grid">
            <div className="ccv-body-left">
              <img
                className="ccv-side-image"
                src="/ccvpic1.webp"
                alt="Corporate culture values visual"
              />
            </div>

            <div className="ccv-body-right">
              {sections.map((section) => (
                <section key={section.title} className="ccv-copy-section">
                  <h3 className="ccv-copy-title">{section.title}</h3>
                  <p className="ccv-copy-lead">
                    {section.lead}
                    <br />
                    <br />
                  </p>
                  <p className="ccv-copy-body">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
