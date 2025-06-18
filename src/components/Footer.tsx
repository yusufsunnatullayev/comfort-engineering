import React from "react";
import logo from "../../public/assets/footer-logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full px-14 text-black flex items-center justify-between pb-5">
      <Image src={logo} alt="footer-logo" />
      <p className="font-medium text-xs text-[#434343] w-[730px]">
        © 2010–2025 Comfort Engineering. Все права защищены.Все материалы,
        размещённые на данном сайте, являются объектами интеллектуальной
        собственности компании Comfort Engineering и охраняются в соответствии с
        законодательством Республики Узбекистан. В случае нарушения, компания
        оставляет за собой право на применение мер, предусмотренных
        законодательством Республики Узбекистан, включая взыскание убытков и
        обращение в уполномоченные органы для защиты своих прав.
      </p>
    </footer>
  );
};

export default Footer;
