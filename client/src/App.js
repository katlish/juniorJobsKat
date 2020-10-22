import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import connect from "react-redux/lib/connect/connect";
import Logout from "./components/Logout/Logout";
import { autoLogin } from "./store/actions/auth";
import JobsSearch from "./containers/JobsSearch/JobsSearch";
import CandidatesSearch from './containers/CandidatesSearch/CandidatesSearch'
import HomePage from "./containers/HomePage/HomePage";
import CandidateCreator from "./containers/CandidateCreator/CandidateCreator";


class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/jobsSearch" component={JobsSearch} />
        <Route path="/quizList" component={QuizList} />
        <Route path="/candidatesSearch" component={CandidatesSearch} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/candidate-creator" component={CandidateCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/logout" component={Logout} />
          <Route path="/jobsSearch" component={JobsSearch} />
          <Route path="/quizList" component={QuizList} />
          <Route path="/candidatesSearch" component={CandidatesSearch} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
    <Layout>
      {routes}
    </Layout>);
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
