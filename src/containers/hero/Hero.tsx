import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";
import { hero, links } from "../../consts";
import { IoLogoWhatsapp } from "react-icons/io";
import Icon from "../../components/Icon";

const Hero = () => {
  return (
    <section
      id="home"
      className=" w-full transform  origin-top-left bg-green-repeating dark:bg-blue-repeating"
    >
      <div className=" container mx-auto pt-5 h-[650px]  md:flex-col-reverse md:h-[950px] sm:h-[820px]  flex sm:flex-col-reverse sm:pt-0 sm:gap-2  ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold md:text-[2rem]"
            >
              {hero.title}
            </h2>

            <TypeAnimation
              data-aos="fade-up"
              sequence={hero.typeAnimation}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className=" text-secondary text-4xl font-bold md:text-3xl "
            />
            <p
              data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full  text-primary-foreground  md:text-[.95rem] "
            >
              {hero.description}
            </p>
          </div>

          <div data-aos="fade-up" className=" flex gap-5">
            <a
              href={resumePDF}
              target="_blank"
              className=" duration-200 flex h-10 items-center justify-center gap-2 text-nowrap bg-black text-[1rem] text-white px-10 py-2 md:px-8 rounded-lg font-bold hover:text-yellow-500 dark:bg-white dark:text-black "
            >
              <span>Resume</span>
              <FiDownload />
            </a>
          </div>

          <div className="icons flex my-5 ">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <Icon icon={AiFillGithub} link={links.github} />
              <Icon icon={FaLinkedinIn} link={links.linkedin} />
              <Icon icon={FaTelegramPlane} link={links.telegram} />
              <Icon icon={IoLogoWhatsapp} link={links.whatsApp} />
            </ul>
          </div>
        </div>

        <div className=" right  top-5 l flex-1 flex items-center justify-center md:items-end md:pb-6 ">
          <div className="relative h-[88%] lg:h-full md:h-[85%] sm:h-[80%] w-fit flex items-center md:items-end">
            <img
              data-aos="fade-up"
              className=" h-[90%]  w-full object-cover  md:m-0"
              src={links.photo}
              alt="hero-pic"
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer "
              >
                <img
                  className=" w-[135px] md:w-[90px] animate-spin-slow"
                  src="/full-stack-developer.webp"
                  alt="full-stack-developer"
                />
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
