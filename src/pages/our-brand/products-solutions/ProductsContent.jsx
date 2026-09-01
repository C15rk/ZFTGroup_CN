export default function ProductsContent() {
  const brandCards = [
    {
      src: "/p-cofon.png",
      alt: "Cofon brand icon",
      rightCopy:
        "COFON produces melt-blown, PTFE, glass fiber, composite and other mainstream materials in the filtration industry.",
      rows: [
        {
          label: "Meltblown Materials:",
          url: "https://www.cofonmedia.com/meltblown/",
          arrow: true,
        },
        {
          label: "PTFE Materials:",
          url: "https://www.cofonmedia.com/ptfe-membrane/",
        },
        {
          label: "Glass Fiber Materials:",
          url: "https://www.cofonmedia.com/glassfiber/",
        },
        {
          label: "Composite Materials:",
          url: "https://www.cofonmedia.com/composite-material/",
        },
      ],
    },
    {
      src: "/p-seinfel.png",
      alt: "Seinfel brand icon",
      rightCopy:
        "SEINFEL inherits ZFT Group's air filtration products and technologies, including floor cleaning, household air purification, commercial and industrial air filtration, and automotive filtration.",
      rows: [
        {
          label: "Floor Care:",
          url: "https://www.seinfel.com/PRODUCTS/FloorCare/Paper",
          arrow: true,
        },
        {
          label: "Air Purification:",
          url: "https://www.seinfel.com/PRODUCTS/AirPuri/Dust",
        },
        {
          label: "Commercial And Industrial Air Filtration:",
          url: "https://www.seinfel.com/PRODUCTS/Commercial/pre",
        },
        {
          label: "Automotive Filtration:",
          url: "https://www.seinfel.com.cn/PRODUCTS/Automotive/Product",
          arrow: true,
        },
      ],
    },
    {
      src: "/p-reffeco.png",
      alt: "Reffeco brand icon",
      rightCopy: "Eco-friendly Packaging Bag:",
      rightLink: "https://www.reffeco.com",
      rightLinkWithArrow: true,
      rows: [],
    },
    {
      src: "/p-jeffel.png",
      alt: "Jeffel brand icon",
      rightCopy:
        "JEFFEL specializes in filtration solutions for household, commercial,\nand industrial water.",
      rows: [
        {
          label: "Household Water Purification:",
          url: "http://www.jeffelcn.com/product/cpfle744/",
          arrow: true,
        },
        {
          label: "Industrial Water:",
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
