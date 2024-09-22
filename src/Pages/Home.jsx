import React from "react";
import BackgroundLinesDemo from "../components/bglines";
import { FeaturesSectionDemo } from "../components/features";

const Home = () => {
  return (
    <div>
      <BackgroundLinesDemo />
      <h2 className="text-5xl font-bold text-center bg-black text-white">
        Amazing Things Coming <span className="text-blue-500">Soon</span>
      </h2>
      <FeaturesSectionDemo />
    </div>
  );
};

export default Home;

