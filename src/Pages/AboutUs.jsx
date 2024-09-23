import React from "react";
import { WavyBackgroundDemo } from "../components/wavebg";
import Footer from "../components/footer";
const AboutUs = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-black min-h-screen w-full py-20">
        <WavyBackgroundDemo />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
