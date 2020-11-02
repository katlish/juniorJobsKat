import React from "react";
import CheckIcon from '@material-ui/icons/Check';
import StyledButton from '../../components/UI/Button/StyledButton'
import classes from "./CandidateSuccess.css";

function CandidateSuccess() {
  return (
    <div className={classes.CandidateSuccess}>
          <CheckIcon style={{ color: "white", height: "100px", width: "auto" }}/>
          
          <div style={{fontSize: "24px", color: "white", textAlign: "center"}}>
            Yay! You were added as a candidate!
          </div>
          
          <StyledButton
                  to="/"
                  text="BACK TO HOME PAGE"
                  size="big"
            />
    </div>
  );
}

export default CandidateSuccess;
