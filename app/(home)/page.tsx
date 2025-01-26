import HeroSection from "@/components/HeroSection";
import PricingPage from "@/components/PricingPage";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="mt-5 w-full">
        <HeroSection />
      </div>
      <div>
        <PricingPage />
      </div>
    </div>
  );
};

export default HomePage;
