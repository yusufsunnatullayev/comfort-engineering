import React from "react";
import icon1 from "../../public/assets/projectIcon1.svg";
import icon2 from "../../public/assets/projectIcon2.svg";
import icon3 from "../../public/assets/projectIcon3.svg";
import icon4 from "../../public/assets/projectIcon4.svg";
import icon5 from "../../public/assets/projectIcon5.svg";
import icon6 from "../../public/assets/projectIcon6.svg";
import vector from "../../public/assets/vector.svg";
import mobileVector from "../../public/assets/mobile-vector.svg";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const projects = [
  {
    id: 1,
    title: "Строительство",
    text: "Проектируем объекты любой сложности: от промышленных до инфраструктурных.",
    icon: icon1,
  },
  {
    id: 2,
    title: "Геология и изыскания",
    text: "Проектируем объекты любой сложности: от промышленных до инфраструктурных.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Производство удобрений",
    text: "Проектируем объекты любой сложности: от промышленных до инфраструктурных.",
    icon: icon3,
  },
  {
    id: 4,
    title: "Агроинжиниринг",
    text: "Проектируем объекты любой сложности: от промышленных до инфраструктурных.",
    icon: icon4,
  },
  {
    id: 5,
    title: "Проектирование",
    text: "Проектируем объекты любой сложности: от промышленных до инфраструктурных.",
    icon: icon5,
  },
  {
    id: 6,
    title: "Логистика и снабжение",
    text: "Проектируем объекты любой сложности: от промышленных до инфраструктурных.",
    icon: icon6,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full flex flex-col pt-10 md:pt-20 pb-20 px-4 md:px-14 text-black"
    >
      <h2 className="font-semibold text-xl md:text-[36px] text-[#676767]">
        Проекты
      </h2>
      <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row items-start justify-start md:items-end md:justify-between mb-10">
        <h1 className="font-semibold text-2xl md:text-[40px] leading-tight">
          Отрасли, в которых мы <br /> работаем
        </h1>
        <p className="font-medium text-sm md:text-xl">
          Каждое направление — часть единой системы, в <br /> которой мы
          отвечаем за результат на каждом этапе.
        </p>
      </div>
      <div className="line"></div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full md:w-[434px] h-[194px] flex flex-col justify-between gap-3 cursor-pointer group"
          >
            <div className="w-full space-y-3">
              {/* Icon with group-hover color */}
              <Image src={project.icon} alt="icon" />

              <div className="w-full flex items-center justify-between">
                <h1 className="font-semibold text-2xl group-hover:text-[#1546BF] transition duration-300">
                  {project.title}
                </h1>
                <GoArrowUpRight
                  size={30}
                  className="group-hover:text-[#1546BF] transition duration-300"
                />
              </div>

              <p className="font-medium text-lg text-[#4D4D4D]">
                {project.text}
              </p>
            </div>
            <div className="line"></div>
          </div>
        ))}
      </div>
      {/* Desktop statistics 🚩 */}
      <section
        id="mission"
        className="w-full hidden md:flex items-start justify-between mt-40"
      >
        <div className="relative flex flex-col gap-14 items-center">
          {/* 🚩 */}
          <div className="flex items-center justify-between gap-20">
            <div className="w-[225px] h-[225px] rounded-full border border-[#8F8F8F] flex flex-col items-center justify-center bg-white z-10">
              <span className="font-semibold text-[60px]">100+</span>
              <span className="font-medium text-lg text-[#777272]">
                Успешных проектов
              </span>
            </div>
            <div className="w-[225px] h-[225px] rounded-full border border-[#8F8F8F] flex flex-col items-center justify-center bg-white z-10">
              <span className="font-semibold text-[60px]">10</span>
              <span className="font-medium text-lg text-[#777272]">
                Направлений
              </span>
            </div>
          </div>
          {/* 🚩 */}
          <div className="flex items-center justify-between gap-32">
            <div className="w-[225px] h-[225px] rounded-full border border-[#8F8F8F] flex flex-col items-center justify-center bg-white z-10">
              <span className="font-semibold text-[60px]">20+</span>
              <span className="font-medium text-lg text-[#777272]">
                Лет опыта
              </span>
            </div>
            <div className="w-[225px] h-[225px] rounded-full border border-[#8F8F8F] flex flex-col items-center justify-center bg-white z-10">
              <span className="font-semibold text-[60px]">500+</span>
              <span className="font-medium text-lg text-[#777272]">
                Партнёров
              </span>
            </div>
            <div className="w-[225px] h-[225px] rounded-full border border-[#8F8F8F] flex flex-col items-center justify-center bg-white z-10">
              <span className="font-semibold text-[60px]">12</span>
              <span className="font-medium text-lg text-[#777272]">
                Регионов
              </span>
            </div>
          </div>
          <Image src={vector} alt="vector" className="absolute top-36" />
        </div>
        <p className="font-bold text-[40px] mt-20">
          Цифры — это не <br /> просто результат.{" "}
        </p>
      </section>

      {/* Mobile statistics 🚩 */}
      <section
        id="mission"
        className="relative w-full md:hidden flex items-start justify-between pt-20"
      >
        <div className="w-full relative flex flex-col items-start gap-2">
          <div className="w-[150px] h-[150px] rounded-full border border-[#8F8F8F] flex flex-col items-center justify-center bg-white z-10">
            <span className="font-semibold text-[36px]">20+</span>
            <span className="font-medium text-sm text-[#777272]">
              Лет опыта
            </span>
          </div>
          <div className="w-[150px] h-[150px] self-end rounded-full border border-[#8F8F8F] flex flex-col items-center justify-center bg-white z-10">
            <span className="font-semibold text-[36px]">100+</span>
            <span className="font-medium text-sm text-[#777272]">
              Успешных <br /> проектов
            </span>
          </div>
          <div className="w-[150px] h-[150px] rounded-full border border-[#8F8F8F] flex flex-col items-center justify-center bg-white z-10">
            <span className="font-semibold text-[36px]">500+</span>
            <span className="font-medium text-sm text-[#777272]">
              Партнёров
            </span>
          </div>
          <div className="w-[150px] h-[150px] self-end rounded-full border border-[#8F8F8F] flex flex-col items-center justify-center bg-white z-10">
            <span className="font-semibold text-[36px]">10</span>
            <span className="font-medium text-sm text-[#777272]">
              Направлений
            </span>
          </div>
          <div className="w-[150px] h-[150px] rounded-full border border-[#8F8F8F] flex flex-col items-center justify-center bg-white z-10">
            <span className="font-semibold text-[36px]">12</span>
            <span className="font-medium text-sm text-[#777272]">Регионов</span>
          </div>
          <Image
            src={mobileVector}
            alt="vector"
            className="absolute top-32 left-20"
          />
        </div>
        <p className="absolute w-[180px] text-end top-10 right-0 font-bold text-2xl">
          Цифры — это не просто результат.{" "}
        </p>
      </section>
    </section>
  );
};

export default Projects;
