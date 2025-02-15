//importing action for the API call
import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

//Getting the smurfs from the API
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_ERROR, payload: err });
    });
};

//Creating new smurfs with post

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios.post("http://localhost:3333/smurfs", newSmurf).then(res => {
    console.log("CREATING NEW SMURF", res.data);
    dispatch({ type: ADD_SMURF, payload: res.data });
  });
};

//Delete

export const deleteSmurf = id => dispatch => {
  // console.log(id);
  axios.delete(`http://localhost:3333/smurfs/${id}`).then(res => {
    // console.log("Data being pass to delete ", res.data);
    dispatch({ type: DELETE_SMURF, payload: res.data });
  });
};
