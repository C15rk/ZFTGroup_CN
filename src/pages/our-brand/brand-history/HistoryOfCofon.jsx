import { useEffect, useRef, useState } from "react";

export default function HistoryOfCofon({ isVisible = false }) {
  const leadRef = useRef(null);
  const introRef = useRef(null);
  const bodyRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);
  const [hasIntroAnimated, setHasIntroAnimated] = useState(false);
  const [hasBodyAnimated, setHasBodyAnimated] = useState(false);

  const leadLines = ["科弗COFON 是一个专业的环境治理材料品牌。"];

  const introLines = [
    "科弗源自具有三十年材料制造",
    "经验专业从事过滤、分离、净",
    "化材料研究开发、产业化制",
    "造、工程应用及市场推广的桐",
    "乡市健民过滤材料有限公司。",
  ];

  const bodyParagraphs = [
    [
      "产品包括空气过滤用驻极熔喷、高效玻璃纤维纸特种过滤纸、PTFE(聚四氣乙烯)",
      "空气过滤膜、PP(聚丙烯)中空纤维微滤膜、PVDF(聚偏氟乙烯)均质超滤膜、PVDF",
      "复合膜、PES(聚醚砜)均质超滤膜等各种过滤材料产品已销售至欧洲、北美、澳",
      "洲、日本、韩国、台湾等地区。",
    ],
    [
      "在空气过滤领域，科弗拥有中国技术市场协会过滤与分离技术专业委员会(CFS)",
      "挂牌的实验中心，与杭州电子科技大学、华南理工大学等高等院校建立了紧密合",
      "作关系，在研究新材料及测试评估水平上处于国内领先地位。",
    ],
    [
      "在水处理领域，以浙江大学“膜与水处理技术”教育部工程研究中心为技术依",
      "托，在微滤、超滤、纳滤、反渗透等膜材料的研发上处于国内领先地位。",
    ],
  ];

  useEffect(() => {
    if (!isVisible) {
      setHasLeadAnimated(false);
      setHasIntroAnimated(false);
      setHasBodyAnimated(false);
      return;
    }

    if (!leadRef.current || hasLeadAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasLeadAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(leadRef.current);
    return () => observer.disconnect();
  }, [isVisible, hasLeadAnimated]);

  useEffect(() => {
    if (!isVisible || !introRef.current || hasIntroAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasIntroAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(introRef.current);
    return () => observer.disconnect();
  }, [isVisible, hasIntroAnimated]);

  useEffect(() => {
    if (!isVisible || !bodyRef.current || hasBodyAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasBodyAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(bodyRef.current);
    return () => observer.disconnect();
  }, [isVisible, hasBodyAnimated]);

  return (
    <div className="hcf-template">
      <img
        className="hcf-template__hero-image"
        src="/hoc.webp"
        width="8001"
        height="3593"
        alt="History of Cofon"
      />

      <div
        ref={leadRef}
        className={`hcf-template__lead hcf-template__lines ${hasLeadAnimated ? "is-visible" : ""}`}
      >
        {leadLines.map((line, index) => (
          <div key={`${line}-${index}`} className="hcf-template__line-wrap">
            <div
              className="hcf-template__line"
              style={{ "--line-index": index }}
            >
              {line}
            </div>
          </div>
        ))}
      </div>

      <div className="hcf-template__copy-grid">
        <div
          ref={introRef}
          className={`hcf-template__intro hcf-template__lines hcf-template__lines-no-float ${hasIntroAnimated ? "is-visible" : ""}`}
        >
          {introLines.map((line, index) => (
            <div key={`${line}-${index}`} className="hcf-template__line-wrap">
              <div
                className="hcf-template__line"
                style={{ "--line-index": index }}
              >
                {line}
              </div>
            </div>
          ))}
        </div>

        <div
          ref={bodyRef}
          className={`hcf-template__body hcf-template__lines hcf-template__lines-no-float ${hasBodyAnimated ? "is-visible" : ""}`}
        >
          {bodyParagraphs.map((paragraph, paragraphIndex) => (
            <div
              key={`paragraph-${paragraphIndex}`}
              className="hcf-template__paragraph"
            >
              {paragraph.map((line, lineIndex) => (
                <div
                  key={`${line}-${lineIndex}`}
                  className="hcf-template__line-wrap"
                >
                  <div
                    className="hcf-template__line"
                    style={{ "--line-index": paragraphIndex + lineIndex }}
                  >
                    {line}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="hcf-template__chronicle">
        <h3 className="hcf-template__chronicle-title">发展历史</h3>
        <img
          className="hcf-template__chronicle-image"
          src="/hocchronicle.webp"
          alt="Cofon development history"
        />
      </section>
    </div>
  );
}
