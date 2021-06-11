import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

// import ArticleLinkIcon from '../../../../assets/images/article-link-icon.svg';
// import ArticlCardImage from '../../../../assets/images/Aricle-card-image.svg';
// import resourcesImage1 from '../../../../assets/images/resourcesImage1.png';
import ResourcesThumbnail from '../../../../assets/images/resources-thumbnail.png';

import Fade from 'react-reveal/Fade';

class Resources extends Component {
  render() {
    if (!this.props) {
      return <p>Loading...</p>;
    }

    return (
      <div className='resourcesPage pb-3'>
        <Row className='mb-4'>
          <Col sm={12}>
            <Fade bottom duration={1500} delay={200} count={1}>
              <Card className='resourceCard card1'>
                <Card.Body className='pt-4'>
                  <Row>
                    <Col sm={12} md={7} className='mb-4'>
                      <p className='title mb-2'>The Denizen Designer Zine</p>
                      <span className='bodyText '>
                        The DD Zine distills the information from the report in
                        a way that makes it portable and easily sharable. The
                        zine illustrates what socially driven, community-based
                        design is and how it can be used in order to encourage
                        people to consider the relevance of design in community
                        projects.
                      </span>
                      <Link
                        className='cardLink mt-2'
                        to='/files/Denizen Designer Zine.pdf'
                        target='_blank'
                        download
                      >
                        Download
                      </Link>
                    </Col>
                    <Col sm={12} md={5} className='mb-4'>
                      <p className='title mb-2'>
                        Design for social good in higher education
                      </p>
                      <span className='bodyText'>
                        Although there are 406 “design schools” in the United
                        States, there are only 6 universities that offer
                        programs with a focus on
                        design-for-social-good/participatory design. Denizen
                        Designers often noted that there was a lack of exposure
                        to PD in both higher education and in the work force.{' '}
                      </span>
                      <a
                        href='https://www.mica.edu/'
                        target='_blank'
                        className='cardLink mt-2'
                      >
                        Maryland Institute College of Art (MICA)
                      </a>
                      <a
                        href='https://productsofdesign.sva.edu/blog/what-is-design-for-social-impact#:~:text=Design%20for%20social%20impact%20is,disenfranchised%20or%20marginalized%20by%20design'
                        target='_blank'
                        className='cardLink mt-2'
                      >
                        Design for social impact
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col sm={12}>
            <Fade bottom duration={1500} delay={1200} count={1}>
              <Card className='resourceCard card2'>
                <Card.Body className='pt-4'>
                  <Row>
                    <Col sm={12} md={7} className='mb-4'>
                      <p className='title mb-2'>
                        Guide to understanding PD (Participatory Design){' '}
                      </p>
                      <span className='bodyText '>
                        Participatory design can be traced back to the ‘70s,
                        where it was coined in Scandinavia after the rise of
                        workplace democracy and unionization. It was inherently
                        political and challenged historical systems of power
                        through open dialogue and democratized input. It has
                        since been adopted by designers worldwide who take a
                        collaborative approach to design and has shaped various
                        theories.
                      </span>
                      <a
                        href='http://kateferguson.org/documents/Participatory-Design-Handbook.pdf'
                        target='_blank'
                        className='cardLink mt-2'
                      >
                        Visit
                      </a>
                    </Col>
                    <Col sm={12} md={5} className='mb-4'>
                      <p className='title mb-2'>Design Justice</p>
                      <span className='bodyText '>
                        Design justice focuses explicitly on how design
                        reproduces and/or challenges the matrix of domination
                        (Patricia Hill Collins): white supremacy,
                        heteropatriarchy, capitalism, ableism, settler
                        colonialism, and other forms of structural inequality.{' '}
                      </span>
                      <a
                        className='cardLink mt-2'
                        href='https://www.dropbox.com/s/m975ykjhi8x92dl/DESIGN%2BJUSTICE%2BZINE_ISS'
                        target='_blank'
                      >
                        Visit
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        </Row>
        <Container fluid>
          <Fade bottom duration={1500} delay={2200} count={1}>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                className='resource-ext-link mb-3'
              >
                <Card className='resource-ext-card'>
                  <Card.Body>
                    <Row className='resource-card-row'>
                      <Col xs={2} className='resource-card-col2'>
                        <Image src={ResourcesThumbnail}></Image>
                      </Col>
                      <Col xs={10} className='card-resource-text '>
                        <a
                          target='_blank'
                          href='https://floxstudio.com/resources'
                        >
                          Flox Studio Resources
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                className='resource-ext-link mb-3'
              >
                <Card className='resource-ext-card'>
                  <Card.Body>
                    <Row className='resource-card-row'>
                      <Col xs={2} className='resource-card-col2'>
                        <Image src={ResourcesThumbnail}></Image>
                      </Col>
                      <Col xs={10} className='card-resource-text '>
                        <a
                          target='_blank'
                          href='https://www.aiga.org/designforgood-get-involved '
                        >
                          AIGA - Design For Good
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                className='resource-ext-link mb-3'
              >
                <Card className='resource-ext-card'>
                  <Card.Body>
                    <Row className='resource-card-row'>
                      <Col xs={2} className='resource-card-col2'>
                        <Image src={ResourcesThumbnail}></Image>
                      </Col>
                      <Col xs={10} className='card-resource-text '>
                        <a
                          target='_blank'
                          href='https://www.communitydesign.org'
                        >
                          Association For Community Design
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                className='resource-ext-link mb-3'
              >
                <Card className='resource-ext-card'>
                  <Card.Body>
                    <Row className='resource-card-row'>
                      <Col xs={2} className='resource-card-col2'>
                        <Image src={ResourcesThumbnail}></Image>
                      </Col>
                      <Col xs={10} className='card-resource-text '>
                        <a
                          target='_blank'
                          href='https://www.publicinterestdesign.com/   '
                        >
                          Public Interest Design
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                className='resource-ext-link mb-3'
              >
                <Card className='resource-ext-card'>
                  <Card.Body>
                    <Row className='resource-card-row'>
                      <Col xs={2} className='resource-card-col2'>
                        <Image src={ResourcesThumbnail}></Image>
                      </Col>
                      <Col xs={10} className='card-resource-text '>
                        <a
                          target='_blank'
                          href='https://www.creativereactionlab.com   '
                        >
                          Creative Reaction Lab
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                className='resource-ext-link mb-3'
              >
                <Card className='resource-ext-card'>
                  <Card.Body>
                    <Row className='resource-card-row'>
                      <Col xs={2} className='resource-card-col2'>
                        <Image src={ResourcesThumbnail}></Image>
                      </Col>
                      <Col xs={10} className='card-resource-text'>
                        <a target='_blank' href='https://colloqate.org/'>
                          Colloqate
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                className='resource-ext-link mb-3'
              >
                <Card className='resource-ext-card'>
                  <Card.Body>
                    <Row className='resource-card-row'>
                      <Col xs={2} className='resource-card-col2'>
                        <Image src={ResourcesThumbnail}></Image>
                      </Col>
                      <Col xs={10} className='card-resource-text '>
                        <a target='_blank' href='https://www.arts.gov/'>
                          National Endowment For The Arts
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                className='resource-ext-link mb-3'
              >
                <Card className='resource-ext-card'>
                  <Card.Body>
                    <Row className='resource-card-row'>
                      <Col xs={2} className='resource-card-col2'>
                        <Image src={ResourcesThumbnail}></Image>
                      </Col>
                      <Col xs={10} className='card-resource-text '>
                        <a
                          target='_blank'
                          href='https://lbodre.ideo.com/about.html'
                        >
                          The Little Book For Design Research Ethics
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                className='resource-ext-link mb-3'
              >
                <Card className='resource-ext-card'>
                  <Card.Body>
                    <Row className='resource-card-row'>
                      <Col xs={2} className='resource-card-col2'>
                        <Image src={ResourcesThumbnail}></Image>
                      </Col>
                      <Col xs={10} className='card-resource-text '>
                        <a target='_blank' href='https://www.kounkuey.org/ '>
                          Kounkuey Design Initiative
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                md={0}
                lg={4}
                className='resource-ext-link mb-3 empty-card'
              ></Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                className='resource-ext-link mb-3'
              >
                <Card className='resource-ext-card'>
                  <Card.Body>
                    <Row className='resource-card-row'>
                      <Col xs={2} className='resource-card-col2'>
                        <Image src={ResourcesThumbnail}></Image>
                      </Col>
                      <Col xs={10} className='card-resource-text '>
                        <a target='_blank' href='https://www.blackspace.org/'>
                          Blackspace
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    );
  }
}

