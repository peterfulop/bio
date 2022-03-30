import { Achievement } from "../../utils/cv.interface";
import ContentHeading from "../Content/content-heading";
import AchivementItem from "./achievement-item";

export default function Achivements(props: { achivements: Achievement[] }) {
  return (
    <div className="content__item mb-4">
      <ContentHeading title={"Achivements"} />
      {props.achivements.map((achivement: Achievement, i: number) => {
        return <AchivementItem key={i} achivement={achivement} />;
      })}
    </div>
  );
}
