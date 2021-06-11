import React, { Component } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import LoadSpinner from '../shared/spinner';
// import reportImage from '../../../../assets/images/report-img-1.svg';
// <Image src={instagramColorIcon} alt='Denizen Designer Logo' fluid />
import InstagramColorIcon from '../../../../assets/images/instagramColorIcon.svg';
import TwitterColorIcon from '../../../../assets/images/twitterColorIcon.svg';
import IntShowQuotes from './interviewsScreens/intShowQuotes';
import ParticipantsShowQuotes from './participants_show_quotes';

// instagramColorIcon.svg;
import { fetchParticipant, fetchQuotes } from '../../actions';
import Fade from 'react-reveal/Fade';

export class ParticipantsShow extends Component {
  constructor(props) {
    super(props);
    this.state = { value: true };
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    this.props.fetchQuotes;
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
              {/* <Card>
                <Card.Body>
                  <Image src={InstagramColorIcon} alt='Instagram Icon' fluid />
                </Card.Body>
              </Card> */}

              {/* <Image
                src='https://res.cloudinary.com/dyy8g76av/image/upload/v1611545967/Denizen%20Designer%20%28Temp%29/participant_tjkgwb.jpg'
                className='showImage'
                fluid
              /> */}
              {/* <div className='report-img'>
                {' '}
                <Image
                  src={this.props.participant.profileImgLink}
                  alt='Education Graphic'
                  fluid
                />
              </div> */}
              <Fade bottom duration={1500} delay={0} count={1}>
                <Image
                  src={this.props.participant.profileImgLink}
                  className='participant-show-img'
                  fluid
                />
              </Fade>
              {/* <div className='participant-show-img'></div> */}

              {/* THE ABOVE LINE IS THE IMAGE THAT NEEDS TO BE EDITED */}
            </Col>
            <Col xs={12} lg={8} xl={8}>
              <Fade bottom duration={1500} delay={1000} count={1}>
                <h2 className='name'>
                  {this.props.participant.first_name}{' '}
                  {this.props.participant.last_name}
                </h2>
                <p className='designer-type'>
                  {this.props.participant.designer_type}
                </p>
                <p className='bio'>{this.props.participant.bio}</p>
                {/* <IntShowQuotes /> */}

                <ParticipantsShowQuotes />
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4} xl={3}></Col>
            <Col xs={12} lg={8} xl={8}>
              <Fade bottom duration={1500} delay={1700} count={1}>
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
  // const quotes1 = quoteData.quotes.find((p) => p.id === idFromUrl);
  return { participant, quoteData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchParticipant, fetchQuotes }, dispatch);
}

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(ParticipantsShow);
