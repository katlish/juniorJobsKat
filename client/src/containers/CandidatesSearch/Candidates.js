import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "../JobsSearch/ItemsSearch.css";
import Loader from "../../components/UI/Loader/Loader";
import Pagination from '../../components/Pagination/Pagination'
import CardModalNew from '../../components/UI/CardModal/CardModalNew'
import Candidate from './Candidate';
import CountrySelect from '../../components/UI/CountrySelect/CountrySelect'


import { fetchCandidates } from "../../store/actions/candidate";

const NUM_OF_CANDIDATES_ON_PAGE = process.env.REACT_APP_NUM_OF_CANDIDATES_ON_PAGE;

class Cnadidates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selectedCandidate: {},
      cardModalItem: {},
      activeStep: 0,
      pickedCoutry: null
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

  filterByCountryName = (candidates, country) => {
    const filteredCandidates = candidates.filter(c => c.location === country);
    return filteredCandidates;
  }

  handlePickedCountry = (country) => {
    this.setState({
      pickedCoutry: country
    })
  }

  onFocus = () => {
    this.setState({
      pickedCoutry: ''
    })
  }

  render() {
    const candidatesArr = this.sortByDateDesc(this.props.candidates);
    let candidatesOnPage;
    let numCandidates;

    if (!this.state.pickedCoutry || this.state.pickedCoutry === "All") {
      candidatesOnPage = candidatesArr.slice(this.state.activeStep * NUM_OF_CANDIDATES_ON_PAGE , 
        (this.state.activeStep * NUM_OF_CANDIDATES_ON_PAGE + NUM_OF_CANDIDATES_ON_PAGE));
        numCandidates = candidatesArr.length;
    } else {
      const filteredCandidates = this.filterByCountryName(this.props.candidates, this.state.pickedCoutry);
      candidatesOnPage = filteredCandidates.slice(this.state.activeStep * NUM_OF_CANDIDATES_ON_PAGE , 
        (this.state.activeStep * NUM_OF_CANDIDATES_ON_PAGE + NUM_OF_CANDIDATES_ON_PAGE));
      numCandidates = filteredCandidates.length;
    }
   
    return (
            <div className={classes.searchResult}>
                {/* {console.log("RETURN")} */}
                {this.props.loading && this.props.candidates.length > 0 ? (
                <Loader />
              ) : (
                    <div className={classes.itemsContainer}>
                      <div className={classes.selectCountryList}>
                        <CountrySelect 
                          onPickedCountry={event =>
                            this.handlePickedCountry(event.target.value)} 
                          isFullCountryList={true}
                          labelName="Country"
                          placeholder=""
                          selectedCountry={this.state.pickedCoutry}
                          onFocus={this.onFocus}
                      />
                      </div>
                      
                      <div className={classes.titleNumItemsFound}>
                          {numCandidates} Junior Software Develpers Found
                      </div>

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
