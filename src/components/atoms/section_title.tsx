"use client";
import { motion, MotionProps } from "motion/react";

const SectionTitle = ({ children, ...props }: MotionProps) => {
  return (
    <span className="overflow-y-clip block pb-1.5">
      <motion.h2
        initial={{ y: "99%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl"
        {...props}
      >
        {children}
      </motion.h2>
    </span>
  );
};

export default SectionTitle;
