import { Skill } from "../../utils/cv.interface";

export default function SkillItem(props: { skill: Skill }) {
  return (
    <div className="content__skills">
      <div className="skill-box d-flex justify-content-left mb-3">
        <div className="skill-box__icon item-icon d-flex justify-content-center me-3">
          <i className={props.skill.icon}></i>
        </div>
        <div className="skill-box__progress w-100">
          <p className="item-text">{props.skill.name}</p>
          <div className="progress">
            <div
              className="progress-bar bg-cadet"
              style={{
                width: props.skill.force + "%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
