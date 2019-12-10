import React, { Component } from "react";
import { Col, Row } from "reactstrap";

import ReactEcharts from "echarts-for-react";
import { convertToPercentage } from "../utlis/helper";

class ResultsNeeds extends Component {
  constructor(props) {
    super(props);

    this.getOtion = this.getOtion.bind(this);
  }

  getOtion() {
    const option = {
      tooltip: {},
      scale: false,
      radar: {
        name: {
          textStyle: {
            color: "#fff",
            fontSize: 16
          }
        },
        shape: "circle",
        indicator: [
          {
            name: this.props.resultData[0]["name"],
            max: 100
          },
          { name: this.props.resultData[1]["name"], max: 100 },
          { name: this.props.resultData[2]["name"], max: 100 },
          { name: this.props.resultData[3]["name"], max: 100 },
          { name: this.props.resultData[4]["name"], max: 100 },
          { name: this.props.resultData[5]["name"], max: 100 },
          { name: this.props.resultData[6]["name"], max: 100 },
          { name: this.props.resultData[7]["name"], max: 100 },
          { name: this.props.resultData[8]["name"], max: 100 },
          { name: this.props.resultData[9]["name"], max: 100 },
          { name: this.props.resultData[10]["name"], max: 100 },
          { name: this.props.resultData[11]["name"], max: 100 }
        ]
      },
      series: [
        {
          name: "Needs",
          type: "radar",
          symbolSize: "10",
          areaStyle: {
            normal: {
              opacity: 0.3
            }
          },
          data: [
            {
              value: [
                convertToPercentage(this.props.resultData[0]["percentile"]),
                convertToPercentage(this.props.resultData[1]["percentile"]),
                convertToPercentage(this.props.resultData[2]["percentile"]),
                convertToPercentage(this.props.resultData[3]["percentile"]),
                convertToPercentage(this.props.resultData[4]["percentile"]),
                convertToPercentage(this.props.resultData[5]["percentile"]),
                convertToPercentage(this.props.resultData[6]["percentile"]),
                convertToPercentage(this.props.resultData[7]["percentile"]),
                convertToPercentage(this.props.resultData[8]["percentile"]),
                convertToPercentage(this.props.resultData[9]["percentile"]),
                convertToPercentage(this.props.resultData[10]["percentile"]),
                convertToPercentage(this.props.resultData[11]["percentile"])
              ]
            }
          ]
        }
      ]
    };

    return option;
  }
  render() {
    return (
      <div className="plot-wrapper plot-wrapper-needs">
        <Row className="plot-contents">
          <Col lg="12" md="12" sm="12" xs="12">
            <h1 className="text-center">Necesidades</h1>
            <ReactEcharts
              option={this.getOtion()}
              style={{ width: "100%", height: 600 }}
              className="react_for_echarts"
            />
            <div className="plot-description">
              <p className="lead">
                Las necesidades describen a alto nivel aquellos aspectos de un producto que
                es probable que resuenen con el autor del texto de entrada. los
                La siguiente tabla describe las doce necesidades que el servicio
                evalúa.{" "}
              </p>
              <ul>
                <li>
                  <strong>Emoción</strong> Quieres salir y vivir la
                  vida, tener emociones optimistas y ganas de pasarlo bien.
                </li>
                <li>
                  <strong>Armonía</strong> Aprecio a otras personas, su
                  puntos de vista y sus sentimientos.{" "}
                </li>
                <li>
                  <strong>Curiosidad</strong> Tener un deseo de descubrir, encontrar
                  fuera y crecer.
                </li>
                <li>
                  <strong>Ideal</strong> Deseo de perfección y un sentido de
                  comunidad.
                </li>
                <li>
                  <strong>Cercanía</strong> Disfrute de estar conectado con la familia
                  y establecer una casa.
                </li>
                <li>
                  <strong>Autoexpresión</strong> Disfruta descubriendo y
                  afirmando sus propias identidades.
                </li>
                <li>
                  <strong>Libertad</strong> Tener ganas de moda y novedades
                  cosas, así como la necesidad de escapar.
                </li>
                <li>
                  <strong>Amor</strong> Disfruta del contacto social, ya sea uno a uno
                  o uno a muchos. Cualquier marca involucrada en atraer personas
                  juntos aprovecha esta necesidad.
                </li>
                <li>
                  <strong>Practicality</strong> Tener ganas de conseguir el trabajo
                  hecho, un deseo de habilidad y eficiencia, que puede incluir
                  Expresión física y experiencia.
                </li>
                <li>
                  <strong>Estabilidad</strong> Buscar equivalencia en lo físico
                  mundo. Favorecen lo sensible, lo probado y probado.
                </li>
                <li>
                  <strong>Reto</strong> Tener ganas de lograr, de
                  tener éxito y asumir desafíos.
                </li>
                <li>
                  <strong>Estructura</strong> Exhibir fundamento y un deseo
                  para mantener las cosas juntas Necesitan cosas para estar bien organizados.
                  y bajo control.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultsNeeds;
