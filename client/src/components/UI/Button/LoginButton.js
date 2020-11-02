import React from 'react';
import classes from './LoginButton.css'
import { NavLink } from "react-router-dom";


function LoginButton(props) {
    return (
        <NavLink
            to="/auth"
            exact={true}
            className={classes.LoginButton}
          >
            LOG IN
        </NavLink>
    );
  }
  
export default LoginButton;

