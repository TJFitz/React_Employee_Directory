import React from "react";
import "./style.css";

export default function Wrapper(props) {
  return (
    <div className="text-center bg-secondary wrapperWidth">
      {props.children}
    </div>
  );
}
