"use client";
import Image from "next/image";
import { motion } from "motion/react";

const LandingImages = () => {
  return (
    <div className="relative p-10 sm:-mb-30 sm:h-screen w-full">
      <div className="absolute z-50 inset-x-0 bg-white w-full h-full mask-t-from-0% "></div>

      <div
        className="relative min-h-50 sm:min-h-100 w-full perspective-distant mt-2 
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
            src="/incident.png"
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
    </div>
  );
};

export default LandingImages;
