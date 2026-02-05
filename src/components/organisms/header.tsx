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
        "z-50 fixed top-0 left-0 w-full max-w-screen overflow-hidden justify-between p-5 flex items-center gap-2.5",
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
      <AnimatePresence>
        {scrolledDown && (
          <ul className="hidden md:flex items-center gap-5 text-sm font-medium mx-2.5">
            {links.map((link, idx) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 60,
                  damping: 10,
                }}
              >
                <a
                  href={link.href}
                  className="text-main-color hover:text-detail"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;

const links = [
  {
    name: "Catalogo",
    href: "#catalogo",
  },
  {
    name: "Sobre Nosotros",
    href: "#about",
  },
  {
    name: "Contacto",
    href: "#contact",
  },
];
