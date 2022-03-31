import AboutMe from "../../../About/about-me";
import Skills from "../../../Skills/skills";
import Experience from "../../../Experience/experience";
import Achievements from "../../../Achievements/achievements";
import DataContext from "../../../../contexts/data.context";
import SoftSkills from "../../../SoftSkills/soft-skills";
import { useContext } from "react";

export default function BiographyBodyContent() {
  const bioData = useContext(DataContext);
  return (
    <section className="biography__body_content col-sm-12 col-md-12 col-lg-8">
      <AboutMe
        headerText={"Bemutatkozás"}
        content={bioData.personals?.about}
        birthDate={bioData.personals.birth.getFullYear()}
      />
      <Skills skills={bioData.skills} />
      <SoftSkills softSkills={bioData.softSkills} />
      <Experience experience={bioData.experience} />
      <Achievements achivements={bioData.achivements} />
      <AboutMe
        headerText={"Motiváció"}
        content={bioData.motivation}
        birthDate={bioData.personals.birth.getFullYear()}
      />
    </section>
  );
}
