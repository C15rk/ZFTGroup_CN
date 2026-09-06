export default function ProductsContent() {
  const brandCards = [
    {
      src: "/p-cofon.png",
      alt: "Cofon brand icon",
      rightCopy:
        "科弗COFON拥有熔喷、PTFE、玻纤、复合、环保包装纸、吸水纸等市场主流材料",
      rows: [
        {
          label: "熔喷材料:",
          url: "https://www.cofonmedia.com/meltblown/",
          arrow: true,
        },
        {
          label: "PTFE材料:",
          url: "https://www.cofonmedia.com/ptfe-membrane/",
        },
        {
          label: "玻纤材料:",
          url: "https://www.cofonmedia.com/glassfiber/",
        },
        {
          label: "环保包装纸:",
          url: "https://www.cofonmedia.com/composite-material/",
        },
      ],
    },
    {
      src: "/p-seinfel.png",
      alt: "Seinfel brand icon",
      rightCopy:
        "歆弗SEINFEL传承了朝晖空气过滤产品与技术，包含地面清洁、家用空气净化、商用及工业空气过滤、汽车过滤",
      rows: [
        {
          label: "地面清洁:",
          url: "https://www.seinfel.com/PRODUCTS/FloorCare/Paper",
          arrow: true,
        },
        {
          label: "家用空气净化:",
          url: "https://www.seinfel.com/PRODUCTS/AirPuri/Dust",
        },
        {
          label: "商用及工业空气过滤:",
          url: "https://www.seinfel.com/PRODUCTS/Commercial/pre",
        },
        {
          label: "汽车过滤:",
          url: "https://www.seinfel.com.cn/PRODUCTS/Automotive/Product",
          arrow: true,
        },
      ],
    },
    {
      src: "/p-reffeco.png",
      alt: "Reffeco brand icon",
      rightCopy: "环保包装: 专注于替塑内包装，100%可自然降解的环保包装方案",
      rightLink: "https://www.reffeco.com",
      rightLinkWithArrow: true,
      rows: [],
    },
    {
      src: "/p-jeffel.png",
      alt: "Jeffel brand icon",
      rightCopy: "洁弗JEFFEL专业从事家用净水、商用净水及工业水的过滤解决方案",
      rows: [
        {
          label: "家用净水:",
          url: "http://www.jeffelcn.com/product/cpfle744/",
          arrow: true,
        },
        {
          label: "工业净水:",
          url: "http://www.jeffelcn.com/product/cpfly3ba/",
        },
      ],
    },
  ];

  return (
    <>
      <img
        className="ps-sheet-hero-image"
        src="/ppic.webp"
        width="8001"
        height="3593"
        alt="Products and solutions overview"
      />
      <div
        className="ps-gradient-card-list"
        aria-label="Products and solutions highlight cards"
      >
        {brandCards.map((brandCard) => (
          <div
            key={brandCard.src}
            className={`ps-gradient-card ${brandCard.rows.length === 0 ? "ps-gradient-card--single-line" : ""}`}
            aria-label="Products and solutions highlight card"
          >
            <div className="ps-gradient-row ps-gradient-row-top">
              <div className="ps-gradient-col-left">
                <img
                  className="ps-brand-icon"
                  src={brandCard.src}
                  alt={brandCard.alt}
                />
              </div>
              <div
                className={`ps-gradient-col-right ${brandCard.src === "/p-seinfel.png" ? "ps-gradient-col-right--seinfel" : ""}`}
              >
                <p className="ps-gradient-right-copy">{brandCard.rightCopy}</p>
                {brandCard.rightLinkWithArrow ? (
                  <p className="ps-gradient-right-copy ps-inline-link-line">
                    <img
                      className="ps-row-arrow-icon ps-inline-arrow"
                      src="/p-arrow-right.png"
                      alt=""
                      aria-hidden="true"
                    />
                    <a
                      className="ps-inline-link-text"
                      href={brandCard.rightLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {brandCard.rightLink}
                    </a>
                  </p>
                ) : null}
              </div>
            </div>
            {brandCard.rows.map((row, index) => {
              const isLast = index === brandCard.rows.length - 1;
              const isInteractiveRow = Boolean(row.url) || Boolean(row.arrow);
              const rowClass = isInteractiveRow
                ? `ps-gradient-row ps-gradient-row-link ${isLast ? "ps-gradient-row-last" : ""}`
                : `ps-gradient-row ps-gradient-row-text ${isLast ? "ps-gradient-row-text-last ps-gradient-row-last" : ""}`;

              return (
                <div
                  key={`${brandCard.src}-${row.label}-${index}`}
                  className={rowClass}
                >
                  {isInteractiveRow ? (
                    <img
                      className="ps-row-arrow-icon"
                      src="/p-arrow-right.png"
                      alt=""
                      aria-hidden="true"
                    />
                  ) : null}
                  <p className="ps-row-link-text">
                    {row.label}
                    {row.url ? (
                      <>
                        {" "}
                        <a href={row.url} target="_blank" rel="noreferrer">
                          {row.url}
                        </a>
                      </>
                    ) : null}
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
