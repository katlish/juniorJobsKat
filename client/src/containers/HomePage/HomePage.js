import React from "react";
import classes from "./HomePage.css";
import AppLifecycleDemo from '../../components/AppLifecycleDemo/AppLifecycleDemo'

class HomePage extends React.Component {
    render() {
        return (
          <div className={classes.HomePage}>
            <div className={classes.mycontainer}>
              <div className={classes.mydiv1}>
                div1 - country select
              </div>
              <div className={classes.mydiv2}>
                div2 - Switch
              </div>
              <div className={classes.mydiv3}>
                div3 - result+pagination
              </div>
            </div>
          </div>
        );
      }
    }
    
export default HomePage;