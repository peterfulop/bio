import Profile from "../Profile/profile";
import Educations from "../Educations/educations";
import Contacts from "../Contacts/contacts";
import Expertise from "../Expertise/expertise";
import Hobbies from "../Hobbies/hobbies";
import Socials from "../Social/social";
import DataContext from "../../contexts/data.context";
import { useContext } from "react";

export default function SidebarHeader() {
  const bioData = useContext(DataContext);
  return (
    <div className="sidebar-section p-1 p-md-3">
      <Profile
        avatar={bioData.personals.avatar}
        birthDate={bioData.personals.birth}
      />
      <Educations educations={bioData.education} />
      <Contacts contacts={bioData.contacts} />
      <Expertise expertise={bioData.expertise} />
      <Hobbies hobbies={bioData.hobbies} />
      <Socials social={bioData.social} />
    </div>
  );
}
