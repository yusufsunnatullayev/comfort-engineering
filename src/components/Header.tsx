"use client";

import React, { useState } from "react";
import logo from "../../public/assets/blue-logo.svg";
import Image from "next/image";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  {
    id: 1,
    title: "О НАС",
    path: "#about",
  },
  {
    id: 2,
    title: "ПРОЕКТЫ",
    path: "#projects",
  },
  {
    id: 3,
    title: "МИССИЯ",
    path: "#mission",
  },
  {
    id: 4,
    title: "БЛОГ",
    path: "#blog",
  },
];

const Header = ({
  background,
  logoImage,
  color,
}: {
  background?: string;
  logoImage?: any;
  color?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`w-full bg-${
          background || "black"
        } flex items-center justify-between py-8 px-5 md:px-10`}
      >
        <Link href={"/"}>
          <Image src={logoImage || logo} alt="comfort-engineering" />
        </Link>
        <ul className="hidden md:flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className={`font-medium text-xs ${
                  color
                    ? `text-${color} hover:text-${color}/80`
                    : "text-white hover:text-white/80"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact">
          <button className="hidden md:flex font-medium text-sm text-white bg-[#083CBC] hover:bg-[#083CBC]/90 rounded-xl py-2 px-6 cursor-pointer">
            Контакты
          </button>
        </a>

        <HiOutlineMenuAlt4
          size={30}
          color="#787878"
          className="flex md:hidden"
          onClick={() => setOpen(true)}
        />
      </nav>
      {open && (
        <motion.div
          className="fixed top-0 right-0 w-48 h-screen z-50 flex flex-col p-4 bg-black/80 backdrop-blur-md"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <button
            onClick={() => setOpen(false)}
            className="self-end text-white text-xl"
          >
            ✕
          </button>
          <nav className="flex flex-col gap-4 mt-8 text-white text-lg">
            <ul className="flex flex-col items-start justify-center gap-8">
              {navItems.map((item) => (
                <li key={item.id} onClick={() => setOpen(false)}>
                  <a
                    href={item.path}
                    className={`font-medium text-xs hover:text-white/80`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
