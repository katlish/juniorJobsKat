import React from 'react';
import Job from './Job'
import CardModal from '../../components/UI/CardModal/CardModal'
import Pagination from '../../components/Pagination/Pagination'
import classes from "./ItemsSearch.css";

const NUM_OF_JOBS_ON_PAGE = 20


export default function Jobs({jobs}) {
    
    const numJobs = jobs.length
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
    
    const cardModalItem = {
                        title: selectedJob.title, 
                        subtitle: selectedJob.company, 
                        location: selectedJob.location, 
                        logo: selectedJob.company_logo, 
                        description: selectedJob.description, 
                        url: selectedJob.url
                    };
    return (
        <div className={classes.itemsContainer}>
            <div className={classes.title}>
                {numJobs} Entry Level Software Jobs Found
            </div>
            
            <CardModal open={open} cardItem={cardModalItem} handleClose={handleClose}/>

            <div className={classes.itemsList}>
                {
                    jobsOnPage.map(
                        (job, i) => <Job key={i}  job={job} onClick={() => {
                            handleClickOpen()
                            selectJob(job)
                        }}/>
                    )
                }
            </div>

            <Pagination 
                itemsList={jobs} 
                activeStep={activeStep}
                handleNext={handleNext} 
                handleBack={handleBack}
                numOfItemsPerPage={NUM_OF_JOBS_ON_PAGE}
            />
        </div>
    )
}