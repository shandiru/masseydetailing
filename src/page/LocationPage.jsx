import React from "react";
import { Navigate } from "react-router-dom";

// Data Imports
import { locationHeroData } from "../Data/Location/locationHeroData";
import { locationServicesData } from "../Data/Location/locationServicesData";
import { locationFaqData } from "../Data/Location/locationFaqData";
import { locationOtherAreasData } from "../Data/Location/locationOtherAreasData";
import { locationCtaData } from "../Data/Location/locationCtaData";

// Common Components
import LocationHero from "../Common/Location/LocationHero";
import LocationServices from "../Common/Location/LocationServices";
import LocationFaq from "../Common/Location/LocationFaq";
import LocationOtherAreas from "../Common/Location/LocationOtherAreas";
import LocationCta from "../Common/Location/LocationCta";

// Map Sections (Import all maps here)
import BoroughbridgeMapSection from "../components/Location/BoroughbridgeMap";
import GarforthMapSection from "../components/Location/GarforthMap";
import HarrogateMapSection from "../components/Location/HarrogateMap";
import LeedsMapSection from "../components/Location/LeedsMap";
import ThirskMapSection from "../components/Location/ThirskMap";
import WakefieldMapSection from "../components/Location/WakefieldMap";

// Mapping Object to handle specific maps per city
const CITY_MAPS = {
  boroughbridge: BoroughbridgeMapSection,
  garforth: GarforthMapSection,
  harrogate: HarrogateMapSection,
  leeds: LeedsMapSection,
  thirsk: ThirskMapSection,
  wakefield: WakefieldMapSection,
};

const LocationPage = ({ locationKey }) => {
  const heroData = locationHeroData[locationKey];
  const servicesData = locationServicesData[locationKey];
  const faqData = locationFaqData[locationKey];

  // Safety check: if key doesn't exist, redirect home
  if (!heroData) {
    return <Navigate to="/" replace />;
  }

  // Identify which map to show
  const MapSection = CITY_MAPS[locationKey];

  return (
    <main className="bg-black min-h-screen">
      <LocationHero data={heroData} />
      <LocationServices data={servicesData} />
      
      {/* Dynamically render the correct map if it exists */}
      {MapSection && <MapSection />}
      
      <LocationFaq data={faqData} />
      <LocationOtherAreas data={locationOtherAreasData["location"]} />
      <LocationCta data={locationCtaData["button"]} />
    </main>
  );
};

export default LocationPage;