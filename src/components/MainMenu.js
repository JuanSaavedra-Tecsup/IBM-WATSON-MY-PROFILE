import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import backIcon from "../images/icon-back.svg";
import Icon from "react-fontawesome";

class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar  dark expand="md">
          <Link className="navbar-brand" to="/">
            <img className="icon-back" src={backIcon} alt="Back to homepage" />
            Le conté a mi tera<span className="ai">
              a
            </span>p<span className="ai">eu</span>ta acerca de ti...
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/raw">
                  <Icon name="font" /> Texto sin procesar
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/twitter">
                  <Icon name="twitter" /> Twitter
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainMenu;
