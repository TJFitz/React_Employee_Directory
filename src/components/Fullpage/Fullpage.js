import React from "react";
import "./style.css";

export default function Fullpage(props) {
  return <div className="bg-dark fullpageWidth vh-100">{props.children}</div>;
}
