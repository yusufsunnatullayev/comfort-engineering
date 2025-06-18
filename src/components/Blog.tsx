"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from "../../public/assets/blog-image1.svg";
import image2 from "../../public/assets/blog-image2.svg";
import image3 from "../../public/assets/blog-image3.svg";
import image4 from "../../public/assets/blog-image4.svg";
import Image from "next/image";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const blogs = [
  {
    id: 1,
    title: "Получили проект на сумму 50 млрд сум",
    text: "It is a long established fact that a reader will be distracted...",
    date: "15 июн, 2025 г",
    image: image1,
  },
  {
    id: 2,
    title: "ЭМ-Коплекс был использован на 1 млн кв.м",
    text: "It is a long established fact that a reader will be distracted...",
    date: "10 июн, 2025 г",
    image: image2,
  },
  {
    id: 3,
    title: "День открытие нового завода в Фергане 6 июня",
    text: "It is a long established fact that a reader will be distracted...",
    date: "5 июн, 2025 г",
    image: image3,
  },
  {
    id: 4,
    title: "Получили проект на сумму 50 млрд сум",
    text: "It is a long established fact that a reader will be distracted...",
    date: "15 июн, 2025 г",
    image: image4,
  },
];

const Blog = () => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section
      id="blog"
      className="relative w-full flex flex-col gap-10 pt-10 pb-20 px-14 text-black"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-[36px] text-[#676767]">
          Блог & Новости
        </h1>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1546BF] hover:bg-[#1546BF]/90 transition cursor-pointer"
          >
            <GoArrowLeft color="white" size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1546BF] hover:bg-[#1546BF]/90 transition cursor-pointer"
          >
            <GoArrowRight color="white" size={20} />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        className="w-full"
      >
        {blogs.map((blog) => (
          <SwiperSlide
            key={blog.id}
            className="!w-[370px] flex flex-col gap-5 !bg-white"
          >
            <Image
              className="w-full !h-[420px] rounded-3xl"
              src={blog.image}
              alt="image"
            />
            <div className="w-full flex flex-col items-start gap-3 pt-2">
              <span className="font-semibold text-base text-[#1546BF]">
                {blog.date}
              </span>
              <h1 className="font-semibold text-xl text-start">{blog.title}</h1>
              <p className="font-medium text-sm text-[#4E4E4E] text-start">
                {blog.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blog;
