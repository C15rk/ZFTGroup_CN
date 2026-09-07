import { useEffect } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function ContactsByRegionSheet({ isOpen, onClose }) {
  const regionCards = [
    {
      title: "中国生产制造基地",
      rows: [
        {
          key: "N",
          value:
            "浙江朝晖过滤技术股份有限公司\nZhejiang Zhaohui Filter Technology Co., Ltd.",
        },
        {
          key: "A",
          value:
            "浙江嘉兴桐乡市崇福镇 世纪大道北侧370号\nNo.370,Century Avenue Development Zone\nChongfu Town, Tongxiang Zhejiang, China",
        },
        { key: "T", value: "+86-0573-88222777\n400666 1582" },
        { key: "E", value: "sales@zftcn.com" },
      ],
    },
    {
      title: "中国生产制造基地",
      rows: [
        {
          key: "N",
          value:
            "广东朝晖过滤技术有限公司\nGuangdong Zhaohui Filter Technology Co., Ltd.",
        },
        {
          key: "A",
          value:
            "惠州市仲恺高新区中韩惠州产业园起步区月明路6号\n智谷智能制造项目（一期）高标准工业厂房4号厂房\n9-11层\n9-11/F, Building 4, High-Standard Industrial\nWorkshop, Zhigu Intelligent Manufacturing\nProject (Phase I), No.6 Yueming Road, Initial Zone\nof China-South Korea (Huizhou) Industrial Park,\nZhongkai High-tech Zone, Huizhou City",
        },
      ],
    },
    {
      title: "中国生产制造基地",
      rows: [
        {
          key: "N",
          value: "安徽洁弗过滤技术有限公司\nAnhui Jeffel Filter Technology Co.,Ltd.",
        },
        {
          key: "A",
          value:
            "安徽省淮南市经济技术开发区绿色智造产业园4号楼\nBuilding 4, Green Intelligent Manufacturing\nIndustrial Park, Huainan Economic-Technological\nDevelopment Zone, Huainan City, Anhui Province",
        },
      ],
    },
    {
      title: "柬埔寨生产制造基地",
      rows: [
        {
          key: "N",
          value: "朝晖过滤柬埔寨有限公司\nZhaohui Filter(Cambodia)Co..Ltd.",
        },
        {
          key: "A",
          value:
            "柴桢巴域市大成二经济特区1号公路156公里\n156km road No.1 , Phum Preypdaov,\nSangkat Chrokmtes, Bavet City, Svay Rieng\nProvice, Cambodia.",
        },
      ],
    },
    {
      title: "马来西亚生产制造基地",
      rows: [
        {
          key: "N",
          value:
            "朝晖过滤马来西亚有限公司\nZhaohui Filter (Malaysia) Sdn.Bhd.",
        },
        {
          key: "A",
          value:
            "马来西亚 柔佛州笨珍县 北干那那镇特罗必加纳\n工业园区一号工艺路1号\nNo.1, Jalan Teknologi 1,\nKawasan Perindustrian Tropicana,\n81500 Pekan Nanas, Johor, Malaysia",
        },
      ],
    },
    {
      title: "越南生产制造基地",
      rows: [
        {
          key: "N",
          value: "越南朝晖过滤有限公司\nVina Zhaohui Filter Co., Ltd.",
        },
        {
          key: "A",
          value:
            "越南同奈省三福坊三福工业区，\n33 号地块，6A 厂房\nFactory 6A, Plot No.33, Tam Phuoc Industrial\nZone, Tam Phuoc Ward, Dong Nai City,\nVietnam",
        },
      ],
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
          <h2 className="cbr-sheet-title cbr-sheet-title-stacked">
            <span className="cbr-sheet-title-line">联系我们</span>
            <span className="cbr-sheet-title-line">Contact Us</span>
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
          <section className="cbr-global-map" aria-label="Global presence map">
            <img
              className="cbr-global-map-image"
              src="/mapnew.webp"
              alt="Global presence"
            />
          </section>

          <section className="cbr-region-grid" aria-label="Regional contacts">
            {regionCards.map((card, cardIndex) => (
              <article
                key={`${card.title}-${cardIndex}`}
                className="cbr-region-card"
              >
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
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
