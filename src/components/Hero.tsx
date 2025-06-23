import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-texts";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const Hero = () => {
  return (
    <section className="relative w-full h-full flex-1 flex flex-col pb-7 justify-between bg-black/90 bg-[url(/assets/hero-bg.svg)] overflow-hidden">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-semibold text-xs md:text-sm bg-gradient-to-r from-[#4A4A4A] to-[#A3A3A3] text-transparent bg-clip-text">
            COMFORT ENGINEERING GROUP
          </h2>
          <h1 className="w-[350px] md:w-auto text-center font-bold text-3xl md:text-[50px] italic">
            От земли до идеи — мы создаём то, что <br /> работает точно и живёт
            долго.
          </h1>
          <p className="w-[350px] md:w-[600px] text-[#AAAAAA] md:text-white text-center font-medium text-[10px] md:text-xs">
            Мы многопрофильный холдинг, который объединяет строительство,
            геологию, производство и агротехнологии в единую экосистему решений.
            Мы управляем сложностью с инженерной точностью, создавая комфортную
            инфраструктуру будущего.
          </p>
          <a href="#contact">
            <button className="flex md:hidden mt-4 font-medium text-sm text-white bg-[#083CBC] hover:bg-[#083CBC]/90 rounded-xl py-2 px-6 cursor-pointer">
              Контакты
            </button>
          </a>
        </div>
      </BackgroundBeamsWithCollision>
      <div className="w-full flex flex-col md:flex-row items-center gap-0 md:gap-4 max-w-7xl mx-auto bg-transparent">
        <span className="font-medium text-sm">
          С нами работают лидеры отрасли:
        </span>
        <InfiniteMovingCards />
      </div>
      <div className="absolute left-56 -bottom-28 bg-[#3C5CADCC] blur-3xl z-[999] w-[1000px] h-40 rounded-t-full"></div>
    </section>
  );
};

export default Hero;
