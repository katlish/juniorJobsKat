import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Map from "../../components/Map/Map";
import classes from "./JobsSearch.css";

export default function Job({job, onClick}) {
    return (
        <Paper onClick={onClick} className={classes.job}>
            <div>
                <Typography variant='h6'>{job.title}</Typography>
                <Typography variant='h5'>{job.company}</Typography>
                <Typography>{job.location}</Typography>
            </div>
            <div>
                <Typography>{job.created_at.split(' ').slice(0,3).join(' ')}</Typography>
            </div>
            <Map address={job.location} />
        </Paper>
    )
}