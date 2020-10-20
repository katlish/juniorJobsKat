import React from 'react';
import classes from './Header.css'



function Header(props) {
    

    return (
      <div className={classes.Header}>
        <div>JUNIOR JOBS</div>
        <div>JOBS</div>
        <div>CANDIDATES</div>
        <div>LOG IN</div>
        <div>I AM LOOKING FOR A JOB</div>
      </div>
    );
  }
  
export default Header;

