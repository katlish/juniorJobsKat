import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import classes from "./JobsSearch.css";

import Job from './Job'
import JobModal from './JobModal'

const NUM_OF_JOBS_ON_PAGE = 20

export default function Jobs({jobs}) {
    const numJobs = jobs.length
    const numPages = Math.ceil(numJobs / NUM_OF_JOBS_ON_PAGE)

    const [activeStep, setActiveStep] = React.useState(0);

    const jobsOnPage = jobs.slice(activeStep * NUM_OF_JOBS_ON_PAGE , (activeStep * NUM_OF_JOBS_ON_PAGE + NUM_OF_JOBS_ON_PAGE))

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // JobsModal state
    const [open, setOpen] = React.useState(false);
    
    const [selectedJob, selectJob] = React.useState({})

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <div className={classes.title}>
                {numJobs} Entry Level Software Jobs Found
            </div>
            
            <JobModal open={open} job={selectedJob} handleClose={handleClose}/>

            <div className={classes.jobsList}>
            {
                jobsOnPage.map(
                    (job, i) => <Job key={i}  job={job} onClick={() => {
                        handleClickOpen()
                        selectJob(job)
                    }}/>
                )
            }
            </div>
            
            <div className={classes.pagination}>
                <h3>
                Page {activeStep+1} of {numPages} pages
                </h3>
            
                <MobileStepper
                    variant="progress"
                    steps={numPages}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === numPages-1}>
                        Next
                        <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                        </Button>
                    }
                />
            </div>
        </div>
    )
}