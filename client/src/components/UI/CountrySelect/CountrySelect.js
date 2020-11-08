import React from 'react';
import classes from './CountrySelect.css'




function CountrySelect(props) {
    
  function handleChangeInput(e) {
    props.onPickedCountry(e.target.value)
    
  }
  
    return (
      <div className={classes.CountrySelectContainer}>
        <label className={classes.labelShow}  htmlFor="countries-input" id="outlined-input-label">
          Show
        </label>
        <input list="countries-list" className={classes.CountrySelectInput} placeholder="All Available Countries"  name="countries-input" id="countries-input" onChange={handleChangeInput}/>
        <datalist id="countries-list" className={classes.CountrySelectOption}>
          {props.countriesList.map((country, i) => 
            <div className={classes.CountrySelectOption} key={i}>
              <option key={i} value={country} className={classes.CountrySelectOption}/>
            </div>
          )}
        </datalist>

      </div>
    );
  }
  
export default CountrySelect;

