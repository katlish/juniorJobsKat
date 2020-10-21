import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import classes from "./CandidatesList.css";
import Loader from "../../components/UI/Loader/Loader";

import CandidateModal from './CandidateModal';
import Candidate from './Candidate';

import { connect } from "react-redux";
import { fetchCandidates } from "../../store/actions/candidate";
import NavBar from '../../components/UI/NavBar/NavBar'
import Footer from '../../components/UI/Footer/Footer'

const NUM_OF_CANDIDATES_ON_PAGE = 2;

class CnadidatesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selectedCandidate: {},
      activeStep: 0
    };
  }

  componentDidMount() {
    this.props.fetchCandidates();
  }
  
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  render() {
    const candidatesArr = this.props.candidates;
    const numCandidates = this.props.candidates.length;
    const numPages = Math.ceil(numCandidates / NUM_OF_CANDIDATES_ON_PAGE);
    const candidatesOnPage = candidatesArr.slice(this.state.activeStep * NUM_OF_CANDIDATES_ON_PAGE , 
                                  (this.state.activeStep * NUM_OF_CANDIDATES_ON_PAGE + NUM_OF_CANDIDATES_ON_PAGE));

    
    return (
      <>
      <NavBar/>
      <div className={classes.CandidatesList}>
        <div>
          <div className={classes.title}>
              <Typography variant='h4' component='h1'>
                      Candidates List
              </Typography>
          </div>

          {this.props.loading && this.props.candidates.length > 0 ? (
            <Loader />
          ) : (
            <div>
              <CandidateModal open={this.state.open} candidate={this.state.selectedCandidate} handleClose={this.handleClose}/>
              {candidatesOnPage.map(candidate => 
                <Candidate key={candidate.id}  candidate={candidate} onClick={() => {
                    this.handleClickOpen();
                    this.setState({
                      selectedCandidate: candidate
                    });
                  }}/>
              )}
              <div className={classes.pagination}>
                  <h3>
                  Page {this.state.activeStep+1} of {numPages} pages
                  </h3>
              
                  <MobileStepper
                      variant="progress"
                      steps={numPages}
                      position="static"
                      activeStep={this.state.activeStep}
                      nextButton={
                          <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === numPages-1}>
                            Next
                            <KeyboardArrowRight />
                          </Button>
                      }
                      backButton={
                          <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                            <KeyboardArrowLeft />
                            Back
                          </Button>
                      }
                  />
              </div>
            </div>
          )}

        </div>
      </div>
      <Footer/>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    candidates: state.candidate.candidates,
    loading: state.candidate.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCandidates: () => dispatch(fetchCandidates())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CnadidatesList);
