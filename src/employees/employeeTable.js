import React from 'react';
import { Employee } from './employee'

export class EmployeeTable extends React.Component {
  render() {
    var rows=[];
    this.props.employees.forEach(employee => {
      rows.push(<Employee employee={employee} key={employee.name} />);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Alter</th>
            <th>Jahre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
