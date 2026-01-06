"use client"
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const logos = [
  {
    title: "redis",
    src: "/redis.png",
  },
  {
    title: "Drata",
    src: "/drata.webp",
  },
  {
    title: "ametek",
    src: "/ametek.png",
  },
  {
    title: "raycast",
    src: "/raycast.avif",
  },
  {
    title: "Decathlon",
    src: "/Decathlon.png",
  },
  {
    title: "Canada",
    src: "/Canada.png",
  },
];

const LogoList = () => {
  return (
    <section className="w-full flex flex-col items-center gap-12 p-2 sm:mt-20">
      <div className="max-w-2xl text-center">
        <h3 className=" md:text-lg lg:text-xl font-semibold leading-relaxed">
          <span className="text-neutral-600 ">
            Trusted by modern operators across industries.
          </span>
          <br />
          <span className="text-neutral-400 font-medium">
            From pilot to scale without chaos.
          </span>
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl  mx-auto">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.title}
            initial={{
              y: -10,
              opacity: 0,
              filter: "blur(10px)",
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            className="flex items-center justify-center"
          >
            <Image
              src={logo.src}
              width={80}
              height={80}
              alt={logo.title}
              className="w-auto grayscale object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LogoList;