import React from 'react';
import { Link } from 'react-router';

export class RoutingApp extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { users: [
      {id: 1, name: 'Willi', description: 'Willi ist ein ganz wundervoller Mensch.'},
      {id: 2, name: 'Dieter', description: 'Dieter kann auch ab und zu nett sein.'},
      {id: 3, name: 'Hans', description: 'Hans ist begeistert von React.'},
    ] };
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        <div>
          <ul>
          {this.state.users.map(user => (
            <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
          ))}
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: {}};
  }

  componentDidMount() { // initial fetch, e.g. / -> /user
    this.fetchUser();
  }

  componentDidUpdate(prevProps) { // parameter change, e.g. /user/2 -> /user/3
    if(prevProps.params.userId !== this.props.params.userId)
      this.fetchUser();
  }

  componentWillUnmount() { // ignore request, e.g. /user/2 -> /
    this.ignoreFetch = true;
  }

  fetchUser() {
    if (!this.ignoreFetch)
      this.setState({ user: {id: this.props.params.userId, name: 'Test', description: 'Dies ist nur ein Test'} });
  }

  render() {
    return (
      <div>
        <h2>{this.state.user.name} <small>id: {this.state.user.id}(state) / {this.props.params.userId}(param)</small></h2>
        <p>{this.state.user.description}</p>
      </div>
    );
  }
}

export class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <i>Not Found!</i>
      </div>
    );
  }
}
