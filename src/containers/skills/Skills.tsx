import Heading from "../../components/Heading";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        <Heading title="Skills" />
        {/* icons */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" card-box flex flex-wrap items-center justify-center grid-cols-3 gap-8 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 "
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
