import React from 'react';
import classes from "./JobsSearch.css";

export default function Job({job, onClick}) {
    return (
            <div onClick={onClick} className={classes.job}>
                <div className={classes.jobHeaderContainer}>
                    <div className={classes.jobTitle}>
                        {job.title}
                    </div>
                    <div className={classes.jobCompanyName}>
                        {job.company}
                    </div>
                </div>
                <div className={classes.jobLogoContainer}>
                    <img className={classes.jobLogo} src={job.company_logo} alt=""/>
                </div>
                <div className={classes.jobLocationAndDate}>
                    <div>{job.location}</div>
                    <div>{job.created_at.split(' ').slice(0,3).join(' ')}</div>
                </div>
            </div>
    )
}