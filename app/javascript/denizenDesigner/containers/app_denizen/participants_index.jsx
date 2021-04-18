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

  // renderParticipants() {
  //   return this.props.participants.map((participant) => {
  //     return (
  //       <Col
  //         xs='4'
  //         // sm={6}
  //         // md={6}
  //         // lg={4}
  //         className='mb-4 '
  //         style={{
  //           maxWidth: '15.241rem',
  //           // maxHeight: '8.938rem',
  //           // justifyContent: 'space-between',
  //         }}
  //       >
  //         <Card style={{ maxWidth: '15.241rem', maxHeight: '8.938rem' }}>
  //           <Link>
  //             <Card.Img src='https://res.cloudinary.com/dyy8g76av/image/upload/v1611545967/Denizen%20Designer%20%28Temp%29/participant_tjkgwb.jpg' />
  //             {/* <Card.Img src={participant.profileImgLink} /> */}
  //             <Card.Body>
  //               <Card.ImgOverlay>
  //                 <Card.Title> Card Title</Card.Title>
  //                 <Card.Text>Testing123</Card.Text>
  //               </Card.ImgOverlay>
  //             </Card.Body>
  //           </Link>
  //         </Card>
  //       </Col>
  //     );
  //   });
  // }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
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

      // <div className=''>
      //   <Row>
      //     {/* <Col> */}
      //     {/* <div className='participant-list'>{this.renderParticipants()}</div> */}
      //     <div className=''>{this.renderParticipants()}</div>
      //     {/* </Col> */}
      //   </Row>

      //   <div class='row'>
      //     <Col xs={6} sm={6} md={6} lg={4} className='mb-4'>
      //       <Card style={{ maxWidth: '15.241rem', maxHeight: '8.938rem' }}>
      //         <Link>
      //           <Card.Img src='https://res.cloudinary.com/dyy8g76av/image/upload/v1593735159/borderlinebasic2_z0e0fw.png' />
      //           <Card.Body>
      //             <Card.ImgOverlay>
      //               <Card.Title> Card Title</Card.Title>
      //               <Card.Text>Testing123</Card.Text>
      //             </Card.ImgOverlay>
      //           </Card.Body>
      //         </Link>
      //       </Card>
      //     </Col>
      //   </div>

      //   <div class='row'>
      //     <div class='col-lg-4 col-md-6 col-sm-12 mb-4'>
      //       <div class='card'>
      //         <a href='https://borderlinebasicb.com/' target='_blank'>
      //           <img
      //             src='https://res.cloudinary.com/dyy8g76av/image/upload/v1593735159/borderlinebasic2_z0e0fw.png'
      //             class='card-img img-fluid'
      //             alt='Borderline Basic Website Preview'
      //           />

      //           <div class='card-img-overlay card-body'>
      //             <div>
      //               <h2 class='card-title'>Borderline Basic</h2>
      //               <div class='container'>
      //                 <p class='card-text'>
      //                   A custom blogging application for writer Brianna Webb.
      //                 </p>
      //               </div>
      //             </div>
      //           </div>
      //         </a>
      //       </div>
      //     </div>
      //     <Col xs={6} sm={6} md={6} lg={4} className='mb-4'>
      //       <Card>
      //         <Link>
      //           <Card.Img src='https://res.cloudinary.com/dyy8g76av/image/upload/v1593735159/borderlinebasic2_z0e0fw.png' />
      //           <Card.Body>
      //             <Card.ImgOverlay>
      //               <Card.Title> Card Title</Card.Title>
      //               <Card.Text>Testing123</Card.Text>
      //             </Card.ImgOverlay>
      //           </Card.Body>
      //         </Link>
      //       </Card>
      //     </Col>
      //   </div>
      // </div>
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
