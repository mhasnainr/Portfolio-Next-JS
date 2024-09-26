"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { link } from "fs";
import Link from "next/link";
import { title } from "process";
import { useRef } from "react";
import Image from "next/image";

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const items = [
    {
      id: 1,
      title: "Food App",
      img: "/food.png",
      link: "/projects/food-site/index.html",
    },
    {
      id: 2,
      title: "Chat App",
      img: "/chat.jpg",
      link: "/projects/chat-app/index.html",
    },
    {
      id: 3,
      title: "Event Planner",
      img: "/event-planner.jpg",
      link: "/projects/event-planner-site/index.html",
    },
    {
      id: 4,
      title: "Calculator",
      img: "/calculator.jpg",
      link: "/projects/Calculator/index.html",
    },
    {
      id: 5,
      title: "Stopwatch",
      img: "/stopwatch.jpg",
      link: "/projects/Stopwatch/index.html",
    },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className="w-screen h-[calc(100vh - 6rem)] flex text-center items-center justify-center text-8xl p-36">
          My Work
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center " />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center `}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl text-center">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt={""} layout="fill" />
                  </div>

                  <Link
                    href={item.link}
                    target="blank"
                    className="flex justify-end"
                  >
                    <button className="m-4 p-2 md:p-4 lg:p-8 text-sm md:text-md lg:text-lg bg-black text-red-200  hover:bg-red-200 hover:text-black  font-semibold rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* <div className="h-screen w-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a Project?</h1>
        <div className="relative flex items-center justify-center p-16">
          <Link
            href={"/contact"}
            className="w-16 h-16 md:w-28 md:h-28 absolute inset-0 m-auto font-semibold bg-black text-white hover:bg-white hover:text-black rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div> */}
    </motion.div>
  );
};

export default PortfolioPage;
