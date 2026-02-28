import React from "react";
import Hero from "../../Common/Service/Hero"
import { servicesData } from "../../Data/Service/hero"; 
import {servicesDetailsData} from "../../Data/Service/detailsData"
import ServiceDetailsSection from "../../Common/Service/ServiceDetails";
import ExploreOtherServices from "../../Common/Service/ExploreOtherServices";
const FullValetPage = () => {
  
const pageData = servicesData["full-valet"];
 const details = servicesDetailsData["full-valet"];
  return (
    <main className="bg-black min-h-screen">
     
    <Hero {...pageData} />
      <ServiceDetailsSection data={details} />
      <ExploreOtherServices currentService="full-valet" />
      
     
    </main>
  );
};

export default FullValetPage;