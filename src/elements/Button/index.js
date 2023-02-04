import React from "react";

import "./index.scss";

function Button(props) {
  return (
    <a href={props.directTo} className={`btn ${props.classes}`}>
      {props.children}
    </a>
  );
}

export default Button;
