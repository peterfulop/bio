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
      "Fülöp Péter vagyok,  $age$ éves, és Vas megyében, Körmenden lakom. Alapvetően műszaki beállítottságú vagyok, tanulmányaimat is ez irányban végeztem, mint gépésztechnikus, CNC forgácsoló, és műszaki rajzoló. Ezek mellett évek óta, vállalkozás formájában fotográfusként dolgozom. A programozás iránti aktív érdeklődésem nagyjából az első munkahelyemmel együtt érkezett. Számtalan helyzetben próbáltam az adott munkafolyamatokon könnyíteni, egyszerűbbé, transzparensebbé tenni. Az egyszerű Excel makróktól kezdve végül hamar eljutottam a VBA szintre, ahol alapvetően a Visual Basic, egy Office alkalmazásokra testreszabott nyelv formájában volt elérhető. Az autodidakta módon történő tanulás a sajátos hiányosságaival lassan kezdte kinőni magát, így 2020-ban jelentkeztem egy szoftverfejlesztő OKJ képzésre, hogy az alapok meglegyenek. A képzés végére nagyjából sikerült irányt találni a szoftverfejlesztő pályán. Jelenleg a webfejlesztés érdekel a legjobban, és próbálok szorosabb kapcsolatot építeni a JavaScripttel.",
  },
  education: [
    {
      school: "UDEMY",
      technical: "Önfejlesztő kurzusok",
      text: "Programozás témakörben számtalan kurzus: NodeJS, MongoDB, TypeScipt, React, JavaScript alapok, C# LINQ, MySQL...",
    },
    {
      school: "Vas Megyei SZC Rázsó Imre Technikum",
      technical: "Szoftverfejlesztő - 2020-2022",
      text: "A képzésen a fő programozási nyelv a C# volt, erre építettünk először konzolos alkalmazásokat, majd WPF segítségével grafikus UI. Adatbázis szinten: MySQL, MSSQL, C# alatt EntityFramework. Webfejlesztés témában Js, és PHP.",
    },
    {
      school: "Gépipari Informatikai és Műszaki Szakközépiskola",
      technical: "Gépésztechnikus / CNC forgácsoló - 2012-2014",
      text: "Érettségi után 2 év technikum. Gépésztechnikus alapok, műszaki rajzolás, CAD, CNC és hagyományos anyagmegmunkálási technikák",
    },
    {
      school: "Kölcsey Ferenc Gimnázium",
      technical: "Érettségi 2008-2014",
      text: "",
    },
  ],
  expertise: ["JavaScript", "Bootstrap", "Express", "NodeJS", "OOP", "GIT"],
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
      force: 60,
      icon: "SiReact",
    },
    {
      name: "C#",
      force: 40,
      icon: "SiCsharp",
    },
    {
      name: "CSS",
      force: 65,
      icon: "SiCss3",
    },
    {
      name: "Bootstrap",
      force: 60,
      icon: "SiBootstrap",
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
    "kreativitás",
    "precizitás",
    "igényesség",
    "szakmaiság",
    "kitartás",
  ],
  experience: [
    {
      position: "Fotográfus",
      title: "",
      company: "Egyéni vállalkozás",
      institute: "-",
      location: "Körmend",
      from: 2020,
      to: "",
      text: "2017 óta dolgozom fotográfusként, mint vállalkozó. Hobbiból lett szenvedély, majd hivatás. Elsősorban családi eseményeket, portrékat, esküvőket dokumentálok. A 2020-as évtől főállásban vállalkozó, ami fő megélhetési forrás.",
    },
    {
      position: "Műszaki rajzoló",
      title: "Tervező",
      company: "Breitenbach Kft.",
      institute: "Magyarország",
      location: "Körmend",
      from: 2017,
      to: 2020,
      text: "Főbb feladataim közé tartozott acélszerkezetek, lépcsők, csarnokok tervezésében való aktív részvétel, tervek gyártásra történő előkészítése, anyagrendelés, munka optimalizálás. Önszorgalomból kisebb, informatikai jellegű problémák feltárása, megoldása, folyamat automatizálás.",
    },
    {
      position: "KVP Team",
      title: "Folyamatfejlesztés, optimalizálás",
      company: "Ada Hungária Bútorgyár Kft.",
      institute: "Magyarország",
      location: "Körmend",
      from: 2017,
      to: 2016,
      text: "Termelési folyamatok segítése, gyorsítása, folyamatleírások készítése, anyag kihozatali tényezők felülvizsgálata, javítása, munkakörnyezet optimalizálása.",
    },
    {
      position: "Műszaki rajzoló",
      title: "CAD tervező",
      company: "Ada Hungária Bútorgyár Kft.",
      institute: "Magyarország",
      location: "Körmend",
      from: 2017,
      to: 2014,
      text: "Műszaki rajzok készítése a termelés számára. 3D összeállítások készítése az egyes bútorokról, amik az összeszerelést, illetve a 	tervezést segítették.",
    },
  ],
  achivements: [
    {
      award: "Project Manager",
      company: "Breitenbach Kft.",
      institute: "",
      location: "Körmend",
      year: 2020,
      text: "Komplett, 4 belső céget magába foglaló globális rendszer építése volt a cél. Az összes futó projekt vezetése, megrendelések kezelése, partnercégek, dolgozók nyilvántartása mind egy alkalmazásban. Lehetőségünk volt cégenként projektek szűrésére, kezelésére, megrendelések rögzítésére. A rendszeres megrendeléseket el tudtuk készíteni korábbiak alapján, a cégre jellemző megrendelőformula automatikus generálásra történt word, és PDF formátumban, majd egyből, Outlook kapcsolattal új emailként elküldhettük a beszállító partner felé, csatolva a PDF megrendelést. A megoldás Excelben, VBA implementálással készült, formok segítségével, részlegenkéti testreszabható szerepkörökkel.",
    },
    {
      award: "CutPro, szálanyag kalkulációs program",
      company: "Breitenbach Kft.",
      institute: "",
      location: "Körmend",
      year: 2019,
      text: "Az acélgyártás anyagigény felmérésére készült megoldás, mely az ismert anyaghosszok, és keresztmetszetek alapján kalkulált várható anyagigényt a rendeléshez, illetve a gyártás számára vágási listát exportált PDF formátumban. Lehetőségünk volt megadni a szálankénti minimális maradékot, a vágási lapvastagságot. Az adatokat a program excel formátumból importálta, és béta verzióban képes volt meglévő raktárkészlet anyagaiból is kalkulálni. A megoldás Excelben, VBA implementálással készült, formok segítségével.",
    },
    {
      award: "Lagerbestand Program",
      company: "Breitenbach Kft.",
      institute: "",
      location: "Körmend",
      year: 2018,
      text: "Egyszerű raktárkészlet nyilvántartó program készítése volt a cél, ami lehetővé teszi a beérkező termékek (kötőelemek, pántok, faanyagok) leltározását. Kritikusan alacsony raktárkészlet esetén figyelmeztette a használót, hogy melyik termékekből szükséges rendelést leadni. A raktárból történő kivételezés is nyomon követésre került: ki, mikor, mit, és milyen projektszámra vitte ki az adott termékeket. Lehetőség volt összegző kimutatás készítésére, PDF generálással. A megoldás Excelben, VBA implementálással készült, formok segítségével.",
    },
    {
      award: "OFS+Pro",
      company: "Ada Hungária Bútorgyár Kft.",
      institute: "KVP Team",
      location: "Körmend",
      year: 2017,
      text: "A bútorgyártásban, szivacsfeldolgozás területén történő, nagymértékű anyagkihozatal javítás. A lényege, hogy a napi gyártásból megmaradt többlettermékeket leltárba véve, a következő gyártási listából kivételre kerültek a már leltározott tételek. A gyártási lista .csv állományban érkezett adatbázisból, ami az aktuális leltárkészlettel történő összefésül után egy új, módosított listát küldött a szivacsvágó gépnek. A megoldás Excelben, VBA implementálással készült.",
    },
  ],
  languages: [
    {
      language: "angol",
      level: "Alapszintű nyelvismeret",
      exam: "-",
      force: 3,
      write: 60,
      read: 70,
      speak: 40,
    },
    {
      language: "német",
      level: "Alapfokú, C-típusú nyelvvizsga",
      force: 4,
      exam: "alapfokú C",
      write: 70,
      read: 70,
      speak: 70,
    },
  ],
  motivation:
    "Általános célom, hogy az élet minden területén biztos alapokra tudjak építkezni, amihez elengedhetetlen a kitartó és eredményes munka. Bár sok mindenre igaz, de a szoftverfejlesztésre kifejezetten: egy életen át tartó tanulás az igazán gyümölcsöző karrier titka. Úgy gondolom, hogy kellő energia befektetéssel, és kitartó tanulással, alázattal bármi lehet az emberből, csak nem szabad szem elől veszíteni a célt. A karriercélom viszonylag triviális: kezdő, junior fejlesztőből szeretnék eljutni a lehető legmagasabb szintre, a lehető legtöbb tudás birtokában. ",
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
    "SiNodedotjs",
    "SiFontawesome",
    "SiGitlab",
    "SiVisualstudiocode",
    "SiPostman",
    "SiXampp",
    "SiGitkraken",
    "SiSlack",
  ],
  projects: [
    {
      title: "Jobify App",
      img: "job_app.PNG",
      url: "https://jobify-react-app.herokuapp.com/",
    },
    {
      title: "Product App",
      img: "product_app.PNG",
      url: "https://reactproductapp.web.app/",
    },
    {
      title: "Pizza App",
      img: "pizza_app.PNG",
      url: "https://reactpizzaapp.web.app/",
    },
    {
      title: "Quotes App",
      img: "quote_app.PNG",
      url: "https://reactquoteproject.web.app/",
    },
  ],
};
