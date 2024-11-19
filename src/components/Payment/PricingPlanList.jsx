import React from "react";
import PricingPlans from "../../data";
import { motion } from "framer-motion";

const PricingPlanList = () => {
  return (
    <div className="mx-auto max-w-7xl grid lg:grid-cols-3 lg:gap-12 gap-8 py-24 px-4 sm:px-6 lg:px-8">
      {PricingPlans.map((plan) => (
        <div
          key={plan.title}
          className="border-slate-200 border shadow-lg p-8 bg-white rounded-2xl relative"
        >
          <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>
          {plan.mostPopular && (
            <p className="absolute top-0 -translate-y-1/2 bg-cyan-500  px-3 py-0.5 text-white text-sm font-semibold tracking-wide rounded-full shadow-md">
              Most Popular
            </p>
          )}
          <p className="mt-4 text-slate-700 text-sm leading-6">
            {plan.description}
          </p>
          <div className="p-6 mt-4 bg-slate-50 rounded-lg -mx-6">
            <p className="text-sm font-semibold text-slate-500 items-center">
              <span>{plan.currency}</span>
              <span className="text-4xl text-slate-900">${plan.price}</span>
              <span className="ml-1.5 ">{plan.frequency}</span>
            </p>
          </div>
          {/* feature */}
          <ul className="mt-6 space-y-4 flex-1">
            { plan.features.map((feature) => (
              <li
                key={feature}
                className="text-sm leading-6 text-slate-700 flex"
              >
                <svg
                  className="h-5 w-5 text-cyan-500 shrink-0"
                  fill="#000000"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_iconCarrier">
                    <polyline
                      points="21 5 12 14 8 10"
                      style={{
                        fill: "none",
                        stroke: "#2ca9bc",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    ></polyline>
                    <path
                      d="M21,11v9a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H16"
                      style={{
                        fill: "none",
                        stroke: "#ffffff",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    ></path>
                  </g>
                </svg>
                <span className="ml-3">{feature}</span>
              </li>
            ))}
          </ul>
          {/* call to action */}
          <a
            href="#"
            className={`mt-8 px-6 py-4 block font-semibold leading-4 text-center rounded-lg
              ${plan.mostPopular
                ? 'text-white bg-cyan-600 shadow-md hover:bg-cyan-600'
                : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100'}`}
          >
            {plan.cta}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PricingPlanList;
