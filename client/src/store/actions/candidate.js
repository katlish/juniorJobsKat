import axios from "../../axios/axios-project-db";
import {
  FETCH_CANDIDATES_START,
  FETCH_CANDIDATES_SUCCESS,
  FETCH_CANDIDATE_SUCCESS,
  FETCH_CANDIDATES_ERROR,
  FINISH_CANDIDATE
} from "./actionTypes";

const CANDIDATES_API_PATH = process.env.REACT_APP_CANDIDATES_API_PATH; 
const CANDIDATES_BASE_URL = process.env.REACT_APP_CANDIDATES_BASE_URL;

export function fetchCandidates() {
  return async dispatch => {
    dispatch(fetchCandidatesStart());
    try {
      const response = await axios.get(CANDIDATES_API_PATH);

      const candidates = [];
      Object.keys(response.data).forEach((candidate, index) => {
        candidates.push({
          id: candidate,
          name: response.data[candidate][0].name,
          yearsOfExperience: response.data[candidate][0].yearsOfExperience,
          jobs: response.data[candidate][0].jobs,
          location: response.data[candidate][0].location,
          description: response.data[candidate][0].description,
          url: response.data[candidate][0].url,
          created_at: response.data[candidate][0].created_at
        });
      });
    

      dispatch(fetchCandidatesSuccess(candidates));
    } catch (e) {
      dispatch(fetchCandidatesError(e));
    }
  };
}

export function fetchCandidatesStart() {
  return {
    type: FETCH_CANDIDATES_START
  };
}

export function fetchCandidatesSuccess(candidates) {
  return {
    type: FETCH_CANDIDATES_SUCCESS,
    candidates
  };
}

export function fetchCandidatesError(e) {
  return {
    type: FETCH_CANDIDATES_ERROR,
    error: e
  };
}

export function fetchCandidateByID(candidateID) {
  return async dispatch => {
    dispatch(fetchCandidatesStart());
    try {
      const response = await axios.get(`${CANDIDATES_BASE_URL}${candidateID}.json`);

      const candidate = response.data;

      dispatch(fetchCandidateSuccess(candidate));
    } catch (e) {
      dispatch(fetchCandidatesError(e));
    }
  };
}

export function fetchCandidateSuccess(candidate) {
  return {
    type: FETCH_CANDIDATE_SUCCESS,
    candidate
  };
}



export function finishCreateCandidate() {
  return {
    type: FINISH_CANDIDATE
  };
}



