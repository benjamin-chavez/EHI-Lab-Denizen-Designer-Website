import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Footer } from 'react-bootstrap';
import ParticipantImage from '../../../../assets/images/participant.jpeg';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Fade from 'react-reveal/Fade';

import { fetchParticipants } from '../../actions';

function participants_indexFC({ fetchParticipants }) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //     offset: 40,
  //   });
  // }, []);

  useEffect(() => {
    fetchParticipants();
  }, []);

  const participants = useSelector((state) => state.participants);

  return (
    <div>
      <div>
        <Row className=''>
          {participants.map((participant) =>
            participant.interviewed ? (
              <Col xs={12} sm={12} md={4} lg={3} xl={3} className='mb-4'>
                <Fade bottom duration={1500}>
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
                </Fade>
              </Col>
            ) : (
              ''
            )
          )}
        </Row>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    participants: state.participants,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchParticipants: () => dispatch(fetchParticipants()),
  };
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchParticipants }, dispatch);
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(participants_indexFC);

// export default participants_indexFC;
