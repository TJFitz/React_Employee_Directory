import React from "react";
import "./style.css";

export default function Jumbotron(props) {
  return <div className="jumbotron">{props.children}</div>;
}
