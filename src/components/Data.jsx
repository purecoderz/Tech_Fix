import { Database } from 'lucide-react';
import React from 'react'
import { FaDollarSign, FaShield, FaRocket } from "react-icons/fa6";
// heroDatas
export const contactInfo = [
  {
    id: 0,
    icon: <FaDollarSign size={20} />,
    title: "Affordable",
    description: "Price",
  },
  {
    id: 1,
    icon: <FaShield size={20} />,
    title: "Skilled",
    description: "Technicians ",
  },
  {
    id: 2,
    icon: <FaRocket size={20} />,
    title: "Quick",
    description: "Repairs",
  },
  {
    id: 3,
    icon: <FaShield size={20} />,
    title: "Technical",
    description: "Support",
  },
];

// services databases
export const services = [
  {
    title: "Phone Repair",
    description: "We fix cracked screens, battery issues, and more.",
    image: "/iphone.webp" // Replace with your actual image URL
  },
  {
    title: "Laptop Repair",
    description: "Hardware upgrades, screen repairs, and software troubleshooting.",
    image: "/repair.webp", // Replace with your actual image URL
  },
  {
    title: "Tablet Repair",
    description: "Repair broken screens, charging ports, and other issues.",
    image: "tablet.webp", // Replace with your actual image URL
  },
  {
    title: "Desktop Repair",
    description: "Fix hardware issues and software errors on desktops.",
    image: "desktop.webp", // Replace with your actual image URL
  },
];


// Why choose us data
export const points = [
  {
    title: "Expert Technicians",
    description: "Our technicians are certified and highly skilled in fixing all types of devices.",
    icon: "💡", // Replace with an actual icon from your library
  },
  {
    title: "Affordable Pricing",
    description: "We offer competitive prices without compromising on quality.",
    icon: "💵", // Replace with an actual icon
  },
  {
    title: "Quick Turnaround",
    description: "We ensure your devices are repaired and returned promptly.",
    icon: "⏱️", // Replace with an actual icon
  },
  {
    title: "Warranty on Repairs",
    description: "Enjoy peace of mind with a warranty on all our repair services.",
    icon: "🛡️", // Replace with an actual icon
  },
];

// testimony Database
export const testimonials = [
  {
    name: "John Doe",
    feedback: "RoyFix provided excellent service! My phone was fixed quickly and works perfectly now.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Jane Smith",
    feedback: "Affordable pricing and professional technicians. Highly recommend RoyFix!",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Mike Johnson",
    feedback: "They gave a warranty on my laptop repair! Amazing service and quick turnaround.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

// slider settings
export const settings = {
  dots: true,
  arrow: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  cssEase: "linear",
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
        breakpoint: 10000,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            
        }
    },
    {
        breakpoint: 1015,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
        }
    },
    {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
           
        }
    },
  ]
};

