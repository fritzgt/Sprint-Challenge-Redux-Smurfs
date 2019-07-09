import React, { Component } from "react";
import "./App.css";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
//connecting app to redux
import { connect } from "react-redux";
//importing action
import { getSmurfs, deleteSmurf } from "../actions";

//importing form
import Form from "./Form";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        <h2>List of Smurfs</h2>
        {this.props.smurfs.map(smurf => (
          <div key={smurf.id} className="card">
            <h4>{smurf.name}</h4>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <button
              onClick={e => {
                e.preventDefault();

                /* console.log("Deleting", smurf.id); */

                this.props.deleteSmurf(smurf.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf }
)(App);
