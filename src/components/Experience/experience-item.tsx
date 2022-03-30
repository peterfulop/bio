import { Exprerience } from "../../utils/cv.interface";
import { FaCircle } from "react-icons/fa";

export default function ExperienceItem(props: { experience: Exprerience }) {
  return (
    <div className="experince__item d-flex mb-1">
      <div className="experience_icon_box d-flex justify-content-center align-items-center me-3">
        <FaCircle className="icon" />
      </div>
      <div>
        {" "}
        <h5>
          {props.experience.position} / {props.experience.title}
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
