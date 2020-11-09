import {
    CREATE_CANDIDATE,
    RESET_CANDIDATE
  } from "./actionTypes";
  import axios from "../../axios/axios-project-db";

  const CANDIDATES_API_PATH = process.env.REACT_APP_CANDIDATES_API_PATH; 

  export function createCandidate(candidate) {
    return {
      type: CREATE_CANDIDATE,
      candidate
    };
  }

  export function resetCandidate() {
    return {
      type: RESET_CANDIDATE
    };
  }
  
  export function finishCreateCandidate() {
    return async (dispatch, getState) => {
        // console.log("in Actions. getState() - ", getState());
      await axios.post(CANDIDATES_API_PATH, getState().createCandidate.candidate);
      dispatch(resetCandidate());
    };
  }
  