import React from 'react';
import classes from "./ItemsSearch.css";
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
            <div onClick={onClick} className={classes.itemCard}>
                <div className={classes.itemHeaderContainer}>
                    <Tooltip title={longJobTitle} placement="bottom-start">
                        <div className={classes.itemTitle}>{shortJobTitle}</div>
                    </Tooltip>
                    <Tooltip title={longJobCompany} placement="bottom-start">
                        <div className={classes.itemSubTitle}>{shortJobCompany}</div>
                    </Tooltip>
                </div>
                <div className={classes.itemLogoContainer} style={{background: "white"}}>
                    <img className={classes.itemLogo} src={job.company_logo}  alt="Logo link failed"/>
                </div>
                <div className={classes.itemBottomDiv}>
                    <Tooltip title={longJobLocation} placement="bottom-start">
                            <div>{shortJobLocation}</div>
                    </Tooltip>
                    <div>{job.created_at.split(' ').slice(0,3).join(' ')}</div>
                </div>
                <div className={classes.itemButton}>
                    MORE INFO
                </div>
            </div>
    )
}