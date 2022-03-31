import * as icons from "react-icons/si";

export type Education = {
  school: string;
  technical: string;
  text: string;
};

export type Hobby = {
  title: string;
  icon: string;
};

export type Contact = {
  title: string;
  data: string;
  icon: string;
  href: string;
};

export type Social = {
  title: string;
  icon: string;
  link: string;
};

export type Skill = {
  name: string;
  force: number;
  icon: IconNames;
};

export type Exprerience = {
  position: string;
  title: string;
  company: string;
  institute: string;
  location: string;
  from: number;
  to: number | string;
  text: string;
};

export type Achievement = {
  award: string;
  company: string;
  institute: string;
  location: string;
  year: number;
  text: string;
};

export type Personal = {
  name: string;
  level: string;
  position: string;
  birth: Date;
  country: string;
  city: string;
  avatar: string;
  about: string;
};

export type Language = {
  language: string;
  level: string;
  exam: string;
  force: 1 | 2 | 3 | 4 | 5;
  write: number;
  read: number;
  speak: number;
};

export type IconNames = keyof typeof icons;
export interface IGenericIconProps {
  iconName: IconNames;
}

export type Biography = {
  personals: Personal;
  education: Education[];
  expertise: string[];
  hobbies: Hobby[];
  contacts: Contact[];
  social: Social[];
  skills: Skill[];
  experience: Exprerience[];
  achivements: Achievement[];
  languages: Language[];
  softSkills: string[];
  motivation: string;
  techStack: IconNames[];
};
