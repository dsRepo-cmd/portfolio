import Heading from "../../components/Heading";
import WorkCard from "../../components/WorkCard";

const Work = () => {
  return (
    <div id="works" className="container m-auto mt-16">
      <Heading title="Works" text="Here are some of my works." />
      {/* card */}
      <div className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5">
        <div className="card-box flex flex-wrap items-center justify-center grid-cols-3 gap-8 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
