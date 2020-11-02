import React from 'react';
import classes from './CurrentPageBtn.css'
import { NavLink } from "react-router-dom";


function CurrentPageBtn(props) {
    return (
      <div className={classes.CurrentPageBtnDiv}>
        <NavLink
            to={props.to}
            exact={true}
            className={classes.CurrentPageBtnLink}
            // activeStyle={{
            //     borderBottom: "1.5px solid #BB86FC",
            //     color: "#BB86FC"
            //   }}
          >
            {props.text}
        </NavLink>
      </div>
    );
  }
  
export default CurrentPageBtn;

