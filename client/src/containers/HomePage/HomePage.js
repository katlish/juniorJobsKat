import React from "react";
import classes from "./HomePage.css";

class HomePage extends React.Component {
    render() {
        return (
          <div className={classes.HomePage}>
            <h1 className={classes.title}>
              Main Page
            </h1>
          </div>
        );
      }
    }
    
export default HomePage;