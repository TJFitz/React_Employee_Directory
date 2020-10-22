import React from "react";
import "./style.css";

export default function Wrapper(props) {
  return <div className="text-center wrapperWidth">{props.children}</div>;
}
