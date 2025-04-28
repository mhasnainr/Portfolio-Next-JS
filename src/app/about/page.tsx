"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AboutPage = () => {
  // Define that this ref will point to an HTMLDivElement
  const containerRef = useRef<HTMLDivElement>(null);

  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Main Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* Biography Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Biography Title */}
            <h1 className="font-bold text-2xl">Overview</h1>
            {/* Biography Desc */}
            <p className="text-lg">
              Driven by curiosity and a commitment to innovation, I turn complex
              challenges into streamlined, user-centered solutions. With
              experience spanning across both web development and AI, I craft
              engaging digital experiences that resonate with modern needs.
              Continuously adapting to the evolving landscape of technology, I
              approach each project with fresh perspectives and a focus on
              delivering impactful results.
            </p>
            {/* Biography Quote */}
            <span className="italic">
              First do hard work, then rely on luck
            </span>
          </div>

          {/* Skills Container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* Skills Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Skills
            </motion.h1>

            {/* Skills List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              <div className="rounded p-2 text-sm cursor-pointer ">
                <Image src={"/html.png"} alt={"html"} width={60} height={60} />
              </div>
              <div className="rounded p-2 text-sm cursor-pointer ">
                <Image src={"/css.png"} alt={"css"} width={60} height={60} />
              </div>
              <div className="rounded p-2 text-sm cursor-pointer ">
                <Image
                  src={"/tailwind.png"}
                  alt={"tailwind"}
                  width={60}
                  height={60}
                />
              </div>
              {/* <div className="rounded p-2 text-sm cursor-pointer ">
                <Image src={"/ts.png"} alt={"ts"} width={60} height={60} />
              </div> */}              
              <div className="rounded p-2 text-sm cursor-pointer ">
                <Image
                  src={"/next-js.png"}
                  alt={"next-js"}
                  width={60}
                  height={60}
                />
              </div>
              <div className="rounded p-2 text-sm cursor-pointer ">
                <Image src={"/js.png"} alt={"js"} width={60} height={60} />
              </div>
              <div className="rounded p-2 text-sm cursor-pointer ">
                <Image src={"/python.png"} alt={"js"} width={60} height={60} />
              </div>
            </motion.div>
          </div>

          {/* Experience */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* Experience Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            {/* Experience List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* Experience List Items */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 ">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    IT Operations Intern — Remote
                  </div>
                  {/* Job Desc */}
                  <div className="p-3 text-sm">
                    ❖ Optimize LinkedIn Profile
                    <br />❖ Build a simple welcome (landing) page with a navbar
                    <br />❖ Made a Career Page for the Offensiox website
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    July 2024 - August 2024
                  </div>
                  {/* Company Name */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    OffensioX
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3 "></div>
              </div>

              {/* Second Experience List Items */}
              {/* <div className="flex justify-between h-48"> */}
                {/* Left */}
                {/* <div className="w-1/3 "></div> */}
                {/* Center */}
                {/* <div className="w-1/6 "> */}
                  {/* Line */}
                  {/* <div className="w-1 h-full bg-gray-600 rounded relative"> */}
                    {/* Line Circle */}
                    {/* <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div> */}
                  {/* </div> */}
                {/* </div> */}
                {/* Right */}
                {/* <div className="w-1/3 "> */}
                  {/* Job Title */}
                  {/* <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  </div> */}
                  {/* Job Desc */}
                  {/* <div className="p-3 text-sm">
                    ❖ 
                  </div> */}
                  {/* Job Date */}
                  {/* <div className="p-3 text-blue-400 text-sm font-semibold">
                  </div> */}
                  {/* Company Name */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  </div> */}
                {/* </div> */}
              {/* </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
