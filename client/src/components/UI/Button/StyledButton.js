import React from 'react';
import classes from './StyledButton.css'
import { NavLink } from "react-router-dom";


function StyledButton(props) {
    const clsForDiv = [classes.StyledButtonDiv, classes[props.bgcolor], classes[props.size]];
    const clsForLink = [classes.StyledButtonLink, classes[props.size]];

    return (
      <div className={clsForDiv.join(" ")} disabled={props.disabled}>
        <NavLink
            onClick={props.onClick}
            to={props.to}
            exact={true}
            className={clsForLink.join(" ")}
            disabled={props.disabled}
          >
            {props.text}
        </NavLink>
      </div>
    );
  }
  
export default StyledButton;

