import React, { Component } from "react";
import classes from "./CandidateCreator.css";
import StyledButton from '../../components/UI/Button/StyledButton';
import {
  createControl,
  validate,
  validateForm
} from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";
import CountrySelect from '../../components/UI/CountrySelect/CountrySelect';
import { connect } from "react-redux";
import {
  createCandidate,
  finishCreateCandidate
} from "../../store/actions/createCandidate";


// TODO: add dd list for Jobs input 
// TODO: add upload picture
//TODO: error handler
function createFormCntrls() {
  return {
    name: createControl(
      {
        label: "Name",
        errorMessage: "Name is a must field!"
      },
      { required: true }
    ),
    yearsOfExperience: createControl(
        {
          label: "My experience in years",
          errorMessage: "Experience is a must field!"
        },
        { required: true }
      ),
    jobs: createControl(
        {
          label: "Developer position that I'm looking for",
          errorMessage: "Position is a must field!"
        },
        { required: true }
      ),
    location: createControl(
      {
        label: "My location is",
        errorMessage: "Location is a must field!"
      },
      { required: true }
    ),
    description: createControl(
      {
        label: "Short description about myself",
        errorMessage: "Description is a must field!"
      },
      { required: true }
    ),
    url: createControl(
      {
        label: "Link to my LinkedIn profile",
        errorMessage: "Link is a must field!"
      },
      { required: true }
    )
    
  };
}

class CandidateCreator extends Component {
  state = {
    isFormValid: false,
    formControls: createFormCntrls()
  };

  submitHandler = event => {
    event.preventDefault();
  };


  addCandidateHandler = () => {
    const {
      name,
      yearsOfExperience,
      jobs,
      location,
      description,
      url
    } = this.state.formControls;

    const candidate = {
      name: name.value,
      yearsOfExperience: yearsOfExperience.value,
      jobs: jobs.value,
      location: location.value,
      description: description.value,
      url: url.value,
      created_at: new Date().toUTCString()
    };
    this.props.createCandidate(candidate);

    this.setState({
      isFormValid: false,
      formControls: createFormCntrls()
    });
    this.props.finishCreateCandidate();
  };

  handlePickedCountry = (country) => {
    this.setState({
      pickedCoutry: country
    })
  }

  onChangeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid: validateForm(formControls)
    });
  };

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      if (controlName === "location") {
        return <div style={{marginBottom: "35px", width: "100%", minWidth: "300px"}}>
                <CountrySelect 
                  onPickedCountry={event =>
                      this.onChangeHandler(event.target.value, controlName)} 
                  isFullCountryList={true} 
                  labelName="Country"
                  placeholder=""
                />
              </div>
      }
      if (controlName === "description") {
        return <div className={classes.textAreaContainer}>
                  <label>Short Description</label>
                  <textarea 
                          id="my_description" 
                          className={classes.textArea}
                          name="my_description" 
                          rows="6" 
                          cols="50"
                          onChange={event =>
                            this.onChangeHandler(event.target.value, controlName)
                          }/>

                </div>
      }
      const control = this.state.formControls[controlName];

      return (
          <Input
            key={controlName + index}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={event =>
              this.onChangeHandler(event.target.value, controlName)
            }
          />
      );
    });
  }

  render() {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.pageTitle}>
          ADD MY CANDIDATURE
        </div>
          <form onSubmit={this.submitHandler} className={classes.authForm}>
            {this.renderControls()}

            <StyledButton
                  onClick={this.addCandidateHandler}
                  to="/candidateSuccess"
                  text="SUBMIT MY CANDIDATURE"
                  size="big"
                  disabled={!this.state.isFormValid}
            />
          </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    candidate: state.createCandidate.candidate
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCandidate: candidate => dispatch(createCandidate(candidate)),
    finishCreateCandidate: () => dispatch(finishCreateCandidate())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidateCreator);
