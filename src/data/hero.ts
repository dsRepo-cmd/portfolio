interface IHero {
  title: string;
  typeAnimation: (string | number)[];
  description: string;
}

export const hero: IHero = {
  title: "Hi, I'm Serhii Dovgopol",
  typeAnimation: [
    "Web Developer",
    2000,
    "Freelancer",
    2000,
    "Creative Coder",
    2000,
    "Tech Enthusiast",
    2000,
    "UI/UX Designer",
    2000,
  ],
  description: "Passionate about building exceptional web experiences.",
};
