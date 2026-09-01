import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function NonDiscriminationPolicySheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = ["Code of Conduct:", "Integrity, Mutual Trust, Team"];

  const introParagraph =
    "At ZFT Group, our Non-Discrimination Policy reflects our firm commitment to fairness, equality, and inclusion. We resolutely oppose any form of discrimination and are dedicated to creating a diverse and inclusive work environment where every employee feels respected and treated equally.";

  const policyBlocks = [
    {
      left: "We respect the uniqueness and diversity of every individual.",
      right:
        "At ZFT Group, we value the uniqueness and diversity of each individual, and we do not discriminate against employees based on race, religion, gender, age, nationality, skin color, sexual orientation, marital status, social status, economic capability, education level, or any other personal characteristic unrelated to work. We recognize the contributions of every employee, believe in each person’s unique value, and uphold their right to equal opportunities.",
    },
    {
      left: "We always adhere to the principles of fairness and impartiality.",
      right:
        "In recruitment, training, promotion, and benefits distribution, ZFT Group consistently adheres to principles of fairness and impartiality. Employees are evaluated based on their abilities, performance, and potential rather than personal characteristics or background. We strive to provide equal development opportunities for all employees, enabling everyone to showcase their talents and achieve their professional goals.",
    },
    {
      left: "Safe guarding employees rights.",
      right:
        "Additionally, ZFT Group has established a comprehensive complaint handling mechanism, encouraging employees to report any form of discrimination. All complaints are taken seriously, investigated fairly and transparently, and corrective actions are implemented when necessary. We are committed to safeguarding employees’ rights and ensuring that everyone can work and live in a discrimination-free environment.",
    },
  ];

  const closingParagraph =
    "We will continue our efforts to foster an increasingly diverse and inclusive workplace, where every employee feels respected and treated equally, collectively promoting the sustainable growth and prosperity of ZFT Group.";

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
      className={`bottom-sheet-overlay ndp-sheet-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <section
        className={`bottom-sheet ndp-sheet ${isOpen ? "is-open" : ""}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="bottom-sheet-header ndp-sheet-header">
          <h2 className="ndp-sheet-title">
            <span className="ndp-sheet-title-line">NON-DISCRIMINATION</span>
            <span className="ndp-sheet-title-line">POLICY</span>
          </h2>
          <button
            className="bottom-sheet-close ndp-sheet-close"
            type="button"
            onClick={onClose}
            aria-label="Close non-discrimination policy"
          >
            <img src="/cancel.png" alt="" />
          </button>
        </div>

        <div className="ndp-content">
          <div
            ref={leadRef}
            className={`ndp-lead ndp-lines ${hasLeadAnimated ? "is-visible" : ""}`}
          >
            {leadLines.map((line, index) => (
              <div key={`${line}-${index}`} className="ndp-line-wrap">
                <div className="ndp-line" style={{ "--line-index": index }}>
                  {line}
                </div>
              </div>
            ))}
          </div>

          <p className="ndp-intro">{introParagraph}</p>

          <div
            className="ndp-policy-grid"
            aria-label="Non-discrimination policy details"
          >
            {policyBlocks.map((block, index) => (
              <section
                className="ndp-policy-row"
                key={`${block.left}-${index}`}
              >
                <div className="ndp-policy-left">{block.left}</div>
                <div className="ndp-policy-right">{block.right}</div>
              </section>
            ))}
          </div>

          <p className="ndp-closing">{closingParagraph}</p>
        </div>

        <SiteFooter />
      </section>
    </div>
  );
}
