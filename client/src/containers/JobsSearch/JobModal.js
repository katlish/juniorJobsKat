import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import Map from "../../components/Map/Map";
import classes from "./JobModal.css";


// const useStylesMuiDialog = makeStyles({
//   root: {
//     backgroundColor: "red",
//   }
// }, { name: 'MuiPaper' });

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export default function JobModal({job, open, handleClose}) {
    // const stylesMuiDialog = useStylesMuiDialog();
    // classes={{...stylesMuiDialog}}
    
    if (!job.title) {
        return <div/>
    }
  
    return (
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <div className={classes.JobModalContainer}>
            <div className={classes.jobModalTitle}>
              {job.title} - {job.company}
            </div>
            <div className={classes.jobMapContainer}>
                <Map address={job.location} />
                <img className={classes.jobLogoRound} src={job.company_logo} alt=""/>
            </div>
            <div 
              className={classes.jobModalDescription} 
              dangerouslySetInnerHTML={{__html: job.description}} 
            />
            
              <div className={classes.jobModalButtonsContainer}>
                <div onClick={handleClose} className={classes.jobModalButtons}>
                  CLOSE
                </div>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className={classes.jobModalButtons}>
                  APPLY
                </a>
              </div>
          </div>
          
        </Dialog>
      </div>
    );
  } 