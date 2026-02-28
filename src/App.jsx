
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import TermsConditions from "./components/Term";
import Home from "./page/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import GDPRBanner from "../src/components/GDPRBanner"
import MaintenancePage from "./page/Service/MaintenancePage";
import FullValetPage from "../src/page/Service/FullValet"
import DeepCleanPage from "./page/Service/DeepClean";
import FullDetailPage from './page/Service/FullDetailPage'
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/maintenance-scheme" element={<MaintenancePage />} />
        <Route path="/services/full-valet" element={<FullValetPage />} />
        <Route path="/services/deep-clean" element={<DeepCleanPage />} />
         <Route path="/services/full-detail" element={<FullDetailPage />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRBanner />
    </Router>
  );
}

export default App;
