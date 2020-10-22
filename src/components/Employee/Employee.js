import React from "react";
import "./style.css";

export default function Employee(props) {
  return (
    <div className="row mx-auto">
      <div className="col-md-3">
        <img src={props.picture}></img>
      </div>
      <div className="col-md-2">
        <div>{props.email}</div>
      </div>
      <div className="col-md-3"></div>
      <div className="col-md-4">
        <div>{props.phone}</div>
      </div>{" "}
      <div className="col-md-3">
        <div>{`${props.name}`}</div>
      </div>{" "}
    </div>
  );
}
