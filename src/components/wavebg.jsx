"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy";

export function WavyBackgroundDemo() {
  return (
    <div className="flex justify-center items-center h-screen">
      <WavyBackground className="max-w-4xl mx-auto text-center">
        <p className="text-7xl text-white font-bold inter-var mb-4">
          The largest in Kolkata and the second largest in West Bengal
        </p>
        <p className="text-base text-white font-normal inter-var">
          Instruo started its journey way back in 2009 with the aim to bring a tech-culture among the students of the university and expose them to the latest technology. Since then Instruo has grown rapidly, created more innovative minds and inspired many. Our Mission is to drive innovation in the youth and provide a platform to them where their skill and expertise would be remarked and rewarded.
        </p>
      </WavyBackground>
    </div>
  );
}

