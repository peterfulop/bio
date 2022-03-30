import { Education } from "../../utils/cv.interface";
import SidebarHeader from "../Sidebar/sidebar-header";
import EducationItem from "./education-item";

export default function Educations(props: { educations: Education[] }) {
  return (
    <div className="sidebar mx-2">
      <SidebarHeader title={"Education"} />
      {props.educations.map((education: Education, i: number) => {
        return <EducationItem key={i} education={education} />;
      })}
    </div>
  );
}
