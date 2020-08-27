import React from "react";
import classes from "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Loader from "../../components/UI/Loader/Loader";
import { connect } from "react-redux";
import {
  fetchQuizByID,
  quizAnswerClick,
  retryQuiz
} from "../../store/actions/quiz";

class Quiz extends React.Component {
  /* onAnswerClickHandler = answerId => {
    if (this.props.answerState) {
      const key = Object.keys(this.props.answerState)[0];
      if (this.props.answerState[key] === "success") {
        return;
      }
    }

    console.log("Answer ID: ", answerId);

    const question = this.props.quiz[this.props.activeQuestion];
    const results = this.props.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      this.setState({
        answerState: { [answerId]: "success" },
        results
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("Finished");
          this.setState({
            isFinished: true
          });
        } else {
          this.setState({
            activeQuestion: this.props.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      console.log("wrong answer, try again!");
      results[question.id] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results
      });
    }
  }; */

  /* isQuizFinished() {
    return this.props.activeQuestion + 1 === this.props.quiz.length;
  } */

  /* retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    });
  }; */

  componentDidMount() {
    this.props.fetchQuizByID(this.props.match.params.id);
    /* try {
      const response = await axios.get(
        `/quizes/${this.props.match.params.id}.json`
      );

      const quiz = response.data;

      this.setState({
        quiz,
        loading: false
      });
    } catch (e) {
      console.log(e);
    } */
  }

  componentWillUnmount() {
    this.props.retryQuiz();
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all the questions below: </h1>
          {this.props.loading || !this.props.quiz ? (
            <Loader />
          ) : this.props.isFinished ? (
            <FinishedQuiz
              results={this.props.results}
              quiz={this.props.quiz}
              onRetry={this.props.retryQuiz}
            />
          ) : (
            <ActiveQuiz
              answers={this.props.quiz[this.props.activeQuestion].answers}
              question={this.props.quiz[this.props.activeQuestion].question}
              //action from the quiz.js:
              onAnswerClick={this.props.quizAnswerClick}
              quizLength={this.props.quiz.length}
              answerNumber={this.props.activeQuestion + 1}
              state={this.props.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    answerState: state.quiz.answerState, // [id]: 'success' 'error'
    activeQuestion: state.quiz.activeQuestion,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizByID: id => dispatch(fetchQuizByID(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
