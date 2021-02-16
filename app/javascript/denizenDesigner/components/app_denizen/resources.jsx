import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

// import ArticleLinkIcon from '../../../../assets/images/article-link-icon.svg';
// import ArticlCardImage from '../../../../assets/images/Aricle-card-image.svg';
// import resourcesImage1 from '../../../../assets/images/resourcesImage1.png';

class Resources extends Component {
  render() {
    if (!this.props) {
      return <p>Loading...</p>;
    }

    return (
      <div className='resourcesPage pb-3'>
        <Row className='mb-4'>
          <Col sm={12}>
            <Card className='resourceCard card1'>
              <Card.Body className='px-5 pt-4'>
                <Row>
                  <Col sm={12} md={7} className='mb-4'>
                    <p className='title mb-2'>The Denizen Designer Zine</p>
                    <span className='bodyText '>
                      The DD Zine distills the information from the report in a
                      way that makes it portable and easily sharable. The zine
                      illustrates what socially driven, community-based design
                      is and how it can be used in order to encourage people to
                      consider the relevance of design in community projects.
                    </span>
                    <Link className='cardLink mt-2'>Download</Link>
                  </Col>
                  <Col sm={12} md={5} className='mb-4'>
                    <p className='title mb-2'>
                      Design for social good in higher education
                    </p>
                    <span className='bodyText '>
                      Although there are 406 “design schools” in the United
                      States, there are only 6 universities that offer programs
                      with a focus on design-for-social-good/participatory
                      design. Denizen Designers often noted that there was a
                      lack of exposure to PD in both higher education and in the
                      work force.{' '}
                    </span>
                    <Link className='cardLink mt-2'>Visit</Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col sm={12}>
            <Card className='resourceCard card2'>
              <Card.Body className='px-5 pt-4'>
                <Row>
                  <Col sm={12} md={7} className='mb-4'>
                    <p className='title mb-2'>
                      Guide to understanding PD (Participatory Design){' '}
                    </p>
                    <span className='bodyText '>
                      Participatory design can be traced back to the ‘70s, where
                      it was coined in Scandinavia after the rise of workplace
                      democracy and unionization. It was inherently political
                      and challenged historical systems of power through open
                      dialogue and democratized input. It has since been adopted
                      by designers worldwide who take a collaborative approach
                      to design and has shaped various theories.
                    </span>
                    <Link className='cardLink mt-2'>Visit</Link>
                  </Col>
                  <Col sm={12} md={5} className='mb-4'>
                    <p className='title mb-2'>Design Justice</p>
                    <span className='bodyText '>
                      Design justice focuses explicitly on how design reproduces
                      and/or challenges the matrix of domination (Patricia Hill
                      Collins): white supremacy, heteropatriarchy, capitalism,
                      ableism, settler colonialism, and other forms of
                      structural inequality.{' '}
                    </span>
                    <Link className='cardLink mt-2'>Visit</Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Resources;
