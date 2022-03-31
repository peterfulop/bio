import { Biography } from "../utils/cv.interface";

export const bioData: Biography = {
  personals: {
    name: "Fülöp Péter",
    level: "junior",
    position: "fullstack szoftverfejlesztő",
    birth: new Date("1993.08.17"),
    country: "Hungary",
    city: "Körmend",
    avatar: "avatar.png",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
  },
  education: [
    {
      school: "UDEMY",
      technical: "Önfejlesztő kurzusok",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur exercitationem, animi et commodi ex nisi soluta doloremque nam accusamus unde!",
    },
    {
      school: "Rázsó Imre Szakközépiskola",
      technical: "Szoftverfejlesztő",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur exercitationem, animi et commodi ex nisi soluta doloremque nam accusamus unde!",
    },
    {
      school: "Gépipari Informatikai és Műszaki Szakközépiskola",
      technical: "Gépésztechnikus / CNC forgácsoló",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur exercitationem, animi et commodi ex nisi soluta doloremque nam accusamus unde!",
    },
    {
      school: "Kölcsey Ferenc Gimnázium",
      technical: "Érettségi",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur exercitationem, animi et commodi ex nisi soluta doloremque nam accusamus unde!",
    },
  ],
  expertise: ["JavaScript", "Express", "NodeJS", "OOP", "GIT"],
  hobbies: [
    {
      title: "coding",
      icon: "fas fa-code",
    },
    {
      title: "photography",
      icon: "fas fa-camera-retro",
    },
    {
      title: "swimming",
      icon: "fas fa-swimmer",
    },
    {
      title: "hiking",
      icon: "fas fa-hiking",
    },
    {
      title: "cycling",
      icon: "fas fa-bicycle",
    },
    {
      title: "pizza",
      icon: "fas fa-pizza-slice",
    },
  ],
  contacts: [
    {
      title: "email",
      data: "mrpeterfulop@gmail.com",
      icon: "fas fa-envelope",
      href: "mailto: mrpeterfulop@gmail.com",
    },
    {
      title: "phone",
      data: "+36306561900",
      icon: "fas fa-phone-alt",
      href: "tel:+36306561900",
    },
    {
      title: "location",
      data: "Hungary, Körmend",
      icon: "fas fa-map-marker-alt",
      href: "https://goo.gl/maps/nb1VupvEym9PHs6T9",
    },
  ],
  social: [
    {
      title: "facebook",
      icon: "fab fa-facebook",
      link: "https://www.facebook.com/fulop.peter.10",
    },
    {
      title: "github",
      icon: "fab fa-github",
      link: "https://github.com/peterfulop",
    },
    {
      title: "linkedin",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/peter-fulop",
    },
  ],
  skills: [
    {
      name: "JavaScript",
      force: 70,
      icon: "SiJavascript",
    },
    {
      name: "TypeScript",
      force: 55,
      icon: "SiTypescript",
    },
    {
      name: "NodeJS",
      force: 60,
      icon: "SiNodedotjs",
    },
    {
      name: "MongoDB",
      force: 30,
      icon: "SiMongodb",
    },

    {
      name: "React",
      force: 30,
      icon: "SiReact",
    },
    {
      name: "C#",
      force: 40,
      icon: "SiCsharp",
    },
    {
      name: "Bootstrap",
      force: 60,
      icon: "SiBootstrap",
    },
    {
      name: "CSS",
      force: 35,
      icon: "SiCss3",
    },
    {
      name: "HTML",
      force: 80,
      icon: "SiHtml5",
    },
    {
      name: "PHP",
      force: 10,
      icon: "SiPhp",
    },
  ],
  softSkills: [
    "kitartás",
    "önállóság",
    "precizitás",
    "szakmaiság",
    "csapatmuna",
    "erős teherbírás",
    "segítőkészség",
    "önállóság",
  ],
  experience: [
    {
      position: "Műszaki rajzoló",
      title: "Tervező",
      company: "Breitenbach Kft.",
      institute: "Magyarország",
      location: "Körmend",
      from: 2017,
      to: 2020,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
    },
    {
      position: "KVP Team",
      title: "Folyamatfejlesztés, optimalizálás",
      company: "ADA Hungária Bútorgyár",
      institute: "Magyarország",
      location: "Körmend",
      from: 2017,
      to: 2016,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
    },
    {
      position: "Műszaki rajzoló",
      title: "CAD tervező",
      company: "Compnay",
      institute: "Magyarország",
      location: "Körmend",
      from: 2017,
      to: 2014,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
    },
  ],
  achivements: [
    {
      award: "Your Award Name",
      company: "Company",
      institute: "Institute Name",
      location: "Location or Country",
      year: 2019,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
    },
    {
      award: "Your Award Name",
      company: "Company",
      institute: "Institute Name",
      location: "Location or Country",
      year: 2021,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque nobis veritatis vitae fugiat ex numquam illo enim, eum libero dignissimos eaque fugit inventore laudantium? Explicabo molestiae quod aspernatur enim est.",
    },
  ],
  languages: [
    {
      language: "angol",
      level: "középfok",
      exam: "-",
      force: 3,
      write: 60,
      read: 70,
      speak: 40,
    },
    {
      language: "német",
      level: "középfok",
      force: 4,
      exam: "alapfokú C",
      write: 70,
      read: 70,
      speak: 70,
    },
  ],
  motivation: "Célom, hogy lorem ipsum...",
  techStack: [
    "SiMongodb",
    "SiMysql",
    "SiNextdotjs",
    "SiReact",
    "SiPhp",
    "SiTypescript",
    "SiJavascript",
    "SiHtml5",
    "SiBootstrap",
    "SiCss3",
    "SiExpress",
    "SiCsharp",
    "SiDotnet",
    "SiGit",
    "SiGithub",
    "SiMaterialui",
    "SiUdemy",
    "SiNodedotjs",
    "SiFontawesome",
    "SiGitlab",
    "SiAdobephotoshop",
    "SiAdobelightroom",
    "SiVisualstudiocode",
    "SiPostman",
    "SiXampp",
    "SiGitkraken",
    "SiSlack",
  ],
};