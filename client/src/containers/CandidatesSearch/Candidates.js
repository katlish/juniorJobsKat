import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../JobsSearch/ItemsSearch.css";
import Loader from "../../components/UI/Loader/Loader";
import Pagination from '../../components/Pagination/Pagination'
import CardModalNew from '../../components/UI/CardModal/CardModalNew'
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

  sortByDateDesc = (candidates) => {
    const sortedCandidates = candidates.sort(function(can1,can2){
        return new Date(can2.created_at) - new Date(can1.created_at);
      });
    return  sortedCandidates; 
  }


  render() {
    const candidatesArr = this.sortByDateDesc(this.props.candidates);
    const candidatesOnPage = candidatesArr.slice(this.state.activeStep * NUM_OF_CANDIDATES_ON_PAGE , 
                                  (this.state.activeStep * NUM_OF_CANDIDATES_ON_PAGE + NUM_OF_CANDIDATES_ON_PAGE));

    return (
            <div className={classes.searchResult}>
                {this.props.loading && this.props.candidates.length > 0 ? (
                <Loader />
              ) : (
                    <div className={classes.itemsContainer}>
                      <CardModalNew cardItem={this.state.cardModalItem} handleClose={this.handleClose} open={this.state.open}/>
                          
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
                                  url: candidate.url,
                                  created_at: candidate.created_at
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
