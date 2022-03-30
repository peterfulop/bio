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
  icon: string;
};

export type Exprerience = {
  position: string;
  title: string;
  company: string;
  institute: string;
  location: string;
  from: number;
  to: number;
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
};
