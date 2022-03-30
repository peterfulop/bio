import { Contact } from "../../utils/cv.interface";
import SidebarHeader from "../Sidebar/sidebar-header";
import ContactItem from "./contact-item";

export default function Contacts(props: { contacts: Contact[] }) {
  return (
    <div className="sidebar mx-2">
      <SidebarHeader title={"Contacts"} />
      {props.contacts.map((contact: Contact, i: number) => {
        return <ContactItem key={i} contact={contact} />;
      })}
    </div>
  );
}
