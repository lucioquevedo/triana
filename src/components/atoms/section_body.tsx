"use client";
import { motion, MotionProps } from "motion/react";

const SectionBody = ({ children, ...props }: MotionProps) => {
  return (
    <motion.p
      {...props}
      initial={{
        filter: "blur(5px)",
      }}
      whileInView={{
        filter: "none",
      }}
      transition={{ duration: 0.4 }}
      className="text-gray-600 my-3 tracking-tight xl:text-2xl"
    >
      {children}
    </motion.p>
  );
};

export default SectionBody;
