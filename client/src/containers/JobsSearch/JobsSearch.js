import React from "react";
import classes from "./JobsSearch.css";
import Jobs from './Jobs'
import CountrySelect from '../../components/UI/CountrySelect/CountrySelect'
import CustomSwitch from '../../components/UI/Switch/Switch'
import Header from '../../components/UI/Header/Header'


const JOBS_API_URL = '/api/jobs'
const HASH_FOR_JOBS_IN_GITHUB = 'github'

async function fetchJobsFromAPI(updateFullList, updateCountryList) {
  const res = await fetch(`${JOBS_API_URL}?hash=${HASH_FOR_JOBS_IN_GITHUB}`,{
    method: "GET"   
  })
  const json = await res.json()
  updateFullList(json)
  //TODO:parser
  updateCountryList(["USA", "United Kingdom", "Canada", "Russia", "Poland"])
}

function useUpdateJobsByCountry(updateFilteredJobs, allCountries, country, isRemote){
  console.log("inside HOOK with country = ",country)
  console.log("isRemote",isRemote)
  console.log("allCountries",allCountries)

  if (isRemote === true) {
    let finallyFilteredCountries = allCountries;
    if (country !== "all" && country !== null && country !== "") {
      finallyFilteredCountries = finallyFilteredCountries.filter(job => job.location.includes(country));
    }
    finallyFilteredCountries = finallyFilteredCountries.filter(job => job.location.includes("remote"));
    
    updateFilteredJobs(finallyFilteredCountries);
  } else {
    const filteredCountries = allCountries.filter(job => job.location.includes(country));
  
    updateFilteredJobs(filteredCountries)
  }
}

function JobsSearch() {
  const [fullJobList, updateFullList] = React.useState([])
  const [countriesList, updateCountryList] = React.useState([])
  const [jobsFiltered, updateFilteredJobs] = React.useState([])
  const [pickedCountry, updateCountry] = React.useState(null)
  const [isRemote, updateRemote] = React.useState(true)

  React.useEffect(() => {
  console.log("useEffect() - fetchJobsFromAPI()")
    fetchJobsFromAPI(updateFullList, updateCountryList)
  }, [])

  React.useEffect(() => {
  console.log("useEffect() - useUpdateJobsByCountry()")
    useUpdateJobsByCountry(updateFilteredJobs, fullJobList, pickedCountry, isRemote)
  }, [pickedCountry,isRemote,fullJobList])

  console.log("RETURN!!!")
  console.log("fullJobList:",fullJobList)
  console.log("countriesList:",countriesList)
  console.log("jobsFiltered:",jobsFiltered)
  console.log("pickedCountry:",pickedCountry)
  console.log("isRemote:",isRemote)

  return (
    <div className={classes.mainContainer}>
      <Header/>
      <div className={classes.JobsSearch}>
          <div className={classes.selectCountryList}>
            <CountrySelect onPickedCountry={updateCountry} countriesList={countriesList}/>
          </div>
          <div className={classes.remoteJobs}>
            <CustomSwitch labelText={"Remote jobs only"} filterByRemote={updateRemote}/>
          </div>
          <div className={classes.searchResult}>
            <Jobs jobs={jobsFiltered}/>
          </div>
      </div>
    </div>
  );
}

export default JobsSearch;
