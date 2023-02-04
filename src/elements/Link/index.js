import React from "react";
import "./index.scss";

import { BiRightArrowAlt } from "react-icons/bi";

function Link(props) {
  return (
    <a className={`link ${props.classes}`} href={props.directTo}>
      {props.children}
      <span>
        <BiRightArrowAlt />
      </span>
    </a>
  );
}

export default Link;
