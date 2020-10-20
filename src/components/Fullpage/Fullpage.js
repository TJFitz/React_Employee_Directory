import React from "react";
import "./style.css";

export default function Fullpage(props) {
  return <div className="bg-dark fullpageWidth">{props.children}</div>;
}
