import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import ParticipantImage from '../../../../assets/images/participant.jpeg';

import { fetchParticipants } from '../../actions';

class ParticipantsIndex extends Component {
  componentWillMount() {
    this.props.fetchParticipants();
  }

  renderParticipants() {
    return this.props.participants.map((participant) => {
      return (
        <Link
          to={`/denizendesigner/interviews/${participant.id}`}
          key={participant.id}
        >
          <div className='participant-item'>
            {/* <div className=''> */}
            {/* <img src={ParticipantImage} className='participant-item' /> */}
            {/* removed card class from the prev line */}
            <div className='participant-item-img'>
              <Row>
                <Col md='auto'>
                  <span className='participant-item-name'>
                    {participant.first_name} {participant.last_name}
                  </span>
                </Col>
              </Row>

              <Row>
                <Col md='auto'>
                  <span className='participant-item-designer'>
                    {participant.designer_type}
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <Row className='justify-content-center'>
          <Col md='auto'>
            <div className='participant-list'>{this.renderParticipants()}</div>
          </Col>
        </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsIndex);
