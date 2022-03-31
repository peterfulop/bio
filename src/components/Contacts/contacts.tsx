import { Contact } from "../../utils/cv.interface";
import SidebarHeader from "../Biography/Body/Sidebar/biography-body-sidebar-header";
import ContactItem from "./contact-item";

export default function Contacts(props: { contacts: Contact[] }) {
  return (
    <div className="sidebar mx-2">
      <SidebarHeader title={"Kapcsolat"} />
      {props.contacts.map((contact: Contact, i: number) => {
        return <ContactItem key={i} contact={contact} />;
      })}
    </div>
  );
}
