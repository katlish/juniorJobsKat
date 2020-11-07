import React from 'react';
import classes from './NavBar.css'
import connect from "react-redux/lib/connect/connect";
import Logo from '../Logo/Logo'
import LoginButton from '../Button/LoginButton'
import StyledButton from '../Button/StyledButton'
import CurrentPageBtn from '../Button/CurrentPageBtn'

// TODO: after connect border-bottom activeStyle is not working in CurrentPageBtn
class NavBar extends React.Component {
  state = {
    menu: false
  };

  render() {
    return (
      <div className={classes.NavBar}>
        <div className={classes.NavBarLeftDiv}>
            <Logo/>
        </div>
        <div className={classes.NavBarMiddleDiv}>
            <CurrentPageBtn text="JOBS" to="/"/>
            <CurrentPageBtn text="CANDIDATES" to="/candidatesSearch"/>
        </div>
        <div className={classes.NavBarRightDiv}>
            {(!this.props.isAuthenticated) ? 
            <LoginButton/> 
            : 
            <StyledButton
              to="/candidate-creator"
              text="ADD MY CANDIDATURE"
            />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  };
}

export default connect(mapStateToProps)(NavBar);


