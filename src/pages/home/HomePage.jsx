import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BrandHistorySheet from "../our-brand/brand-history/BrandHistorySheet.jsx";
import RandDAndManufacturingCapabilitiesSheet from "../our-brand/r-and-d-manufacturing-capabilities/RandDAndManufacturingCapabilitiesSheet.jsx";
import ProductsSolutionsSheet from "../our-brand/products-solutions/ProductsSolutionsSheet.jsx";
import InnovationSheet from "../our-brand/innovation/innovation.jsx";
import SustainableDevelopmentESGSheet from "../our-actions/sustainable-development-esg/SustainableDevelopmentESGSheet.jsx";
import EthicsCorporateResbosilbility from "../our-actions/ethics-corporate-resbosilbility/EthicsCorporateResbosilbility.jsx";
import CorporateCultureValues from "../our-actions/corporate-culture-values/CorporateCultureValues.jsx";
import PublicWelfareCommunity from "../our-actions/public-welfare-community/PublicWelfareCommunity.jsx";
import NewsSheet from "../our-actions/news/news.jsx";
import CorproateHonors from "../our-company/CorproateHonors.jsx";
import GlobalPresenceSheet from "../global-presence/gp/GlobalPresence.jsx";
import ContactsByRegionSheet from "../global-presence/contacts-by-region/ContactsByRegion.jsx";
import PartnersSheet from "../cooperation-investment/partners/partners.jsx";
import CollaborationOpportunitiesSheet from "../cooperation-investment/collabration-opportunities/CollaborationOpportunities.jsx";
import InvestorsSheet from "../cooperation-investment/investors/investors.jsx";
import AtZFTGroupSheet from "../join-us/at-zft-group/AtZFTGroup.jsx";
import CareerOpportunitiesDevelopmentSheet from "../join-us/career-opportunities-development/CareerOpportunitiesDevelopment.jsx";
import NonDiscriminationPolicySheet from "../join-us/non-discrimination-policy/NonDiscriminationPolicy.jsx";
import RecruitmentHumanResources from "../join-us/recruitment-human-resources/RecruitmentHumanResources.jsx";
import { siteSections } from "../../data/sections.js";

// Popup scroll behavior switch for client demos:
// "dynamic-cover" -> sheet top moves up while scrolling (current behavior)
// "fixed-locked"  -> sheet top stays fixed, only inner content scrolls (legacy behavior)
// const POPUP_SCROLL_MODE = "dynamic-cover";
const POPUP_SCROLL_MODE = "fixed-locked";

const DEFAULT_DOCUMENT_TITLE = "ZFT Group";

const PAGE_TITLE_MAP = {
  "/": DEFAULT_DOCUMENT_TITLE,
  "/brand-history": "Brand History - ZFT Group",
  "/r-and-d-manufacturing-capabilities":
    "R&D and Manufacturing Capabilities - ZFT Group",
  "/products-and-solutions": "Products & Solutions - ZFT Group",
  "/innovation": "Innovation - ZFT Group",
  "/sustainable-development-and-esg":
    "Sustainable Development & ESG - ZFT Group",
  "/ethics-and-corporate-responsibility":
    "Ethics & Corporate Responsibility - ZFT Group",
  "/corporate-culture-and-values": "Corporate Culture & Values - ZFT Group",
  "/public-welfare-and-community-impact":
    "Public Welfare & Community Impact - ZFT Group",
  "/news": "News - ZFT Group",
  "/corporate-honors": "Corporate Honors - ZFT Group",
  "/global-presence": "Global Presence - ZFT Group",
  "/contacts-by-region": "Contacts by Region - ZFT Group",
  "/partners": "Partners - ZFT Group",
  "/collaboration-opportunities": "Collaboration Opportunities - ZFT Group",
  "/investors": "Investors - ZFT Group",
  "/at-zft-group": "At ZFT Group - ZFT Group",
  "/career-opportunities-and-development":
    "Career Opportunities & Development - ZFT Group",
  "/non-discrimination-policy": "Non-Discrimination Policy - ZFT Group",
  "/recruitment-and-human-resources":
    "Recruitment & Human Resources - ZFT Group",
};

function SectionTitle({ label }) {
  if (typeof label === "string") {
    return <span className="content-title">{label}</span>;
  }

  return (
    <span className="content-title content-title-bilingual">
      <span className="content-title-cn">{label.zh}</span>
      <span className="content-title-en" aria-label={label.en.join(" ")}>
        {label.en.map((line) => (
          <span className="content-title-en-line" key={line}>
            {line}
          </span>
        ))}
      </span>
    </span>
  );
}

function SectionDescription({ description }) {
  if (!description) {
    return null;
  }

  if (typeof description === "string") {
    return <span className="content-description">{description}</span>;
  }

  return (
    <span className="content-description content-description-bilingual">
      <span className="content-description-column content-description-cn">
        {description.zh}
      </span>
      <span className="content-description-column content-description-en">
        {description.en}
      </span>
    </span>
  );
}

