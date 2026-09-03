import { useEffect } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function PublicWelfareCommunity({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("body-no-scroll");
    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  return (
    <div
      className={`bottom-sheet-overlay pwc-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet pwc-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header pwc-sheet-header">
          <h2 className="pwc-sheet-title">
            <span className="pwc-sheet-title-cn">公益与社区影响</span>
            <span className="pwc-sheet-title-en">
              <span className="pwc-sheet-title-line">Public Welfare</span>
              <span className="pwc-sheet-title-line">& Community</span>
              <span className="pwc-sheet-title-line">Impact</span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close pwc-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close public welfare and community impact"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="pwc-content">
          <img
            className="pwc-hero-image"
            src="/sde.webp"
            width="8001"
            height="3594"
            alt="Public welfare and community impact"
          />

          <div className="pwc-copy-grid">
            <p>
              朝晖持续关注公益事业与社区发展，积极履行企业社会责任，推动企业成长与社会价值共同提升。
            </p>
            <p>
              ZFT Group continues to support public welfare and community development, actively fulfilling corporate social responsibility while creating shared value with local communities.
            </p>
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
