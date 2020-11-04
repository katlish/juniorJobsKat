import React from "react";
import SuccessPage from './SuccessPage';

function CandidateSuccess() {
  return (
    <SuccessPage 
        text="Yay! You were added as a candidate!"  
        buttonTo="/"
        buttonText="BACK TO HOME PAGE"
    />
  );
}

export default CandidateSuccess;