export default Resources;

// <ul className='resources-list'>
//           <li className='m-1'>
//             {/* <a
//               className='ext-resource-link px-2 py-1'
//               target='_blank'
//               href='https://floxstudio.com/resources'
//             > */}
//             Flox Studio Resources
//             {/* </a> */}
//           </li>
//           <li className='m-1'>
//             <a
//               className='ext-resource-link'
//               target='_blank'
//               href='https://www.aiga.org/designforgood-get-involved '
//             >
//               AIGA - Design for good
//             </a>
//           </li>
//           <li className='m-1'>
//             <a
//               className='ext-resource-link'
//               target='_blank'
//               href='https://www.communitydesign.org'
//             >
//               Association for community design
//             </a>
//           </li>
//           <li className='m-1'>
//             <a
//               className='ext-resource-link'
//               target='_blank'
//               href='https://www.publicinterestdesign.com/ '
//             >
//               Public Interest Design
//             </a>
//           </li>
//           <li className='m-1'>
//             <a
//               className='ext-resource-link'
//               target='_blank'
//               href='https://www.creativereactionlab.com '
//             >
//               Creative Reaction Lab
//             </a>
//           </li>
//           <li className='m-1'>
//             <a
//               className='ext-resource-link'
//               target='_blank'
//               href='https://colloqate.org/ '
//             >
//               Colloqate
//             </a>
//           </li>
//           <li className='m-1'>
//             <a
//               className='ext-resource-link'
//               target='_blank'
//               href='https://www.arts.gov/ '
//             >
//               National Endowment For the arts
//             </a>
//           </li>
//           <li className='m-1'>
//             <a
//               className='ext-resource-link'
//               target='_blank'
//               href='https://lbodre.ideo.com/about.html '
//             >
//               The Little Book For Design Research Ethics
//             </a>
//           </li>
//           <li className='m-1'>
//             <a
//               className='ext-resource-link'
//               target='_blank'
//               href='https://www.kounkuey.org/'
//             >
//               Kounkuey Design Initiative
//             </a>
//           </li>
//           <li className='m-1'>
//             <a
//               className='ext-resource-link'
//               target='_blank'
//               href='https://www.blackspace.org/ '
//             >
//               Blackspace
//             </a>
//           </li>
//         </ul>
