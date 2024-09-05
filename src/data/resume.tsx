import React from "react";

export interface IResume {
  header: string;
  title: string;
  subtitle: string;
  date: string;
  text: string;
  content?: React.ReactNode;
}

const education = {
  title: "Education",
  institutions: [
    {
      name: `IT School "IT-Brains"`,
      degree: "Full stack developer",
      issueDate: "01.2023",
      expirationDate: "09.2023",
    },
    {
      name: `Coursera`,
      degree: "IT support from Google",
      issueDate: "12.2023",
      expirationDate: "02.2024",
    },
    {
      name: "Kyiv Industrial and Economic College of the National Aviation University",
      degree: "Maintenance of electronic equipment",
    },
  ],
};

export const resume: IResume[] = [
  {
    header: "Experience",
    title: "Software Developer",
    subtitle: " Company Name",
    date: "June 2023 - Present",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil aut quae obcaecati alias placeat totam aperiam pariatur quam? Accusantium minima aperiam error obcaecati autem doloribus deserunt qui, laborum incidunt amet, numquam eos cum tempora. Debitis, esse quae corporis deserunt officia quos in a, quaerat vero odio vitae.s",
    content: <></>,
  },
  {
    header: "Education",
    title: "B.Tech, Computer Science",
    subtitle: "College Name",
    date: "Year 2023 - Year 2027",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil aut quae obcaecati alias placeat totam aperiam pariatur quam? Accusantium minima aperiam error obcaecati autem doloribus deserunt qui, laborum incidunt amet, numquam eos cum tempora. Debitis, esse quae corporis deserunt officia quos in a, quaerat vero odio vitae.s",
    content: (
      <div className=" flex flex-col gap-2">
        {education.institutions.map((institut, index) => (
          <div key={index} className=" text-s ">
            <h3 className=" font-bold">{institut.degree}</h3>
            <p className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
              {institut.name}
            </p>
            <p className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
              {institut.issueDate} - {institut.expirationDate}
            </p>
          </div>
        ))}
      </div>
    ),
  },
];
