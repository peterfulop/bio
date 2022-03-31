import { Education } from "../../utils/cv.interface";

export default function EducationItem(props: { education: Education }) {
  return (
    <div className="sidebar__education">
      <div className="sidebar__item sidebar-education d-block justify-content-left p-3 my-2">
        <h5 className="item-text__heading mb-2">{props.education.school}</h5>
        <h6 className="mb-2 fw-light">{props.education.technical}</h6>
        <small className="fw-normal">{props.education.text}</small>
      </div>
    </div>
  );
}
