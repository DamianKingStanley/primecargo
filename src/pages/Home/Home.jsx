import React from "react";
import "./Home.css";
import HeroSection from "../../component/HeroSection/HeroSection";
import WriteUpImage from "../../component/WriteUpImage/WriteUpImage";
import ServicesSection from "../../component/ServicesSection/ServicesSection";
import LogisticsFeatures from "../../component/LogisticsFeatures/LogisticsFeatures";
import FeaturedWorks from "../../component/FeaturedWorks/FeaturedWorks";
import OurClients from "../../component/OurClients/OurClients";
// import GlobalPresence from "../../component/Reviews/Reviews";
import TrustedClients from "../../component/TrustedClients/TrustedClients";
// import ContactForm from "../../component/ContactForm/ContactForm";
const Home = () => {
  return (
    <div className="HomepageBody">
      <HeroSection />
      <WriteUpImage />
      <ServicesSection />
      <LogisticsFeatures />
      <FeaturedWorks />
      <OurClients />
      {/* <GlobalPresence /> */}
      <TrustedClients />
      {/* <ContactForm /> */}
    </div>
  );
};

export default Home;
