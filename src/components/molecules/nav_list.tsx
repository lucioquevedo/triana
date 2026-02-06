"use client";
import useScrollDown from "@/src/hooks/use_scroll_down";
import { Menu, X } from "@deemlol/next-icons";
import classNames from "classnames";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NavList = () => {
  const [open, setOpen] = useState(false);
  const scrolledDown = useScrollDown();

  return (
    <>
      {open && scrolledDown && (
        <button className="md:hidden" onClick={() => setOpen(false)}>
          <X />
        </button>
      )}
      {!open && scrolledDown && (
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      )}
      {scrolledDown && (
        <ul
          className={classNames(
            "z-50 md:flex md:relative md:items-center md:flex-row md:top-0 gap-5 w-fit text-sm font-medium md:mx-2.5",
            {
              "flex flex-col absolute top-20 left-0 w-full h-fit p-5": open,
              hidden: !open,
              "bg-background": scrolledDown,
            },
          )}
        >
          {links.map((link, idx) => (
            <AnimatePresence key={link.name}>
              <motion.li
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
            </AnimatePresence>
          ))}
        </ul>
      )}
    </>
  );
};

export default NavList;

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
