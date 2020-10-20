import React, { Component } from "react";
import "./style.css";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Wrapper from "../components/Wrapper/Wrapper";
import Employee from "../components/Employee/Employee";
import Fullpage from "../components/Fullpage/Fullpage";
import API from "../utils/API";
import Searchbar from "../components/Searchbar/Searchbar";

export default class Home extends Component {
  state = {
    search: "",
    employees: [],
  };

  getEmployees = () => {
    API.getEmployees().then((results) => {
      // console.log(results);
      let employeeArr = results.data.results.map((person) => {
        return {
          name: person.name,
          email: person.email,
          picture: person.picture.medium,
          phone: person.phone,
        };
      });
      // console.log(employees);
      this.setState({
        employees: employeeArr,
      });
    });
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  componentDidMount() {
    this.getEmployees();
  }

  render() {
    console.log(this.state.employees);
    return (
      <Fullpage>
        <Wrapper>
          <Jumbotron>
            <h1>Employee Directory</h1>
          </Jumbotron>
          <Searchbar handleInputChange={this.handleInputChange}></Searchbar>
          {this.state.employees.map((employee) => {
            return (
              <Employee key={employee.email}>
                <div className="col-md-3 customFloat">
                  <img src={employee.picture}></img>
                </div>
                <div className="col-md-2">
                  <div>{employee.email}</div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-4">
                  <div>{employee.phone}</div>
                </div>{" "}
                <div className="col-md-3">
                  <div>{`${employee.name.title} ${employee.name.first} ${employee.name.last}`}</div>
                </div>{" "}
              </Employee>
            );
          })}
        </Wrapper>
      </Fullpage>
    );
  }
}

// <div>
// <img src={employee.picture}></img>
// </div>
/* <div>{`${employee.name.title} ${employee.name.first} ${employee.name.last}`}</div> */
/* <div>{employee.email}</div> */
