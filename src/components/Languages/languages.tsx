import { Language } from "../../utils/cv.interface";
import SidebarHeader from "../Biography/Body/Sidebar/biography-body-sidebar-header";
import EducationItem from "./language-item";

export default function Languages(props: { languages: Language[] }) {
  return (
    <div className="sidebar mx-2">
      <SidebarHeader title={"Nyelvek"} />
      {props.languages.map((language: Language, i: number) => {
        return <EducationItem key={i} language={language} />;
      })}
    </div>
  );
}
