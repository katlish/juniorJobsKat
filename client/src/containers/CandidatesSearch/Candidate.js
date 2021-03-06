import React from 'react';
import classes from "../../containers/JobsSearch/ItemsSearch.css";

export default function Candidate({candidate, onClick}) {
    return (
        <div onClick={onClick} className={classes.itemCard}>
            <div className={classes.itemHeaderContainer}>
                    <div className={classes.itemTitle}>{candidate.name}</div>
                    <div className={classes.itemSubTitle}>{candidate.jobs}</div>
            </div>
            <div className={classes.itemLogoContainer}>
                <img className={classes.itemLogo} src="https://www.flaticon.com/svg/static/icons/svg/1484/1484861.svg" alt="Candidate Logo"/>
            </div>
            <div className={classes.itemBottomDiv}>
                <div>Experience in years: {candidate.yearsOfExperience}</div>
                <div>Location: {candidate.location}</div>
                <div>Date: {candidate.created_at.split(' ').slice(0,3).join(' ')}</div>
            </div>
            <div className={classes.itemButton}>
                MORE INFO
            </div>
        </div>
    )
}