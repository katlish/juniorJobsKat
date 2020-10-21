import React from "react";
import classes from "./HomePage.css";
import AppLifecycleDemo from '../../components/AppLifecycleDemo/AppLifecycleDemo'
import Tooltip from '@material-ui/core/Tooltip';

class HomePage extends React.Component {
    render() {
      const longText = 'div1 - longlonglonglonglonglonglonglonglonglonglonglong job title';
      let shortText = longText;

      if (longText.length > 10) {
        shortText = longText.substring(0, 10)+'...';
      }

      const imgSourceBig = 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcEtMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5ebbf792b2a60473e73ac375c363d8587db5c7fc/Remixd%20logo%20black.png';
      const imgSourceSmall = 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbEdMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7ed4d248ae2bf4c5293e18a46fa8ae9765aafe01/logo2.jpg';
      
      return (
          <div className={classes.HomePage}>
            <div className={classes.mycontainer}>
              <Tooltip title={longText}>
                <div className={classes.jobtitle}>{shortText}</div>
              </Tooltip>
              <Tooltip title={longText}>
                <div className={classes.company}>{shortText}</div>
              </Tooltip>
              <div className={classes.image}>
                <img className={classes.jobLogo} src={imgSourceBig} alt=""/>
              </div>
              <div className={classes.location}>
                div4 - Location
              </div>
              <div className={classes.date}>
                div5 - Date
              </div>
            </div>
            <div className={classes.mycontainer}>
              <div className={classes.image}>
                <img className={classes.jobLogo} src={imgSourceSmall} alt=""/>
              </div>
            </div>
          </div>
        );
      }
    }
    
export default HomePage;