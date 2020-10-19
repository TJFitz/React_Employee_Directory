import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import "./style.css";
import Employee from "../Employee/Employee";

function Wrapper() {
  return (
    <div className=" text-center container bg-secondary wrapperWidth h-100 ">
      <Jumbotron></Jumbotron>
      <Employee></Employee>
      <Employee></Employee>
      <Employee></Employee>
      <Employee></Employee>
    </div>
  );
}

export default Wrapper;
