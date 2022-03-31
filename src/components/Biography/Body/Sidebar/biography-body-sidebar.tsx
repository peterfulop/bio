import Profile from "../../../Profile/profile";
import Educations from "../../../Educations/educations";
import Contacts from "../../../Contacts/contacts";
import Expertise from "../../../Expertise/expertise";
import Hobbies from "../../../Hobbies/hobbies";
import Socials from "../../../Social/social";
import DataContext from "../../../../contexts/data.context";
import { useContext } from "react";
import Languages from "../../../Languages/languages";

export default function BiographyBodySidebar() {
  const bioData = useContext(DataContext);
  return (
    <section className="biography__body_sidebar col-sm-12 col-md-12 col-lg-4">
      <Profile
        avatar={bioData.personals.avatar}
        birthDate={bioData.personals.birth}
      />
      <Educations educations={bioData.education} />
      <Languages languages={bioData.languages} />
      <Expertise expertise={bioData.expertise} />
      <Contacts contacts={bioData.contacts} />
      <Hobbies hobbies={bioData.hobbies} />
      <Socials social={bioData.social} />
    </section>
  );
}
