import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
class Header extends Component {
  render() {
    return (
      <Jumbotron className="app-banner hidden-load animated fadeIn">
        <Container>
          <h1 className="display-3 banner-title">
            &lsquo; Conoce un poco mas sobre ti &rsquo;
          </h1>
          <p className="lead">
            Sepa un poco mas sobre como piensan las personas, con esta implementacion podra tener una idea de como funciona
            la api de IBM y de como podemos implementarla para poder sacar conclusiones y como la tecnologia nos ayuda .
          </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Header;
