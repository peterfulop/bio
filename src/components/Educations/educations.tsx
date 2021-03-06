import { Education } from "../../utils/cv.interface";
import SidebarHeader from "../Biography/Body/Sidebar/biography-body-sidebar-header";
import EducationItem from "./education-item";

export default function Educations(props: { educations: Education[] }) {
  return (
    <div className="sidebar mx-2">
      <SidebarHeader title={"Tanulmányok"} />
      {props.educations.map((education: Education, i: number) => {
        return <EducationItem key={i} education={education} />;
      })}
    </div>
  );
}
