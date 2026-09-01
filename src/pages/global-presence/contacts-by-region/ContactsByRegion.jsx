import { useEffect } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function ContactsByRegionSheet({ isOpen, onClose }) {
  const regionCards = [
    {
      title: "Cambodia Manufacturing\nBase",
      rows: [
        { key: "N", value: "Tai Seng Bavet Sez Co., Ltd." },
        {
          key: "A",
          value:
            "156km road No.1 , Phum Preypdaov,\nSangkat Chrokmtes, Bavet City, Svay Rieng\nProvice, Cambodia.",
        },
      ],
    },
    {
      title: "China Manufacturing\nBase",
      rows: [
        { key: "N", value: "Zhejiang Zhaohui Filter Technology Co., Ltd." },
        {
          key: "A",
          value:
            "No.370,Century Avenue Development Zone\nChongfu Town, Tongxiang Zhejiang, China",
        },
        { key: "T", value: "+86-0573-88222777" },
        { key: "E", value: "marketing@seinfel.com" },
      ],
    },
    {
      title: "Malaysia Manufacturing\nBase",
      rows: [
        { key: "N", value: "Zhaohui Filter (Malaysia) Sdn.Bhd." },
        {
          key: "A",
          value:
            "No.1, Jalan Teknologi 1,\nKawasan Perindustrian Tropicana,\n81500 Pekan Nanas, Johor, Malaysia\n\n",
        },
      ],
    },
    {
      title: "Vietnam Manufacturing\nBase",
      rows: [
        { key: "N", value: "Vina Zhaohui Filter Co., Ltd." },
        {
          key: "A",
          value:
            "186 Nguyen Thi Minh Khai, Xuan Hoa Ward,\nHo Chi Minh City, Vietnam",
        },
      ],
    },
  ];
  const countryContacts = [
    {
      country: "Germany",
      name: "Christian Mentges",
      mobileTelephone: "+49 176 3243 0165",
      email: "christian.mentges@seinfel.com",
    },
    {
      country: "France",
      name: "Philippe Baumann",
      mobileTelephone: "+33 6 30 96 28 71",
      email: "philippe.baumann@seinfel.com",
    },
    {
      country: "Dubai",
      name: "Sayyad Jasim",
      mobileTelephone: "+971 543509985",
      email: "sayyad.jasim@zftuk.com",
    },
    {
      country: "United Kingdom",
      name: "Steven You",
      mobileTelephone: "+44 7746139683",
      email: "steven.you@zftuk.com",
    },
    {
      country: "India",
      name: "Sayyad Jasim",
      mobileTelephone: "+971 543509985",
      email: "sayyad.jasim@zftuk.com",
    },
    {
      country: "Japan",
      name: "陆恺 / 陸カイ",
      mobileTelephone: "+86-132 9197 8218",
      email: "kent.lu@zftcn.com",
    },
    {
      country: "Korea",
      name: "KIM CHANGMIN",
      mobileTelephone: "+ 86-156 1858 6702",
      email: "kim.jin@zftcn.com",
    },
    {
      country: "United States",
      name: "Andrew Sharp",
      mobileTelephone: "+44 7968 873104",
      email: "andrew.sharp@zftuk.com",
    },
    {
      country: "Singapore",
      name: "steven.you",
      mobileTelephone: "+44(0) 7746 139 683",
      email: "steven.you@zftuk.com",
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
      className={`bottom-sheet-overlay cbr-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet cbr-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header cbr-sheet-header">
          <h2 className="cbr-sheet-title">
            <span className="cbr-sheet-title-line">CONTACTS</span>
            <span className="cbr-sheet-title-line">BY REGION</span>
          </h2>
          <button
            className="bottom-sheet-close cbr-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close contacts by region"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="cbr-content">
          <section className="cbr-hq-block" aria-label="Headquarters details">
            <h3 className="cbr-hq-title">HEADQUARTERS</h3>

            <div className="cbr-row">
              <span className="cbr-key">N</span>
              <span className="cbr-value">FILTERPRO DEVELOPMENT PTE.LTD.</span>
            </div>

            <div className="cbr-row">
              <span className="cbr-key">A</span>
              <span className="cbr-value">
                987 SERANGOON ROAD SINGAPORE (328147)
              </span>
            </div>

            <div className="cbr-row">
              <span className="cbr-key">T</span>
              <span className="cbr-value">+65 (3) 1064341</span>
            </div>

            <div className="cbr-row">
              <span className="cbr-key">E</span>
              <span className="cbr-value">sales@seinfel.com</span>
            </div>
          </section>

          <section className="cbr-region-grid" aria-label="Regional contacts">
            {regionCards.map((card) => (
              <article key={card.title} className="cbr-region-card">
                <h3 className="cbr-region-title">{card.title}</h3>
                {card.rows.map((row) => (
                  <div
                    key={`${card.title}-${row.key}-${row.value}`}
                    className="cbr-row cbr-region-row"
                  >
                    <span className="cbr-key">{row.key}</span>
                    <span className="cbr-value">{row.value}</span>
                  </div>
                ))}
              </article>
            ))}
          </section>

          <section
            className="cbr-country-table"
            aria-label="Country contacts table"
          >
            <div className="cbr-country-row cbr-country-row-header">
              <span>COUNTRY</span>
              <span>NAME</span>
              <span>
                MOBILE
                <br />
                TELEPHONE
              </span>
              <span>E-MAIL</span>
            </div>
            {countryContacts.map((item) => (
              <div
                key={`${item.country}-${item.name}-${item.email}`}
                className="cbr-country-row"
              >
                <span>{item.country}</span>
                <span
                  className={item.country === "Japan" ? "cbr-name-song" : ""}
                >
                  {item.name}
                </span>
                <span>{item.mobileTelephone}</span>
                <span>{item.email}</span>
              </div>
            ))}
          </section>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
