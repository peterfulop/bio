import { Skill } from "../../utils/cv.interface";
import ContentHeading from "../Content/content-heading";
import SkillItem from "./skill-item";

export default function Skills(props: { skills: Skill[] }) {
  return (
    <div className="content__item mb-4">
      <ContentHeading title={"Skills"} />
      {props.skills.map((skill: Skill, i: number) => {
        return <SkillItem key={i} skill={skill} />;
      })}
    </div>
  );
}
