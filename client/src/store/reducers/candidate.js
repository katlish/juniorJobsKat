import {
    FETCH_CANDIDATES_START,
    FETCH_CANDIDATES_SUCCESS,
    FETCH_CANDIDATE_SUCCESS,
    FETCH_CANDIDATES_ERROR,
    FINISH_CANDIDATE
  } from "../actions/actionTypes";
  
  const initState = {
    candidates: [],
    loading: false,
    error: null,
    candidate: null
  };
  
  export default function candidateReducer(state = initState, action) {
    switch (action.type) {
      case FETCH_CANDIDATES_START:
        return {
          ...state,
          loading: true
        };
      case FETCH_CANDIDATES_SUCCESS:
        return {
          ...state,
          loading: false,
          candidates: action.candidates
        };
      case FETCH_CANDIDATES_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error
        };
      case FETCH_CANDIDATE_SUCCESS:
        return {
          ...state,
          loading: false,
          candidate: action.candidate
        };
      case FINISH_CANDIDATE:
        return {
          ...state,
          isFinished: true
        };
      default:
        return state;
    }
  }
  