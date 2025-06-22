import { BiLogoTypescript } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiI18Next, SiMongodb, SiRadixui, SiRedux } from "react-icons/si";

export const links = {
  github: "https://github.com/dsRepo-cmd",
  linkedin: "https://www.linkedin.com/in/sergii-dovgopol-5720a6278/",
  telegram: "https://t.me/SergiiDU",
  whatsApp: "https://wa.me/380685534209",
  email: "mailto:Serhiidovgopoly@gmail.com",
  photo:
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};

export const projects = [
  {
    id: 1,
    img: "/avion.webp",
    title: "Avion",
    link: "https://avion-app-seven.vercel.app",
    git: "https://github.com/dsRepo-cmd/avion-app",
    desc: "work_desc_avion",
  },
  {
    id: 3,
    img: "/personal-trainer.webp",
    title: "Personal Trainer",
    link: "https://personal-trainers.netlify.app/",
    git: "https://github.com/dsRepo-cmd/personal-trainer",
    desc: "work_desc_trainer",
  },
  {
    id: 2,
    img: "/kezta.webp",
    title: "Kezta",
    link: "https://kezta-next.vercel.app/",
    git: "https://github.com/dsRepo-cmd/kezta-next",
    desc: "work_desc_kezta",
  },
];

export const skills = [
  {
    id: 1,
    name: "Typescript",
    svg: <BiLogoTypescript size={42} className=" text-foreground" />,
  },
  {
    id: 2,
    name: "Git",
    svg: <FaGitAlt size={42} className=" text-foreground" />,
  },
  {
    id: 3,
    name: "Redux",
    svg: <SiRedux size={42} className=" text-foreground" />,
  },
  {
    id: 4,
    name: "Tailwind",
    svg: <RiTailwindCssFill size={42} className=" text-foreground" />,
  },
  {
    id: 5,
    name: "Bootstrap",
    svg: <BsBootstrapFill size={42} className=" text-foreground" />,
  },
  {
    id: 6,
    name: "Radix UI",
    svg: <SiRadixui size={42} className=" text-foreground" />,
  },
  {
    id: 7,
    name: "MongoDB",
    svg: <SiMongodb size={42} className=" text-foreground" />,
  },
  {
    id: 8,
    name: "i18n",
    svg: <SiI18Next size={42} className=" text-foreground" />,
  },
];

export const resume = [
  {
    header: "Experience",

    list: [
      {
        title: "Software Developer",
        subtitle: " Company Name",
        date: "June 2024 - Present",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil aut quae obcaecati alias placeat totam aperiam pariatur quam? Accusantium minima aperiam error obcaecati autem doloribus deserunt qui, laborum incidunt amet, numquam eos cum tempora. Debitis, esse quae corporis deserunt officia quos in a, quaerat vero odio vitae.s",
      },
    ],
  },
  {
    header: "Education",

    list: [
      {
        title: "Full stack developer",
        subtitle: `IT School "IT-Brains"`,
        date: "01.2023 - 09.2023",
        text: "",
      },
      {
        title: "IT support from Google",
        subtitle: "Coursera, Prometheus",
        date: "12.2023 - 02.2024",
        text: "",
      },

      {
        title: "Maintenance of electronic equipment",
        subtitle:
          "Kyiv Industrial and Economic College of the National Aviation University",
        date: "-",
        text: "",
      },
    ],
  },
];
