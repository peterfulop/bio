import { Exprerience } from "../../utils/cv.interface";
import { FaCircle } from "react-icons/fa";

export default function ExperienceItem(props: {
  experience: Exprerience;
  index: number;
  maxLength: number;
}) {
  const firstExpRoadmapClass: string = props.index === 0 ? "feature_road" : "";
  const lastExpRoadmapClass: string =
    props.index === props.maxLength - 1 ? "blank_road" : "";

  return (
    <div className="experince__item d-flex">
      <div className="roadmap">
        <div className={`roadmap_top ${firstExpRoadmapClass}`}></div>
        <div className="roadmap_center">
          <FaCircle className="icon" />
        </div>
        <div className={`roadmap_bottom ${lastExpRoadmapClass}`}></div>
      </div>
      <div className="experience__content">
        <h5>
          {props.experience.position}
          {props.experience.title.length > 0
            ? ` / ${props.experience.title}`
            : ""}
        </h5>
        <p className="item-text__small mb-3">
          {props.experience.company} | {props.experience.institute} |{" "}
          {props.experience.location} - {props.experience.from}-
          {props.experience.to}
        </p>
        <p>{props.experience.text}</p>
      </div>
    </div>
  );
}
