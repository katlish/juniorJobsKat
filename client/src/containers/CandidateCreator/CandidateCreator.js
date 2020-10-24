import React, { Component } from "react";
import classes from "./CandidateCreator.css";
import Button from "../../components/UI/Button/Button";
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


// TODO: add all fields
function createFormCntrls() {
  return {
    name: createControl(
      {
        label: "Enter your full name",
        errorMessage: "Name is a must field!"
      },
      { required: true }
    ),
    yearsOfExperience: createControl(
        {
          label: "Enter your experience",
          errorMessage: "Experience is a must field!"
        },
        { required: true }
      ),
    jobs: createControl(
        {
          label: "Which job are u looking for?",
          errorMessage: "Job is a must field!"
        },
        { required: true }
      ),
    location: createControl(
      {
        label: "Where do u from?",
        errorMessage: "Location is a must field!"
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


  addCandidateHandler = event => {
    event.preventDefault();

    const {
      name,
      yearsOfExperience,
      jobs,
      location
    } = this.state.formControls;

    const candidate = {
      name: name.value,
      yearsOfExperience: yearsOfExperience.value,
      jobs: jobs.value,
      location: location.value
    };

    this.props.createCandidate(candidate);

    this.setState({
      isFormValid: false,
      formControls: createFormCntrls()
    });

    this.props.finishCreateCandidate();
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

            <Button
              onClick={this.addCandidateHandler}
              disabled={!this.state.isFormValid}
            >
              SUBMIT MY CANDIDATURE
            </Button>
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
