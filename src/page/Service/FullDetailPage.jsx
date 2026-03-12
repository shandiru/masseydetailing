import React from "react";
import Hero from "../../Common/Service/Hero"
import { servicesData } from "../../Data/Service/hero"; 
import {servicesDetailsData} from "../../Data/Service/detailsData"
import ServiceDetailsSection from "../../Common/Service/ServiceDetails";
import ExploreOtherServices from "../../Common/Service/ExploreOtherServices";
const FullDetailPage = () => {
  
const pageData = servicesData["7 Year Ceramic"];
 const details = servicesDetailsData["7 Year Ceramic"];
  return (
    <main className="bg-black min-h-screen">
     
    <Hero {...pageData} />
     <ServiceDetailsSection data={details} />
     <ExploreOtherServices currentService="7 Year Ceramic" />
      
     
    </main>
  );
};

export default FullDetailPage;