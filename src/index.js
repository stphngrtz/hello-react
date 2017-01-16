import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { EmployeeApp } from './employeeApp';
import { TodoApp } from './todoApp';
import { RoutingApp, User, NoMatch } from './routingApp';

ReactDOM.render(
  <EmployeeApp />, document.getElementById('employees')
);
ReactDOM.render(
  <TodoApp />, document.getElementById('todos')
);
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={RoutingApp}>
      <Route path="/user/:userId" component={User} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>
  ), document.getElementById('routing')
);
