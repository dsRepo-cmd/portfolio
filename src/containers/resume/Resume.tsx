import Heading from "../../components/Heading";
import { resume } from "../../data/resume";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      <Heading
        title="Resume"
        text="Here are my experiences and qualifications."
      />

      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        {resume.map((item, index) => (
          <div key={index} className="flex-1 flex items-start justify-center">
            <fieldset
              data-aos="zoom-in"
              className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2 h-full"
            >
              <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
                {item.header}
              </legend>
              <div className=" relative h-full">
                <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                  <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                  <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                  <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                </div>

                <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_16px_2px_rgba(255,255,255,0.1)] p-3 rounded-lg h-full">
                  <ul className=" flex flex-col gap-4">
                    {item.list.map((list, index) => {
                      return (
                        <li key={index} className=" flex flex-col gap-1">
                          <span className=" text-[.9rem] font-semibold  sm:text-base">
                            {list.title}
                          </span>
                          <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                            {list.subtitle}
                          </span>
                          <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                            {list.date}
                          </span>
                          <p className=" text-[.9rem] text-justify break-words text-gray-500">
                            {list.text}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </fieldset>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
