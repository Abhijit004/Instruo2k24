"use client";
import { WavyBackground } from "./ui/wavy";
import { motion } from "framer-motion";

export function WavyBackgroundDemo() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
      <WavyBackground className="max-w-5xl mx-auto text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-8xl text-white font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Kolkata&apos;s Premier
          <br className="hidden lg:inline" /> Tech Extravaganza
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg lg:text-xl text-gray-200 font-light leading-relaxed"
        >
          Since 2009, Instruo has been at the forefront of fostering tech
          innovation among students. We&apos;ve grown from a university
          initiative to West Bengal&apos;s second-largest tech fest, inspiring
          countless minds along the way.
        </motion.p>
      </WavyBackground>
    </div>
  );
}
