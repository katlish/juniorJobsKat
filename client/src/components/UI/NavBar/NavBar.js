import React from 'react';
import classes from './NavBar.css'
import Logo from '../Logo/Logo'
import LoginButton from '../LoginButton/LoginButton'
import SignUpButton from '../SignUpButton/SignUpButton'
import CurrentPageBtn from '../CurrentPageBtn/CurrentPageBtn'

function NavBar(props) {
    

    return (
      <div className={classes.NavBar}>
        <div className={classes.NavBarElement}>
            <Logo/>
        </div>
        <div className={classes.NavBarMiddleDiv}>
            <CurrentPageBtn text="JOBS" to="/jobsSearch"/>
            <CurrentPageBtn text="CANDIDATES" to="/candidatesSearch"/>
        </div>
        <div className={classes.NavBarElement}>
            <LoginButton/>
            <SignUpButton />
        </div>
      </div>
    );
  }
  
export default NavBar;

