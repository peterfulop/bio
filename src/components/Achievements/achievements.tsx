import { Achievement } from "../../utils/cv.interface";
import ContentHeader from "../Biography/Body/Content/biography-body-content-header";
import AchivementItem from "./achievement-item";

export default function Achivements(props: { achivements: Achievement[] }) {
  return (
    <div className="content__item mb-4">
      <ContentHeader title={"Szakmai sikerek"} />
      {props.achivements.map((achivement: Achievement, i: number) => {
        return <AchivementItem key={i} achivement={achivement} />;
      })}
    </div>
  );
}
