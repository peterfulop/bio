import { Exprerience } from "../../utils/cv.interface";
import ContentHeading from "../Content/content-heading";
import ExperienceItem from "./experience-item";

export default function Experience(props: { experience: Exprerience[] }) {
  return (
    <div className="content__item mb-4">
      <ContentHeading title={"Experience"} />
      <div className="experience_list">
        {props.experience.map((experience: Exprerience, i: number) => {
          return <ExperienceItem key={i} experience={experience} />;
        })}
      </div>
    </div>
  );
}
