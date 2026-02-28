import React from "react";
import Hero from "../../Common/Service/Hero"
import { servicesData } from "../../Data/Service/hero"; 
import {servicesDetailsData} from "../../Data/Service/detailsData"
import ServiceDetailsSection from "../../Common/Service/ServiceDetails";
import ExploreOtherServices from "../../Common/Service/ExploreOtherServices";
const DeepCleanPage = () => {
  
const pageData = servicesData["deep-clean"];
const details = servicesDetailsData["deep-clean"];
  return (
    <main className="bg-black min-h-screen">
     
    <Hero {...pageData} />
      <ServiceDetailsSection data={details} />
  <ExploreOtherServices currentService="deep-clean" />
     
    </main>
  );
};

export default DeepCleanPage;