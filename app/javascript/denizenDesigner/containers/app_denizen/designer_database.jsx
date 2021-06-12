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

import CitiesBannerGraphicSM from '../../../../assets/images/citiesBannerGraphicSM.svg';
import DocumentIcon from '../../../../assets/images/documentIcon.svg';

import { fetchParticipants } from '../../actions';

class DesignerDatabase extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia('(min-width: 768px)').matches };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia('(min-width: 768px)').addListener(handler);
  }

  componentwillMount() {
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
    const city = location.pathname.split('/').pop().replaceAll('%20', ' ');
    let uniqueCities = [];
    let uniqueCitiestemp = ['All Cities'];

    function getUniqueCities(participantsyaya) {
      participantsyaya.map((participant) => {
        if (uniqueCities.indexOf(participant.location_city) === -1) {
          uniqueCities.push(participant.location_city);
        }
      });
      uniqueCities = uniqueCities.sort();
      for (let i = 0; i < uniqueCities.length; i++) {
        uniqueCitiestemp.push(uniqueCities[i]);
      }
      uniqueCities = uniqueCitiestemp;
    }

    getUniqueCities(this.props.participants);

    return (
      <Container fluid>
        <Row>
          <a
            className='participate-btn'
            target='_blank'
            href='https://docs.google.com/forms/d/e/1FAIpQLSchBVuk3J8N3_lcZnCvh12G1PM56qySbVFo5UMB-2wywuUPQQ/viewform'
          >
            <div>
              {'  '}
              <Image src={DocumentIcon} alt='Document Icon' fluid />
              {'  '}
            </div>
            <span className='pl-1 participate-btn-text'> Participate</span>
          </a>
        </Row>
        <Row className='designer-city-banner my-2'>
          <Col>
            <Dropdown>
              <Dropdown.Toggle
                variant='outline-light'
                id='dropdown-basic'
                // className='dropdownButon'
              >
                {city == 'designerdatabase' || city == 'All Cities'
                  ? 'Cities'
                  : city}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {uniqueCities.map((participant) => {
                  return (
                    <div>
                      <Dropdown.Item
                        className='cityDropDownItem'
                        as={Link}
                        to={`/denizendesigner/designerdatabase/${participant}`}
                      >
                        {participant}
                      </Dropdown.Item>
                    </div>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className='cities-banner-graphic'>
            <div>
              {this.state.matches && (
                <div className='cities-banner-graphic-img'>
                  {' '}
                  <Image src={CitiesBannerGraphic} alt='Cities Graphic' fluid />
                </div>
              )}
              {!this.state.matches && (
                <div className='cities-banner-graphic-img'>
                  {' '}
                  <Image
                    src={CitiesBannerGraphicSM}
                    alt='Cities Graphic'
                    fluid
                  />
                </div>
              )}
            </div>
          </Col>
        </Row>
        <div className='mt-3'>{this.renderDesignersIndex(city)}</div>
      </Container>
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
