import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import withWidth from '@material-ui/core/withWidth';

import Map from "../../Map/Map";
import classes from "./CardModalMaterialUI.css";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function CardModal({cardItem, open, handleClose}) {
    
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
                {
                  (cardItem.location.toLowerCase().includes("remote") || cardItem.title.toLowerCase().includes("remote")) ? 
                    <div className={classes.CardRemote}>Remote</div> 
                    : 
                    <Map address={cardItem.location}/>
                }
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
                <a disabled={(cardItem.url===null || "")} href={cardItem.url} target="_blank" rel="noopener noreferrer" className={classes.CardModalButtons}>
                  CONTACT INFO
                </a>
              </div>
          </div>
          
        </Dialog>
      </div>
    );
  } 
  export default withWidth()(CardModal);