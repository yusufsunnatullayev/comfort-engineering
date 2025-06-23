import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import officeImage from "../../public/assets/office-image.svg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex flex-col pt-0 md:pt-10 pb-10 px-4 md:px-14 text-black"
    >
      <h2 className="font-semibold text-xl md:text-[36px] text-[#676767]">
        Контакты
      </h2>
      <h1 className="md:hidden flex font-semibold text-2xl md:text-[40px] leading-tight">
        Свяжитесь с нами с удобным способом
      </h1>
      <h1 className="hidden md:flex font-semibold text-2xl md:text-[40px] leading-tight">
        Свяжитесь с нами с удобным <br /> способом
      </h1>
      <div className="w-full flex flex-col-reverse md:flex-row items-start justify-between gap-5 mt-10 mb-10">
        {/* Info and Map 🚩 */}
        <div className="w-full md:w-[65%] flex flex-col gap-5">
          <div className="w-full flex flex-col md:flex-row items-center gap-5">
            {/* 🚩 */}
            <div className="w-full md:w-1/2 h-[140px] rounded-3xl border border-[#A3A3A3] flex flex-col justify-center gap-5 px-5">
              <h1 className="font-semibold text-base md:text-xl">Наш офис</h1>
              <p className="font-semibold text-sm">
                г. Ташкент, ул. Амира Темура, 108, бизнес-центр "Inconel", офис
                412
              </p>
            </div>
            {/* 🚩 */}
            <div className="w-full md:w-1/2 h-[140px] rounded-3xl border border-[#A3A3A3] flex flex-col justify-center gap-5 px-5">
              <h1 className="font-semibold text-base md:text-xl">Контакты</h1>
              <div className="space-y-2">
                <p className="font-semibold text-sm">
                  Телефон: +998 99 814 07 06
                </p>
                <p className="font-semibold text-sm">
                  Email: info@comforten.uz
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center gap-5">
            {/* 🚩 */}
            <div className="w-full md:w-1/2 h-[140px] rounded-3xl border border-[#A3A3A3] flex flex-col justify-center gap-5 px-5">
              <h1 className="font-semibold text-base md:text-xl">
                Время работыс
              </h1>
              <div className="space-y-1">
                <p className="font-semibold text-sm">Пн–Пт: 09:00–18:00</p>
                <p className="font-semibold text-sm">Сб–Вс: выходно</p>
              </div>
            </div>
            {/* 🚩 */}
            <div className="w-full md:w-1/2 h-[140px] rounded-3xl border border-[#A3A3A3] flex flex-col justify-center gap-5 px-5">
              <h1 className="font-semibold text-base md:text-xl">
                Социальные сети
              </h1>
              <div className="flex items-center gap-5 md:gap-2">
                <button className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#1546BF40] flex items-center justify-center cursor-pointer">
                  <FaTelegramPlane color="white" size={20} />
                </button>
                <button className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#1546BF40] flex items-center justify-center cursor-pointer">
                  <FaInstagram color="white" size={20} />
                </button>
                <button className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#1546BF40] flex items-center justify-center cursor-pointer">
                  <AiOutlineYoutube color="white" size={20} />
                </button>
                <button className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#1546BF40] flex items-center justify-center cursor-pointer">
                  <FaFacebook color="white" size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[201px] md:h-[368px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d570.2285774826822!2d69.33010723734169!3d41.29541124209682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef574902cf12d%3A0xa3478a24fc7ddabf!2sElbek%20Street%2024%2C%20100016%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1750227754178!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 20 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Form and Office image 🚩 */}
        <div className="w-full md:w-[35%] flex flex-col gap-2">
          <form className="w-full h-[420px] border border-[#A3A3A3] px-5 pt-5 pb-2 rounded-3xl flex flex-col gap-6">
            <div className="space-y-2">
              <h1 className="font-medium text-base md:text-2xl">
                Оставьте заявку
              </h1>
              <p className="font-medium text-sm text-[#898989]">
                Свяжемся с вами в ближайшее время и ответим на все вопросы.
              </p>
            </div>
            <div className="w-full space-y-4 mt-3">
              <input
                placeholder="Ваше имя"
                type="text"
                className="w-full p-3 md:p-4 rounded-xl bg-[#F2F2F2] border-none outline-none"
              />
              <input
                placeholder="Номер телефона"
                type="text"
                className="w-full p-3 md:p-4 rounded-xl bg-[#F2F2F2] border-none outline-none"
              />
            </div>
            <button className="w-full py-3 md:py-4 bg-[#1546BF] cursor-pointer hover:bg-[#1546BF]/90 font-medium text-base text-white rounded-xl">
              Связаться
            </button>
          </form>
          <Image
            className="w-full hidden md:flex"
            src={officeImage}
            alt="office"
          />
        </div>
      </div>
      <div className="line"></div>
    </section>
  );
};

export default Contact;
