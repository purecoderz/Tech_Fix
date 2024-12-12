import React from "react";
import { points } from "./Data";

export const WhyUs = () => {
  return(
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Why RoyFix?
        </h2>
        <p className="mt-2 text-lg text-indigo-200">
          Discover why our clients trust us with their device repairs.
        </p>
      </div>

      {/* Key Selling Points */}
      <div className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="text-5xl text-white mb-4">{point.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-bold text-white">{point.title}</h3>
            {/* Description */}
            <p className="mt-2 text-sm text-indigo-200">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
