import React from 'react';
import FeatureCard from "./FeatureCard";
import FeatureBg from "../../assets/bg2.png";

const Feature = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-cover bg-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={FeatureBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center pt-20 mb-8">
        <h2 className="text-4xl font-bold text-white underline">Our Features</h2>
        <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
          Explore the cutting-edge tools we offer to simplify your connections, expand your network, and uncover fascinating insights with ease.
        </p>
      </div>
      <div className="overflow-auto w-full mb-8"> {/* This ensures scrolling if content overflows */}
        <FeatureCard />
      </div>
    </div>
  );
};

export default Feature;
