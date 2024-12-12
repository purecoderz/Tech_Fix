import { services } from "./Data";



export function ServicesSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Premium solutions for all your tech repair needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Header Image */}
              <div className="h-48 w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Card Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>
                <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                  Fix Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
