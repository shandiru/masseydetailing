
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import TermsConditions from "./components/Term";
import Home from "./page/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import GDPRBanner from "./components/GDPRBanner"

import PricingPage from "./page/PricingPage";
import BookingTerms from "./page/T&C";
import ScrollToHash from "./components/Home/ScrollToHash";
import ReviewPage from "./page/Review";
import NotFound from "./components/NotFound";
import ServicePage from "./page/ServicePage";
import LocationPage from "./page/LocationPage";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<ReviewPage />} />

        <Route
          path="/services/maintenance-scheme"
          element={<ServicePage serviceKey="maintenance-scheme" />}
        />
        <Route
          path="/services/full-valet"
          element={<ServicePage serviceKey="full-valet" />}
        />
        <Route
          path="/services/deep-clean"
          element={<ServicePage serviceKey="deep-clean" />}
        />
        <Route
          path="/services/full-detail"
          element={<ServicePage serviceKey="full-detail" />}
        />

        <Route path="/locations/boroughbridge" element={<LocationPage locationKey="boroughbridge" />} />
        <Route path="/locations/garforth" element={<LocationPage locationKey="garforth" />} />
        <Route path="/locations/harrogate" element={<LocationPage locationKey="harrogate" />} />
        <Route path="/locations/leeds" element={<LocationPage locationKey="leeds" />} />
        <Route path="/locations/thirsk" element={<LocationPage locationKey="thirsk" />} />
        <Route path="/locations/wakefield" element={<LocationPage locationKey="wakefield" />} />

        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/tcs" element={<BookingTerms />} />

        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <GDPRBanner />
    </Router>
  );
}

export default App;
