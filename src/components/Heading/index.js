import React from "react";
import './index.scss'

function Heading(props) {
  return <h1 className={`${props.classes}`}>{props.children}</h1>;
}

export default Heading;
