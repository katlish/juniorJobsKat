import React from 'react';
import classes from './CountrySelect.css'
import countriesJson from './countries.json'




function CountrySelect(props) {
    return (
      <div className={classes.CountrySelectContainer}>
        <label 
          className={classes.labelShow}  
          htmlFor="countries-input" 
          id="outlined-input-label"
        >
          {props.labelName}
        </label>
        <input 
          list="countries-list" 
          className={classes.CountrySelectInput} 
          placeholder={props.placeholder}  
          name="countries-input" 
          id="countries-input" 
          value={props.selectedCountry}
          onChange={props.onPickedCountry}
          onFocus={props.onFocus}
        />
        <datalist 
          id="countries-list" 
          className={classes.CountrySelectOption}
        >
          {!props.isFullCountryList ? 
            props.countriesList.map((country, i) => 
            <div className={classes.CountrySelectOption} key={i}>
              <option key={i} value={country} className={classes.CountrySelectOption}/>
            </div>
          ) 
          :
          (
            countriesJson.map((c, i) => 
            <div className={classes.CountrySelectOption} key={i}>
              <option key={i} value={c.country} className={classes.CountrySelectOption}/>
            </div>
          ))
          }
        </datalist>

      </div>
    );
  }
  
export default CountrySelect;

