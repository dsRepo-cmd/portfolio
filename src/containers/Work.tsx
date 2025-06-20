import Heading from "../components/Heading";
import WorkCard from "../components/WorkCard";
import { projects } from "../consts";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();
  return (
    <section id="works" className="container m-auto mt-16">
      <Heading title={t("works")} text={t("works_intro")} />

      <div className="mx-auto w-[90%] sm:w-fit mt-5">
        <div className="flex flex-wrap items-center justify-center grid-cols-3 gap-8 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
          {projects.map((data) => (
            <WorkCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
