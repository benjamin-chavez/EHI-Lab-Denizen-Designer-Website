import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Row, Col, Image } from 'react-bootstrap';
import igIcon from '../../../../assets/images/igIcon.svg';
import twitterIcon from '../../../../assets/images/twitterIcon.svg';
import mailIcon from '../../../../assets/images/mailIcon.svg';

import { fetchParticipants } from '../../actions';

class DesignersIndex extends Component {
  componentWillMount() {
    this.props.fetchParticipants();
  }

  renderParticipants() {
    return this.props.participants.map((participant) => {
      return (
        <div className=''>
          {participant.location == this.props.city ||
          this.props.city == 'designerdatabase' ? (
            <div>
              <Row className='designer-database'>
                {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => ( */}
                {this.props.participants.map((participant) => (
                  <Col xs={12} sm={12} md={4} lg={3} xl={3} className=''>
                    <Row>
                      <span className='participant-name pl-1 pr-3 mb-2'>
                        {participant.first_name}
                        {participant.last_name}
                      </span>
                    </Row>
                    <Row>
                      <span className='role pl-1 mb-1'>
                        {participant.designer_type}
                      </span>
                    </Row>
                    <Row>
                      <ul className='data-list pl-1'>
                        <li className='mb-2 mr-3'>
                          <Image
                            src={twitterIcon}
                            className='d-inline-block align-top mr-1'
                            alt='Twitter Icon'
                            fluid
                          />{' '}
                          Mark_1234
                        </li>
                        <li className='mb-2 mr-3'>
                          <Image
                            src={mailIcon}
                            className='d-inline-block align-top mr-1'
                            alt='Email Icon'
                            fluid
                          />{' '}
                          Mark1234@usbc.edu
                        </li>
                        <li className='mb-2 mr-3'>
                          <Image
                            src={igIcon}
                            className='d-inline-block align-top mr-1'
                            alt='Instagram Icon'
                            fluid
                          />{' '}
                          <span> Mark_1234</span>
                        </li>
                      </ul>
                    </Row>
                  </Col>
                ))}
              </Row>
            </div>
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
