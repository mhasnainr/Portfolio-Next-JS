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
      <div className="h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="relative h-full w-full lg:w-1/2">
          <Image
            src={"/hero.png"}
            alt={""}
            layout="fill"
            className="object-contain"
          />
        </div>
        {/* Text */}
        <div className="flex flex-col flex-1 p-4 gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Transforming Concepts into Code & AI Solutions
          </h1>
          {/* description */}
          <p className="md:text-xl">
            Transforming ideas into innovative digital experiences, I bridge
            creativity and technology to solve real-world challenges. With a
            focus on building intelligent, future-forward solutions, I’m
            constantly exploring new tools and techniques to push the boundaries
            of what's possible in software development and AI.
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black hover:ring-black bg-black text-white hover:bg-white hover:text-black">
              <Link href={"/resume.pdf"}>Resume</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black hover:bg-black hover:text-white">
              <Link href={"/contact"}>Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
