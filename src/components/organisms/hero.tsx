"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const [scrolledDown, setScrolledDown] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }
  });
  return (
    <section className="max-w-screen overflow-hidden h-svh max-h-screen p-5 flex flex-col justify-center bg-[url(/nordic_36.jpg)]">
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
            className="w-full lg:w-3/4 xl:w-1/2 relative aspect-2481/850"
          >
            <Image
              src="/full_logo.png"
              alt="Triana Constructora Logo"
              /* width={2481}
        height={850} */
              fill
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;

/* 
<AnimatePresence>
        {!scrolledDown && (
          <motion.h1
            layoutId="hero-title"
            className="flex flex-col justify-end overflow-hidden"
          >
            <motion.span
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-7xl font-bold w-full lg:text-9xl inline-block overflow-y-hidden"
              exit={{ x: -500 }}
            >
              TRIANA
            </motion.span>
            <motion.span
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-3xl w-full lg:text-5xl"
              exit={{ x: -300 }}
            >
              CONSTRUCTORA
            </motion.span>
          </motion.h1>
        )}
      </AnimatePresence>
*/
