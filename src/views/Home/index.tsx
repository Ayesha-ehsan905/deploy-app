import Navbar from "../navBar";
import ContentSection from "./Components/contentSection";
import InputSection from "./Components/inputSection";
import HeroSection from "./Components/heroSection";
import StepSection from "./Components/stepSection";
import InfoSection from "./Components/infoSection";
import ConnectSection from "./Components/connectSection";
import Footer from "./Components/footer";
import AttackSection from "./Components/attackSection";
import React from "react";
const Home = () => {
  return (
    <>
      <Navbar />
      <ContentSection />
      <InputSection />
      <HeroSection />
      <StepSection />
      <AttackSection />
      <InfoSection />
      <ConnectSection />
      <Footer />
    </>
  );
};

export default Home;

//Parent div and it will be row
//child div and it will be column and it will have circle line and box
