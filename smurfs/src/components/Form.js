import React from "react";

import { addSmurf } from "../actions";

import { connect } from "react-redux";

class Form extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    // e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          placeholder="Name"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          placeholder="Age"
          name="age"
          type="number"
          value={this.state.age}
          onChange={this.changeHandler}
        />
        <input
          placeholder="Height"
          name="height"
          type="text"
          value={this.state.height}
          onChange={this.changeHandler}
        />
        <button>Create</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(Form);
