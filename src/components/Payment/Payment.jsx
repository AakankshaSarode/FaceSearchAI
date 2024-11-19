import React from "react";

import Bg from "../../assets/bg-7.png";
import PricingPlanList from "./PricingPlanList";

const Payment = () => {
  return (
    <>
      <div
        className="relative w-full min-h-screen bg-cover bg-center "
        id="pricing /Payment"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="text-center pt-20 mb-8">
          <h2 className="text-4xl  mt-8 font-bold text-white underline">
            Pricing plans for teams of all sizes
          </h2>
          <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>
        <PricingPlanList />
      </div>
    </>
  );
};

export default Payment;
