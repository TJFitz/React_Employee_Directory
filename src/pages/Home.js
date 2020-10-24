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
          namePrefix: person.name.title,
          name: `${person.name.first} ${person.name.last}`,
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
        if (value.toLowerCase().includes(this.state.search.toLowerCase())) {
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
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
    if (this.state.currentSort === 1) {
      this.setState({
        employees: sortedEmployees,
        currentDisplay: this.displayEmployees(),
        currentSort: 0,
      });
    } else {
      this.setState({
        employees: sortedEmployees.reverse(),
        currentDisplay: this.displayEmployees(),
        currentSort: 1,
      });
    }
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
                title={employee.namePrefix}
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
