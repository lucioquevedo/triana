"use client";
import { motion, stagger, Variants } from "motion/react";
import { useState } from "react";
import NavMenuToggle from "../atoms/nav_menu_toggle";
import Image from "next/image";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      className="absolute w-full h-8 inset-0 z-50"
      initial={{ opacity: 0 }}
      variants={{
        open: {
          opacity: 1,
        },
        closed: {
          opacity: 1,
        },
      }}
      transition={{ delay: 0.9 }}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        variants={sidebarVariants}
        className="bg-background absolute w-full h-screen -z-10"
      />
      <div className="flex flex-col justify-between h-screen">
        <motion.ul
          variants={navVariants}
          className="z-50 flex flex-col gap-4 mt-20 p-5 tracking-tighter"
        >
          {links.map((link, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold"
              onClick={() => setIsOpen(false)}
              whileHover={{
                textDecoration: "underline",
                color: "var(--main-color)",
              }}
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          className="relative aspect-2481/850 w-1/2 md:w-1/4"
          variants={logoVariants}
        >
          <Image src="/full_logo.png" alt="triana logo" fill />
        </motion.div>
      </div>
      <NavMenuToggle toggle={() => setIsOpen(!isOpen)} />
    </motion.nav>
  );
};

export default NavMenu;

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

const navVariants = {
  open: {
    transition: { delayChildren: stagger(0.07, { startDelay: 0.5 }) },
  },
  closed: {
    transition: { delayChildren: stagger(0.05, { from: "last" }) },
    display: "none",
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const sidebarVariants: Variants = {
  open: {
    clipPath: "circle(2200px at calc(100% - 32px) 38px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(25px at calc(100% - 32px) 38px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const logoVariants: Variants = {
  open: {
    display: "flex",
    transition: {
      delay: 1,
    },
  },
  closed: {
    display: "none",
  },
};
