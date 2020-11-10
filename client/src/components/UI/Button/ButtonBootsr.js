import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './ButtonBootstr.css'


function ButtonBootstr(props) {
    return (
        <Button 
            type="submit"
            variant={props.variant} 
            onClick={props.onClick}
            href={props.to}
            size={props.size}
            disabled={props.disabled}
        >
            {props.text}
        </Button>
    );
  }
  
export default ButtonBootstr;

