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
          <Col xs={12} sm={6} className='px-0'>
            <div className='participant-item'>
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
          </Col>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className=''>
        <Row>
          <Col>
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
