import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classes from "./CandidatesList.css";

export default function Candidate({candidate, onClick}) {
    return (
        <Paper onClick={onClick} className={classes.candidate}>
            <div>
                <Typography variant='h6'>{`Name: ${candidate.name}`}</Typography>
                <Typography variant='h5'>{`Years Of Experience: ${candidate.yearsOfExperience}`}</Typography>
                <Typography>{`Jobs Of Interest: ${candidate.jobs}`}</Typography>
            </div>
            {/* <div>
                <Typography>{candidate.created_at.split(' ').slice(0,3).join(' ')}</Typography>
            </div> */}
        </Paper>
    )
}