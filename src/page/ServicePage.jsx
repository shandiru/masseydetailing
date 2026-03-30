import React from "react";
import Hero from "../Common/Service/Hero"
import { servicesData } from "../Data/Service/hero";
import { servicesDetailsData } from "../Data/Service/detailsData"
import ServiceDetailsSection from "../Common/Service/ServiceDetails";
import ExploreOtherServices from "../Common/Service/ExploreOtherServices";

import { Navigate } from "react-router-dom";

const ServicePage = ({ serviceKey }) => {
  const pageData = servicesData[serviceKey];
  const details = servicesDetailsData[serviceKey];

  // Safety check: if the key doesn't exist in your data, 
  // redirect to home or show 404
  if (!pageData || !details) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="bg-black min-h-screen">
      <Hero {...pageData} />
      <ServiceDetailsSection data={details} />
      <ExploreOtherServices currentService={serviceKey} />
    </main>
  );
};

export default ServicePage;