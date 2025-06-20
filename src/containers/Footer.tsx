import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { links } from "../consts";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer
      id="footer"
      className="mx-auto m-auto h-[300px]  mt-16 sm:h-[250px] text-black"
    >
      <div className="bg-secondary h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className=" font-bold text-5xl sm:text-3xl">
          {t("footer_talk")}
        </h2>

        <div className="flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="slide-up"
            data-aos-duration="1000"
            target="_blank"
            href={links.telegram}
            className="font-medium flex items-center justify-center flex-col "
          >
            <FaTelegramPlane className="text-black text-3xl hover:scale-125 cursor-pointer duration-200" />
            <p className="text-black mt-2 ">{t("footer_telegram")}</p>
          </a>

          <a
            data-aos="fade-up"
            target="_blank"
            data-aos-duration="1200"
            href={links.whatsApp}
            className="box font-medium flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer duration-200" />
            <p className="text-black mt-2 ">{t("footer_whatsapp")}</p>
          </a>

          <a
            data-aos="fade-up"
            data-aos-duration="1500"
            href={links.email}
            className="box font-medium flex items-center justify-center flex-col"
          >
            <MdEmail className=" text-black text-3xl hover:scale-125 cursor-pointer  duration-200" />
            <p className="text-black mt-2 ">{t("footer_email")}</p>
          </a>
        </div>

        <div className="sm:text-[12px]">{t("footer_copyright")}</div>
      </div>
    </footer>
  );
};

export default Footer;
