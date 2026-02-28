import React from "react";
import Hero from "../../Common/Service/Hero"
import { servicesData } from "../../Data/Service/hero"; 
import {servicesDetailsData} from "../../Data/Service/detailsData"
import ServiceDetailsSection from "../../Common/Service/ServiceDetails";
import ExploreOtherServices from "../../Common/Service/ExploreOtherServices";
const MaintenancePage = () => {
  
const pageData = servicesData["maintenance-scheme"];
 const details = servicesDetailsData["maintenance-scheme"];

  return (
    <main className="bg-black min-h-screen">
     
    <Hero {...pageData} />
        <ServiceDetailsSection data={details} />
      <ExploreOtherServices currentService="maintenance-scheme" />
      
     
    </main>
  );
};

export default MaintenancePage;