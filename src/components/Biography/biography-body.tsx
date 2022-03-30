import ContentBody from "../Content/content-body";
import SidebarBody from "../Sidebar/sidebar-body";

export default function BiographyBody() {
  return (
    <div id="CvBody" className="d-flex flex-wrap flex-md-nowrap">
      <ContentBody />
      <SidebarBody />
    </div>
  );
}