function SectionCardTitle({ zh, en }) {
  return (
    <span className="section-card-title-group section-card-title-bilingual">
      <span className="section-card-title-line section-card-title-cn">{zh}</span>
      {en.map((line) => (
        <span className="section-card-title-line section-card-title-en-line" key={line}>
          {line}
        </span>
      ))}
    </span>
  );
}

export default function HomePage({
  forceBrandHistoryOpen = false,
  forceRdmcOpen = false,
  forcePsOpen = false,
  forceInnovationOpen = false,
  forceSustainableDevelopmentESGOpen = false,
  forceEthicsAndCorporateResponsibilityOpen = false,
  forceCorporateCultureValuesOpen = false,
  forcePublicWelfareCommunityOpen = false,
  forceNewsOpen = false,
  forceCorporateHonorsOpen = false,
  forceGlobalPresenceOpen = false,
  forceContactsByRegionOpen = false,
  forcePartnersOpen = false,
  forceCollaborationOpportunitiesOpen = false,
  forceInvestorsOpen = false,
  forceAtZftGroupOpen = false,
  forceCareerOpportunitiesAndDevelopmentOpen = false,
  forceNonDiscriminationPolicyOpen = false,
  forceRecruitmentHumanResourcesOpen = false,
}) {
  const [isBrandHistoryOpen, setIsBrandHistoryOpen] = useState(false);
  const [
    isRandDAndManufacturingCapabilitiesOpen,
    setIsRandDAndManufacturingCapabilitiesOpen,
  ] = useState(false);
  const [isProductsSolutionsOpen, setIsProductsSolutionsOpen] = useState(false);
  const [isInnovationOpen, setIsInnovationOpen] = useState(false);
  const [isSustainableDevelopmentESGOpen, setIsSustainableDevelopmentESGOpen] =
    useState(false);
  const [
    isEthicsCorporateResbosilbilityOpen,
    setIsEthicsCorporateResbosilbilityOpen,
  ] = useState(false);
  const [isCorporateCultureValuesOpen, setIsCorporateCultureValuesOpen] =
    useState(false);
  const [isPublicWelfareCommunityOpen, setIsPublicWelfareCommunityOpen] =
    useState(false);
  const [isNewsSheetOpen, setIsNewsSheetOpen] = useState(false);
  const [isCorporateHonorsOpen, setIsCorporateHonorsOpen] = useState(false);
  const [isGlobalPresenceSheetOpen, setIsGlobalPresenceSheetOpen] =
    useState(false);
  const [isContactsByRegionSheetOpen, setIsContactsByRegionSheetOpen] =
    useState(false);
  const [isPartnersSheetOpen, setIsPartnersSheetOpen] = useState(false);
  const [
    isCollaborationOpportunitiesSheetOpen,
    setIsCollaborationOpportunitiesSheetOpen,
  ] = useState(false);
  const [isInvestorsSheetOpen, setIsInvestorsSheetOpen] = useState(false);
  const [isAtZFTGroupSheetOpen, setIsAtZFTGroupSheetOpen] = useState(false);
  const [
    isCareerOpportunitiesDevelopmentSheetOpen,
    setIsCareerOpportunitiesDevelopmentSheetOpen,
  ] = useState(false);
  const [
    isNonDiscriminationPolicySheetOpen,
    setIsNonDiscriminationPolicySheetOpen,
  ] = useState(false);
  const [
    isRecruitmentHumanResourcesOpen,
    setIsRecruitmentHumanResourcesOpen,
  ] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [sectionContentHeights, setSectionContentHeights] = useState({});
  const previousActiveSectionRef = useRef(null);
  const collapsibleInnerRefs = useRef({});

  const resetSectionCardsScroll = (sectionKey) => {
    if (!sectionKey) return;

    const cardsContainers = document.querySelectorAll(
      `.content-section[data-section-key="${sectionKey}"] .section-cards`,
    );
    cardsContainers.forEach((container) => {
      container.scrollLeft = 0;
    });
  };

  const location = useLocation();
  const navigate = useNavigate();

  const setCollapsibleInnerRef = (sectionKey) => (node) => {
    collapsibleInnerRefs.current[sectionKey] = node;
  };

  const updateSectionContentHeights = () => {
    const nextHeights = {};

    Object.entries(collapsibleInnerRefs.current).forEach(
      ([sectionKey, node]) => {
        if (node) {
          nextHeights[sectionKey] = node.scrollHeight;
        }
      },
    );

    setSectionContentHeights((previous) => {
      const previousKeys = Object.keys(previous);
      const nextKeys = Object.keys(nextHeights);

      if (
        previousKeys.length === nextKeys.length &&
        nextKeys.every((key) => previous[key] === nextHeights[key])
      ) {
        return previous;
      }

      return nextHeights;
    });
  };

  const getCollapsibleStyle = (sectionKey) => ({
    maxHeight:
      activeSection === sectionKey
        ? `${sectionContentHeights[sectionKey] ?? 0}px`
        : "0px",
  });

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      updateSectionContentHeights();
    });

    const handleResize = () => {
      updateSectionContentHeights();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSection]);

  useEffect(() => {
    const previous = previousActiveSectionRef.current;
    if (previous && previous !== activeSection) {
      resetSectionCardsScroll(previous);
    }
    previousActiveSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      const openSheets = Array.from(
        document.querySelectorAll(".bottom-sheet.is-open"),
      );
      openSheets.forEach((sheet) => {
        sheet.scrollTop = 0;
      });
    });

    return () => cancelAnimationFrame(rafId);
  }, [
    isBrandHistoryOpen,
    isRandDAndManufacturingCapabilitiesOpen,
    isProductsSolutionsOpen,
    isInnovationOpen,
    isSustainableDevelopmentESGOpen,
    isEthicsCorporateResbosilbilityOpen,
    isCorporateCultureValuesOpen,
    isPublicWelfareCommunityOpen,
    isNewsSheetOpen,
    isCorporateHonorsOpen,
    isCorporateHonorsOpen,
    isGlobalPresenceSheetOpen,
    isContactsByRegionSheetOpen,
    isPartnersSheetOpen,
    isCollaborationOpportunitiesSheetOpen,
    isInvestorsSheetOpen,
    isAtZFTGroupSheetOpen,
    isCareerOpportunitiesDevelopmentSheetOpen,
    isNonDiscriminationPolicySheetOpen,
    isRecruitmentHumanResourcesOpen,
  ]);

  useEffect(() => {
    if (POPUP_SCROLL_MODE !== "dynamic-cover") return;

    const openSheets = Array.from(
      document.querySelectorAll(".bottom-sheet.is-open"),
    );
    if (openSheets.length === 0) return;

    const getInitialTop = () => (window.innerWidth <= 768 ? 12 : 64);
    const handlers = openSheets.map((sheet) => {
      sheet.scrollTop = 0;

      const updateDynamicTop = () => {
        const initialTop = getInitialTop();
        const consumed = Math.min(initialTop, sheet.scrollTop);
        const dynamicTop = Math.max(0, initialTop - consumed);
        sheet.style.setProperty("--sheet-top-current", `${dynamicTop}px`);
      };

      updateDynamicTop();
      sheet.addEventListener("scroll", updateDynamicTop, { passive: true });
      return { sheet, updateDynamicTop };
    });

    const handleResize = () => {
      handlers.forEach(({ updateDynamicTop }) => updateDynamicTop());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      handlers.forEach(({ sheet, updateDynamicTop }) => {
        sheet.removeEventListener("scroll", updateDynamicTop);
        sheet.style.removeProperty("--sheet-top-current");
      });
      window.removeEventListener("resize", handleResize);
    };
  }, [
    isBrandHistoryOpen,
    isRandDAndManufacturingCapabilitiesOpen,
    isProductsSolutionsOpen,
    isInnovationOpen,
    isSustainableDevelopmentESGOpen,
    isEthicsCorporateResbosilbilityOpen,
    isCorporateCultureValuesOpen,
    isPublicWelfareCommunityOpen,
    isNewsSheetOpen,
    isGlobalPresenceSheetOpen,
    isContactsByRegionSheetOpen,
    isPartnersSheetOpen,
    isCollaborationOpportunitiesSheetOpen,
    isInvestorsSheetOpen,
    isAtZFTGroupSheetOpen,
    isCareerOpportunitiesDevelopmentSheetOpen,
    isNonDiscriminationPolicySheetOpen,
    isRecruitmentHumanResourcesOpen,
  ]);

  useEffect(() => {
    document.title =
      PAGE_TITLE_MAP[location.pathname] ?? DEFAULT_DOCUMENT_TITLE;
  }, [location.pathname]);

  useEffect(() => {
    if (forceBrandHistoryOpen || location.pathname === "/brand-history") {
      setIsBrandHistoryOpen(true);
    }

    if (
      forceRdmcOpen ||
      location.pathname === "/r-and-d-manufacturing-capabilities"
    ) {
      setIsRandDAndManufacturingCapabilitiesOpen(true);
    }

    if (forcePsOpen || location.pathname === "/products-and-solutions") {
      setIsProductsSolutionsOpen(true);
    }

    if (forceInnovationOpen || location.pathname === "/innovation") {
      setIsInnovationOpen(true);
    }

    if (
      forceSustainableDevelopmentESGOpen ||
      location.pathname === "/sustainable-development-and-esg"
    ) {
      setIsSustainableDevelopmentESGOpen(true);
    }

    if (
      forceEthicsAndCorporateResponsibilityOpen ||
      location.pathname === "/ethics-and-corporate-responsibility"
    ) {
      setIsEthicsCorporateResbosilbilityOpen(true);
    }

    if (
      forceCorporateCultureValuesOpen ||
      location.pathname === "/corporate-culture-and-values"
    ) {
      setIsCorporateCultureValuesOpen(true);
    }

    if (
      forcePublicWelfareCommunityOpen ||
      location.pathname === "/public-welfare-and-community-impact"
    ) {
      setIsPublicWelfareCommunityOpen(true);
    }

    if (forceNewsOpen || location.pathname === "/news") {
      setIsNewsSheetOpen(true);
    }

    if (forceCorporateHonorsOpen || location.pathname === "/corporate-honors") {
      setIsCorporateHonorsOpen(true);
    }

    if (forceGlobalPresenceOpen || location.pathname === "/global-presence") {
      setIsGlobalPresenceSheetOpen(true);
    }

    if (
      forceContactsByRegionOpen ||
      location.pathname === "/contacts-by-region"
    ) {
      setIsContactsByRegionSheetOpen(true);
    }

    if (forcePartnersOpen || location.pathname === "/partners") {
      setIsPartnersSheetOpen(true);
    }

    if (
      forceCollaborationOpportunitiesOpen ||
      location.pathname === "/collaboration-opportunities"
    ) {
      setIsCollaborationOpportunitiesSheetOpen(true);
    }

    if (forceInvestorsOpen || location.pathname === "/investors") {
      setIsInvestorsSheetOpen(true);
    }

    if (forceAtZftGroupOpen || location.pathname === "/at-zft-group") {
      setIsAtZFTGroupSheetOpen(true);
    }

    if (
      forceCareerOpportunitiesAndDevelopmentOpen ||
      location.pathname === "/career-opportunities-and-development"
    ) {
      setIsCareerOpportunitiesDevelopmentSheetOpen(true);
    }

    if (
      forceNonDiscriminationPolicyOpen ||
      location.pathname === "/non-discrimination-policy"
    ) {
      setIsNonDiscriminationPolicySheetOpen(true);
    }

    if (
      forceRecruitmentHumanResourcesOpen ||
      location.pathname === "/recruitment-and-human-resources"
    ) {
      setIsRecruitmentHumanResourcesOpen(true);
    }
  }, [
    location.pathname,
    forceBrandHistoryOpen,
    forceRdmcOpen,
    forcePsOpen,
    forceInnovationOpen,
    forceSustainableDevelopmentESGOpen,
    forceEthicsAndCorporateResponsibilityOpen,
    forceCorporateCultureValuesOpen,
    forcePublicWelfareCommunityOpen,
    forceNewsOpen,
    forceCorporateHonorsOpen,
    forceGlobalPresenceOpen,
    forceContactsByRegionOpen,
    forcePartnersOpen,
    forceCollaborationOpportunitiesOpen,
    forceInvestorsOpen,
    forceAtZftGroupOpen,
    forceCareerOpportunitiesAndDevelopmentOpen,
    forceNonDiscriminationPolicyOpen,
    forceRecruitmentHumanResourcesOpen,
  ]);

  const toggleSection = (key) => {
    setActiveSection((prev) => (prev === key ? null : key));
  };

  return (
    <main className="content" aria-label="Sections">
      <nav className="section-list" aria-label="Homepage sections">
        {siteSections.map((section) => (
          <section
            key={section.key}
            className="content-section"
            data-section-key={section.key}
          >
            {section.key === "our-brand" ? (
              <div className="content-link brand-link interactive-link">
                <button
                  className="section-toggle-button"
                  type="button"
                  aria-expanded={activeSection === "our-brand"}
                  onClick={() => toggleSection("our-brand")}
                >
                  <SectionTitle label={section.label} />
                  <img
                    className="section-toggle-icon"
                    src="/cancel.png"
                    alt="toggle our brand details"
                  />
                </button>
                <div
                  className={`brand-collapsible ${activeSection === "our-brand" ? "is-open" : ""}`}
                  aria-hidden={activeSection !== "our-brand"}
                  style={getCollapsibleStyle("our-brand")}
                >
                  <div
                    className="brand-collapsible-inner"
                    ref={setCollapsibleInnerRef("our-brand")}
                  >
                    <SectionDescription description={section.description} />
                    <div className="section-cards" aria-label="Our brand cards">
                      <button
                        className="section-card has-media brand-card-bg-bh brand-history-trigger section-card-align-left"
                        type="button"
                        onClick={() => {
                          setIsRandDAndManufacturingCapabilitiesOpen(false);
                          setIsProductsSolutionsOpen(false);
                          setIsInnovationOpen(false);
                          // setIsBrandHistoryOpen(true);
                          navigate("/brand-history");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/bh.webp"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="品牌历史" en={["Brand","History"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left brand-card-bg-ramc brand-history-trigger"
                        type="button"
                        onClick={() => {
                          setIsBrandHistoryOpen(false);
                          setIsProductsSolutionsOpen(false);
                          setIsInnovationOpen(false);
                          // setIsRandDAndManufacturingCapabilitiesOpen(true);
                          navigate("/r-and-d-manufacturing-capabilities");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/ramc.webp"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="研发与制造能力" en={["R&D And","Manufacturing","Capabilities"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left brand-card-bg-ps brand-history-trigger"
                        type="button"
                        onClick={() => {
                          setIsBrandHistoryOpen(false);
                          setIsRandDAndManufacturingCapabilitiesOpen(false);
                          setIsInnovationOpen(false);
                          // setIsProductsSolutionsOpen(true);
                          navigate("/products-and-solutions");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/ps.png"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="产品与解决方案" en={["Products","& Solutions"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left brand-card-bg-inno brand-history-trigger"
                        type="button"
                        onClick={() => {
                          setIsBrandHistoryOpen(false);
                          setIsRandDAndManufacturingCapabilitiesOpen(false);
                          setIsProductsSolutionsOpen(false);
                          // setIsInnovationOpen(true);
                          navigate("/innovation");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/inno.png"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="创新" en={["Innovation"]} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : section.key === "our-actions" ? (
              <div className="content-link actions-link interactive-link">
                <button
                  className="section-toggle-button"
                  type="button"
                  aria-expanded={activeSection === "our-actions"}
                  onClick={() => toggleSection("our-actions")}
                >
                  <SectionTitle label={section.label} />
                  <img
                    className="section-toggle-icon"
                    src="/cancel.png"
                    alt="toggle our actions details"
                  />
                </button>
                <div
                  className={`brand-collapsible ${activeSection === "our-actions" ? "is-open" : ""}`}
                  aria-hidden={activeSection !== "our-actions"}
                  style={getCollapsibleStyle("our-actions")}
                >
                  <div
                    className="brand-collapsible-inner"
                    ref={setCollapsibleInnerRef("our-actions")}
                  >
                    <SectionDescription description={section.description} />
                    <div
                      className="section-cards"
                      aria-label="Our actions cards"
                    >
                      <button
                        className="section-card has-media section-card-align-left actions-card-bg-sde brand-history-trigger"
                        type="button"
                        onClick={() => {
                          setIsBrandHistoryOpen(false);
                          setIsRandDAndManufacturingCapabilitiesOpen(false);
                          setIsProductsSolutionsOpen(false);
                          setIsInnovationOpen(false);
                          // setIsSustainableDevelopmentESGOpen(true);
                          navigate("/sustainable-development-and-esg");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/sde.webp"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="可持续发展& ESG" en={["Sustainable","Development","& ESG"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left actions-card-bg-ecr brand-history-trigger"
                        type="button"
                        onClick={() => {
                          setIsBrandHistoryOpen(false);
                          setIsRandDAndManufacturingCapabilitiesOpen(false);
                          setIsProductsSolutionsOpen(false);
                          setIsInnovationOpen(false);
                          setIsSustainableDevelopmentESGOpen(false);
                          // setIsEthicsCorporateResbosilbilityOpen(true);
                          navigate("/ethics-and-corporate-responsibility");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/ecr.png"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="道德与企业职责" en={["Ethics","& Corporate","Responsibility"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left actions-card-bg-ccv brand-history-trigger"
                        type="button"
                        onClick={() => {
                          setIsBrandHistoryOpen(false);
                          setIsRandDAndManufacturingCapabilitiesOpen(false);
                          setIsProductsSolutionsOpen(false);
                          setIsInnovationOpen(false);
                          setIsSustainableDevelopmentESGOpen(false);
                          setIsEthicsCorporateResbosilbilityOpen(false);
                          // setIsCorporateCultureValuesOpen(true);
                          navigate("/corporate-culture-and-values");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/ccv.webp"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="企业文化与价值观" en={["Corporate","Culture","& Values"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left actions-card-bg-pwc brand-history-trigger"
                        type="button"
                        onClick={() => {
                          setIsBrandHistoryOpen(false);
                          setIsRandDAndManufacturingCapabilitiesOpen(false);
                          setIsProductsSolutionsOpen(false);
                          setIsInnovationOpen(false);
                          setIsSustainableDevelopmentESGOpen(false);
                          setIsEthicsCorporateResbosilbilityOpen(false);
                          setIsCorporateCultureValuesOpen(false);
                          setIsNewsSheetOpen(false);
                          navigate("/public-welfare-and-community-impact");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/sde.webp"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="公益与社区影响" en={["Public Welfare", "& Community", "Impact"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left actions-card-bg-news1 brand-history-trigger"
                        type="button"
                        onClick={() => {
                          setIsBrandHistoryOpen(false);
                          setIsRandDAndManufacturingCapabilitiesOpen(false);
                          setIsProductsSolutionsOpen(false);
                          setIsInnovationOpen(false);
                          setIsSustainableDevelopmentESGOpen(false);
                          setIsEthicsCorporateResbosilbilityOpen(false);
                          setIsCorporateCultureValuesOpen(false);
                          setIsPublicWelfareCommunityOpen(false);
                          // setIsNewsSheetOpen(true);
                          navigate("/news");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/news1.png"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="新闻" en={["News"]} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : section.key === "global-presence" ? (
              <div className="content-link global-link interactive-link">
                <button
                  className="section-toggle-button"
                  type="button"
                  aria-expanded={activeSection === "global-presence"}
                  onClick={() => toggleSection("global-presence")}
                >
                  <SectionTitle label={section.label} />
                  <img
                    className="section-toggle-icon"
                    src="/cancel.png"
                    alt="toggle global presence details"
                  />
                </button>
                <div
                  className={`brand-collapsible ${activeSection === "global-presence" ? "is-open" : ""}`}
                  aria-hidden={activeSection !== "global-presence"}
                  style={getCollapsibleStyle("global-presence")}
                >
                  <div
                    className="brand-collapsible-inner"
                    ref={setCollapsibleInnerRef("global-presence")}
                  >
                    <SectionDescription description={section.description} />
                    <div
                      className="section-cards global-cards"
                      aria-label="Global presence cards"
                    >
                      {/*
                      <button
                        className="section-card has-media section-card-align-left global-card-bg-gp brand-history-trigger"
                        type="button"
                        onClick={() => {
                          // setIsGlobalPresenceSheetOpen(true);
                          navigate("/global-presence");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/gp.webp"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="全球布局" en={["Global","Presence"]} />
                      </button>
                      */}
                      <button
                        className="section-card has-media section-card-align-left global-card-bg-cbr brand-history-trigger"
                        type="button"
                        onClick={() => {
                          // setIsContactsByRegionSheetOpen(true);
                          navigate("/contacts-by-region");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/cbr.png"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="联系我们" en={["Contact","Us"]} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : section.key === "cooperation-investment" ? (
              <div className="content-link cooperation-link interactive-link">
                <button
                  className="section-toggle-button"
                  type="button"
                  aria-expanded={activeSection === "cooperation-investment"}
                  onClick={() => toggleSection("cooperation-investment")}
                >
                  <SectionTitle label={section.label} />
                  <img
                    className="section-toggle-icon"
                    src="/cancel.png"
                    alt="toggle cooperation and investment details"
                  />
                </button>
                <div
                  className={`brand-collapsible ${activeSection === "cooperation-investment" ? "is-open" : ""}`}
                  aria-hidden={activeSection !== "cooperation-investment"}
                  style={getCollapsibleStyle("cooperation-investment")}
                >
                  <div
                    className="brand-collapsible-inner"
                    ref={setCollapsibleInnerRef("cooperation-investment")}
                  >
                    <SectionDescription description={section.description} />
                    <div
                      className="section-cards cooperation-cards"
                      aria-label="Cooperation cards"
                    >
                      <button
                        className="section-card has-media section-card-align-left cooperation-card-bg-partners brand-history-trigger"
                        type="button"
                        onClick={() => {
                          // setIsPartnersSheetOpen(true);
                          navigate("/partners");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/partners.png"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="合作伙伴" en={["Partners"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left cooperation-card-bg-co brand-history-trigger"
                        type="button"
                        onClick={() => {
                          // setIsCollaborationOpportunitiesSheetOpen(true);
                          navigate("/collaboration-opportunities");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/co.png"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="合作机会" en={["Collaboration","Opportunities"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left cooperation-card-bg-investors brand-history-trigger"
                        type="button"
                        onClick={() => {
                          // setIsInvestorsSheetOpen(true);
                          navigate("/investors");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/investors.png"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="投资者" en={["Investors"]} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : section.key === "join-us" ? (
              <div className="content-link join-link interactive-link">
                <button
                  className="section-toggle-button"
                  type="button"
                  aria-expanded={activeSection === "join-us"}
                  onClick={() => toggleSection("join-us")}
                >
                  <SectionTitle label={section.label} />
                  <img
                    className="section-toggle-icon"
                    src="/cancel.png"
                    alt="toggle join us details"
                  />
                </button>
                <div
                  className={`brand-collapsible ${activeSection === "join-us" ? "is-open" : ""}`}
                  aria-hidden={activeSection !== "join-us"}
                  style={getCollapsibleStyle("join-us")}
                >
                  <div
                    className="brand-collapsible-inner"
                    ref={setCollapsibleInnerRef("join-us")}
                  >
                    <SectionDescription description={section.description} />
                    <div
                      className="section-cards join-cards"
                      aria-label="Join us cards"
                    >
                      <button
                        className="section-card has-media section-card-align-left join-card-bg-azg brand-history-trigger"
                        type="button"
                        onClick={() => {
                          // setIsAtZFTGroupSheetOpen(true);
                          navigate("/at-zft-group");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/azg.webp"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="在朝晖" en={["At ZFT Group"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left join-card-bg-cod brand-history-trigger"
                        type="button"
                        onClick={() => {
                          // setIsCareerOpportunitiesDevelopmentSheetOpen(true);
                          navigate("/career-opportunities-and-development");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/cod.webp"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="工作机会与发展" en={["Career Opportunities","& Development"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left join-card-bg-nondp brand-history-trigger"
                        type="button"
                        onClick={() => {
                          // setIsNonDiscriminationPolicySheetOpen(true);
                          navigate("/non-discrimination-policy");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/nondp.webp"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="无歧视政策" en={["Non-Discrimination","Policy"]} />
                      </button>
                      <button
                        className="section-card has-media section-card-align-left join-card-bg-rhr brand-history-trigger"
                        type="button"
                        onClick={() => {
                          setIsAtZFTGroupSheetOpen(false);
                          setIsCareerOpportunitiesDevelopmentSheetOpen(false);
                          setIsNonDiscriminationPolicySheetOpen(false);
                          navigate("/recruitment-and-human-resources");
                        }}
                      >
                        <span className="section-card-media" aria-hidden="true">
                          <span className="section-card-media-inner">
                            <img
                              className="section-card-media-image"
                              src="/cod.webp"
                              alt=""
                            />
                            <span className="section-card-media-overlay" />
                          </span>
                        </span>
                        <SectionCardTitle zh="人事招聘" en={["Recruitment", "& Human Resources"]} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : section.key === "our-company" ? (
              <div className="content-link company-link">
                <div className="company-top">
                  <img
                    className="company-top-image"
                    src="/ourcompany.webp"
                    alt="Our company"
                    width="8001"
                    height="3334"
                    decoding="async"
                    loading="eager"
                    fetchPriority="high"
                    draggable={false}
                  />
                  {/* <span className="content-title content-title-company">
                    <span>Our</span>
                    <span>Company</span>
                  </span> */}
                </div>
                <div className="company-bottom">
                  <div className="company-bottom-left">
                    <span className="company-block-title">
                      <SectionTitle label={{ zh: "企业荣誉", en: ["Corporate", "Honors"] }} />
                    </span>
                    <button
                      className="company-detail-card company-card-bg-ch"
                      type="button"
                      aria-label="Open corporate honors"
                      onClick={() => {
                        navigate("/corporate-honors");
                      }}
                    >
                      <img
                        className="company-detail-image company-detail-image-ch"
                        src="/ch.webp"
                        alt=""
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="company-bottom-right">
                    <span className="company-block-title">
                      <SectionTitle label={{ zh: "新闻", en: ["Company", "News"] }} />
                    </span>
                    <button
                      className="company-detail-card company-card-bg-news2"
                      type="button"
                      aria-label="Open news"
                      onClick={() => {
                        // setIsNewsSheetOpen(true);
                        navigate("/news");
                      }}
                    >
                      <img
                        className="company-detail-image"
                        src="/news2.webp"
                        alt=""
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ) : section.key === "information" ? (
              <div className="content-link information-link">
                <div className="information-top">
                  <img
                    className="information-logo"
                    src="/webp/logo1.webp"
                    alt="ZFT Group large logo"
                  />
                </div>
                <div className="information-bottom">
                  <div className="information-content-left">
                    <div className="information-left-top">
                      <p>
                        公司总部位于中国，在中国安徽、中国广东、中国浙江、柬埔寨、马来西亚、越南等地设有生产制造基地；并在美国、迪拜、英国、德国、法国、中国、新加坡及越南设立区域性销售办事处。同时在欧洲、美国、英国及远东地区布局战略性仓储与分销中心，构建覆盖全球的物流与配送网络。
                      </p>
                    </div>
                    <div className="information-left-middle">
                      <div className="office-detail office-detail-full">
                        <h3>中国浙江总部信息</h3>
                        <div className="office-address-row">
                          <span className="detail-key">A</span>
                          <p className="detail-value">
                            中国浙江省嘉兴市桐乡崇福镇
                            <br />
                            世纪大道北侧370号
                          </p>
                        </div>
                        <div className="office-address-row">
                          <span className="detail-key">T</span>
                          <p className="detail-value">
                            0086-573-88222777
                            <br />
                            400 666 1582
                          </p>
                        </div>
                      </div>
                      <div className="office-detail">
                        <h3>迪拜办公室信息</h3>
                        <div className="office-address-row">
                          <span className="detail-key">A</span>
                          <p className="detail-value">
                            Office 13, 29th Floor,
                            <br />
                            Prime Tower
                            <br />
                            Business Bay
                            <br />
                            Dubai
                            <br />
                            United Arab Emirates
                          </p>
                        </div>
                        <div className="office-address-row">
                          <span className="detail-key">T</span>
                          <p className="detail-value">
                            +971 58 529 7555
                            <br />
                            +44 7968 873104
                          </p>
                        </div>
                      </div>
                      <div className="office-detail">
                        <h3>英国办公室信息</h3>
                        <div className="office-address-row">
                          <span className="detail-key">A</span>
                          <p className="detail-value">
                            37, Lake View House,
                            <br />
                            Wilton Drive
                            <br />
                            Warwick CV34 6RG
                            <br />
                            United Kingdom
                          </p>
                        </div>
                        <div className="office-address-row">
                          <span className="detail-key">T</span>
                          <p className="detail-value">+44 7968 873104</p>
                        </div>
                      </div>
                    </div>
                    <div className="information-left-bottom">
                      <div className="qr-image-row">
                        <img
                          className="qr-composite-image"
                          src="/webp/wx.webp"
                          alt="WeChat QR code"
                        />
                        <img
                          className="qr-composite-image"
                          src="/webp/wxv.webp"
                          alt="WeChat video QR code"
                        />
                      </div>
                      <div className="qr-image-row qr-image-row-single">
                        <img
                          className="qr-composite-image"
                          src="/webp/dy.webp"
                          alt="Douyin QR code"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="information-content-right">
                    <img
                      className="information-map"
                      src="/webp/map.webp"
                      alt="Global map"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="content-link">
                <SectionTitle label={section.label} />
                <SectionDescription description={section.description} />
              </div>
            )}
          </section>
        ))}
      </nav>
      <BrandHistorySheet
        isOpen={isBrandHistoryOpen}
        onClose={() => {
          setIsBrandHistoryOpen(false);
          navigate("/");
        }}
      />
      <RandDAndManufacturingCapabilitiesSheet
        isOpen={isRandDAndManufacturingCapabilitiesOpen}
        onClose={() => {
          setIsRandDAndManufacturingCapabilitiesOpen(false);
          navigate("/");
        }}
      />
      <ProductsSolutionsSheet
        isOpen={isProductsSolutionsOpen}
        onClose={() => {
          setIsProductsSolutionsOpen(false);
          navigate("/");
        }}
      />
      <InnovationSheet
        isOpen={isInnovationOpen}
        onClose={() => {
          setIsInnovationOpen(false);
          navigate("/");
        }}
      />
      <SustainableDevelopmentESGSheet
        isOpen={isSustainableDevelopmentESGOpen}
        onClose={() => {
          setIsSustainableDevelopmentESGOpen(false);
          navigate("/");
        }}
      />
      <EthicsCorporateResbosilbility
        isOpen={isEthicsCorporateResbosilbilityOpen}
        onClose={() => {
          setIsEthicsCorporateResbosilbilityOpen(false);
          navigate("/");
        }}
      />
      <CorporateCultureValues
        isOpen={isCorporateCultureValuesOpen}
        onClose={() => {
          setIsCorporateCultureValuesOpen(false);
          navigate("/");
        }}
      />
      <PublicWelfareCommunity
        isOpen={isPublicWelfareCommunityOpen}
        onClose={() => {
          setIsPublicWelfareCommunityOpen(false);
          navigate("/");
        }}
      />
      <NewsSheet
        isOpen={isNewsSheetOpen}
        onClose={() => {
          setIsNewsSheetOpen(false);
          navigate("/");
        }}
      />
      <CorproateHonors
        isOpen={isCorporateHonorsOpen}
        onClose={() => {
          setIsCorporateHonorsOpen(false);
          navigate("/");
        }}
      />
      <GlobalPresenceSheet
        isOpen={isGlobalPresenceSheetOpen}
        onClose={() => {
          setIsGlobalPresenceSheetOpen(false);
          navigate("/");
        }}
      />
      <ContactsByRegionSheet
        isOpen={isContactsByRegionSheetOpen}
        onClose={() => {
          setIsContactsByRegionSheetOpen(false);
          navigate("/");
        }}
      />
      <PartnersSheet
        isOpen={isPartnersSheetOpen}
        onClose={() => {
          setIsPartnersSheetOpen(false);
          navigate("/");
        }}
      />
      <CollaborationOpportunitiesSheet
        isOpen={isCollaborationOpportunitiesSheetOpen}
        onClose={() => {
          setIsCollaborationOpportunitiesSheetOpen(false);
          navigate("/");
        }}
      />
      <InvestorsSheet
        isOpen={isInvestorsSheetOpen}
        onClose={() => {
          setIsInvestorsSheetOpen(false);
          navigate("/");
        }}
      />
      <AtZFTGroupSheet
        isOpen={isAtZFTGroupSheetOpen}
        onClose={() => {
          setIsAtZFTGroupSheetOpen(false);
          navigate("/");
        }}
      />
      <CareerOpportunitiesDevelopmentSheet
        isOpen={isCareerOpportunitiesDevelopmentSheetOpen}
        onClose={() => {
          setIsCareerOpportunitiesDevelopmentSheetOpen(false);
          navigate("/");
        }}
      />
      <NonDiscriminationPolicySheet
        isOpen={isNonDiscriminationPolicySheetOpen}
        onClose={() => {
          setIsNonDiscriminationPolicySheetOpen(false);
          navigate("/");
        }}
      />
      <RecruitmentHumanResources
        isOpen={isRecruitmentHumanResourcesOpen}
        onClose={() => {
          setIsRecruitmentHumanResourcesOpen(false);
          navigate("/");
        }}
      />
    </main>
  );
}
