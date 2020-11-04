import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../JobsSearch/ItemsSearch.css";
import Loader from "../../components/UI/Loader/Loader";
import Pagination from '../../components/Pagination/Pagination'
import CardModal from '../../components/UI/CardModal/CardModal'
import Candidate from './Candidate';

import { fetchCandidates } from "../../store/actions/candidate";

const NUM_OF_CANDIDATES_ON_PAGE = 10;


class Cnadidates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selectedCandidate: {},
      cardModalItem: {},
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
    const candidatesOnPage = candidatesArr.slice(this.state.activeStep * NUM_OF_CANDIDATES_ON_PAGE , 
                                  (this.state.activeStep * NUM_OF_CANDIDATES_ON_PAGE + NUM_OF_CANDIDATES_ON_PAGE));

    return (
            <div className={classes.searchResult}>
                {this.props.loading && this.props.candidates.length > 0 ? (
                <Loader />
              ) : (
                    <div className={classes.itemsContainer}>
                      <CardModal 
                        open={this.state.open} 
                        cardItem={this.state.cardModalItem}
                        handleClose={this.handleClose}
                      />
                      
                      <div className={classes.itemsList}>
                        {candidatesOnPage.map(candidate => 
                          <Candidate key={candidate.id}  candidate={candidate} onClick={() => {
                              this.handleClickOpen();
                              this.setState({
                                selectedCandidate: candidate,
                                cardModalItem: {
                                  title: candidate.name, 
                                  subtitle: candidate.jobs, 
                                  location: candidate.location, 
                                  logo: "https://www.flaticon.com/svg/static/icons/svg/1484/1484861.svg", 
                                  description: `My experience in years: ${candidate.yearsOfExperience} <br/>${candidate.description}`, 
                                  url: candidate.url
                                }
                              });
                            }}/>
                        )}
                      </div>
                      <Pagination 
                            itemsList={candidatesArr} 
                            activeStep={this.state.activeStep}
                            handleNext={this.handleNext} 
                            handleBack={this.handleBack}
                            numOfItemsPerPage={NUM_OF_CANDIDATES_ON_PAGE}
                      />
                    </div>
                
              )}
            </div>
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
)(Cnadidates);
