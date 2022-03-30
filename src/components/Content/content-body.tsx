import AboutMe from "../About/about-me";
import Skills from "../Skills/skills";
import Experience from "../Experience/experience";
import Achievements from "../Achievements/achievements";
import DataContext from "../../contexts/data.context";
import { useContext } from "react";

export default function Content() {
  const bioData = useContext(DataContext);
  return (
    <div className="content-section p-3 p-md-5 me-0 me-md-3">
      <AboutMe content={bioData.personals?.about} />
      <Skills skills={bioData.skills} />
      <Experience experience={bioData.experience} />
      <Achievements achivements={bioData.achivements} />
    </div>
  );
}
