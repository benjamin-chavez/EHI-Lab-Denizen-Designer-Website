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
    return (
      <div className=''>
        <div>
          <Row className='designer-database'>
            {this.props.participants.map((participant) => {
              return participant.location == this.props.city ||
                this.props.city == 'designerdatabase' ? (
                <Col xs={12} sm={12} md={4} lg={3} xl={3} className=''>
                  <Row>
                    <span className='participant-name pl-1 pr-3 mb-2'>
                      {participant.first_name}
                      {` `}
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
                      {participant.twitter != '' ? (
                        <li className='mb-2 mr-3'>
                          {' '}
                          <Image
                            src={twitterIcon}
                            className='d-inline-block align-top mr-1'
                            alt='Twitter Icon'
                            fluid
                          />
                          {``}
                          <span>
                            {' '}
                            <a
                              className=''
                              target='_blank'
                              href={`https://twitter.com/${participant.twitter}`}
                            >
                              {participant.twitter}
                            </a>
                          </span>
                        </li>
                      ) : (
                        ''
                      )}

                      {participant.email != '' ? (
                        <li className='mb-2 mr-3'>
                          {''}
                          <Image
                            src={mailIcon}
                            className='d-inline-block align-top mr-1'
                            alt='Email Icon'
                            fluid
                          />{' '}
                          <span>
                            <a
                              className=''
                              target='_blank'
                              href={`mailto: ${participant.email}`}
                            >
                              {participant.email}
                            </a>
                          </span>
                        </li>
                      ) : (
                        ''
                      )}

                      {participant.instagram != '' ? (
                        <li className='mb-2 mr-3'>
                          {''}
                          <Image
                            src={igIcon}
                            className='d-inline-block align-top mr-1'
                            alt='Instagram Icon'
                            fluid
                          />{' '}
                          <span>
                            {' '}
                            <a
                              className=''
                              target='_blank'
                              href={`https://instagram.com/${participant.instagram}`}
                            >
                              {participant.instagram}
                            </a>
                          </span>
                        </li>
                      ) : (
                        ''
                      )}
                    </ul>
                  </Row>
                </Col>
              ) : (
                ''
              );
            })}
          </Row>
        </div>
      </div>
    );
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
