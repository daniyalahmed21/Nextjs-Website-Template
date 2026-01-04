"use client";
import Image from "next/image";
import { motion } from "motion/react";

const LandingImages = () => {
  return (
    <div
      className="relative min-h-140 w-full perspective-distant mt-2 
   "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.1,
        }}
        className=" perspective-[4000px] "
      >
        <Image
          src="/HeartBeats.png"
          alt="Analytics"
          className=" absolute inset-0 rounded-lg  mask-r-from-0% mask-b-from-0% border border-neutral-200"
          height={1080}
          width={1920}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className=" perspective-[4000px] translate-x-20 -translate-y-10 md:-translate-y-40"
      >
        <Image
          src="/Incidents.png"
          alt="Incidents"
          className="absolute inset-0 rounded-lg  border border-neutral-200  "
          height={1080}
          width={1920}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default LandingImages;
