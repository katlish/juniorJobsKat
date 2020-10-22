import React from 'react';
import classes from './MobileMenu.css';
import Drawer from '../Drawer/Drawer';
import MenuToggle from '../MenuToggle/MenuToggle';


function MobileMenu(props) {
    

    return (
      <div className={classes.MobileMenu}>
        <Drawer
          isOpen={props.isOpen}
          onClose={props.onClose}
          isAuthenticated={props.isAuthenticated}
        />

        <MenuToggle
          onToggle={props.onToggle}
          isOpen={props.isOpen}
        />
      </div>
    );
  }
  
export default MobileMenu;

