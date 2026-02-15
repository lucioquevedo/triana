"use client";
import useScrollDown from "@/src/hooks/use_scroll_down";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const scrolledDown = useScrollDown();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["1 1", "1 0"],
  });

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"],
  );

  const y = useTransform(scrollYProgress, [0, 1], ["0", "-100%"]);

  return (
    <section
      className="max-w-screen overflow-hidden h-svh max-h-screen flex flex-col justify-center items-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgb(55, 83, 108, 0.73)), url(/hero_bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={containerRef}
    >
      {/* <AnimatePresence>
        {!scrolledDown && ( */}
      <div className="overflow-hidden w-full lg:w-3/4 xl:w-1/2">
        <motion.div
          initial={{ y: "100%", filter: "blur(10px)" }}
          animate={{ y: 0, filter: "none" }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
          /* exit={{
                y: "-100%",
                filter: "blur(10px)",
                transition: { duration: 0.6 },
              }} */
          style={{ filter, y }}
          className="w-full relative aspect-2025/614"
        >
          <Image
            src="/full_logo_white.png"
            alt="Triana Constructora Logo"
            preload
            fill
          />
        </motion.div>
      </div>
      {/* )}
      </AnimatePresence> */}
    </section>
  );
};

export default Hero;
