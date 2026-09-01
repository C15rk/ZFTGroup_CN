import { Analytics } from "@vercel/analytics/react";
import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout.jsx";
import HomePage from "./pages/home/HomePage.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="brand-history"
            element={<HomePage forceBrandHistoryOpen />}
          />
          <Route
            path="r-and-d-manufacturing-capabilities"
            element={<HomePage forceRdmcOpen />}
          />
          <Route
            path="products-and-solutions"
            element={<HomePage forcePsOpen />}
          />
          <Route path="innovation" element={<HomePage forceInnovationOpen />} />
          <Route
            path="sustainable-development-and-esg"
            element={<HomePage forceSustainableDevelopmentESGOpen />}
          />
          <Route
            path="ethics-and-corporate-responsibility"
            element={<HomePage forceEthicsAndCorporateResponsibilityOpen />}
          />
          <Route
            path="corporate-culture-and-values"
            element={<HomePage forceCorporateCultureValuesOpen />}
          />
          <Route path="news" element={<HomePage forceNewsOpen />} />
          <Route
            path="corporate-honors"
            element={<HomePage forceCorporateHonorsOpen />}
          />
          <Route
            path="global-presence"
            element={<HomePage forceGlobalPresenceOpen />}
          />
          <Route
            path="contacts-by-region"
            element={<HomePage forceContactsByRegionOpen />}
          />
          <Route path="partners" element={<HomePage forcePartnersOpen />} />
          <Route
            path="collaboration-opportunities"
            element={<HomePage forceCollaborationOpportunitiesOpen />}
          />
          <Route path="investors" element={<HomePage forceInvestorsOpen />} />
          <Route path="at-zft-group" element={<HomePage forceAtZftGroupOpen />} />
          <Route
            path="career-opportunities-and-development"
            element={<HomePage forceCareerOpportunitiesAndDevelopmentOpen />}
          />
          <Route
            path="non-discrimination-policy"
            element={<HomePage forceNonDiscriminationPolicyOpen />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  );
}
