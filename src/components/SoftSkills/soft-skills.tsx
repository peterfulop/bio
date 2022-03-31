import ContentHeading from "../Biography/Body/Content/biography-body-content-header";
import SoftSkillItem from "./soft-skill-item";

import "./soft-skills.css";

export default function SoftSkills(props: { softSkills: string[] }) {
  return (
    <div className="content__item mb-4">
      <ContentHeading title={"Soft Skills"} />
      <div className="softskill__list">
        {props.softSkills.map((softSkill: string, i: number) => {
          return <SoftSkillItem key={i} softSkill={softSkill} />;
        })}
      </div>
    </div>
  );
}
