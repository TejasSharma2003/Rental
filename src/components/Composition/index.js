import React from "react";
import "./index.scss";

import imgComp1 from "../../assets/img-1-med.jpg";
import imgComp2 from "../../assets/img-2-med.jpg";
import imgComp3 from "../../assets/img-3-med.jpg";

function Composition() {
  return (
    <div className="composition">
      <img
        className="composition__img composition__img--1"
        src={imgComp1}
        alt="img-comp1"
      />
      <img
        className="composition__img composition__img--2"
        src={imgComp2}
        alt="img-comp2"
      />
      <img
        className="composition__img composition__img--3"
        src={imgComp3}
        alt="img-comp3"
      />
    </div>
  );
}

export default Composition;
