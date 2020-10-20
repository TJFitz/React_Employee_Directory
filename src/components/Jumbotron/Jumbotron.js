import React from "react";
import "./style.css";

export default function Jumbotron(props) {
  return <div className="jumbotron bg-primary">{props.children}</div>;
}
