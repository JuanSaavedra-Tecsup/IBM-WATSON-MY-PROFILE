import React, { Component } from "react";
import { Container, Tooltip, Badge, Alert } from "reactstrap";
import IconBrain from "../images/icon-brain.svg";

class ResultStrength extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false,
      strengthClass: "",
      strengthLabel: ""
    };
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }
  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  componentWillMount() {
    if (this.props.wordCount < 600) {
      this.setState({
        strengthClass: "analysis-weak",
        strengthLabel: "Weak Analysis"
      });
    } else if (this.props.wordCount >= 600 && this.props.wordCount < 1200) {
      this.setState({
        strengthClass: "analysis-moderate",
        strengthLabel: "Moderate Analysis"
      });
    } else if (this.props.wordCount >= 1200 && this.props.wordCount < 6000) {
      this.setState({
        strengthClass: "analysis-strong",
        strengthLabel: "Strong Analysis"
      });
    } else if (this.props.wordCount >= 6000) {
      this.setState({
        strengthClass: "analysis-very-strong",
        strengthLabel: "Very Strong Analysis"
      });
    }
  }

  render() {
    return (
      <Container className="result-strength-container">
        <div className="icon-brain">
          <div className="icon-brain-container">
            <img src={IconBrain} alt="The Human Brain" />
          </div>
          <div className="analysis-strength">
            <a href="#tooltip" id="analysisStrengthTooltip">
              <Badge className={this.state.strengthClass} color="danger">
                {this.state.strengthLabel}
              </Badge>
            </a>
            <Tooltip
              className="analysis-strength-toolip"
              placement="top"
              isOpen={this.state.tooltipOpen}
              target="analysisStrengthTooltip"
              toggle={this.toggleTooltip}
            >
              La intensidad del análisis está determinada por el recuento de palabras del texto no estructurado
              previsto. <br />Débil &lt; 600 palabras. <br />Moderada &lt; 1,200
              palabras. <br />Fuerte &gt; 1,200 words.<br />Muy Fuerte &gt; 6,000
              palabras.
            </Tooltip>
          </div>
        </div>
        {this.props.warnings.map(function(warning) {
          return (
            <Alert className="result-msg" color="warning">
              {warning.message}
            </Alert>
          );
        })}
      </Container>
    );
  }
}

export default ResultStrength;
