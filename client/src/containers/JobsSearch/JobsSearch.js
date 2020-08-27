import React, { Component } from "react";
import classes from "./JobsSearch.css";
import Jobs from './Jobs'

const JOBS_API_URL = '/api/jobs'

async function fetchJobsFromAPI(updateJobsCallback) {
  const res = await fetch(JOBS_API_URL)
  const json = await res.json()
  console.log(json)

  updateJobsCallback(json)
}

function JobsSearch() {

  const [jobList, updateJobs] = React.useState([])

  React.useEffect(() => {
    fetchJobsFromAPI(updateJobs)
  }, [])

  return (
    <div className={classes.JobsSearch}>
        <Jobs jobs={jobList}/>
    </div>
  );
}

export default JobsSearch;
