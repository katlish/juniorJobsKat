import React from 'react';
import classes from './LoginButton.css'
import { NavLink } from "react-router-dom";


function LoginButton(props) {

    function loginHandler() {
      console.log("LoginButton clicked")
    };

    return (
      
        <NavLink
            to="/auth"
            exact={true}
            onClick={loginHandler}
            className={classes.LoginButton}
          >
            LOG IN
        </NavLink>
    );
  }
  
export default LoginButton;

