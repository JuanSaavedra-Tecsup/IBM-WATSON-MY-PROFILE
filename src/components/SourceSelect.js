import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import Header from "../components/Header";
import Icon from "react-fontawesome";

class SourceSelect extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" xs="12">
              <Card className="hidden-load animated fadeIn card-raw-text">
                <CardBody>
                  <NavLink to="/raw">
                    <CardTitle>
                      Raw Text <Icon className="float-right" name="font" />
                    </CardTitle>
                    <CardText>
                      Necesitas analizar un texto para que se pueda mostrar los resultados .
                    </CardText>
                    <Button outline>Seleccionar</Button>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="12" xs="12">
              <Card className="hidden-load animated fadeIn card-twitter">
                <CardBody>
                  <NavLink to="/twitter">
                    <CardTitle>
                      Twitter <Icon className="float-right" name="twitter" />
                    </CardTitle>
                    <CardText>
                      Ingresa el twitter para que puedas analizar la personalidad de los usuarios.
                    </CardText>
                    <Button outline>Seleccionar</Button>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SourceSelect;
