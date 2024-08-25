interface IHero {
  title: string;
  typeAnimation: (string | number)[];
  description: string;
}

export const hero: IHero = {
  title: "Hello, I'm Serhii Dovgopol",
  typeAnimation: ["Web Developer", 2000, "Freelancer", 2000],
  description: "Lorem ipsum dolor sit amet consectetur",
};
