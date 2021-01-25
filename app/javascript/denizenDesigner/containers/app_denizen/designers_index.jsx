import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { fetchParticipants } from '../../actions';

class DesignersIndex extends Component {
  componentWillMount() {
    this.props.fetchParticipants();
  }

  renderParticipants() {
    return this.props.participants.map((participant) => {
      return (
        <div>
          {participant.location == this.props.city ||
          this.props.city == 'designerdatabase' ? (
            <Row className='database-card'>
              <Col>
                <p className='card-text card-name'>
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
          ) : (
            ''
          )}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {/* <h1>{this.props.city}</h1> */}
        <Row>
          <Col>
            <p className='designer-database-col-headers'>Name</p>
          </Col>
          <Col className='designer-database-col-headers'>Role</Col>
          <Col className='designer-database-col-headers'>Contact</Col>
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
