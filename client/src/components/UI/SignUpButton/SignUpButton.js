import React from 'react';
import classes from './SignUpButton.css'
import { NavLink } from "react-router-dom";


function SignUpButton(props) {

    function signUpHandler() {
      console.log("SignUpButton clicked")
    };

    return (
      <div className={classes.SignUpButtonDiv}>
        <NavLink
            to="/candidate-creator"
            exact={true}
            onClick={signUpHandler}
            className={classes.SignUpButtonLink}
          >
            I AM LOOKING FOR A JOB
        </NavLink>
      </div>
    );
  }
  
export default SignUpButton;

