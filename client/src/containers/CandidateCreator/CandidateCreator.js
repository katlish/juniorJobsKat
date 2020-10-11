import React, { Component } from "react";
import classes from "./CandidateCreator.css";
import Button from "../../components/UI/Button/Button";
import {
  createControl,
  validate,
  validateForm
} from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { connect } from "react-redux";
import {
  createCandidate,
  finishCreateCandidate
} from "../../store/actions/createCandidate";



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
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event =>
              this.onChangeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </Auxiliary>
      );
    });
  }

  render() {
    return (
      <div className={classes.CandidateCreator}>
        <div>
          <h1>Candidate Creator</h1>

          <form onSubmit={this.submitHandler}>
            {this.renderControls()}

            <Button
              type="success"
              onClick={this.addCandidateHandler}
              disabled={!this.state.isFormValid}
            >
              Add Your Candidate
            </Button>
          </form>
        </div>
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
