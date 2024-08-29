export interface IProject {
  id: number;
  img: string;
  title: string;
  desc: string;
  link: string;
  git: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    img: "/avion.webp",
    title: "Avion",

    link: "https://avion-app-seven.vercel.app",
    git: "https://github.com/dsRepo-cmd/avion-app",
    desc: "Built a responsive e-commerce platform for furniture with user registration and authentication. Integrated NextAuth for secure authentication, Mongoose for data management, and Tailwind CSS for UI. Added unit and integration tests with Jest.",
  },

  {
    id: 3,
    img: "/personal-trainer.webp",
    title: "Personal Trainer",
    link: "https://personal-trainers.netlify.app/",
    git: "https://github.com/dsRepo-cmd/personal-trainer",
    desc: "Created a responsive site for personal training classes with dynamic layouts using isotope-layout, interactive animations with framer-motion, and a responsive carousel with react-slick. Styled with Tailwind CSS and clsx, and included Formspree for class registration.",
  },
  {
    id: 2,
    img: "/kezta.webp",
    title: "Kezta",
    link: "https://kezta-next.vercel.app/",
    git: "https://github.com/dsRepo-cmd/kezta-next",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam nisi dolores ex ullam temporibus, sequi, totam assumenda veniam animi cupiditate eius inventore corporis perspiciatis aliquam tempore voluptates iure",
  },
];
