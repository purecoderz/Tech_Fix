import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Testimony } from "./components/Testimony";
import HowItWorks from "./components/HowItWorks";
import FAQS from "./components/FAQS";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <HowItWorks />
      <FAQS />
      <WhyUs />
      <Testimony />
      <Footer />
    </>
  );
}

export default App;
