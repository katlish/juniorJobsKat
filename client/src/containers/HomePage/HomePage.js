import React from "react";
import classes from "./HomePage.css";
import AppLifecycleDemo from '../../components/AppLifecycleDemo/AppLifecycleDemo'

class HomePage extends React.Component {
    render() {
        return (
          <div className={classes.HomePage}>
            <h1 className={classes.title}>
              Main Page
            </h1>
            <div className={classes.lifecycle}>
              <AppLifecycleDemo/>
            </div>
          </div>
        );
      }
    }
    
export default HomePage;