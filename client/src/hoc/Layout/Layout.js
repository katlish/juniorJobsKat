import React from "react";
import connect from "react-redux/lib/connect/connect";
import classes from "./Layout.css";
import NavBar from '../../components/UI/NavBar/NavBar';
import Footer from '../../components/UI/Footer/Footer';
import MobileMenu from '../../components/Navigation/MobileMenu/MobileMenu';


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
        <MobileMenu 
          isOpen={this.state.menu}
          onClose={this.menuCloseHndler}
          isAuthenticated={this.props.isAuthenticated}
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        
        <NavBar/>

        <main>
          {this.props.children}
        </main>
        
        <Footer/>
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
