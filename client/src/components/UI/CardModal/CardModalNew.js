import React from "react";
import ReactDOM from "react-dom";
import Map from "../../Map/Map";

import classes from "./CardModalNew.css";

function CardModalNew({cardItem, open, handleClose}) {
  if (!cardItem.title) {
    return <div/>
  }
  // console.log("!!!!!!!!cardItem - ", cardItem);
  return ReactDOM.createPortal(
    // <CSSTransition 
    //     in={props.show}
    //     unmountOnExit
    //     timeout={{enter: 0, exit: 300}}
    //     classNames={{
    //       // appear: 'my-appear',
    //       // appearActive: 'my-active-appear',
    //       // appearDone: 'my-done-appear',
    //       //enter: classes.modalEnter,
    //      // enterActive: classes.modalEnterActive,
    //       enterDone: classes['enter-done'],
    //       exit: classes['exit'],
    //       //exitActive: classes.modalExitActive,
    //       // exitDone: 'my-done-exit',
    //      }}
    // >
      <div className={`${open ? classes.modalShow : classes.modal}`} onClick={handleClose}>
        <div className={classes.CardModalContainer} onClick={e => e.stopPropagation()}>
          <div className={classes.CardModalTitle}>
              {cardItem.title} - {cardItem.subtitle}
            </div>
            <div className={classes.CardMapContainer}>
                {
                  (cardItem.location.toLowerCase().includes("remote") || cardItem.title.toLowerCase().includes("remote")) ? 
                    <div className={classes.CardRemote}>
                      <div className={classes.CardRemoteLogo}>
                        Remote
                      </div>
                    </div> 
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
      </div>,
    // </CSSTransition>
    document.getElementById('root')
  );
};

export default CardModalNew;
