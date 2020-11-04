import React from "react";
import CheckIcon from '@material-ui/icons/Check';
import StyledButton from '../../components/UI/Button/StyledButton'
import classes from "./SuccessPage.css";

function SuccessPage(props) {
  return (
    <div className={classes.SuccessPage}>
          <CheckIcon style={{ color: "white", height: "100px", width: "auto" }}/>
          
          <div className={classes.SuccessPageText}>
            {props.text}
          </div>
          
          <StyledButton
                  to={props.buttonTo}
                  text={props.buttonText}
                  size="big"
            />
    </div>
  );
}

export default SuccessPage;
