import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchParticipants, deleteParticipant } from '../../actions';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchParticipants();
  }

  handleClick = (participantId) => {
    if (window.confirm('Are you sure?')) {
      this.props.deleteParticipant(participantId);
    }
    // this.props.fetchParticipants();
    this.forceUpdate();
    // this.props.history.push('/dashboard/newparticipant');
    // this.props.fetchParticipants();
  };

  renderParticipants() {
    return this.props.participants.map((participant) => {
      return (
        <div key={participant.id}>
          <Row>
            <Col>
              <p>{participant.first_name}</p>
            </Col>
            <Col>
              <Link to={`/dashboard/editparticipant/${participant.id}`}>
                <Button>Edit Participant</Button>
              </Link>
              <Button
                className='ml-1'
                variant='danger'
                onClick={() => this.handleClick(participant.id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>This is the dashboard</h1>
        <Row>
          <Col>
            <span className='p-1'>
              {' '}
              <Link to={`/dashboard/newparticipant`}>
                <Button>New Participant</Button>
              </Link>
            </span>
          </Col>
        </Row>
        <hr />
        <div>{this.renderParticipants()}</div>
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
  return bindActionCreators({ fetchParticipants, deleteParticipant }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
