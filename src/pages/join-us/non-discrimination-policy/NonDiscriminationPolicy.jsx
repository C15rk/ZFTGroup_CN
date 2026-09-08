import { useEffect, useRef, useState } from "react";
import SiteFooter from "../../../components/layout/SiteFooter.jsx";

export default function NonDiscriminationPolicySheet({ isOpen, onClose }) {
  const leadRef = useRef(null);
  const [hasLeadAnimated, setHasLeadAnimated] = useState(false);

  const leadLines = [
    "行为指南",
    "正直诚信、相互信任、团队合作、引领变革",
  ];

  const introParagraph =
    "我们朝晖的无歧视政策体现了我们对公平、平\n等和包容的坚定承诺，我们坚决反对任何形式\n的歧视行为，致力于创造一个多元化、包容性\n的工作环境，让每一位员工都能感受到尊重与\n平等。";

  const policyBlocks = [
    {
      left: "我们尊重每个人的\n独特性和多样性",
      right:
        "在朝晖，我们尊重每个人的独特性和多样性，不因种族、宗教、性别、\n年龄、国籍、肤色、性取向、婚姻状况、社会地位、经济能力、教育程\n度或其他非工作相关的个人特征而对员工进行歧视。我们重视每个员工\n的贡献，相信每个人都有其独特的价值，应享有平等的权利和机会。",
    },
    {
      left: "朝晖始终坚持\n公平、公正的原则",
      right:
        "在招聘、培训、晋升和福利分配等方面，朝晖始终坚持公平、公正的原\n则。我们根据员工的能力、业绩和潜力进行评估，而非基于其个人特征\n或背景。我们努力为每位员工提供平等的发展机会，让每个人都有机会\n展现自己的才华，实现个人职业目标。",
    },
    {
      left: "完善的投诉处理机制",
      right:
        "朝晖还建立了完善的投诉处理机制，鼓励员工积极反馈任何形式的歧视\n行为。对于任何涉及歧视的投诉，我们将认真对待，进行公正、透明的\n调查，并采取必要的措施予以纠正。我们坚决维护员工的权益，确保每\n个人都能在一个无歧视的环境中工作和生活。",
    },
  ];

  const closingParagraph =
    "我们将不断努力，营造一个更加多元、包容的工作环境\n让每一位员工都能感受到尊重与平等，共同推动企业的持续发展和繁荣";

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
          <h2 className="ndp-sheet-title ndp-sheet-title-bilingual">
            <span className="ndp-sheet-title-cn">无歧视政策</span>
            <span
              className="ndp-sheet-title-en"
              aria-label="Non-Discrimination Policy"
            >
              <span className="ndp-sheet-title-line">Non-Discrimination</span>
              <span className="ndp-sheet-title-line">Policy</span>
            </span>
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
