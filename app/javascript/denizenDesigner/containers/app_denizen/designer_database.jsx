import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DesignersIndex from './designers_index';
import ParticipantsIndex from './participants_index';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import {
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
  Image,
  Container,
} from 'react-bootstrap';

import CitiesBannerGraphic from '../../../../assets/images/citiesBannerGraphic.svg';
import DocumentIcon from '../../../../assets/images/documentIcon.svg';

import { fetchParticipants } from '../../actions';

// function getUniqueCities(array, uniqueCities) {
// for (i = 0; i < array.length; index++) {
//   console.log(array[i]);
// }
// console.log('testing123');
// return uniqueCities;
// function getUniqueCities(participantsyaya) {
//   participantsyaya.map((participant) => {
//     console.log(participant);
//   });
//   console.log(`TESTINTESTING123123`);
// }

class DesignerDatabase extends Component {
  componentDidMount() {
    this.props.fetchParticipants();
  }

  location = () => {
    useLocation();
  };

  renderDesignersIndex(city) {
    // const city = location.pathname.split('/').pop();
    return (
      <div>
        <DesignersIndex city={city} />
      </div>
    );
  }

  render() {
    const city = location.pathname.split('/').pop();
    let uniqueCities = [];

    function getUniqueCities(participantsyaya) {
      participantsyaya.map((participant) => {
        if (uniqueCities.indexOf(participant.location_city) === -1) {
          uniqueCities.push(participant.location_city);
        }
      });
    }

    getUniqueCities(this.props.participants);

    return (
      <div className=''>
        <Container fluid>
          <Row>
            <NavLink className='participate-btn' to='#'>
              <div>
                {'  '}
                <Image src={DocumentIcon} alt='Document Icon' fluid />
                {'  '}
              </div>
              <span className='pl-1 participate-btn-text'> Participate</span>
            </NavLink>
          </Row>
          <Row className='designer-city-banner my-2'>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  variant='outline-light'
                  id='dropdown-basic'
                  className='dropdownButon'
                >
                  {city == 'designerdatabase' ? 'Cities' : city}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {uniqueCities.map((participant) => {
                    return (
                      <div>
                        <Dropdown.Item>
                          <NavLink
                            to={`/denizendesigner/designerdatabase/${participant}`}
                          >
                            {participant}
                          </NavLink>
                        </Dropdown.Item>
                      </div>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={8} className='cities-banner-graphic'>
              <div className='cities-banner-graphic-img'>
                {' '}
                <Image src={CitiesBannerGraphic} alt='Cities Graphic' fluid />
              </div>
            </Col>
          </Row>
          <div className='mt-3'>
            {this.renderDesignersIndex(city)}
            {/* <ParticipantList /> */}
          </div>
        </Container>
      </div>
    );
  }
}

// export default DesignerDatabase;
function mapStateToProps(state) {
  return {
    participants: state.participants,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchParticipants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignerDatabase);
