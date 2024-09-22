import { BackgroundLines } from "./ui/background-lines";
import { BackgroundBeams } from "./ui/background-beams";
import { Cover } from "./ui/cover";

export default function BackgroundLinesDemo() {
  return (
    <div className="relative z-[-10] flex items-center justify-center min-h-screen bg-black">
      <BackgroundBeams />
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-300 dark:from-neutral-400 dark:to-white text-6xl sm:text-6xl md:text-7xl font-sans py-4 sm:py-10 md:py-20 relative z-20 font-bold tracking-tight mt-[-1rem]">
          Experience the
          <br className="sm:hidden" /> Future at
          <br />
          <Cover>Instruo 2024!</Cover>
        </h2>
        <p className="max-w-xl mx-auto text-base sm:text-base md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-4 sm:mt-6 md:mt-8">
          Join Kolkata&apos;s premier tech fest for innovation, competitions,
          and hands-on workshops. Ignite your ideas and revolutionize the
          future!
        </p>
      </BackgroundLines>
    </div>
  );
}
