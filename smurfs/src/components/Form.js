import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  //capturing input and setting to state
  changeHandler = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  //sending state to redux
  submitHandler = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <form>
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
          value={this.state.number}
          onChange={this.changeHandler}
        />
        <input
          placeholder="Height"
          name="height"
          type="text"
          value={this.state.height}
          onChange={this.changeHandler}
        />
        <button>Add New</button>
      </form>
    );
  }
}

export default Form;
