"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-[85vh] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container (Full width on small devices, half width on large screens) */}
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh] w-full lg:w-1/2 mb-8 lg:mb-0 flex items-center justify-center">
          <Image
            src={"/hero.png"}
            alt={"Hero Image"}
            layout="fill"
            className="object-contain"
          />
        </div>

        
        {/* Text Section */}
        <div className="flex flex-col flex-1 p-4 gap-8 items-center justify-center text-center lg:text-left">
          {/* Title (Responsive font sizes) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Transforming Concepts into Code & AI Solutions
          </h1>

          {/* Description (Adjusting font size for responsiveness) */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Transforming ideas into innovative digital experiences, I bridge
            creativity and technology to solve real-world challenges. With a
            focus on building intelligent, future-forward solutions, I’m
            constantly exploring new tools and techniques to push the boundaries
            of what is possible in software development and AI.
          </p>

          {/* Buttons (Full width on small devices, inline on larger devices) */}
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto p-4 rounded-lg ring-1 ring-black hover:ring-black bg-black text-white hover:bg-white hover:text-black">
              <Link href={"/resume.pdf"}>Resume</Link>
            </button>
            <button className="w-full sm:w-auto p-4 rounded-lg ring-1 ring-black bg-white text-black hover:bg-black hover:text-white">
              <Link href={"/contact"}>Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
