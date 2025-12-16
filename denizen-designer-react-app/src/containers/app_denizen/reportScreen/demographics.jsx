// See reportMain component for base component

import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Tab,
  TabContainer,
  TabContent,
  TabPane,
  Nav,
  Tabs,
  Card,
} from 'react-bootstrap';

import RaceChart from './raceChart';
import GenderChart from './genderChart';
import EnviSectChart from './enviSectChart';
import Scroll from 'react-scroll';

import educationImg from '../../../assets/images/reportAssets/charts/education.svg';
import geographicImg from '../../../assets/images/reportAssets/charts/GEOGRAPHICSPREAD.svg';
import issuesImg from '../../../assets/images/reportAssets/charts/ISSUESADDRESSED.svg';
import rolesImg from '../../../assets/images/reportAssets/charts/Roles&DesignBackground.svg';
import designEmployment from '../../../assets/images/reportAssets/charts/DesignEmployment.svg';

var Element = Scroll.Element;

class Demographics extends Component {
  render() {
    return (
      <div className='trElement'>
        <Element name='demographics' className='pt-3'>
          <h2>Demographics of the Denizen Designers</h2>

          <Tab.Container id='' defaultActiveKey='gender'>
            <Tab.Content className='reportChartGraphModule report-img'>
              <Tab.Pane eventKey='race'>
                <RaceChart legendPosition='bottom' />
              </Tab.Pane>
              <Tab.Pane eventKey='gender'>
                <GenderChart legendPosition='bottom' />
              </Tab.Pane>
              <Tab.Pane eventKey='education'>
                <div className='report-img'>
                  <Image
                    src={educationImg}
                    className=''
                    alt='Education Graphic'
                    fluid
                  />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey='envisec'>
                <EnviSectChart legendPosition='bottom' />
              </Tab.Pane>
              <Tab.Pane eventKey='geography'>
                <div className='report-img'>
                  <Image
                    src={geographicImg}
                    className=''
                    alt='Geographic Graphic'
                    fluid
                  />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey='issues'>
                <div className='report-img'>
                  <Image
                    src={issuesImg}
                    className=''
                    alt='Education Graphic'
                    fluid
                  />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey='roles'>
                <div className='report-img'>
                  <Image
                    src={rolesImg}
                    className=''
                    alt='Education Graphic'
                    fluid
                  />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey='designEmp'>
                <div className='report-img'>
                  <Image
                    src={designEmployment}
                    className=''
                    alt='Education Graphic'
                    fluid
                  />
                </div>
              </Tab.Pane>
            </Tab.Content>
            <Row className=''>
              <Col>
                <Nav fill variant='pills' className='list-inline '>
                  <Nav.Item className='report-chart-category mb-2'>
                    <Nav.Link eventKey='gender'>Gender</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='report-chart-category mb-2'>
                    <Nav.Link eventKey='race'>Race</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='report-chart-category mb-2'>
                    <Nav.Link eventKey='education'>Education</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='report-chart-category mb-2'>
                    <Nav.Link eventKey='envisec'>
                      Environment & Sectors
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='report-chart-category mb-2'>
                    <Nav.Link eventKey='geography'>Geographic Spread</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='report-chart-category mb-2'>
                    <Nav.Link eventKey='issues'>Issues Addressed</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='report-chart-category mb-2'>
                    <Nav.Link eventKey='roles'>
                      Roles and Design Background
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='report-chart-category mb-2'>
                    <Nav.Link eventKey='designEmp'>Design Employment</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Tab.Content>
              <Tab.Pane eventKey='gender'>
                <Card className='my-4 report-chart-card'>
                  <Card.Body>
                    <Row className='report-chart-text'>
                      <Col>
                        <Card.Title className='title'>
                          Race and Gender
                        </Card.Title>
                        <Card.Text className='text-body'>
                          According to the{' '}
                          <a
                            target='_blank'
                            href='https://designcensus2019.aiga.org/'
                          >
                            Design Census
                          </a>{' '}
                          that AIGA (American Institute of Graphic Arts) and
                          Google conducted in 2019, 61% of designers identify as
                          female, 36% as male, and 1.4% as non-binary/gender
                          nonconforming/genderfluid. While the rather sizable
                          percentage of women in the design field does subvert
                          the general expectations of design being a male
                          dominated field, the overwhelming majority of
                          designers are white/Caucasian at 71%. The next largest
                          category is Asian at 36%, Latinx at 8%, multiracial at
                          5%, Black/African American at 3%, and Native
                          American/First Nations/First People making up less
                          than 1% of designers. When compared to our survey
                          results there is a large shift in the demographics of
                          people surveyed and interviewed. Of the 105
                          respondents surveyed, 66.7% of our Designers
                          identified as female, 25.7% as male, 6.7% as
                          non-binary, 3.8% as gender nonconforming, 1% as trans
                          men, 1% as genderqueer and 1% as 2-spirited. The
                          racial demographics of the Denizen Designers was just
                          as diverse with 32.8% identifying as Black/African
                          American, 24.4% Asian, 23.7% White, 6.9% Hispanic,
                          2.3% Middle Eastern/Arab, 2.3% American Indian/Alaskan
                          origin and 1.5% Caribbean or West Indian. This
                          dramatic increase in the amount of diversity, in both
                          race and gender identity, allowed for the Denizen
                          Designer Project to learn more about the perspectives
                          and challenges that generally underrepresented people
                          have identified or seen within the design field.
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey='race'>
                <Card className='my-4 report-chart-card'>
                  <Card.Body>
                    <Row className='report-chart-text'>
                      <Col>
                        <Card.Title className='title'>
                          Race and Gender
                        </Card.Title>
                        <Card.Text className='text-body'>
                          According to the{' '}
                          <a
                            target='_blank'
                            href='https://designcensus2019.aiga.org/'
                          >
                            Design Census
                          </a>{' '}
                          that AIGA (American Institute of Graphic Arts) and
                          Google conducted in 2019, 61% of designers identify as
                          female, 36% as male, and 1.4% as non-binary/gender
                          nonconforming/genderfluid. While the rather sizable
                          percentage of women in the design field does subvert
                          the general expectations of design being a male
                          dominated field, the overwhelming majority of
                          designers are white/Caucasian at 71%. The next largest
                          category is Asian at 36%, Latinx at 8%, multiracial at
                          5%, Black/African American at 3%, and Native
                          American/First Nations/First People making up less
                          than 1% of designers. When compared to our survey
                          results there is a large shift in the demographics of
                          people surveyed and interviewed. Of the 105
                          respondents surveyed, 66.7% of our Designers
                          identified as female, 25.7% as male, 6.7% as
                          non-binary, 3.8% as gender nonconforming, 1% as trans
                          men, 1% as genderqueer and 1% as 2-spirited. The
                          racial demographics of the Denizen Designers was just
                          as diverse with 32.8% identifying as Black/African
                          American, 24.4% Asian, 23.7% White, 6.9% Hispanic,
                          2.3% Middle Eastern/Arab, 2.3% American Indian/Alaskan
                          origin and 1.5% Caribbean or West Indian. This
                          dramatic increase in the amount of diversity, in both
                          race and gender identity, allowed for the Denizen
                          Designer Project to learn more about the perspectives
                          and challenges that generally underrepresented people
                          have identified or seen within the design field.
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              {/* EDUCATION PANE */}
              <Tab.Pane eventKey='education'>
                <Card className='my-4 report-chart-card'>
                  <Card.Body>
                    <Row className='report-chart-text'>
                      <Col>
                        <Card.Title className='title'>Education</Card.Title>
                        <Card.Text className='text-body'>
                          The majority of our Designers completed some form of
                          formal education; over half had completed a Master’s
                          degree and 60% (63 designers) held degrees from design
                          or architecture schools. Only 8.6% of Designers did
                          not have a formal design education. These findings
                          indicate that while Denizen Designers come from many
                          places, their academic backgrounds are often rooted in
                          formal design education.
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/* ENVIRONMENT AND SECTORS PANE */}
              <Tab.Pane eventKey='envisec'>
                <Card className='my-4 report-chart-card'>
                  <Card.Body>
                    <Row className='report-chart-text'>
                      <Col>
                        <Card.Title className='title'>
                          Environment And Sectors
                        </Card.Title>
                        <Card.Text className='text-body'>
                          The majority of the Denizen Designers favored urban
                          work settings. Of the 105 Designers surveyed, 79 of
                          them (75.2%) work in urban settings, 22 Designers
                          (21%) work in both urban and rural settings, which
                          indicates that Denizen Designers position themselves
                          in workspaces whose goals align with their own values
                          and concerns. Our Denizen Designers work in a variety
                          of settings, the largest being the non-profit sector
                          (58.1%). Here we saw overlaps between sectors where
                          Designers worked, underscoring the versatility of
                          Denizen Designers’ work. While the non-profit sector
                          has been historically one of the best places to
                          support participatory design work, the almost equal
                          percentages of Designers working in
                          for-profit/industry, academic/university and
                          independent consulting are suggestive of participatory
                          design’s increased adaptability in various settings.
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/*GEOGRAPHIC SPREAD  PANE */}
              <Tab.Pane eventKey='geography'>
                <Card className='my-4 report-chart-card'>
                  <Card.Body>
                    <Row className='report-chart-text'>
                      <Col>
                        <Card.Title className='title'>
                          Geographic Spread
                        </Card.Title>
                        <Card.Text className='text-body'>
                          {' '}
                          The Denizen Designer Project survey was primarily sent
                          to Designers who live in the United States, with some
                          respondents coming from other parts of the world. All
                          geographic parts of the United States were
                          represented, with the Midwest containing the largest
                          concentration of Designers (34 Designers), followed by
                          21 Designers from the Mid- Atlantic region. This
                          strong presence of Midwestern Designers provides an
                          interesting preceptive given that there are generally
                          larger concentrations of designers on the West and
                          East coasts. With the increase of technology hubs
                          outside of coastal cities, these results suggest the
                          importance of designers in all regions utilizing
                          participatory design methods. While the Denizen
                          Designer Project is primarily focused on North
                          America, the inclusion of the 3 Designers (2.9%) from
                          other parts of the world demonstrates how
                          participatory design is not a method solely limited to
                          North America.
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/*ISSUES ADDRESSED  PANE */}
              <Tab.Pane eventKey='issues'>
                <Card className='my-4 report-chart-card'>
                  <Card.Body>
                    <Row className='report-chart-text'>
                      <Col>
                        <Card.Title className='title'>
                          Issues Addressed
                        </Card.Title>
                        <Card.Text className='text-body'>
                          {' '}
                          Our Designers work in a variety of settings addressing
                          a wide variety of social, political, socio-economic,
                          and cultural issues. There is often overlap in the
                          types of issues that the Designers work to address,
                          and the largest category was racial equity, with 74.8%
                          of Designers working to address it. This was followed
                          by civic engagement and education with 50.8% and 49.5%
                          of Designers working in these areas, respectively.
                          This overlap in work topics is because many of these
                          social, political, socio-economic, and cultural issues
                          are deeply interrelated. This interrelatedness
                          highlights the importance and adaptability of design
                          thinking and participatory design when addressing a
                          variety of challenges.
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/*ROLES & BACKGROUN IN DESIGN  PANE */}
              <Tab.Pane eventKey='roles'>
                <Card className='my-4 report-chart-card'>
                  <Card.Body>
                    <Row className='report-chart-text'>
                      <Col>
                        <Card.Title className='title'>
                          Roles And Background In Design
                        </Card.Title>
                        <Card.Text className='text-body'>
                          {' '}
                          Although most survey respondents considered themselves
                          designers (83%), many respondents also felt that their
                          roles overlapped with one or more titles. The second
                          largest role was facilitator (62.7%) followed by
                          researcher (50%). These results highlight the
                          difficulty of identifying or describing one’s work as
                          a single category, especially given that design work
                          often requires a person to wear multiple hats and
                          adapt to diverse needs. Additionally, many of the
                          Designers became exposed to design work and classes in
                          college or through a design fellowship, indicating
                          that education is a prevalent barrier to design
                          knowledge. 
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/*  PANE */}
              <Tab.Pane eventKey='designEmp'>
                <Card className='my-4 report-chart-card'>
                  <Card.Body>
                    <Row className='report-chart-text'>
                      <Col>
                        <Card.Title className='title'>
                          Design Employment
                        </Card.Title>
                        <Card.Text className='text-body'>
                          {' '}
                          The majority (92.4%) of the Denizen Designers have
                          been formally employed for design work, with 76.2% of
                          Designers being currently employed for design work.
                          The most common type of design work was consulting and
                          freelancing (63.9%) followed by non- profit/community
                          organization (42.3%). These findings indicate that
                          while designers worked in a variety of settings, the
                          most common settings for design work were places that
                          are typically people-facing.
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>

          {/* ********************************************************** */}
          <h3>Influence and access of design</h3>
          <p>
            One of the main research goals of the Denizen Designer Project was
            to examine the perceptions of access to design; and it is clear from
            both the survey results and the interviews that there are several
            barriers to learning about design, in particular
            design-for-social-good and participatory design (PD). In the US
            there are only six universities that offer design programs with a
            focus in design-for-social-good or participatory design. Due to the
            small number of university programs focusing on PD, the chances of
            people, both inside and outside of the design field, learning about
            how to conduct participatory design is limited. This supports the
            results from the interviews where many of the Designers mentioned
            that they learned more about what participatory design is and how to
            conduct it from other designers in the field already using PD
            methods, than from schools (unless they were at one of the
            design-for-social-good focused schools).
          </p>
          <p>
            Despite the limited amount academic programs focusing on
            design-for-social-good/participatory design, there are several
            global design firms such as IDEO and Frog Design which have
            divisions or sister organizations devoted to social impact. In
            addition to these established firms there are also several smaller
            non/for-profit organizations who work on “design for social good,”
            “AI for social good” and “tech for social good.” According to Fast
            Forward, a company that “mobilizes the funding, resources, and
            support tech nonprofits need to create positive impact at scale,”
            there are 248 tech companies in the United States whose missions are
            to promote social impact. Of these organizations there are 55 that
            are specifically purpose-driven creative organizations. The creative
            focus of these organizations varies, but 16 of them are agencies or
            consultants, 10 focus on branding/advertising and 3 focus on public
            relations. Although these creative organizations do a variety of
            work, there is a strong focus on creating design that is marketable.
            Of course, having a highly consumable and accessible campaign or
            project is an important part of ensuring that community work is
            successful, but this can also be seen as a way that
            design-for-social-good is being capitalized on by companies. A 2019
            UK survey identified 490 for-profit ‘tech for social good’
            companies, and 464 non-profits. Of these non-profits, 53% were
            founded after 2014, and 17% after 2017, compared to 10% for all
            non-profits, which total over 22,000 organizations. Growth in the
            for-profit ‘tech for social good’ sector, however, has stalled since
            2015, which is attributed to increasingly impatient profit-driven
            venture capital.{' '}
          </p>
          <p>
            While it is not always the case, the methods that some organizations
            use when interacting with communities can feel superficial and
            performative to the communities they are working with. That is not
            to say that the work and resources these organizations provide
            communities are useless, but rather they are not as effective
            because the organizations are not genuinely involved. What
            differentiates true participatory design from the methods that a lot
            of tech companies use, is the direct and authentic involvement of
            designers in the communities. As we saw in our research, when
            Designers are directly involved in the communities they are working
            with, the Designers feel like they are having a more direct,
            positive, and effective impact. Additionally, Designers often
            received enthusiastic and appreciative feedback from their
            communities when the communities felt that they were being genuinely
            invested in. Given that communities have historically been under
            appreciated for their insights and involvement, it is understandable
            why there is often a lack of trust. This distrust is a rocky
            foundation to build upon, so as one interviewee mentioned, “We have
            to move at the speed of trust, don't just try to impose a design or
            an idea onto people, let it marinate with folks. Listen before you
            design” (Nichlos). When designers approach community engagement as
            simply a box to check in the design process and are not willing to
            genuinely consider community input, it deepens feelings of distrust.
            This fixed mindset some designers have when engaging with
            communities with is important to critique because a reoccurring
            theme in the interviews was that people naturally design. While
            everyone has the ability to design, not everyone had the ability to
            have their work recognized as legitimate design. By professional
            designers acknowledging and valuing the intrinsic way of communities
            problem solve through design there is a greater chance of building
            trust, which in turn promotes more effective and long-lasting
            change.{' '}
          </p>
        </Element>
      </div>
    );
  }
}

export default Demographics;
