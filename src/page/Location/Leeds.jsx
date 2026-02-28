
import React from "react";
import LocationHero from "../../Common/Location/LocationHero";
import LocationServices from "../../Common/Location/LocationServices";
import LocationFaq from "../../Common/Location/LocationFaq";
import { locationHeroData } from "../../Data/Location/locationHeroData";
import { locationServicesData } from "../../Data/Location/locationServicesData";
import { locationFaqData } from "../../Data/Location/locationFaqData";
import LocationOtherAreas from "../../Common/Location/LocationOtherAreas";
import LocationCta from "../../Common/Location/LocationCta";
import { locationOtherAreasData } from "../../Data/Location/locationOtherAreasData";
import { locationCtaData } from "../../Data/Location/locationCtaData";
const Leeds = () => {
    return (
        <main className="bg-black min-h-screen">
            <LocationHero data={locationHeroData["leeds"]} />
            <LocationServices data={locationServicesData["leeds"]} />
            <LocationFaq data={locationFaqData["leeds"]} />
            <LocationOtherAreas data={locationOtherAreasData["leeds"]} />
            <LocationCta data={locationCtaData["leeds"]} />
        </main>
    );
};

export default Leeds;

