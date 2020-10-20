import React from "react";
import "./style.css";

export default function Employee(props) {
  return <div className="row mx-auto">{props.children}</div>;
}
