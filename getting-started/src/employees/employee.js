import React from 'react';

export class Employee extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {display: true};
  }

  handleDelete() {
    this.setState({display: false});
  }

  render() {
    if (this.state.display == false)
      return null;
    else
      return (
        <tr>
          <td>{this.props.employee.name}</td>
          <td>{this.props.employee.age}</td>
          <td>{this.props.employee.years}</td>
          <td><button className="btn btn-info" onClick={() => this.handleDelete()}>Delete</button></td>
        </tr>
      );
  }
}
