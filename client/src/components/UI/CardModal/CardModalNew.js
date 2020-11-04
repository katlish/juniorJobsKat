import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./CardModalNew.css";

const CardModalNew = props => {
  if (!props.show) {
    return null;
  }
  return (
    // <CSSTransition 
    //     in={props.show}
    //     unmountOnExit
    //     timeout={{enter: 0, exit: 300}}
    // >
      <div className="modal" onClick={props.onClose}>
        <div className="modalContent" onClick={e => e.stopPropagation()}>
          <div className="modalHeader">
            <h4 className="modalTitle">{props.cardItem.title}</h4>
          </div>
          <div className="modalBody">{props.cardItem.logo}</div>
          <div className="modalFooter">
            <button onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    // </CSSTransition>
  );
};

export default CardModalNew;
