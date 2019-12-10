import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ReactEcharts from "echarts-for-react";
import { convertToPercentage } from "../utlis/helper";
import ResultsBigFiveFacet from "../components/ResultsBigFiveFacet";

class ResultsBigFive extends Component {
  constructor(props) {
    super(props);

    this.getOtion = this.getOtion.bind(this);
  }

  getOtion() {
    const option = {
      tooltip: {},
      scale: true,
      radar: {
        name: {
          textStyle: {
            color: "#fff",
            fontSize: 16
          }
        },
        //shape: "circle",
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
          name: "Los grandes 5",
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
      <div className="plot-wrapper">
        <Row className="plot-contents">
          <Col lg="12" md="12" sm="12" xs="12">
            <h1 className="text-center">Los 5 grandes</h1>
            <ReactEcharts
              option={this.getOtion()}
              style={{ width: "100%", height: 600 }}
              className="react_for_echarts"
            />
            <div className="plot-description">
              <p className="lead">
                Las características de la personalidad Big Five representan la más amplia
                modelo utilizado para describir en general cómo se relaciona una persona con
                el mundo. El modelo incluye cinco dimensiones principales:{" "}
              </p>
              <ol>
                <li>
                  <strong>Agradable</strong> es la tendencia de una persona a ser
                  compasivo y cooperativo con los demás.
                </li>
                <li>
                  <strong>Escrupulosidad</strong> es la tendencia de una persona a
                  actuar de manera organizada o reflexiva.{" "}
                </li>
                <li>
                  <strong>Extraversion</strong> es la tendencia de una persona a buscar
                  estimulación en compañía de otros.{" "}
                </li>
                <li>
                  <strong>Rango emocional</strong>, también conocido como
                  Neuroticismo o reacciones naturales, es la medida en que las 
                  emociones de la persona son sensibles al entorno de la persona.
                </li>
                <li>
                  <strong>Franqueza</strong> es la medida en que una persona es
                  Abierto a experimentar una variedad de actividades.{" "}
                </li>
              </ol>
              <p>
                Cada una de estas dimensiones de nivel superior tiene seis facetas que además
                caracterizar a un individuo de acuerdo con la dimensión.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="plot-contents plot-facets">
          <Col lg="6" md="12" sm="12" xs="12" className="plot-facet">
            <h2 className="text-center">Agradable</h2>
            <ResultsBigFiveFacet
              chartTitle={this.props.resultData[3]["name"]}
              resultData={this.props.resultData[3]["children"]}
            />
            <div className="plot-description-facet">
              <ul>
                <li>
                  <strong>Altruismo</strong> Encuentra que ayudar a otros es
                  realmente gratificante, que hacer cosas por los demás es una forma de
                  realización personal en lugar de sacrificio personal.
                </li>
                <li>
                  <strong>Cooperación</strong> No me gusta la confrontación. Son
                  perfectamente dispuestos a comprometer o negar sus propias necesidades para
                  llevarse bien con otros.
                </li>
                <li>
                  <strong>Modestia</strong> Son modestos, más bien modestos,
                  y humilde Sin embargo, no necesariamente carecen de
                  autoconfianza o autoestima.
                </li>
                <li>
                  <strong>Intransigente</strong> No hay necesidad de fingir o
                  manipulación cuando se trata con otros y por lo tanto son
                  sincero, franco y genuino.
                </li>
                <li>
                  <strong>Simpatía</strong> Son tiernos y
                  compasivo.
                </li>
                <li>
                  <strong>Confianza</strong> Suponga que la mayoría de las personas son
                  fundamentalmente justo, honesto y con buenas intenciones. Ellos
                  tomar a las personas al pie de la letra y están dispuestos a perdonar y
                  olvidar.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12" className="plot-facet">
            <h2 className="text-center">Escrupulosidad</h2>
            <ResultsBigFiveFacet
              chartTitle={this.props.resultData[1]["name"]}
              resultData={this.props.resultData[1]["children"]}
            />
            <div className="plot-description-facet">
              <ul>
                <li>
                  <strong>Logro esfuerzo</strong> Esforzarse por lograr
                  excelencia. Su impulso para ser reconocido como exitoso mantiene
                  ellos en camino mientras trabajan duro para lograr sus objetivos.
                </li>
                <li>
                  <strong>Cautela</strong> Están dispuestos a pensar detenidamente
                  posibilidades cuidadosamente antes de actuar.
                </li>
                <li>
                  <strong>Deber</strong> Tener un fuerte sentido del deber y
                  obligación.
                </li>
                <li>
                  <strong>Orden</strong> Están bien organizados, ordenados y
                  ordenado.
                </li>
                <li>
                  <strong>Auto-disciplina</strong> Tener la autodisciplina, o
                  "fuerza de voluntad" para persistir en tareas difíciles o desagradables
                  hasta que se completen.
                </li>
                <li>
                  <strong>Autoeficacia</strong> Confían en su capacidad.
                  para lograr cosas.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12" className="plot-facet">
            <h2 className="text-center">Extraversion</h2>
            <ResultsBigFiveFacet
              chartTitle={this.props.resultData[2]["name"]}
              resultData={this.props.resultData[2]["children"]}
            />
            <div className="plot-description-facet">
              <ul>
                <li>
                  <strong>Nivel de actividad</strong> Plomo de ritmo rápido y ocupado
                  vive. Hacen cosas y se mueven rápidamente, enérgicamente,
                  y vigorosamente, y están involucrados en muchas actividades.
                </li>
                <li>
                  <strong>Asertividad</strong> Me gusta hacerse cargo y dirigir
                  Las actividades de otros. Tienden a ser líderes en grupos.
                </li>
                <li>
                  <strong>Alegría</strong> Experimenta una gama de cosas positivas
                  sentimientos, incluyendo felicidad, entusiasmo, optimismo y alegría.
                </li>
                <li>
                  <strong>Búsqueda de emociones</strong> Se aburren fácilmente sin
                  altos niveles de estimulación
                </li>
                <li>
                  <strong>Saliente</strong> Genuinamente como otras personas y
                  Demostrar abiertamente sentimientos positivos hacia los demás.
                </li>
                <li>
                  <strong>Gregarismo</strong> Encuentra la compañía de otros
                  agradablemente estimulante y gratificante. Ellos disfrutan el
                  La emoción de las multitudes.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12" className="plot-facet">
            <h2 className="text-center">Rango emocional</h2>
            <ResultsBigFiveFacet
              chartTitle={this.props.resultData[4]["name"]}
              resultData={this.props.resultData[4]["children"]}
            />
            <div className="plot-description-facet">
              <ul>
                <li>
                  <strong>Ardiente</strong> Tender a enfadarse
                </li>
                <li>
                  <strong>Propenso a preocuparse </strong> A menudo se siente como algo
                  desagradable, amenazante o peligroso está por suceder. los
                  El sistema de "lucha o huida" de sus cerebros es demasiado fácil y demasiado
                  a menudo comprometido
                </li>
                <li>
                  <strong>Melancolía</strong> Tienden a reaccionar más fácilmente a
                  Los altibajos de la vida.
                </li>
                <li>
                  <strong>Inmoderación</strong> Siente fuertes antojos e impulsos
                  que tienen dificultades para resistir, aunque sepan
                  de que es probable que se arrepientan más tarde. Tienden a ser
                  orientado hacia placeres y recompensas a corto plazo en lugar de
                  consecuencias a largo plazo.
                </li>
                <li>
                  <strong>Autoconciencia</strong> Son sensibles a lo que
                  otros piensan en ellos. Sus preocupaciones sobre el rechazo y
                  el ridículo hace que se sientan tímidos e incómodos
                  otros; se avergüenzan fácilmente.
                </li>
                <li>
                  <strong>Susceptible al estrés</strong> Tiene dificultad para sobrellevar
                  con estrés Experimentan pánico, confusión y
                  impotencia cuando está bajo presión o ante una emergencia
                  situaciones
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12" className="plot-facet">
            <h2 className="text-center">Franqueza</h2>
            <ResultsBigFiveFacet
              chartTitle={this.props.resultData[0]["name"]}
              resultData={this.props.resultData[0]["children"]}
            />
            <div className="plot-description-facet">
              <ul>
                <li>
                  <strong>Aventura</strong> Están ansiosos por probar nuevos
                  actividades y experimentar cosas diferentes. Ellos encuentran
                  familiaridad y rutina aburrida.
                </li>
                <li>
                  <strong>Intereses artísticos</strong> Ama la belleza, tanto en el arte
                  y en la naturaleza. Se involucran y absorben fácilmente
                  Eventos artísticos y naturales. Con intelecto, esta faceta es una
                  de los dos aspectos centrales más importantes de este
                  característica.
                </li>
                <li>
                  <strong>Emoción</strong> Tener buen acceso y
                  conciencia de sus propios sentimientos.
                </li>
                <li>
                  <strong>Imaginación</strong> Ver el mundo real con tanta frecuencia también
                  simple y corriente Usan la fantasía no como un escape sino como un
                  forma de crear para sí mismos una más rica e interesante
                  mundo interior.
                </li>
                <li>
                  <strong>Intelecto</strong> Son intelectualmente curiosos y tienden
                  pensar en símbolos y abstracciones. Con intereses artísticos,
                  Esta faceta es uno de los dos aspectos centrales más importantes.
                  de esta característica
                </li>
                <li>
                  <strong>Autoridad desafiante</strong> Tener una disposición para
                  desafiar la autoridad, la convención y los valores tradicionales.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultsBigFive;
