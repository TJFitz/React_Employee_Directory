import React from "react";
import "./style.css";

export default function Searchbar(props) {
  return (
    <div className="centerThis">
      <div className="mb-4 searchbar">
        <input
          value={props.search}
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={props.handleInputChange}
        ></input>
      </div>
    </div>
  );
}
