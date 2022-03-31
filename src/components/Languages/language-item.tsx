import { Language } from "../../utils/cv.interface";
import { CircleRating } from "../MUI/CircleRating";

export default function LanguageItem(props: { language: Language }) {
  return (
    <div className="sidebar__education">
      <div className="sidebar__item sidebar-education d-block justify-content-left p-3 my-2">
        <CircleRating
          label={props.language.language}
          rate={props.language.force}
          level={props.language.level}
        />
        <p className="item-text__small">{props.language.level}</p>
      </div>
    </div>
  );
}
