import { Menu, X, Smartphone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

export function Navbar() {
  const navLinks = ["Home", "About Us", "Contact Us"];
  const servicesLinks = [
    "Phone Repair",
    "Laptop Repair",
    "Tablet Repair",
    "Desktop Repair",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r  from-purple-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Smartphone className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">RoyFix</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  {item}
                </Link>
              ))}
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white text-purple-600 rounded-md shadow-lg z-10">
                    {servicesLinks.map((service) => (
                      <a
                        key={service}
                        href="#"
                        className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-colors"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Fix Now
              </button>
            </div>
          </div>

          {/* mobile display */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
            >
              {isOpen ? (
                <X className="h-6 fixed z-50 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden  fixed inset-0 bg-white/10 backdrop-blur-lg z-40">
          <div className="px-2 pt-20  pb-3 space-y-6">
            <hr />
            {navLinks.map((item) => (
              <Link
                className="block text-white hover:bg-white/10 px-3 py-2 rounded-md text-lg font-medium"
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={20}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-lg font-medium flex items-center w-full"
              >
                Services
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="space-y-1">
                  {servicesLinks.map((service) => (
                    <a
                      key={service}
                      href="#"
                      className="block text-white hover:bg-white/10 px-6 py-2 rounded-md text-sm font-medium"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <button className="w-full bg-white text-purple-600 px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
