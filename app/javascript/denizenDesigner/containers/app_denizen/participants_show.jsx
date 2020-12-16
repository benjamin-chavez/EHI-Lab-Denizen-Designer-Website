import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { fetchParticipant } from "../../actions";

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
      <div className='container'>
        <Container>
          <Row className='my-2'>
            <Col sm={12}>
              <Link to='/denizendesigner/interviews'>
                <Button className='back-btn' variant='light'>
                  {" "}
                  <i className='fa fa-chevron-left back-btn-text'> Back</i>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <div className='participant-show-img'>
                <div></div>
              </div>
            </Col>
            <Col lg={8}>
              <h2>
                {this.props.participant.first_name}{" "}
                {this.props.participant.last_name}
              </h2>
              <p>{this.props.participant.designer_type}</p>
              <p>{this.props.participant.bio}</p>
            </Col>
          </Row>
        </Container>
        {/* <div className='row'>
          <div className='col-sm-12'>
            <Link to='/denizendesigner/interviews'>
              <p>Back</p>
            </Link>
          </div>
        </div> */}
        <div className='row'>
          {/* <div className='col-sm-4'>
            <div className='img-container'>
              <div className='participant-show-img'></div>
            </div>
          </div> */}
          <div className='col-sm-8'>
            {/* <h2>
              {this.props.participant.first_name}{" "}
              {this.props.participant.last_name}
            </h2>
            <p>{this.props.participant.designer_type}</p>
            <p>{this.props.participant.bio}</p> */}
          </div>
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
