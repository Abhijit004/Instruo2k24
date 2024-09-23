import React from "react";
import BackgroundLinesDemo from "../components/bglines";
import { FeaturesSectionDemo } from "../components/features";
import { InfiniteMovingCardsDemo } from "../components/infinite";
import Footer from "../components/footer";
const Home = () => {
  return (
    <div>
      <BackgroundLinesDemo />
      <h2 className="text-4xl sm:text-5xl font-bold text-center bg-black text-white tracking-tight leading-tight px-4 py-6">
        Amazing Things <br className="sm:hidden" />
        Coming <span className="text-blue-500">Soon</span>
      </h2>
      <FeaturesSectionDemo />
      <h2 className="text-4xl sm:text-5xl font-bold text-center bg-black text-white tracking-tight leading-tight px-4 py-6">
        What People Are <br className="sm:hidden" />
        <span className="text-blue-500">Saying</span>
      </h2>
      <InfiniteMovingCardsDemo />
      <Footer />
    </div>
  );
};

export default Home;
