import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ParticipantImage from '../../../../assets/images/participant.jpeg';

import { fetchParticipants } from '../../actions';

class ParticipantsIndex extends Component {
  componentWillMount() {
    this.props.fetchParticipants();
  }

  renderParticipants() {
    return this.props.participants.map((participant) => {
      return (
        // <Link
        //   to={`/denizendesigner/interviews/${participant.id}`}
        //   key={participant.id}
        // >
        //   <Col xs={6} sm={6} md={6} lg={4} className='px-0'>
        //     <div className='participant-item'>
        //       <div className='participant-item-img'>
        //         <Row>
        //           <Col md='auto'>
        //             <span className='participant-item-name'>
        //               {participant.first_name} {participant.last_name}
        //             </span>
        //           </Col>
        //         </Row>

        //         <Row>
        //           <Col md='auto'>
        //             <span className='participant-item-designer'>
        //               {participant.designer_type}
        //             </span>
        //           </Col>
        //         </Row>
        //       </div>
        //     </div>
        //   </Col>
        // </Link>
        <Col
          xs='4'
          // sm={6}
          // md={6}
          // lg={4}
          className='mb-4 '
          style={{
            maxWidth: '15.241rem',
            // maxHeight: '8.938rem',
            // justifyContent: 'space-between',
          }}
        >
          <Card style={{ maxWidth: '15.241rem', maxHeight: '8.938rem' }}>
            <Link>
              <Card.Img src='https://res.cloudinary.com/dyy8g76av/image/upload/v1611545967/Denizen%20Designer%20%28Temp%29/participant_tjkgwb.jpg' />
              <Card.Body>
                <Card.ImgOverlay>
                  <Card.Title> Card Title</Card.Title>
                  <Card.Text>Testing123</Card.Text>
                </Card.ImgOverlay>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      );
    });
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => ( */}
            {this.props.participants.map((participant) => (
              <Col xs={6} sm={4} md={3} lg={2} className='mb-4'>
                {/* col-lg-4 col-md-6 col-sm-12 mb-4' */}
                {/* <Card> HERE IS A TEST CARD</Card> */}
                <Card style={{ maxWidth: '15.241rem', maxHeight: '8.938rem' }}>
                  <Link>
                    <Card.Img
                      src='https://res.cloudinary.com/dyy8g76av/image/upload/v1611545967/Denizen%20Designer%20%28Temp%29/participant_tjkgwb.jpg'
                      style={{ maxWidth: '15.241rem', maxHeight: '8.938rem' }}
                      // className='participant-item-img1'
                    />
                    <Card.Body>
                      <Card.ImgOverlay>
                        {/* <Card.Title> {participant.first_name} </Card.Title>
                        <Card.Text>Testing123</Card.Text> */}
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
                      </Card.ImgOverlay>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
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
