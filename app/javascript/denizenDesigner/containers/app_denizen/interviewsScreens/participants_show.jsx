// Renders the individual show page for each participant. The participant quotes are poplated on the participants_show_quotes component, which is then rendered here.

import React, { Component } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import LoadSpinner from '../../shared/spinner';

import InstagramColorIcon from '../../../../../assets/images/instagramColorIcon.svg';
import TwitterColorIcon from '../../../../../assets/images/twitterColorIcon.svg';

import ParticipantsShowQuotes from './participants_show_quotes';

import { fetchParticipant, fetchQuotes } from '../../../actions';
import Fade from 'react-reveal/Fade';

/* NOTE: This page currently duplicate code due to the animation the animation on mobile has no delay time so that it does load awkwardly on mobile. If you update the code on this page, you will have to be careful that you update every place where the changed code occurs. The alternative to this would be to create a variable that changes based on screen size, which would allow you to avoid having duplicate code. I did not have time do implement that.
 */

export class ParticipantsShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true,
      matches: window.matchMedia('(min-width: 768px)').matches,
    };

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    this.props.fetchQuotes;
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia('(min-width: 768px)').addListener(handler);
  }

  componentWillMount() {
    if (!this.props.participant) {
      this.props.fetchParticipant(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.participant) {
      return (
        <div>
          <LoadSpinner />
        </div>
      );
    }
    return (
      <div className='participant-show participantShow pb-3'>
        <div>
          <Row className='mt-2'>
            <Col xs={12}>
              {/* <button onClick={this.goBack}>Go Back</button> */}
              <Button
                className='back-btn'
                variant='light'
                onClick={this.goBack}
              >
                {' '}
                <i className='fa fa-chevron-left'>
                  {' '}
                  <span className='back-btn-text'>Back</span>
                </i>
              </Button>
            </Col>
          </Row>

          <Row className='my-4'>
            <Col xs={12} lg={4} xl={3} className='mb-4'>
              <Fade bottom duration={1500} delay={0} count={1}>
                <Image
                  src={this.props.participant.profileImgLink}
                  className='participant-show-img'
                  fluid
                />
              </Fade>
            </Col>
            <Col xs={12} lg={8} xl={8}>
              <Fade bottom duration={1500} delay={500} count={1}>
                <h2 className='name'>
                  {this.props.participant.first_name}{' '}
                  {this.props.participant.last_name}
                </h2>
                <p className='designer-type'>
                  {this.props.participant.designer_type}
                </p>
                <p className='bio'>{this.props.participant.bio}</p>

                <ParticipantsShowQuotes />
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4} xl={3}></Col>
            <Col xs={12} lg={8} xl={8}>
              {/* Fade animation for Desktop (longer delay) */}
              {this.state.matches && (
                <Fade bottom duration={1500} delay={850} count={1}>
                  <ul className='socialLinksList p-0'>
                    {this.props.participant.instagram != '' ? (
                      <li className='mr-3'>
                        <a
                          className='socialLinks'
                          target='_blank'
                          href={`https://instagram.com/${this.props.participant.instagram}`}
                        >
                          <Button variant='light' className='socialLinksBtn'>
                            <Image
                              src={InstagramColorIcon}
                              alt='Instagram Icon'
                              fluid
                            />
                            <span className='ml-1'>
                              {' '}
                              {this.props.participant.instagram}
                            </span>
                          </Button>
                        </a>
                      </li>
                    ) : (
                      ''
                    )}
                    {this.props.participant.twitter != '' ? (
                      <li className='mr-3'>
                        <a
                          className='socialLinks'
                          target='_blank'
                          href={`https://twitter.com/${this.props.participant.twitter}`}
                        >
                          <Button variant='light' className='socialLinksBtn'>
                            <Image
                              src={TwitterColorIcon}
                              alt='Twitter Icon'
                              fluid
                            />
                            <span className='ml-1'>
                              {' '}
                              {this.props.participant.twitter}
                            </span>
                          </Button>
                        </a>
                      </li>
                    ) : (
                      ''
                    )}
                  </ul>
                </Fade>
              )}
              {/* Fade animation for Mobile (shorter delay) */}
              {!this.state.matches && (
                <Fade bottom duration={1500} delay={0} count={1}>
                  <ul className='socialLinksList p-0'>
                    {this.props.participant.instagram != '' ? (
                      <li className='mr-3'>
                        <a
                          className='socialLinks'
                          target='_blank'
                          href={`https://instagram.com/${this.props.participant.instagram}`}
                        >
                          <Button variant='light' className='socialLinksBtn'>
                            <Image
                              src={InstagramColorIcon}
                              alt='Instagram Icon'
                              fluid
                            />
                            <span className='ml-1'>
                              {' '}
                              {this.props.participant.instagram}
                            </span>
                          </Button>
                        </a>
                      </li>
                    ) : (
                      ''
                    )}
                    {this.props.participant.twitter != '' ? (
                      <li className='mr-3'>
                        <a
                          className='socialLinks'
                          target='_blank'
                          href={`https://twitter.com/${this.props.participant.twitter}`}
                        >
                          <Button variant='light' className='socialLinksBtn'>
                            <Image
                              src={TwitterColorIcon}
                              alt='Twitter Icon'
                              fluid
                            />
                            <span className='ml-1'>
                              {' '}
                              {this.props.participant.twitter}
                            </span>
                          </Button>
                        </a>
                      </li>
                    ) : (
                      ''
                    )}
                  </ul>
                </Fade>
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const participant = reduxState.participants.find((p) => p.id === idFromUrl);
  const quoteData = reduxState.quotes;
  return { participant, quoteData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchParticipant, fetchQuotes }, dispatch);
}

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(ParticipantsShow);
