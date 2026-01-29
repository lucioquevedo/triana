"use client";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="max-w-screen overflow-hidden h-svh max-h-screen p-5 flex flex-col justify-center">
      <h1 className="flex flex-col justify-end overflow-y-hidden">
        <motion.span
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-7xl font-bold w-full lg:text-9xl inline-block overflow-y-hidden"
        >
          TRIANA
        </motion.span>
        <motion.span
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-3xl w-full lg:text-5xl"
        >
          CONSTRUCTORA
        </motion.span>
      </h1>
    </div>
  );
};

export default Hero;
