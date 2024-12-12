import { FaPhone, FaCalendarAlt, FaTools } from "react-icons/fa";

export default function HowItWorks() {
    const steps = [
      {
        title: "Select Device and Problem",
        description: "Choose your device and specify the issue you're facing.",
        icon: <FaPhone /> , // Replace with an actual icon (e.g., from an icon library like Lucide or FontAwesome)
      },
      {
        title: "Book an Appointment",
        description: "Pick a convenient time and date for your repair.",
        icon: <FaCalendarAlt />,
      },
      {
        title: "Get It Fixed Quickly",
        description: "Our experts will repair your device in no time.",
        icon: <FaTools />,
      },
    ];
  
    return (
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-white text-center mb-12">
      How It Works
    </h2>
    <div className="relative flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center relative"
        >
          {/* Circular Icon Container */}
          <div className="flex items-center justify-center w-24 h-24 bg-white shadow-lg rounded-full">
            <span className="text-purple-600 text-3xl">{step.icon}</span>
          </div>

          {/* Step Badge */}
          <div className="absolute -top-3 right-1/2 transform translate-x-1/2">
            <span className="bg-purple-700 text-white px-4 py-1 text-sm font-semibold rounded-full shadow-md">
              Step {index + 1}
            </span>
          </div>

          {/* Title and Description */}
          <h3 className="text-xl font-semibold text-white mt-6">
            {step.title}
          </h3>
          <p className="text-gray-100 mt-3 max-w-sm">{step.description}</p>

          {/* Arrow Connector */}
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute right-[-90px] top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white opacity-80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      
    );
  }
  