import React from 'react';
import classes from './Footer.css'


function Footer(props) {
    

    return (
      <div className={classes.Footer}>
        <div className={classes.copyright}>
          © 2020 Katia Lishnevsky
        </div>
        <div className={classes.socialLinksContainer}>
          <a href="https://www.linkedin.com/in/katyalishnevsky/" target="_blank" className={classes.socialLinks}>
            LinkedIn
          </a>
          <a href="mailto:radistkakat89@gmail.com?subject=Hey%20Katia!" className={classes.socialLinks}>
            Contact Me
          </a>
        </div>
      </div>
    );
  }
  
export default Footer;

