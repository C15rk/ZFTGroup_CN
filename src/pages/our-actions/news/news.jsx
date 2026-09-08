import { useEffect, useMemo, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";
import { newsItems } from "../../../data/news.js";

const ITEMS_PER_PAGE = 4;

const FEATURED_NEWS_ORDER = [
  "exhibition-preview-2026",
  "ahr-expo-2026",
  "packcon-2026",
  "canton-fair-spring-2026",
  "q1-business-review-2026",
  "interpack-2026",
];

function renderStopParagraph(paragraph, index) {
  const [headline, ...restLines] = paragraph.split("\n");

  return (
    <p key={`${headline}-${index}`} className="news-paragraphs-multiline">
      <strong className="news-stop-heading">{headline}</strong>
      {restLines.map((line, lineIndex) => {
        const trimmedLine = line.trim();
        const isBulletLine = trimmedLine.startsWith("•");
        const bulletContent = isBulletLine
          ? trimmedLine.replace(/^•\s*/, "")
          : trimmedLine;

        if (!isBulletLine) {
          return (
            <span key={`${headline}-${lineIndex}`} className="news-stop-line">
              {trimmedLine}
            </span>
          );
        }

        return (
          <span
            key={`${headline}-${lineIndex}`}
            className="news-stop-line news-stop-line-bullet"
          >
            <span className="news-stop-bullet-mark">•</span>
            <span className="news-stop-bullet-text">{bulletContent}</span>
          </span>
        );
      })}
    </p>
  );
}

function renderHeadlineBulletParagraph(
  paragraph,
  index,
  headlineIndexes,
  boldBulletLabels = [],
) {
  const isHeadline = headlineIndexes.includes(index);
  const isBulletLine = paragraph.trim().startsWith("•");
  const numberedMatch = paragraph.trim().match(/^(\d+\.\s*)([^.]+\.)\s*(.*)$/);

  if (isHeadline) {
    return (
      <p key={`${paragraph}-${index}`}>
        <strong className="news-stop-heading">{paragraph}</strong>
      </p>
    );
  }

  if (isBulletLine) {
    const bulletContent = paragraph.trim().replace(/^•\s*/, "");
    const bulletMatch = bulletContent.match(/^([^:]+:)(.*)$/);
    const bulletLabel = bulletMatch?.[1] ?? "";
    const bulletRest = bulletMatch?.[2] ?? "";
    const shouldBoldBulletLabel = boldBulletLabels.includes(
      bulletLabel.replace(/:$/, ""),
    );

    return (
      <p key={`${paragraph}-${index}`} className="news-paragraphs-multiline">
        <span className="news-stop-line news-stop-line-bullet">
          <span className="news-stop-bullet-mark">•</span>
          <span className="news-stop-bullet-text">
            {shouldBoldBulletLabel ? (
              <>
                <strong
                  className="news-stop-heading"
                  // style={{ whiteSpace: "nowrap" }}
                >
                  {bulletLabel}
                </strong>
                {bulletRest}
              </>
            ) : (
              bulletContent
            )}
          </span>
        </span>
      </p>
    );
  }

  if (numberedMatch) {
    const [, numberPrefix, firstSentence, rest] = numberedMatch;

    return (
      <p key={`${paragraph}-${index}`}>
        <strong className="news-numbered-lead">
          {numberPrefix}
          {firstSentence}
        </strong>
        {rest ? ` ${rest}` : ""}
      </p>
    );
  }

  return <p key={`${paragraph}-${index}`}>{paragraph}</p>;
}

function renderParagraphs(item) {
  if (item.renderMode === "stops") {
    return item.paragraphs.map((paragraph, index) => {
      if (index < 2) {
        return <p key={`${paragraph}-${index}`}>{paragraph}</p>;
      }

      return renderStopParagraph(paragraph, index);
    });
  }

  if (item.renderMode === "headlines-bullets") {
    return item.paragraphs.map((paragraph, index) =>
      renderHeadlineBulletParagraph(
        paragraph,
        index,
        item.headlineIndexes || [],
        item.boldBulletLabels || [],
      ),
    );
  }

  return item.paragraphs.map((paragraph, index) => (
    <p key={`${paragraph}-${index}`}>{paragraph}</p>
  ));
}

export default function NewsSheet({ isOpen, onClose }) {
  const [expandedById, setExpandedById] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [contentHeights, setContentHeights] = useState({});
  const [extraHeights, setExtraHeights] = useState({});
  const sheetRef = useRef(null);
  const contentRefs = useRef({});
  const extraRefs = useRef({});

  const orderedNews = useMemo(
    () =>
      [...newsItems].sort(
        (a, b) => {
          const aFeaturedIndex = FEATURED_NEWS_ORDER.indexOf(a.id);
          const bFeaturedIndex = FEATURED_NEWS_ORDER.indexOf(b.id);
          const aIsFeatured = aFeaturedIndex !== -1;
          const bIsFeatured = bFeaturedIndex !== -1;

          if (aIsFeatured && bIsFeatured) {
            return aFeaturedIndex - bFeaturedIndex;
          }

          if (aIsFeatured) return -1;
          if (bIsFeatured) return 1;

          return new Date(b.date).getTime() - new Date(a.date).getTime();
        },
      ),
    [],
  );

  const totalPages = Math.ceil(orderedNews.length / ITEMS_PER_PAGE);
  const visibleNews = orderedNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const resetExpandedNews = () => {
    setExpandedById({});
  };

  const setContentRef = (id) => (node) => {
    if (node) {
      contentRefs.current[id] = node;
    } else {
      delete contentRefs.current[id];
    }
  };

  const setExtraRef = (id) => (node) => {
    if (node) {
      extraRefs.current[id] = node;
    } else {
      delete extraRefs.current[id];
    }
  };

  const toggleExpanded = (id, value) => {
    setExpandedById((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("body-no-scroll");
    setCurrentPage(1);
    resetExpandedNews();

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    resetExpandedNews();
  }, [currentPage, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const sheet = sheetRef.current;
    if (!sheet) return;

    sheet.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentPage, isOpen]);

  useEffect(() => {
    const updateHeights = () => {
      const nextContentHeights = {};
      const nextExtraHeights = {};

      Object.entries(contentRefs.current).forEach(([id, node]) => {
        nextContentHeights[id] = node.scrollHeight;
      });

      Object.entries(extraRefs.current).forEach(([id, node]) => {
        nextExtraHeights[id] = node.scrollHeight;
      });

      setContentHeights(nextContentHeights);
      setExtraHeights(nextExtraHeights);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => {
      window.removeEventListener("resize", updateHeights);
    };
  }, [isOpen, expandedById, currentPage]);

  return (
    <div
      className={`bottom-sheet-overlay news-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        ref={sheetRef}
        className={`bottom-sheet news-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header news-sheet-header">
          <h2 className="news-sheet-title news-sheet-title-bilingual">
            <span className="news-sheet-title-cn">新闻</span>
            <span className="news-sheet-title-en" aria-label="Company News">
              <span className="news-sheet-title-line">Company</span>
              <span className="news-sheet-title-line">News</span>
            </span>
          </h2>
          <button
            className="bottom-sheet-close news-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close news"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="news-content">
          <img
            className="news-hero-image"
            src="/o-news.webp"
            width="8001"
            height="3594"
            alt="Our actions news"
          />

          <div className="news-body-grid">
            {visibleNews.map((item) => {
              const isExpanded = Boolean(expandedById[item.id]);
              const hasExtraImages = Boolean(item.extraImages?.length);
              const rightColClass = isExpanded
                ? hasExtraImages
                  ? "news-right-col-double"
                  : ""
                : "news-right-col-collapsed";

              return (
                <section className="news-section" key={item.id}>
                  <div className="news-left-col">
                    <h3 className="news-main-heading">{item.title}</h3>
                    <div className="news-meta-row">
                      <span className="news-date">{item.displayDate}</span>
                      <button
                        className={`news-read-more ${isExpanded ? "is-disabled" : ""}`}
                        type="button"
                        onClick={() => toggleExpanded(item.id, true)}
                        disabled={isExpanded}
                      >
                        阅读更多
                      </button>
                    </div>
                    <div
                      className={`news-details ${isExpanded ? "is-expanded" : ""}`}
                    >
                      <div
                        className={`news-details-collapsed ${item.collapsedClassName || ""}`.trim()}
                      >
                        <div
                          className={`news-paragraphs ${item.previewClassName || ""}`.trim()}
                        >
                          <p>{item.preview}</p>
                        </div>
                      </div>
                      <div
                        className="news-details-expanded"
                        style={{
                          maxHeight: isExpanded
                            ? `${contentHeights[item.id] || 0}px`
                            : "0px",
                        }}
                      >
                        <div
                          className="news-paragraphs"
                          ref={setContentRef(item.id)}
                        >
                          {renderParagraphs(item)}
                          <br />
                          <button
                            className="news-hide-button"
                            type="button"
                            onClick={() => toggleExpanded(item.id, false)}
                          >
                            收起
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`news-right-col ${rightColClass}`.trim()}>
                    <img
                      className={[
                        item.mainImage.primary ? "news-right-primary" : "",
                        item.mainImage.fullImage ? "news-right-image-full" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      src={item.mainImage.src}
                      alt={item.mainImage.alt}
                    />
                    {hasExtraImages ? (
                      <div
                        className={`news-right-extra ${isExpanded ? "is-expanded" : ""}`}
                        style={{
                          maxHeight: isExpanded
                            ? `${extraHeights[item.id] || 0}px`
                            : "0px",
                        }}
                      >
                        <div
                          className="news-right-extra-gallery"
                          ref={setExtraRef(item.id)}
                        >
                          {item.extraImages.map((image) => (
                            <div key={image.src}>
                              <img
                                className={
                                  image.fullImage !== false
                                    ? "news-right-image-full"
                                    : ""
                                }
                                src={image.src}
                                alt={image.alt}
                              />
                              {image.caption ? (
                                <p className="news-image-caption">
                                  {image.caption}
                                </p>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="news-pagination" aria-label="News pagination">
            <button
              className="news-pagination-button"
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
            >
              上一页
            </button>
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  className={`news-pagination-button ${currentPage === pageNumber ? "is-active" : ""}`}
                  type="button"
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              className="news-pagination-button"
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={currentPage === totalPages}
            >
              下一页
            </button>
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
