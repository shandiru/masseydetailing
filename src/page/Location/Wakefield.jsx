
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
const Wakefield = () => {
    return (
        <main className="bg-black min-h-screen">
            <LocationHero data={locationHeroData["wakefield"]} />
            <LocationServices data={locationServicesData["wakefield"]} />
            <LocationFaq data={locationFaqData["wakefield"]} />
            <LocationOtherAreas data={locationOtherAreasData["wakefield"]} />
            <LocationCta data={locationCtaData["wakefield"]} />
        </main>
    );
};

export default Wakefield;

