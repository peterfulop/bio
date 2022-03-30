import { Fragment, useContext } from "react";
import BiographyHeader from "./biography-header";
import BiographyBody from "./biography-body";

import DataContext from "../../contexts/data.context";

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
