import React, { Component } from "react";
import classes from "./CandidateCreator.css";
import StyledButton from '../../components/UI/Button/StyledButton';
import {
  createControl,
  validate,
  validateForm
} from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";
import { connect } from "react-redux";
import {
  createCandidate,
  finishCreateCandidate
} from "../../store/actions/createCandidate";


// TODO: add dd list for Jobs input 
// TODO: add upload picture
// TODO: description should be big input
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
    console.log("before createCandidate")
    this.props.createCandidate(candidate);
    console.log("after createCandidate")

    this.setState({
      isFormValid: false,
      formControls: createFormCntrls()
    });
    console.log("before finishCreateCandidate")
    this.props.finishCreateCandidate();
    console.log("before finishCreateCandidate")

  };


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
