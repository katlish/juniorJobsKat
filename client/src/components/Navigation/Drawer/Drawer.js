import React from "react";
import classes from "./Drawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

class Drawer extends React.Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    const links = [{ to: "/jobsSearch", label: "Jobs Search", exact: false },
                    { to: "/", label: "Home", exact: true }];

    if (this.props.isAuthenticated) {
      links.push({
        to: "/quiz-creator",
        label: "Create Your Quiz",
        exact: false
      },
      { to: "/candidate-creator", label: "Add Your Candidate", exact: false },
      { to: "/quizList", label: "Quizes List", exact: false },
      { to: "/candidatesSearch", label: "Candidates List", exact: false },
      { to: "/logout", label: "Logout", exact: false }
      );
    } else {
      links.push({ to: "/auth", label: "Authorization", exact: false });
    }

    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
