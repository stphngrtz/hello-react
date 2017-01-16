import React from 'react';
import ReactDOM from 'react-dom';
import { EmployeeApp } from './employeeApp';
import { TodoApp } from './todoApp';

ReactDOM.render(
  <EmployeeApp />, document.getElementById('employees')
);
ReactDOM.render(
  <TodoApp />, document.getElementById('todos')
);
