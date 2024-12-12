import React from 'react';

const Footer = () => {
  // Contact Info Array
  const contactInfo = [
    { label: 'Phone', value: '+1 234 567 890', link: 'tel:+1234567890' },
    { label: 'Email', value: 'support@royfix.com', link: 'mailto:support@royfix.com' },
    { label: 'Address', value: '123 Tech Street, City, Country' }
  ];

  // Quick Links Array
  const quickLinks = [
    { label: 'Home', link: '#home' },
    { label: 'Services', link: '#services' },
    { label: 'About Us', link: '#about' },
    { label: 'Contact Us', link: '#contact' }
  ];

  // Social Media Links Array
  const socialLinks = [
    { platform: 'Facebook', link: 'https://facebook.com/royfix', iconClass: 'fab fa-facebook-f' },
    { platform: 'Twitter', link: 'https://twitter.com/royfix', iconClass: 'fab fa-twitter' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl text-purple-600 font-semibold mb-4">Contact Us</h3>
            <ul>
              {contactInfo.map((item, index) => (
                <li key={index} className="mb-2">
                  {item.link ? (
                    <a href={item.link} className="hover:text-indigo-600">
                      {item.label}: {item.value}
                    </a>
                  ) : (
                    <p>{item.label}: {item.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-purple-600 font-semibold mb-4">Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.link} className="hover:text-purple-600">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl text-purple-600 font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-white hover:text-purple-600"
                  aria-label={social.platform}
                >
                  <i className={social.iconClass}></i> {/* Add FontAwesome icons */}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} RoyFix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
