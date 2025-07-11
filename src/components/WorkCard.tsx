import styled from "styled-components";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface IProject {
  id: number;
  img: string;
  title: string;
  link: string;
  git: string;
  desc: string;
}
interface WorkCardProps {
  data: IProject;
}

const WorkCard = ({ data }: WorkCardProps) => {
  const { t } = useTranslation();
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col justify-center items-center gap-4"
    >
      <POPUP className="relative">
        <div className="h-[280px] w-[375px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl dark:shadow-black rounded-md overflow-hidden sm:h-[92%] sm:w-[92%] mx-auto ">
          <img
            src={data.img}
            alt={data.title}
            className="w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
          />
        </div>

        <div
          className={
            "popup w-full h-[280px] shadow-xl overflow-hidden rounded-md p-4 sm:p-1 "
          }
        >
          <p className=" text-gray-900 text-sm leading-[1.4] w-[90%] sm:text-[12px]">
            {t(data.desc)}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to={data.link}
              target="_blank"
              className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
            >
              <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
              <p className=" text-black">{t("demo")}</p>
            </Link>
            <br className="w-[2px] bg-white" />
            <Link
              to={data.git}
              target="_blank"
              className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
            >
              <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
              <p className=" text-black">{t("code")}</p>
            </Link>
          </div>
        </div>
      </POPUP>
      <p className="text-gray-800 dark:text-gray-100 text-xl font-medium sm:text-lg">
        {data.title}
      </p>
    </div>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
