import { useTranslation } from "react-i18next";
import Heading from "../../components/Heading";
import WorkCard from "../../components/WorkCard";
import { navName } from "../../data/nav";
import { projects } from "../../data/works";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div id={navName.Works} className="container m-auto mt-16">
      <Heading title={t(navName.Works)} text={t("work-description")} />

      <div className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5">
        <div className="card-box flex flex-wrap items-center justify-center grid-cols-3 gap-8 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
          {projects.map((data) => (
            <WorkCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
