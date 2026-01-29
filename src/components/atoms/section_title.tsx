"use client";
import { motion, MotionProps } from "motion/react";

const SectionTitle = ({ children, ...props }: SectionTitleProps) => {
  return (
    <motion.h2
      {...props}
      className="text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl"
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;

interface SectionTitleProps extends MotionProps {
  children: React.ReactNode;
}
