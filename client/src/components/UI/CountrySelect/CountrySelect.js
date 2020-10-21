import React from 'react';
import classes from './CountrySelect.css'




function CountrySelect(props) {
    
  function handleChangeInput(e) {
    props.onPickedCountry(e.target.value)
    
  }
  
    return (
      <div className={classes.CountrySelectContainer}>
        <label className={classes.labelShow}  for="countries-input" id="outlined-input-label">
          Show
        </label>
        <input list="countries-list" className={classes.CountrySelectInput} placeholder="All Available Jobs"  name="countries-input" id="countries-input" onChange={handleChangeInput}/>
        <datalist id="countries-list" className={classes.CountrySelectOption}>
          {props.countriesList.map((country, i) => 
            <option key={i} value={country} className={classes.CountrySelectOption}/>
          )}
        </datalist>

      </div>
    );
  }
  
export default CountrySelect;

const countries = [
  { label: 'USA' },
  { label: 'United Kingdom' },
  { label: 'Russia' },
  { label: 'Poland' }
]

