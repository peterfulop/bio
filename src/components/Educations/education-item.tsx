import { Education } from "../../utils/cv.interface";

export default function EducationItem(props: { education: Education }) {
  return (
    <div className="sidebar__education">
      <div className="sidebar__item sidebar-education d-block justify-content-left p-3 my-2">
        <p className="item-text__heading mb-1">{props.education.school}</p>
        <p className="item-text mb-2">{props.education.technical}</p>
        <p className="item-text__small">{props.education.text}</p>
      </div>
    </div>
  );
}
