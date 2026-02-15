"use client";
import useScrollDown from "@/src/hooks/use_scroll_down";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import NavMenu from "../molecules/nav_menu";

const Header = () => {
  const scrolledDown = useScrollDown();

  return (
    <nav
      className={classNames(
        "z-30 fixed top-0 left-0 w-full max-w-screen justify-between p-5 flex items-center gap-2.5",
        {
          "bg-background shadow-md": scrolledDown,
        },
      )}
    >
      <AnimatePresence>
        {scrolledDown && (
          <motion.div
            initial={{ filter: "blur(5px)", opacity: 0.2 }}
            animate={{ filter: "none", opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 60,
              damping: 10,
            }}
            exit={{ opacity: 0.2, transition: { duration: 0.2 } }}
            className="h-10 relative aspect-2481/850"
          >
            <Image src="/full_logo.png" alt="Triana Constructora Logo" fill />
          </motion.div>
        )}
      </AnimatePresence>
      <NavMenu />
    </nav>
  );
};

export default Header;
