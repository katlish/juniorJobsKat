import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import classes from "./Pagination.css";


const useStylesMobileStepper = makeStyles({
    colorPrimary: {
        backgroundColor: 'rgba(187,134,252,0.38)'
    },
    barColorPrimary: {
        backgroundColor: '#BB86FC'
    },
  }, { name: 'MuiLinearProgress' });

const useStylesGeneral = makeStyles({
    root: {
      background: 'transparent',
      color: '#BB86FC',
      padding: "0"
    },
    disabled: { 
        color: "#BB86FC !important", 
        opacity: "0.5"
      }
  });

export default function Pagination(props) {
    const generalCls = useStylesGeneral();
    const mobileStepperCls = useStylesMobileStepper();
    const numItems = props.itemsList.length
    const numPages = Math.ceil(numItems / props.numOfItemsPerPage)

    return (
        <div className={classes.paginationContainer}>
            <div className={classes.pagination}>
                <h3>
                    Page {props.activeStep+1} of {numPages} pages
                </h3>
            
                <MobileStepper
                    variant="progress"
                    steps={numPages}
                    position="static"
                    activeStep={props.activeStep}
                    nextButton={
                        <Button 
                            classes={{...generalCls}}
                            size="small" 
                            onClick={props.handleNext} 
                            disabled={props.activeStep === numPages-1}
                            
                            >
                        Next
                        <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button 
                            classes={{...generalCls}}
                            size="small" 
                            onClick={props.handleBack} 
                            disabled={props.activeStep === 0}
                            >
                        <KeyboardArrowLeft />
                        Back
                        </Button>
                    }
                    classes={{...mobileStepperCls, ...generalCls}}
                />
            </div>
        </div>
    )
}