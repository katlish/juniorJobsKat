import React from 'react';
import classes from "./JobsSearch.css";
import Tooltip from '@material-ui/core/Tooltip';


export default function Job({job, onClick}) {
    const longJobTitle = job.title;
    let shortJobTitle = longJobTitle;

    if (longJobTitle.length > 30) {
        shortJobTitle = longJobTitle.substring(0, 30)+'...';
    }
    const longJobCompany = job.company;
    let shortJobCompany = longJobCompany;

    if (longJobCompany.length > 30) {
        shortJobCompany = longJobCompany.substring(0, 30)+'...';
    }
    const longJobLocation = job.location;
    let shortJobLocation = longJobLocation;

    if (longJobLocation.length > 30) {
        shortJobLocation = longJobLocation.substring(0, 30)+'...';
    }
    
    return (
            <div onClick={onClick} className={classes.job}>
                <div className={classes.jobHeaderContainer}>
                    <Tooltip title={longJobTitle} placement="bottom-start">
                        <div className={classes.jobTitle}>{shortJobTitle}</div>
                    </Tooltip>
                    <Tooltip title={longJobCompany} placement="bottom-start">
                        <div className={classes.jobCompanyName}>{shortJobCompany}</div>
                    </Tooltip>
                </div>
                <div className={classes.jobLogoContainer}>
                    <img className={classes.jobLogo} src={job.company_logo} alt=""/>
                </div>
                <div className={classes.jobLocationAndDate}>
                    <Tooltip title={longJobLocation} placement="bottom-start">
                            <div>{shortJobLocation}</div>
                    </Tooltip>
                    <div>{job.created_at.split(' ').slice(0,3).join(' ')}</div>
                </div>
                <div className={classes.jobMoreInfo}>
                    MORE INFO
                </div>
            </div>
    )
}