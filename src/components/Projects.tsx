import React from "react";
import icon1 from "../../public/assets/projectIcon1.svg";
import icon2 from "../../public/assets/projectIcon2.svg";
import icon3 from "../../public/assets/projectIcon3.svg";
import icon4 from "../../public/assets/projectIcon4.svg";
import icon5 from "../../public/assets/projectIcon5.svg";
import icon6 from "../../public/assets/projectIcon6.svg";
import vector from "../../public/assets/vector.svg";
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
      className="w-full flex flex-col pt-20 pb-20 px-14 text-black"
    >
      <h2 className="font-semibold text-[36px] text-[#676767]">Проекты</h2>
      <div className="w-full flex items-end justify-between mb-10">
        <h1 className="font-semibold text-[40px] leading-tight">
          Отрасли, в которых мы <br /> работаем
        </h1>
        <p className="font-medium text-xl">
          Каждое направление — часть единой системы, в <br /> которой мы
          отвечаем за результат на каждом этапе.
        </p>
      </div>
      <div className="line"></div>
      <div className="w-full grid grid-cols-3 gap-10 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[434px] h-[194px] flex flex-col justify-between gap-3 cursor-pointer group"
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
      <section
        id="mission"
        className="w-full flex items-start justify-between mt-40"
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
    </section>
  );
};

export default Projects;
