import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Scroll from 'react-scroll';
import ProcessGraphic from '../../../../../assets/images/reportAssets/process.png';

var Element = Scroll.Element;

class ResearchProcess extends Component {
  render() {
    return (
      <div className='trElement'>
        <Element name='researchProcess' className='pt-3'>
          <h2>Research Process</h2>
        </Element>
        <div className='report-img'>
          {' '}
          <Image src={ProcessGraphic} alt='Process Graphic' fluid />
        </div>
        <p>
          The Denizen Designer Project Survey was sent out to over 100 people
          who identify as using design to engage with various types of
          communities and people. We surveyed respondents from January until
          August of 2020. In order to reach a wide variety of designers, we
          contacted design collectives, organizations, non-profits, and academic
          groups across the United States and Canada. We shared the survey on
          Twitter and Instagram, in addition to reaching out to design
          organizations who then shared it over prominent design list servers
          and Slack channels. The survey was used to gather a variety of
          information on demographics, types of design titles (both official and
          self-prescribed), areas of work, in addition to some more in-depth
          questions about design. These questions helped form a more concrete
          picture of what the designers felt were the issues and limitations of
          design as a whole and when working with academia/communities. In order
          to gain a deeper understanding of the Designers’ backgrounds and the
          work that they do, once they had completed the survey, 33 of the
          Designers were interviewed further. The survey information helped us
          learn a little more about our respondents prior to their interviews
          and also helped us create a series of questions to help guide the
          interviews. The interviews lasted about 45-60 minutes and covered a
          range of topics, but were guided by some standard questions such as:
        </p>
        <ol>
          <p>
            <li> What or who was the introduction to your work? </li>
            <li> What is design to you?How would you define design? </li>
            <li> Do you think people have to understand design to do it? </li>
            <li>
              {' '}
              What is the role of design in the social justice movement?{' '}
            </li>
            <li> What are the key challenges in doing this work?</li>
          </p>
        </ol>
        <p>
          Each interview included several more specific questions related to a
          Designer’s personal work/interests, but these questions were asked in
          order to develop a collective understanding of design and its impact.
          The Designers’ interviews were transcribed using Scribie in order to
          conduct further in-depth analysis. Once transcribed, the Designers’
          responses were all placed in a spreadsheet, analytically memo-ed and
          codified with ATLAS TI. Using the interview spreadsheet, overall
          themes were pulled from each individual Designer’s interview and
          compiled in an affinity diagram. In the affinity diagram 13 overall
          themes were surfaced; Personal investment, Design as a catalyst for
          change, Problem solving/change making, Design is more than profit,
          Mutual learning, Being humble and putting community needs first, Space
          making, Increasing access/Knowledge sharing, Current systems can
          create significant barriers, Listening and acknowledging the
          skills/lived experiences of community members as valid/important, and
          Building Trust. These themes serve to accentuate the importance of
          working in conjunction with community members and genuinely valuing
          their input because it is only through doing so that meaningful work
          can be done. Using these overall themes from the affinity diagram
          expedited and guided the coding done with ATLAS TI, which was used to
          find the frequency of certain topics that appeared in the interviews.
          Affinity diagram themes and related words (community, democratization)
          were used to record the frequency of specific words (and their
          inflected forms) and general sentiments expressed in the interviews.{' '}
        </p>
      </div>
    );
  }
}

export default ResearchProcess;
