"use client";
import classNames from "classnames";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
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
    <nav
      className={classNames(
        "z-50 fixed top-0 left-0 w-full max-w-screen overflow-hidden p-5 flex items-center gap-2.5",
        { "bg-background": scrolledDown },
      )}
    >
      <AnimatePresence>
        {scrolledDown && (
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
            className="h-10 relative aspect-2481/850"
          >
            <Image src="/full_logo.png" alt="Triana Constructora Logo" fill />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;

/* 

  <svg
        width="41"
        height="43"
        viewBox="0 0 41 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="invert"
      >
        <path
          d="M0.5 20.9342L20.4695 0.709991L23.3397 3.59041L4.53053 22.7115V37.6039H36.4084V22.6502L26.3321 12.4155H26.271L15.645 23.0179L12.7748 20.1375V20.0762L26.271 6.65469H26.3321L40.4389 20.9342L40.5 41.71H0.5V20.9342Z"
          fill="#1A1A1A"
        />
      </svg>
      <AnimatePresence>
        {scrolledDown && (
          <motion.div
            layoutId="header-title"
            className="invert flex flex-col overflow-hidden"
          >
            <motion.span
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text font-extrabold"
              exit={{ y: -500 }}
            >
              TRIANA
            </motion.span>
            <motion.span
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-sm font-light"
              exit={{ y: -300 }}
            >
              CONSTRUCTORA
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

*/
