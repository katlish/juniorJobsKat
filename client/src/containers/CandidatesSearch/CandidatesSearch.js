import React from "react";
import classes from "../JobsSearch/ItemsSearch.css";
import Candidates from './Candidates'


function CandidatesSearch() {

  return (
      <div className={classes.ItemsSearch}>
        <div className={classes.pageTitle}>
                    CANDIDATES SEARCH
        </div>
        <Candidates/>
      </div>
  );
}

export default CandidatesSearch;
