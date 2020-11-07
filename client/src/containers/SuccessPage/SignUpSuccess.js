import React from "react";
import SuccessPage from './SuccessPage';

//TODO: why can't break line?
function SignUpSuccess() {
  return (
    <SuccessPage 
        text={`Yay! You were successfully registered! 
        Now you can add your candidature to the Candidates List!`}
        buttonTo="/candidate-creator"
        buttonText="ADD MY CANDIDATURE"
    />
  );
}

export default SignUpSuccess;
