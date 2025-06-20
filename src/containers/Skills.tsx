import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import Heading from "../components/Heading";
import ProgressBar from "../components/ProgressBar";
import {
  SiExpress,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import SkillBox from "../components/SkillBox";
import { skills } from "../consts";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className=" container m-auto  mt-16" id="skills">
      <Heading title={t("skills")} text={t("skills_intro")} />

      <div className="flex md:flex-col ">
        <div className="left flex-1 w-full">
          {/* left box */}
          <div
            data-aos="zoom-in"
            className="flex items-center h-[100%] justify-end md:justify-center"
          >
            <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
              <ProgressBar logo={<IoLogoHtml5 />} name={t("HTML")} value={90} />
              <ProgressBar logo={<IoLogoCss3 />} name={t("CSS")} value={88} />
              <ProgressBar
                logo={<SiJavascript />}
                name={t("Javascript")}
                value={80}
              />
              <ProgressBar logo={<FaReact />} name={t("React")} value={85} />
              <ProgressBar
                logo={<SiNextdotjs />}
                name={t("Next.js")}
                value={80}
              />
            </div>
          </div>
        </div>
        {/* right box */}
        <div className=" relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
          <div className="flex flex-col gap-10">
            <SkillBox
              logo={<IoLogoNodejs className=" text-background" />}
              black={"background"}
              white={"foreground"}
              skill={t("Node Js")}
            />
            <SkillBox
              logo={<SiMongodb className=" text-background" />}
              black={"background"}
              white={"foreground"}
              skill={t("MongoDB")}
            />
          </div>
          <div className="flex flex-col gap-10">
            <SkillBox
              logo={<SiExpress className=" text-foreground" />}
              black={"foreground"}
              white={"background"}
              skill={t("Express Js")}
            />
            <SkillBox
              logo={<SiJest className=" text-foreground" />}
              black={"foreground"}
              white={"background"}
              skill={t("Jest")}
            />
          </div>
        </div>
      </div>
      {/* icons */}
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className=" mt-8 flex flex-wrap items-center justify-center grid-cols-3 gap-8 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 "
      >
        {skills.map((skill) => (
          <div
            className="flex flex-col gap-4  items-center justify-center"
            key={skill.id}
          >
            {skill.svg}

            <span>{t(skill.name)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
