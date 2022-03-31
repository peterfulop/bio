import { Fragment, useContext } from "react";
import BiographyHeader from "./Header/biography-header";
import BiographyBody from "./Body/biography-body";
import DataContext from "../../contexts/data.context";
import "./biography.css";

export default function Biography() {
  const bioData = useContext(DataContext);

  return (
    <Fragment>
      <BiographyHeader
        name={bioData.personals?.name}
        level={bioData.personals?.level}
        position={bioData.personals?.position}
      />
      <BiographyBody />
    </Fragment>
  );
}
