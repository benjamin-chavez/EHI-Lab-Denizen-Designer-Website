import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
// import reportImage from '../../../../assets/images/report-img-1.svg';
// <Image src={instagramColorIcon} alt='Denizen Designer Logo' fluid />
import InstagramColorIcon from '../../../../assets/images/instagramColorIcon.svg';
import TwitterColorIcon from '../../../../assets/images/twitterColorIcon.svg';

// instagramColorIcon.svg;
import { fetchParticipant } from '../../actions';

export class ParticipantsShow extends Component {
  componentWillMount() {
    if (!this.props.participant) {
      this.props.fetchParticipant(this.props.match.params.id);
    }
  }
  render() {
    if (!this.props.participant) {
      return <p>Loading...</p>;
    }
    return (
      <div className='participant-show participantShow pb-3'>
        <div>
          <Row className='mt-2'>
            <Col xs={12}>
              <Link to='/denizendesigner/interviews'>
                <Button className='back-btn' variant='light'>
                  {' '}
                  <i className='fa fa-chevron-left'>
                    {' '}
                    <span className='back-btn-text'>Back</span>
                  </i>
                </Button>
              </Link>
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
              <Image
                src={this.props.participant.profileImgLink}
                className='participant-show-img'
              />
              {/* <div className='participant-show-img'></div> */}

              {/* THE ABOVE LINE IS THE IMAGE THAT NEEDS TO BE EDITED */}
            </Col>
            <Col xs={12} lg={8} xl={8}>
              <h2 className='name'>
                {this.props.participant.first_name}{' '}
                {this.props.participant.last_name}
              </h2>
              <p className='designer-type'>
                {this.props.participant.designer_type}
              </p>
              <p className='bio'>{this.props.participant.bio}</p>

              <Card className='mb-3'>
                <Card.Body className='quoteCard'>
                  <span>
                    “The public is more familiar with bad design than good
                    design. It is, in effect, conditioned to prefer bad design,
                    because that is what it lives with. The new becomes
                    threatening, the old reassuring.”
                  </span>
                </Card.Body>
              </Card>
              <Card className='mb-3'>
                <Card.Body className='quoteCard'>
                  <span>
                    “The public is more familiar with bad design than good
                    design. It is, in effect, conditioned to prefer bad design,
                    because that is what it lives with. The new becomes
                    threatening, the old reassuring.”
                  </span>
                </Card.Body>
              </Card>
              {/* 
              <p className='bio'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                enim, aliquet velit ut. Sem amet arcu senectus venenatis dictum
                ac et sed metus. Massa amet urna diam tellus, ac nunc integer
                tristique. Viverra aliquet cras eleifend ut. Imperdiet at
                pellentesque vulputate amet. Turpis orci amet quis arcu tortor
                ultrices lacus. Pharetra, laoreet sed non mi cursus gravida.
                Gravida mus lobortis nisi at id velit varius. In est phasellus
                tortor gravida. Sit vitae adipiscing purus tincidunt
                pellentesque non
              </p> */}
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4} xl={3}></Col>
            <Col xs={12} lg={8} xl={8}>
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
  return { participant };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchParticipant }, dispatch);
}

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(ParticipantsShow);
