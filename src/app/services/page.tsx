"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

const ServicesPage = () => {
  // Specify the type as HTMLDivElement
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const items = [
    {
      id: 1,
      title: "Web/ App Development",
      img: "/web-app.png",
      //   link: "/projects/food-site/index.html",
    },
    {
      id: 2,
      title: "AI/ ML Solutions",
      img: "/ai-ml.jpeg",
      //   link: "/projects/chat-app/index.html",
    },
    {
      id: 3,
      title: "UI/ UX Designing",
      img: "/ui-ux.png",
      //   link: "/projects/event-planner-site/index.html",
    },
    {
      id: 4,
      title: "Digital Marketing",
      img: "/dm.jpeg",
      //   link: "/projects/Calculator/index.html",
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
          Modules
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center " />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center text-center`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl ">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]  ">
                    <Image src={item.img} alt={""} layout="fill" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="h-screen w-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a Project?</h1>
        <div className="relative flex items-center justify-center p-16">
          <Link
            href={"/contact"}
            className="w-16 h-16 md:w-28 md:h-28 absolute inset-0 m-auto font-semibold bg-black text-white hover:bg-white hover:text-black rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
