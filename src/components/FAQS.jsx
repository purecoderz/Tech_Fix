import React, { useState } from 'react';

 const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "How long do repairs take?", answer: "Most repairs take between 1-2 hours depending on the issue." },
    { question: "Do you offer a warranty?", answer: "Yes, we offer a 90-day warranty on all repairs." },
    { question: "Can I book online?", answer: "Yes, you can book your repair via our website or app." },
    { question: "How can I submit my phone for repair?", 
        answer: "You can drop off your phone at our store, or we can arrange for a pick-up or shipping service to make it more convenient for you." }

  ];

  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAnswer(index)}>
                <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                <svg
                  className={`h-5 w-5 text-gray-600 transform ${activeIndex === index ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQS;
