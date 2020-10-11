import { combineReducers } from "redux";
import quizReducer from "./quiz";
import createQuizReducer from "./createQuiz";
import candidateReducer from "./candidate";
import createCandidateReducer from "./createCandidate";
import authReducer from "./auth";

export default combineReducers({
  quiz: quizReducer,
  createQuiz: createQuizReducer,
  candidate: candidateReducer,
  createCandidate: createCandidateReducer,
  auth: authReducer
});
