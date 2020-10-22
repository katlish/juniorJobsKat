import React from "react";
import connect from "react-redux/lib/connect/connect";
import classes from "./Layout.css";
import jobsClasses from '../../containers/JobsSearch/ItemsSearch.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import NavBar from '../../components/UI/NavBar/NavBar';
import Footer from '../../components/UI/Footer/Footer';


class Layout extends React.Component {
  state = {
    menu: false
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  menuCloseHndler = () => {
    this.setState({
      menu: false
    });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHndler}
          isAuthenticated={this.props.isAuthenticated}
        />

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>
          <div className={jobsClasses.mainContainer}>
            <NavBar/>
              {this.props.children}
            <Footer/>
          </div>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  };
}

export default connect(mapStateToProps)(Layout);
