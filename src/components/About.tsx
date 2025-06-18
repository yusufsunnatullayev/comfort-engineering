import Image from "next/image";
import aboutImage from "../../public/assets/about-image.svg";
import arrowRight from "../../public/assets/arrow-right.svg";
import icon1 from "../../public/assets/aboutIcon1.svg";
import icon2 from "../../public/assets/aboutIcon2.svg";
import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full flex flex-col pt-32 pb-10 px-14">
      <div className="w-full flex items-start justify-between">
        <h1 className="font-semibold text-[35px] text-[#676767]">О нас</h1>
        <h2 className="font-semibold text-black text-[40px] w-[865px]">
          Мы создаём инженерные решения для строительства, геологии и <br />
          <span className="text-[#8D8D8D]">
            производства — точно, системно, с устойчивым результатом.
          </span>
        </h2>
      </div>
      <div className="w-full flex items-start gap-10">
        <Image src={aboutImage} alt="about-image" />
        <div className="flex-1 flex flex-col gap-5 pt-14">
          <div className="w-full flex items-center justify-between">
            <span className="font-semibold text-xl text-black">
              Строительство
            </span>
            <button className="w-[50px] h-[50px] rounded-full bg-[#1546BF] flex items-center justify-center cursor-pointer">
              <Image src={arrowRight} alt="arrow" />
            </button>
          </div>
          <div className="line"></div>
          <div className="w-full flex items-start justify-between mt-14">
            {/* 🚩 */}
            <div className="w-[374px] flex flex-col gap-4">
              <button className="w-[50px] h-[50px] rounded-full bg-[#1546BF] cursor-pointer flex items-center justify-center">
                <Image src={icon1} alt="icon" />
              </button>
              <h1 className="font-semibold text-2xl text-black">
                Комплексный подход
              </h1>
              <p className="font-medium text-lg text-[#707070] leading-tight">
                Мы выполняем весь цикл строительных работ — от инженерных
                изысканий и проектирования до возведения и ввода объектов в
                эксплуатацию. Всё под одним контролем, без лишних звеньев.
              </p>
            </div>
            {/* 🚩 */}
            <div className="w-[374px] flex flex-col gap-4">
              <button className="w-[50px] h-[50px] rounded-full bg-[#1546BF] cursor-pointer flex items-center justify-center">
                <Image src={icon2} alt="icon" />
              </button>
              <h1 className="font-semibold text-2xl text-black">
                Инженерная точность
              </h1>
              <p className="font-medium text-lg text-[#707070] leading-tight">
                Точно рассчитываем, чётко исполняем. Используем современные
                технологии и стандарты, чтобы обеспечить надёжность,
                безопасность и долговечность каждого строительного решения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
