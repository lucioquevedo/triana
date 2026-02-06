"use client";
import useScrollDown from "@/src/hooks/use_scroll_down";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const Hero = () => {
  const scrolledDown = useScrollDown();

  return (
    <section
      className="max-w-screen overflow-hidden h-svh max-h-screen flex flex-col justify-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgb(55, 83, 108, 0.73)), url(/hero_bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AnimatePresence>
        {!scrolledDown && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 60,
              damping: 10,
            }}
            exit={{ x: "-100%", transition: { duration: 0.2 } }}
            className="w-full lg:w-3/4 xl:w-1/2 relative aspect-2481/1241"
          >
            <Image
              src="/full_logo_white.png"
              alt="Triana Constructora Logo"
              preload
              fill
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
