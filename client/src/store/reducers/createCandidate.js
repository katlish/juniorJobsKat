import {
    CREATE_CANDIDATE,
    RESET_CANDIDATE
  } from "../actions/actionTypes";
  
  const initState = {
    candidate: []
  };
  
  export default function createCandidateReducer(state = initState, action) {
    switch (action.type) {
      case CREATE_CANDIDATE:
        return {
          ...state,
          candidate: [...state.candidate, action.candidate]
        };
      case RESET_CANDIDATE:
        return {
          ...state,
          candidate: []
        };
      default:
        return state;
    }
  }
  