import { Skill } from "../../utils/cv.interface";
import ContentHeading from "../Biography/Body/Content/biography-body-content-header";
import SkillItem from "./skill-item";

import "./skills.css";

export default function Skills(props: { skills: Skill[] }) {
  return (
    <div className="content__item mb-4">
      <ContentHeading title={"Skills"} />
      <div className="skills_list d-flex flex-wrap">
        {props.skills.map((skill: Skill, i: number) => {
          return <SkillItem key={i} skill={skill} />;
        })}
      </div>
    </div>
  );
}
