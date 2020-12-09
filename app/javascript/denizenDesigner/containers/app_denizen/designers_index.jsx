import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fetchParticipants } from "../../actions";

class DesignersIndex extends Component {
  componentWillMount() {
    this.props.fetchParticipants();
  }

  renderParticipants() {
    return this.props.participants.map((participant) => {
      return (
        <div>
          <Row className='database-card'>
            <Col>
              <p className='card-text'>
                {participant.first_name} {participant.last_name}
              </p>
            </Col>
            <Col>
              <p className='card-text'>{participant.designer_type}</p>
            </Col>
            <Col>
              <p className='card-text'>Contact</p>
            </Col>
          </Row>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <p>Name</p>
          </Col>
          <Col>Designer</Col>
          <Col>Contact</Col>
        </Row>

        <div className=''>{this.renderParticipants()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    participants: state.participants,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchParticipants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignersIndex);
