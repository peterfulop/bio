import ContentBody from "./Content/biography-body-content";
import SidebarBody from "./Sidebar/biography-body-sidebar";

export default function BiographyBody() {
  return (
    <div className="biography__body container">
      <section className="row">
        <ContentBody />
        <SidebarBody />
      </section>
    </div>
  );
}
