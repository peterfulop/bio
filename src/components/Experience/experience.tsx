import { Exprerience } from "../../utils/cv.interface";
import ContentHeader from "../Biography/Body/Content/biography-body-content-header";
import ExperienceItem from "./experience-item";
import "./experience.css";

export default function Experience(props: { experience: Exprerience[] }) {
  return (
    <div className="content__item mb-4">
      <ContentHeader title={"Experience"} />
      <div className="experience_list">
        {props.experience.map((experience: Exprerience, i: number) => {
          return (
            <ExperienceItem
              key={i}
              experience={experience}
              index={i}
              maxLength={props.experience.length}
            />
          );
        })}
      </div>
    </div>
  );
}
