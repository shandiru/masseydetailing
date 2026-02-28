// Pages/PricingPage.jsx
import React from "react";
import PricingHero       from "../components/Price/PricingHero";
import PricingCards      from "../components/Price/PricingCards";
import PricingCompare    from "../components/Price/PricingCompare";
import PricingGoodToKnow from "../components/Price/PricingGoodToKnow";

export default function PricingPage() {
  return (
    <main className="bg-black min-h-screen pt-20">
      <PricingHero />
      <PricingCards />
      <PricingCompare />
      <PricingGoodToKnow />
    </main>
  );
}