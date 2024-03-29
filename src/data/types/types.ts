export interface IProject {
  id: number;
  img: string;
  title: string;
  desc: string;
  link: string;
  git: string;
}
export interface ILinks {
  github: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  telegram: string;
  whatsApp: string;
  email: string;
  formspree: string;
  photo: string;
}

export interface ISkill {
  id: number;
  name: string;
  img: string;
}

export interface IResume {
  header: string;
  title: string;
  subtitle: string;
  date: string;
  text: string;
}
