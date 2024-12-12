import React from "react";
import Slider from "react-slick";
import { settings, testimonials } from "./Data";


export const Testimony = () => {
  return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
            What Our Clients Say
          </h2>
  
          {/* Carousel */}
          <div className="slider-wrapper overflow-hidden">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                  {/* Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full border-4 border-purple-600"
                    />
                  </div>
                  {/* Feedback */}
                  <p className="text-gray-600 italic text-center">
                    "{testimonial.feedback}"
                  </p>
                  {/* Name */}
                  <h4 className="mt-4 text-xl font-bold text-center text-gray-800">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            ))}
          </Slider>
          </div>
        </div>
      </section>
  );
};
