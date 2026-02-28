
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
const Thirsk = () => {
    return (
        <main className="bg-black min-h-screen">
            <LocationHero data={locationHeroData["thirsk"]} />
            <LocationServices data={locationServicesData["thirsk"]} />
            <LocationFaq data={locationFaqData["thirsk"]} />
            <LocationOtherAreas data={locationOtherAreasData["thirsk"]} />
            <LocationCta data={locationCtaData["thirsk"]} />
        </main>
    );
};

export default Thirsk;

