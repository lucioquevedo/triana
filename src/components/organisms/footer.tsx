import React from "react";
import LogoSvg from "../atoms/logosvg";

const Footer = () => {
  return (
    <footer className="p-5 border-t border-gray-300 flex flex-col items-start lg:flex-row lg:justify-between lg:px-12">
      <LogoSvg />
      <ul className="mt-5 space-y-2 text-gray-600 text-2xl lg:text-xl">
        {pages.map((page) => (
          <li key={page.name}>
            <a href={page.href} className="hover:text-blue-500">
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

const pages = [
  { name: "Inicio", href: "/" },
  { name: "Catálogo", href: "#catalogo" },
  { name: "Sobre nosotros", href: "#about" },
  { name: "Contacto", href: "#contact" },
];
