import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import connect from "react-redux/lib/connect/connect";
import classes from './Footer.css';
import StyledButton from '../Button/StyledButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';



const StyledLinkedInIcon = withStyles({
  root: {
    color: "#bb86fcc2",
    '&:hover': {
      color: "#0966C2"
    }
  }
})(LinkedInIcon);

const StyledMailOutlineIcon = withStyles({
  root: {
    color: "#bb86fcc2",
    '&:hover': {
      color: "#CA4C45"
    }
  }
})(MailOutlineIcon);

const StyledGitHubIcon = withStyles({
  root: {
    color: "#bb86fcc2",
    height: "21px",
    '&:hover': {
      color: "#02F39F"
    }
  }
})(GitHubIcon);



class Footer extends React.Component {
  state = {
    menu: false
  };

  render() {
    return (
      <div className={classes.Footer}>
        <div className={classes.copyright}>
          © 2020 Katia Lishnevsky
        </div>
        <div className={classes.socialLinksContainer}>
          <a href="https://www.linkedin.com/in/katyalishnevsky/" target="_blank" rel="noopener noreferrer" className={classes.socialLinks}>
            <StyledLinkedInIcon /> 
          </a>
          <a href="mailto:radistkakat89@gmail.com?subject=Hey%20Katia!" className={classes.socialLinks}>
            <StyledMailOutlineIcon />
          </a>
          <a href="https://github.com/katlish" target="_blank" rel="noopener noreferrer" className={classes.socialLinks}>
            <StyledGitHubIcon />
          </a>
        </div>
        {(this.props.isAuthenticated) ? 
          <StyledButton
              to="/logout"
              text="LOG OUT"
          />
          : 
          null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  };
}

export default connect(mapStateToProps)(Footer);


