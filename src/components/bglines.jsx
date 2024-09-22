import { BackgroundLines } from "./ui/background-lines";
import { BackgroundBeams } from "./ui/background-beams";
import { Cover } from "./ui/cover";

export default function BackgroundLinesDemo() {
  return (
    <div className="relative z-[-10] flex items-center justify-center min-h-screen bg-black">
      <BackgroundBeams />
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-300 dark:from-neutral-400 dark:to-white text-5xl sm:text-7xl md:text-8xl font-sans py-2 sm:py-20 md:py-30 relative z-20 font-bold tracking-tight mt-[-1rem]">
          Experience the Future at <br />
          Instruo 2024!
        </h2>
        <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-xl text-neutral-700 dark:text-neutral-400 text-center">
          Join Kolkata&apos;s premier tech fest for innovation, competitions,
          and hands-on workshops. Ignite your ideas and revolutionize the
          future!
        </p>
      </BackgroundLines>
    </div>
  );
}
