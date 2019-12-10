import React, { Component } from "react";
import { Container } from "reactstrap";
import Icon from "react-fontawesome";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Icon name="flask" />{" "}
          <a
            href="https://console.bluemix.net/docs/services/personality-insights/science.html#science"
            title="La ciencia detrás Personality Insights"
          >
            "La ciencia detras de los signos de personalidad"
          </a>
        </Container>
      </footer>
    );
  }
}

export default Footer;
