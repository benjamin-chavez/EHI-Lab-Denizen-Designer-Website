import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
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
        <div className=''>
          {/* {participant.location == this.props.city ||
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
          )} */}
          <div>
            <Row className='mb-2'>
              <Col className='px-0'>
                <Card className='database-card'>
                  <div className='py-2 px-3'>
                    <Row>
                      <Col xs={3} className='card-name'>
                        {participant.first_name} {participant.last_name}
                      </Col>
                      <Col xs={4} className='card-text'>
                        {participant.designer_type}
                      </Col>
                      <Col xs={5} className='card-text'>
                        Contact
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Row className='mb-3'>
          <Col xs={3} className=''>
            <span className='designer-database-col-headers'>Name</span>
          </Col>
          <Col xs={4} className=''>
            <span className='designer-database-col-headers'>Role</span>
          </Col>
          <Col xs={5} className=''>
            <span className='designer-database-col-headers'>Contact</span>
          </Col>
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
