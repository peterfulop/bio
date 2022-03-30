import SidebarHeader from "../Sidebar/sidebar-header";
import ExpertiseItem from "./expertise-item";

export default function Expertise(props: { expertise: string[] }) {
  return (
    <div className="sidebar mx-2">
      <SidebarHeader title={"Expertise"} />
      <ul className="sidebar__item pt-2">
        {props.expertise.map((expertise: string, i: number) => {
          return <ExpertiseItem key={i} expertise={expertise} />;
        })}
      </ul>
    </div>
  );
}
