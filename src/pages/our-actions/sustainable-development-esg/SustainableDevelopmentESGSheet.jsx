import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function SustainableDevelopmentESGSheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "ZFT Group has focused on environmental treatment for more than thirty years.",
    "Stay with what we started, carry out our mission, purify the environment and",
    "create a green future.",
  ];

  const bodyText =
    "Faced with the intensification of climate issues and the uncertainty of the international situation, ZFT Group actively pays attention to and practices ESG sustainable development concepts, creates value for stakeholders, builds a responsible international corporate image, and actively creates sustainable economic, social, and green values.";
  const badgeTitles = ["ENVIRONMENTAL", "SOCIAL", "GOVERNANCE"];
  const environmentalDetails = [
    {
      title: "ECYCLED MATERIALS:",
      text: "ZFT Group independently develops environmentally friendly, efficient, low-carbon, recyclable, and biodegradable filter materials, and its unique technology redefines the future of filtration products.",
    },
    {
      title: "AIR PURIFICATION:",
      text: "ZFT Group’s air purification system can effectively remove gaseous and solid pollutants. By optimizing the supply of raw materials and process control, as well as continuously optimizing production processes, energy consumption and waste emissions are reduced, thus achieving sustainable development and green production.",
    },
    {
      title: "AIR PURIFICATION:",
      text: "ZFT Group is committed to providing people with safe and pure drinking water sources, treating polluted surface water and seawater in industries such as municipal sewage, printing and dyeing wastewater, coal mines wastewater, ensuring the safety and purity of every drop of water.",
    },
  ];
  const socialParagraphs = [
    "ZFT Group establishes friendly relationships with its local community, actively assumes corporate social responsibility, and in the process of global operations, actively adapts to the overseas social environment, respects local religions and customs, harmonizes with local people, benefits local society and people, and establishes a good image of responsible enterprises.",
    'ZFT Group adheres to the business policy of "committed to finely service our customers and satisfy requirements", and regards fulfilling product responsibilities as the top priority of our work.',
  ];
  const governanceParagraphs = [
    "ZFT Group attaches great importance to risk management awareness and establishes three lines of defense for risk management, including business departments, compliance management departments, and compliance inspection departments.",
  ];

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("body-no-scroll");
    setHasLeadAnimated(false);

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !leadRef.current || hasLeadAnimated) return;

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
  }, [isOpen, hasLeadAnimated]);

  return (
    <div
      className={`bottom-sheet-overlay sde-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet sde-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header sde-sheet-header">
          <h2 className="sde-sheet-title">
            <span className="sde-sheet-title-line">SUSTAINABLE</span>
            <span className="sde-sheet-title-line">DEVELOPMENT</span>
            <span className="sde-sheet-title-line">& ESG</span>
          </h2>
          <button
            className="bottom-sheet-close sde-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close sustainable development and ESG"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="sde-sheet-content">
          <img
            className="sde-hero-image"
            src="/sdesg.webp"
            width="8001"
            height="3594"
            alt="Sustainable development and ESG"
          />

          <div
            ref={leadRef}
            className={`sde-lead sde-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="sde-line-wrap">
                <div className="sde-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <div className="sde-split-grid">
            <div className="sde-split-left">
              <p>{bodyText}</p>
            </div>
            <div className="sde-split-right">
              <img
                className="sde-info-image"
                src="/sdesginfo.webp"
                alt="Sustainable development ESG information"
              />
            </div>
          </div>
          <div className="sde-badge-stack">
            {badgeTitles.map((title, index) => (
              <div
                key={title}
                className={`sde-card-row ${index <= 2 ? "sde-card-row-detail" : ""}`}
              >
                <div className="wrap">
                  <div className="badge-shell">
                    <span
                      className="badge-side badge-side-left"
                      aria-hidden="true"
                    />
                    <span className="badge">
                      <span className="badge-title">{title}</span>
                    </span>
                    <span
                      className="badge-side badge-side-right"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                {index === 0 ? (
                  <div className="sde-card-right-copy">
                    {environmentalDetails.map((item) => (
                      <div
                        key={item.title + item.text}
                        className="sde-card-right-block"
                      >
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                ) : index === 1 ? (
                  <div className="sde-card-right-copy sde-card-right-copy-social">
                    {socialParagraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${paragraph}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                  </div>
                ) : index === 2 ? (
                  <div className="sde-card-right-copy sde-card-right-copy-social">
                    {governanceParagraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${paragraph}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
