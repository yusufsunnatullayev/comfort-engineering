import React from "react";
import logo from "../../public/assets/blue-logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="w-full bg-black flex items-center justify-between py-8 px-10">
      <Image src={logo} alt="comfort-engineering" />
      <ul className="flex items-center justify-center gap-8">
        <li>
          <a href="#about" className="font-medium text-xs hover:text-white/80">
            О НАС
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="font-medium text-xs hover:text-white/80"
          >
            ПРОЕКТЫ
          </a>
        </li>
        <li>
          <a
            href="#mission"
            className="font-medium text-xs hover:text-white/80"
          >
            МИССИЯ
          </a>
        </li>
        <li>
          <a href="#blog" className="font-medium text-xs hover:text-white/80">
            БЛОГ
          </a>
        </li>
      </ul>
      <button className="font-medium text-sm text-white bg-[#083CBC] hover:bg-[#083CBC]/90 rounded-xl py-2 px-6 cursor-pointer">
        Контакты
      </button>
    </nav>
  );
};

export default Header;
