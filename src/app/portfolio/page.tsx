"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

const PortfolioPage = () => {
  // Narrow the ref to HTMLDivElement since it's attached to a div
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const items = [
    {
      id: 1,
      title: "Email Validator",
      img: "/email-app.png",
      link: "https://email-validator-hr.vercel.app/",
    },
    {
      id: 2,
      title: "Analog Clock",
      img: "/analog-clock.png",
      link: "https://analog-clock-hr.vercel.app/",
    },
    {
      id: 3,
      title: "Traffic Signal",
      img: "/traffic.png",
      link: "https://traffic-signal-hr.vercel.app/",
    },
    {
      id: 4,
      title: "Food App",
      img: "/food.png",
      link: "https://food-app-hr.vercel.app/",
    },
    {
      id: 5,
      title: "Calculator",
      img: "/calculator.jpg",
      link: "https://calculator-hr.vercel.app/",
    },
    // {
    //   id: 5,
    //   title: "Chat App",
    //   img: "/chat.jpg",
    //   link: "https://chat-app-hr.vercel.app/",
    // },
    // {
    //   id: 6,
    //   title: "Event Planner",
    //   img: "/event-planner.jpg",
    //   link: "https://event-planner-hr.vercel.app/",
    // },
    // {
    //   id: 7,
    //   title: "Stopwatch",
    //   img: "/stopwatch.jpg",
    //   link: "https://stopwatch-hr.vercel.app/",
    // },
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
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl text-center">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt={item.title} layout="fill" />
                  </div>

                  <Link
                    href={item.link}
                    target="blank"
                    className="flex justify-end"
                  >
                    <button className="m-4 p-2 md:p-4 lg:p-8 text-sm md:text-md lg:text-lg bg-black text-red-200 hover:bg-red-200 hover:text-black font-semibold rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
