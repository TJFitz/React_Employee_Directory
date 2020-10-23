import React, { Component } from "react";
import "./style.css";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Wrapper from "../components/Wrapper/Wrapper";
import Employee from "../components/Employee/Employee";
import Fullpage from "../components/Fullpage/Fullpage";
import API from "../utils/API";
import Searchbar from "../components/Searchbar/Searchbar";
import Sortbar from "../components/Sortbar/Sortbar";

export default class Home extends Component {
  state = {
    search: "",
    employees: [],
    currentDisplay: [],
    currentSort: 0,
  };

  getEmployees = () => {
    API.getEmployees().then((results) => {
      let employeeArr = results.data.results.map((person) => {
        return {
          name: `${person.name.title} ${person.name.first} ${person.name.last}`,
          email: person.email,
          picture: person.picture.medium,
          phone: person.phone,
        };
      });
      this.setState({
        employees: employeeArr,
        currentDisplay: employeeArr,
      });
    });
  };

  displayEmployees = () => {
    let displayedEmployees = this.state.employees.filter((person) => {
      for (const [key, value] of Object.entries(person)) {
        if (value.includes(this.state.search)) {
          return person;
        }
      }
    });
    return displayedEmployees;
  };

  handleInputChange = (event) => {
    this.setState({
      search: event.target.value,
      currentDisplay: this.displayEmployees(),
    });
  };

  handleSort = (sortBy) => {
    let sortedEmployees = this.state.employees.sort((a, b) => {
      console.log(a);
      console.log(b);
      console.log(sortBy);
      console.log(a.sortBy);
      return a.sortBy - b.sortBy;
    });
    this.setState({
      employees: sortedEmployees,
      currentDisplay: this.displayEmployees(),
    });
    console.log(sortedEmployees);
  };

  componentDidMount() {
    this.getEmployees();
  }

  render() {
    return (
      <Fullpage>
        <Wrapper>
          <Jumbotron>
            <h1>Employee Directory</h1>
          </Jumbotron>
          <Searchbar handleInputChange={this.handleInputChange}></Searchbar>
          <Sortbar handleSort={this.handleSort}></Sortbar>
          {this.state.currentDisplay.map((employee) => {
            return (
              <Employee
                name={employee.name}
                email={employee.email}
                phone={employee.phone}
                picture={employee.picture}
                key={employee.email}
              ></Employee>
            );
          })}
        </Wrapper>
      </Fullpage>
    );
  }
}
