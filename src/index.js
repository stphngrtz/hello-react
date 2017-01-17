import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { EmployeeApp } from './employeeApp';
import { TodoApp } from './todoApp';
import { RoutingApp, User, NoMatch } from './routingApp';
import shoppingApp from './shopping/reducers'
import ShoppingApp from './shopping/ShoppingApp'

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

let store = createStore(shoppingApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <ShoppingApp />
  </Provider>,
  document.getElementById('redux')
)
