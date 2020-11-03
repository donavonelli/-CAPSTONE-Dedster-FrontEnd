import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ProfileList from "./ProfileList";
import NewProfileModal from "./NewProfileModal";

import axios from "axios";

import { API_URL } from "../constants";

class Test extends Component {
  state = {
    profiles: []
  };

  componentDidMount() {
    this.resetState();
  }

  getProfiles = () => {
    axios.get(API_URL).then(res => this.setState({ profiles: res.data }));
  };

  resetState = () => {
    this.getProfiles();
  };
  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ProfileList
              profiles={this.state.profiles}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewProfileModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Test;