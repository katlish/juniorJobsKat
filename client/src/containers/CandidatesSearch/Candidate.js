import React from 'react';
import classes from "../../containers/JobsSearch/ItemsSearch.css";

export default function Candidate({candidate, onClick}) {
    console.log("candidate - ",candidate)
    return (
        <div onClick={onClick} className={classes.itemCard}>
            <div className={classes.itemHeaderContainer}>
                    <div className={classes.itemTitle}>{candidate.name}</div>
                    <div className={classes.itemSubTitle}>{candidate.jobs}</div>
            </div>
            <div className={classes.itemLogoContainer}/>
            <div className={classes.itemBottomDiv}>
                <div>{candidate.yearsOfExperience}</div>
                <div>{candidate.location}</div>
            </div>
            <div className={classes.itemButton}>
                MORE INFO
            </div>
        </div>
    )
}