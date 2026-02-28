
import React from "react";
import LocationHero from "../../Common/Location/LocationHero";
import LocationServices from "../../Common/Location/LocationServices";
import LocationFaq from "../../Common/Location/LocationFaq";
import { locationHeroData } from "../../Data/Location/locationHeroData";
import { locationServicesData } from "../../Data/Location/locationServicesData";
import { locationFaqData } from "../../Data/Location/locationFaqData";
import LocationOtherAreas from "../../Common/Location/LocationOtherAreas";
import LocationCta        from "../../Common/Location/LocationCta";
import { locationOtherAreasData } from "../../Data/Location/locationOtherAreasData";
import { locationCtaData }        from "../../Data/Location/locationCtaData";
const Boroughbridge = () => {
  return (
    <main className="bg-black min-h-screen">
      <LocationHero     data={locationHeroData["boroughbridge"]}     />
      <LocationServices data={locationServicesData["boroughbridge"]} />
      <LocationFaq      data={locationFaqData["boroughbridge"]}      />
      <LocationOtherAreas data={locationOtherAreasData["boroughbridge"]} />
  <LocationCta       data={locationCtaData["boroughbridge"]}       />
    </main>
  );
};

export default Boroughbridge;

// ─────────────────────────────────────────────
// Other location pages follow the exact same pattern:
//
// HarrogatePage.jsx   → key: "harrogate"
// ThirskPage.jsx      → key: "thirsk"
// LeedsPage.jsx       → key: "leeds"
// GarforthPage.jsx    → key: "garforth"
// WakefieldPage.jsx   → key: "wakefield"
// ─────────────────────────────────────────────