import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Icon from "react-fontawesome";
import ResultsStrength from "../components/ResultsStrength";
import ResultsSummary from "../components/ResultsSummary";
import ResultsBigFive from "../components/ResultsBigFive";
import ResultsNeeds from "../components/ResultsNeeds";
import ResultsValues from "../components/ResultsValues";
import ResultsConsumerPref from "./ResultsConsumerPref";

//import echarts from "echarts";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warnings: {},
      wordCount: null,
      activeTab: "1",
      sourceModal: false
    };

    this.toggleTabs = this.toggleTabs.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleTabs(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleModal() {
    this.setState({
      sourceModal: !this.state.sourceModal
    });
  }

  render() {
    return (
      <div className="results-wrapper">
        <Button
          color="secondary"
          size="sm"
          onClick={this.props.tryAgain.bind(this)}
          className="btn-try-again"
        >
          <Icon name="repeat" /> Inténtalo de nuevo
        </Button>
        <ResultsStrength
          wordCount={this.props.resultData["word_count"]}
          warnings={this.props.resultData["warnings"]}
        />

        <ResultsSummary resultData={this.props.resultData} />
        <div className="raw-text-modal">
          <div className="text-center source-text-btn">
            <Button color="secondary" size="sm" onClick={this.toggleModal}>
              Mostrar texto fuente ({this.props.resultData["word_count"]} palabras analizadas)
            </Button>
          </div>
          <Modal
            isOpen={this.state.sourceModal}
            toggle={this.toggleModal}
            size="lg"
          >
            <ModalHeader toggle={this.toggleModal}>Texto de origen</ModalHeader>
            <ModalBody>{this.props.rawText}</ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModal}>
                Cerrar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={this.state.activeTab === "1" ? "active" : ""}
              onClick={() => {
                this.toggleTabs("1");
              }}
            >
              Los 5 grandes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={this.state.activeTab === "2" ? "active" : ""}
              onClick={() => {
                this.toggleTabs("2");
              }}
            >
              
              Necesidades
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={this.state.activeTab === "3" ? "active" : ""}
              onClick={() => {
                this.toggleTabs("3");
              }}
            >
              Valores
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={this.state.activeTab === "4" ? "active" : ""}
              onClick={() => {
                this.toggleTabs("4");
              }}
            >
              Preferencias del consumidor
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ResultsBigFive resultData={this.props.resultData["personality"]} />
          </TabPane>
          <TabPane tabId="2">
            <ResultsNeeds resultData={this.props.resultData["needs"]} />
          </TabPane>
          <TabPane tabId="3">
            <ResultsValues resultData={this.props.resultData["values"]} />
          </TabPane>
          <TabPane tabId="4">
            <ResultsConsumerPref
              resultData={this.props.resultData["consumption_preferences"]}
            />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Results;
