import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import Heading from "../../components/Heading";
import ProgressBar from "../../components/ProgressBar";
import { skills } from "../../data/skills";
import {
  SiExpress,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import SkillBox from "../../components/SkillBox";

const Skills = () => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        <Heading title="Skills" />
        {/* content */}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={90} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar logo={<FaReact />} name={"React"} value={85} />
                <ProgressBar
                  logo={<SiNextdotjs />}
                  name={"Next.js"}
                  value={80}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={"white"}
                white={"black"}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express Js"}
              />
              <SkillBox
                logo={<SiJest />}
                black={"black"}
                white={"white"}
                skill={"Jest"}
              />
            </div>
          </div>
        </div>
        {/* icons */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" mt-8 card-box flex flex-wrap items-center justify-center grid-cols-3 gap-8 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 "
        >
          {skills.map((skill) => (
            <div
              className="flex flex-col gap-4  items-center justify-center"
              key={skill.id}
            >
              <img
                className="w-[50px] h-[50px] md:w-[35px] md:h-[35px]"
                src={skill.img}
                alt={skill.name}
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
