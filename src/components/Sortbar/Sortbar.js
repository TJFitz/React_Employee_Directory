import React from "react";
import "./style.css";

export default function Sortbar(props) {
  return (
    <div className="navsection">
      <button
        onClick={() => {
          props.handleSort("name");
        }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => {
          props.handleSort("email");
        }}
      >
        Sort by Email
      </button>
      <button
        onClick={() => {
          props.handleSort("phone");
        }}
      >
        Sort by Phone
      </button>
    </div>
  );
}
