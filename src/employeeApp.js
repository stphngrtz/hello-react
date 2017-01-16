import React from 'react';
import { EmployeeTable } from './employees/employeeTable';

export class EmployeeApp extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { employees: [] };
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.setState({employees: [
      {name: 'Joe Biden', age: 45, years: 5},
      {name: 'President Obama', age: 54, years: 8},
      {name: 'Crystal Mac', age: 34, years: 12},
      {name: 'James Henry', age: 33, years: 2}
    ]});
  }

  render() {
    return (<EmployeeTable employees={this.state.employees} />);
  }
}
