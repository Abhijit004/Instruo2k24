import React from "react";
import { WavyBackgroundDemo } from "../components/wavebg";
import Footer from "../components/footer";
const AboutUs = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-black h-screen w-full">
        <WavyBackgroundDemo />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
