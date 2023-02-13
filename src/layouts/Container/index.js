import React from "react";
import "./index.scss";

function Container(props) {
  return <div className={`container ${props.classes}`}>{props.children}</div>;
}

export default Container;
