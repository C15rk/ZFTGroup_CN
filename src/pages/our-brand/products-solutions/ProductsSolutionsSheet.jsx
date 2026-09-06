import { useEffect, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";
import ProductsContent from "./ProductsContent.jsx";
import SolutionsContent from "./SolutionsContent.jsx";

export default function ProductsSolutionsSheet({ isOpen, onClose }) {
  const [activeTag, setActiveTag] = useState("Products");
  const sheetTags = ["Products", "Solutions"];
  const sheetTagLabels = {
    Products: "产品-Products",
    Solutions: "解决方案-Solutions",
  };
  const tagContentComponents = {
    Products: ProductsContent,
    Solutions: SolutionsContent,
  };
  const ActiveTagContent = tagContentComponents[activeTag];
  const isActiveContentVisible = isOpen;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  return (
    <div
      className={`bottom-sheet-overlay ps-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet ps-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header ps-sheet-header">
          <h2 className="ps-sheet-title ps-sheet-title-bilingual">
            <span className="ps-sheet-title-cn">产品与解决方案</span>
            <span
              className="ps-sheet-title-en"
              aria-label="Products & Solutions"
            >
              <span className="ps-sheet-title-line">Products</span>
              <span className="ps-sheet-title-line">& Solutions</span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close ps-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close products and solutions"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>
        <div
          className="history-tags ps-history-tags"
          role="tablist"
          aria-label="Products and solutions tabs"
        >
          {sheetTags.map((tag) => (
            <button
              key={tag}
              className={`history-tag ${activeTag === tag ? "is-active" : ""}`}
              type="button"
              onClick={() => setActiveTag(tag)}
            >
              {sheetTagLabels[tag]}
            </button>
          ))}
        </div>
        <ActiveTagContent isVisible={isActiveContentVisible} />
        <SiteFooter />
      </section>
    </div>
  );
}
