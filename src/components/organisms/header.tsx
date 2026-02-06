"use client";
import useScrollDown from "@/src/hooks/use_scroll_down";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import NavList from "../molecules/nav_list";

const Header = () => {
  const scrolledDown = useScrollDown();

  return (
    <nav
      className={classNames(
        "z-50 fixed top-0 left-0 w-full max-w-screen justify-between p-5 flex items-center gap-2.5",
        {
          "bg-background": scrolledDown,
        },
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
      <NavList />
    </nav>
  );
};

export default Header;
