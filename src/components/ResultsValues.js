import React, { Component } from "react";
import { Col, Row } from "reactstrap";

import ReactEcharts from "echarts-for-react";
import { convertToPercentage } from "../utlis/helper";

class ResultsValues extends Component {
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
          { name: this.props.resultData[4]["name"], max: 100 }
        ]
      },
      series: [
        {
          name: "Values",
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
                convertToPercentage(this.props.resultData[4]["percentile"])
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
      <div className="plot-wrapper plot-wrapper-values">
        <Row className="plot-contents">
          <Col lg="12" md="12" sm="12" xs="12">
            <h1 className="text-center">Valores</h1>
            <ReactEcharts
              option={this.getOtion()}
              style={{ width: "100%", height: 600 }}
              className="react_for_echarts"
            />
            <div className="plot-description">
              
<p className="lead">
                Los valores describen factores motivadores que influyen en el autor.
                Toma de decisiones. La siguiente tabla describe los cinco valores.
                que el servicio infiere.
              </p>
              <ul>
                <li>
                  <strong>Auto-trascendencia</strong> Mostrar preocupación por el
                  bienestar e intereses de los demás.
                </li>
                <li>
                  <strong>Conservación</strong> Enfatice la auto restricción,
                  orden y resistencia al cambio.
                </li>
                <li>
                  <strong>Hedonismo</strong> Busca placer y sensual
                  gratificación para ellos mismos.
                </li>
                <li>
                  <strong>Auto-mejora</strong> Busque el éxito personal para
                  sí mismos.
                </li>
                <li>
                  <strong>Abierto al cambio</strong> Enfatizar la acción independiente,
                  pensamiento y sentimiento, así como una disposición para nuevos
                  experiencias.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultsValues;
