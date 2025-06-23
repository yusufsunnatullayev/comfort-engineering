"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import arrowRight from "../../public/assets/arrow-right.svg";
import aboutImage from "../../public/assets/about-image.svg";
import aboutImage2 from "../../public/assets/about-image2.svg";
import aboutImage3 from "../../public/assets/about-image3.svg";
import aboutImage4 from "../../public/assets/about-image4.svg";
import aboutImage5 from "../../public/assets/about-image5.svg";
import aboutImage6 from "../../public/assets/about-image6.svg";
import icon1 from "../../public/assets/aboutIcon1.svg";
import icon2 from "../../public/assets/aboutIcon2.svg";
import icon3 from "../../public/assets/icon3.svg";
import icon4 from "../../public/assets/icon4.svg";
import icon5 from "../../public/assets/icon5.svg";
import icon6 from "../../public/assets/icon6.svg";
import icon7 from "../../public/assets/icon7.svg";
import icon8 from "../../public/assets/icon8.svg";
import icon9 from "../../public/assets/icon9.svg";
import icon10 from "../../public/assets/icon10.svg";
import icon11 from "../../public/assets/icon11.svg";
import icon12 from "../../public/assets/icon12.svg";

const aboutItems = [
  {
    id: 1,
    title: "Строительство",
    image: aboutImage,
    column1_title: "Комплексный подход",
    column2_title: "Инженерная точность",
    column1_desc: `Мы выполняем весь цикл строительных работ — от инженерных изысканий и проектирования до возведения и ввода объектов в эксплуатацию. Всё под одним контролем, без лишних звеньев.`,
    column2_desc: `Точно рассчитываем, чётко исполняем. Используем современные технологии и стандарты, чтобы обеспечить надёжность, безопасность и долговечность каждого строительного решения.`,
    icon1: icon1,
    icon2: icon2,
  },
  {
    id: 2,
    title: "Геология и изыскания",
    image: aboutImage2,
    column1_title: "Глубокая экспертиза",
    column2_title: "Полный цикл изысканий",
    column1_desc: `Проводим инженерно-геологические, гидрогеологические и геофизические исследования с использованием современных методик. Точные данные основа надёжного проекта.`,
    column2_desc: `Осуществляем комплексные работы: от бурения и отбора проб до лабораторных анализов и подготовки технической документации. Всё — в одном месте, под контролем.`,
    icon1: icon3,
    icon2: icon4,
  },
  {
    id: 3,
    title: "Производство удобрений",
    image: aboutImage3,
    column1_title: "Современные технологии",
    column2_title: "Собственное производство",
    column1_desc: `Разрабатываем составы на основе агрономических исследований. Учитываем тип почвы, климат и потребности культур — для максимального эффекта.`,
    column2_desc: `Производим минеральные и органо-минеральные удобрения по проверенным формулам. Каждая партия проходит лабораторную проверку перед поставкой.`,
    icon1: icon5,
    icon2: icon6,
  },
  {
    id: 4,
    title: "Агроинжиниринг",
    image: aboutImage4,
    column1_title: "Решения для агросектора",
    column2_title: "Рост урожайности",
    column1_desc: `Проектируем и внедряем технологии для эффективного земледелия: от систем орошения до модернизации техники и процессов.`,
    column2_desc: `Наши решения повышают продуктивность, сохраняют структуру почвы и помогают адаптироваться к климатическим условиям.`,
    icon1: icon7,
    icon2: icon8,
  },
  {
    id: 5,
    title: "Проектирование",
    image: aboutImage5,
    column1_title: "Инженерная точность",
    column2_title: "Опыт в разных отраслях",
    column1_desc: `Создаём проекты на основе BIM-моделирования, точных расчётов и современных стандартов. От чертежа до реализации — всё под контролем.`,
    column2_desc: `Проектируем объекты в строительстве, промышленности, агросекторе и инфраструктуре. Понимаем специфику каждой сферы.`,
    icon1: icon9,
    icon2: icon10,
  },
  {
    id: 6,
    title: "Логистика и снабжение",
    image: aboutImage6,
    column1_title: "Надёжные поставки",
    column2_title: "Оптимизация сроков и затрат",
    column1_desc: `Организуем снабжение строительных объектов, производств и агросектора — от техники и материалов до оборудования и компонентов.`,
    column2_desc: `Выстраиваем логистику с учётом географии, сроков и специфики проекта. Снижаем издержки без потери качества.`,
    icon1: icon11,
    icon2: icon12,
  },
];

const slideInVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % aboutItems.length);
  };

  return (
    <section
      id="about"
      className="w-full flex flex-col pt-16 md:pt-32 pb-10 px-4 md:px-14"
    >
      <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row items-start justify-between">
        <h1 className="font-semibold text-xl md:text-[35px] text-[#676767]">
          О нас
        </h1>
        <h2 className="font-semibold text-black text-2xl md:text-[40px] w-full md:w-[865px]">
          Мы создаём инженерные решения для строительства, геологии и <br />
          <span className="text-[#8D8D8D]">
            производства — точно, системно, с устойчивым результатом.
          </span>
        </h2>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start gap-5 md:gap-10">
        {/* Mobile Navigation */}
        <div className="w-full flex md:hidden flex-col gap-3 mt-5">
          <div className="w-full flex items-center justify-between">
            {/* Animate title */}
            <motion.span
              key={`title-${index}`}
              className="font-semibold text-sm md:text-xl text-black"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              {aboutItems[index].title}
            </motion.span>

            <button
              onClick={handleNext}
              className="w-[30px] h-[30px] rounded-full bg-[#1546BF] flex items-center justify-center cursor-pointer"
            >
              <Image src={arrowRight} alt="arrow" className="w-3 h-3" />
            </button>
          </div>
          <div className="line md:hidden flex"></div>
        </div>

        {/* Animate image */}
        <motion.div
          key={`image-${index}`}
          variants={slideInVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image src={aboutItems[index].image} alt="about-image" />
        </motion.div>

        <div className="flex-1 flex flex-col gap-5 pt-0 md:pt-14">
          {/* Desktop title */}
          <div className="hidden w-full md:flex items-center justify-between">
            <motion.span
              key={`desktop-title-${index}`}
              className="font-semibold text-xl text-black"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              {aboutItems[index].title}
            </motion.span>
            <button
              onClick={handleNext}
              className="w-[50px] h-[50px] rounded-full bg-[#1546BF] flex items-center justify-center cursor-pointer"
            >
              <Image src={arrowRight} alt="arrow" />
            </button>
          </div>

          <div className="line hidden md:flex"></div>

          {/* Two columns */}
          <motion.div
            key={`columns-${index}`}
            className="w-full flex flex-col md:flex-row gap-5 md:gap-0 items-start justify-between mt-5 md:mt-14"
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* Column 1 */}
            <div className="w-full md:w-[374px] flex flex-col gap-2 md:gap-4">
              <button className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#1546BF] flex items-center justify-center">
                <Image src={aboutItems[index].icon1} alt="icon" />
              </button>
              <h1 className="font-semibold text-base md:text-2xl text-black">
                {aboutItems[index].column1_title}
              </h1>
              <p className="font-medium text-sm md:text-lg text-[#707070] leading-tight">
                {aboutItems[index].column1_desc}
              </p>
            </div>

            {/* Column 2 */}
            <div className="w-full md:w-[374px] flex flex-col gap-2 md:gap-4">
              <button className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#1546BF] flex items-center justify-center">
                <Image src={aboutItems[index].icon2} alt="icon" />
              </button>
              <h1 className="font-semibold text-base md:text-2xl text-black">
                {aboutItems[index].column2_title}
              </h1>
              <p className="font-medium text-sm md:text-lg text-[#707070] leading-tight">
                {aboutItems[index].column2_desc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
