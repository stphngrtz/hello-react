import React from 'react';
import ReactDOM from 'react-dom';

var Employee = React.createClass({
  handleDelete: function() {
    this.setState({display: false});
  },
  getInitialState: function() {
    return {display: true};
  },
  render: function() {
    if (this.state.display == false)
      return null;
    else
      return (
        <tr>
          <td>{this.props.employee.name}</td>
          <td>{this.props.employee.age}</td>
          <td>{this.props.employee.years}</td>
          <td><button className="btn btn-info" onClick={this.handleDelete}>Delete</button></td>
          </tr>
        );
  }
});

var EmployeeTable = React.createClass({
  render: function() {
    var rows=[];
    this.props.employees.forEach(employee => {
      rows.push(<Employee employee={employee} />);
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
});

var App = React.createClass({
  loadEmployees: function() {
    this.setState({employees: [
      {name: 'Joe Biden', age: 45, years: 5},
      {name: 'President Obama', age: 54, years: 8},
      {name: 'Crystal Mac', age: 34, years: 12},
      {name: 'James Henry', age: 33, years: 2}
    ]});
  },
  getInitialState: function() {
    return {employees: []};
  },
  componentDidMount: function() {
    this.loadEmployees();
  },
  render () {
    return (<EmployeeTable employees={this.state.employees} />);
  }
});

ReactDOM.render(
  <App />, document.getElementById('content')
);
