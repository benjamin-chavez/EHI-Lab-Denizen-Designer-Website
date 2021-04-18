import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Footer } from 'react-bootstrap';
import ParticipantImage from '../../../../assets/images/participant.jpeg';

import { fetchParticipants } from '../../actions';

class ParticipantsIndex extends Component {
  componentWillMount() {
    this.props.fetchParticipants();
  }

  render() {
    return (
      <div>
        <Container fluid className='p-0'>
          <Row className='testttt'>
            {this.props.participants.map((participant) =>
              participant.interviewed ? (
                <Col xs={12} sm={12} md={4} lg={3} xl={3} className='mb-4'>
                  <Card className='participant-item'>
                    <Card.Img
                      alt='Card image'
                      src={participant.profileImgLink}
                      className='participant-item-img-background'
                    />
                    <Link
                      to={`/denizendesigner/interviews/${participant.id}`}
                      key={participant.id}
                    >
                      <Card.ImgOverlay className='cardImageOverlay'>
                        <Card.Body className='cardBodyInterview p-0'>
                          <Row className='card-row'>
                            <Col md={12} className='pl-4 mb-0'>
                              <div className='participant-item-name'>
                                {participant.first_name} {participant.last_name}
                              </div>
                            </Col>
                            <Col md={12} className='pl-4 mb-2'>
                              <div className='participant-item-designer'>
                                {participant.designer_type}
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card.ImgOverlay>
                    </Link>
                  </Card>
                </Col>
              ) : (
                ''
              )
            )}
          </Row>
        </Container>
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
