import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Map from "../../Map/Map";
import classes from "./CardModal.css";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export default function CardModal({cardItem, open, handleClose}) {
    
    if (!cardItem.title) {
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
          <div className={classes.CardModalContainer}>
            <div className={classes.CardModalTitle}>
              {cardItem.title} - {cardItem.subtitle}
            </div>
            <div className={classes.CardMapContainer}>
                <Map address={cardItem.location} />
                <img className={classes.CardLogoRound} src={cardItem.logo} alt=""/>
            </div>
            <div 
              className={classes.CardModalDescription} 
              dangerouslySetInnerHTML={{__html: cardItem.description}} 
            />
            
              <div className={classes.CardModalButtonsContainer}>
                <div onClick={handleClose} className={classes.CardModalButtons}>
                  CLOSE
                </div>
                <a href={cardItem.url} target="_blank" rel="noopener noreferrer" className={classes.CardModalButtons}>
                  MORE INFO
                </a>
              </div>
          </div>
          
        </Dialog>
      </div>
    );
  } 