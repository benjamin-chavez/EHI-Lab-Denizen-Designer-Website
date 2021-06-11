import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

import Scroll from 'react-scroll';
import SummaryGraphic from '../../../../../assets/images/reportAssets/themes.png';
import BarriersGraphic from '../../../../../assets/images/reportAssets/barriers.jpg';
import PerceptionsGraphic from '../../../../../assets/images/reportAssets/PerceptionsOfDesign.jpg';
import AcademiaGraphic from '../../../../../assets/images/reportAssets/WorkingWithAcademia.jpg';

var Element = Scroll.Element;

class Influence extends Component {
  render() {
    return (
      <div className='trElement'>
        <Element name='summary' className='pt-3'>
          <h2>Summary and Key Findings </h2>

          <p>
            The Denizen Designer Project revealed many insights on how current
            design practitioners view design as a powerful tool to address
            social, economic, and political issues, while also considering the
            challenges one might face when doing community based participatory
            design. The Denizen Designers come from a wide range of professional
            backgrounds ranging from consultants to architects. Despite all the
            varied backgrounds, there were several overarching points that were
            very prevalent throughout all the interviews and in the survey data.{' '}
          </p>
          <p>Insights Identified</p>
          <ol>
            <p>
              <li>Everyone designs </li>
              <li>Understanding power</li>
              <ul>
                <li>
                  Current design practice and institutions can create
                  significant barriers{' '}
                </li>
                <li>Academic’s responsibilities</li>
              </ul>
              <li>Space making</li>
              <ul>
                <li>Community exposure is essential for designers</li>
                <li>Being humble and putting community needs first</li>
                <li>Empowering the community</li>
              </ul>
              <li>Personal investment</li>
              <ul>
                <li>Building trust </li>
                <li>Creating emotional/personal connections to the work</li>
              </ul>
              <li>Increasing access/Knowledge sharing</li>
              <ul>
                <li>Democratizing access to design </li>
                <li>Mutual learning</li>
              </ul>
              <li>Change-making</li>
              <ul>
                <li>Design is more than profit</li>
                <li>Design as a catalyst for change</li>
                <li>Creating lasting change</li>
              </ul>
            </p>
          </ol>

          <div className='report-img'>
            {' '}
            <Image src={SummaryGraphic} alt='Summary Graphic' fluid />
          </div>

          <p className='report-image-title'>
            Frequency of terms appearing in interviews.{' '}
          </p>
          <p>
            These themes revealed a lot about the way that Denizen Designers
            approach their work with communities and their perspectives on how
            to incorporate the ongoing work of community members effectively and
            ethically. The most prevalent theme in both the survey data and
            interviews, was this fundamental belief that everyone can design.
            Many of the Denizen Designers felt that design was something that
            came naturally to people because, “ultimately, design can just be
            defined as observation plus care for something... Attention to
            something” (Claudia Paraschiv). Most people design in some way in
            their everyday lives and don’t realize it because of the way that
            design is talked about both academically and professionally. While
            formal training can provide a helpful foundation, it is not a
            requirement since knowledge can and does come from many sources.
            Often, community members and organizers without official design
            titles or training have valuable insights into their specific needs
            and have been adapting their own solutions to meet these needs.
            While the language and the resources used may be different, the same
            problem-solving intuition can be found across disciplines and
            backgrounds. Thus, formally trained designers can help guide the
            community design process by sharing their own knowledge and
            decentralizing creative input. By actively engaging community
            imagination and innovation there is more possibility to design in
            ways that minimize harm and maximize impact.{' '}
          </p>
          <p>
            Another prevalent topic that came up in the survey and interviews
            was the need for designers to understand/acknowledge the inherent
            power that they possess when working with communities, especially
            minority communities. This self-awareness about personal power is
            particularly important when a designer is working for an
            organization or institution that has misused their power in the
            past. Historically, design practice has not genuinely involved the
            most marginalized and often has contributed to inequity.
            Traditionally, designers and academics are limited by the
            institutions they work for and design systems that were not designed
            to accommodate the needs or interests of marginalized communities.
            Survey responders indicated that racism, sexism, homophobia and/or
            transphobia and classism were barriers to design work (92%, 80%, 73%
            and 93% respectively) which further highlights the challenges that
            Designers faces when during community design work. While Denizen
            Designers do face many challenges, they can shift power imbalances
            by openly sharing knowledge and empowering communities to
            continuously design long after the designer has left.{' '}
          </p>
          <Card className='report-quote mb-3 '>
            <Card.Body>
              <blockquote className='blockquote mb-0'>
                <p className='quote-text'>
                  {' '}
                  “I can’t tell you what you need. I can’t tell a community, I
                  can have an idea on what it is, but when you have the voice,
                  and you go through those steps of the framework, it becomes
                  bigger than you.”{' '}
                </p>
                <footer className='blockquote-footer quote-author text-right'>
                  Anjanette D.H., Detroit{' '}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>

          <p>
            It is through this active effort to make space for community members
            in design decisions, that will allow Denizen Designers to
            successfully advocate and support the communities they work with.
            Whenever possible Denizen Designers should strive to center the
            conversation on the community’s own ideas, work and needs. To
            position the community voice’ as their focus, designers must
            actively listen to what needs are being voiced and prioritize
            meeting those needs first. A flashy design may not be what is most
            beneficial to the community, and designers must divest themselves
            from the attachment to formal design practices that are not
            instigating necessary change. Accessible, diverse design cannot be
            superficial, so the goals of a Denizen Designer must align with the
            goals of the community. In order to do this successfully designers
            must actively listen and acknowledge the skills/lived experiences of
            community members. As Anjanette Davenport Hatter mentioned in her
            interview, “I can’t tell you what you need. I can’t tell a
            community, I can have an idea on what it is, but when you have the
            voice, and you go through those steps of the framework, it becomes
            bigger than you.” Active listening thus becomes critical to
            empowering a community. By attending to a community’s contributions
            and knowledge base, Denizen Designers encourage solutions to be
            created by and for the people who understand their needs best. 
            Communities are rich with ideas, creativity, and passion that can be
            encouraged and cultivated if it is valued. Denizen Designers can
            enable community members to see the power in their own skills and
            ideas and to use them as a resource to implement change. {' '}
          </p>
          <p>
            Doing this does require designers to be humble and set aside some of
            their preconceived ideas about what a community need. However, this
            humility increases not only community empowerment, but also builds
            trust. Many communities often have valid concerns about the
            intentions of designers and academics. It is important for Denizen
            Designers to be as transparent as possible about their projects, how
            community data will be used, and how the project(s) will impact the
            community. This is necessary because trust goes both ways;
            communities must trust academics and designers to advocate for them,
            while designers must also trust in a community’s ability to help
            find solutions. Designers and academics can build up this trust by
            involving community members at every phase of the design process and
            by building relationships that go beyond surface-level community
            involvement. This is a process that takes commitment. Participatory
            design work often goes beyond the traditional design process; it is
            a growth and learning process for communities and designers.
            Designers have as much to learn from the communities they work with,
            as community members shave to learn from them. Participatory design
            dismantles the traditional roles of expert/student and allows
            designers, academics, organizers, and community members to exchange
            their individual expertise to generate ideas together. By going into
            communities, a designer can learn more about their needs while
            sharing their own processes for implementing design to
            problem-solve. Additionally, the participatory design process allows
            designers to ‘reach back’ and play a supportive role in communities,
            taking accountability for their work’s long-lasting impacts.{' '}
          </p>
          <p>
            In the interviews, many of our Denizen Designers mentioned the
            importance of acknowledging the work that community members have
            already been doing. Oftentimes this work is already attempting to
            address the community’s needs, it just needs to be refined by the
            designer. It is often the lack of access to design materials or
            formalized design thinking that limits communities. This statement
            was echoed in the survey because over 80% (83) of survey respondents
            disagreed or strongly disagreed with the statement “I think design
            is accessible to the communities that need it most”. It is usually
            not simply that communities lack these materials or knowledge, but
            also, and more importantly, they have restricted access to spaces
            where design decisions are being made. Designers are in a unique
            position where they have the ear of the institution that they’re
            working for while also being in very close contact with community
            members. This makes designers very powerful potential change makers.
            By holding institutions accountable for how and what they design,
            designers can act as mediators and normalize community involvement
            and participatory design practices. As our interviewee Bryan Lee Jr.
            said, “design offers us over and over and over again, the
            opportunities to see beyond the limitations of our current moment
            and escape into the potential of the next moment.”{' '}
          </p>

          <Card className='report-quote mb-3 '>
            <Card.Body>
              <blockquote className='blockquote mb-0'>
                <p className='quote-text'>
                  {' '}
                  “...social design is a method that produces methods to solve
                  problems”{' '}
                </p>
                <footer className='blockquote-footer quote-author text-right'>
                  Kenneth B., Chicago{' '}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>

          <p>
            The interviews produced a wealth of information as discussed above
            and overall, really emphasized the importance of designers being
            mindfully engaged with the communities they work with. While the
            majority of the interview questions were created to get a more
            in-depth understanding of the survey responses, there was one
            particular question that was strongly influenced by the Deign
            Justice Network. The Design Justice Network has 10 principles that
            they ask their members to follow. These principles work to center
            the voices and experiences of marginalized people/communities. Not
            all the Denizen Designers were familiar with the Design Justice
            Network, but they were all asked to describe three principles that
            they felt guided and informed their work. After compiling all the
            responses and grouping similar ones together, eight principles were
            produced:{' '}
          </p>
          <ol>
            <p>
              <li>Establish trust and be honest </li>
              <li>
                Listen to the community and value their lived experiences.
              </li>
              <li>Be patient and empathic with community members </li>
              <li>
                Be accountable to the community and clear about project
                goals/outcomes{' '}
              </li>
              <li>
                Be willing to adapt/be flexible and challenge any assumptions
                you might have had coming in{' '}
              </li>
              <li>Design with and not for communities </li>
              <li>Be inclusive in all aspects of the design process </li>
              <li>Design is not just a career, but also a lens </li>
            </p>
          </ol>
          <p>
            These principles closely echo the themes and sentiments that the
            Denizen Designers expressed throughout their interviews. These
            principles highlight the importance that designers place on
            centering the work and experiences of community members, while also
            being empathic and supportive.{' '}
          </p>
          <h2>Findings</h2>
          <p>
            Our analysis of the interviews provided us with 13 key insights that
            were broken into 6 major themes.{' '}
          </p>
          <h3>Everyone Designs</h3>

          <Card className='report-quote mb-3 '>
            <Card.Body>
              <blockquote className='blockquote mb-0'>
                <p className='quote-text'>
                  {' '}
                  “The definition of design is so broad that people who might be
                  designing might not even know they’re being designers, but
                  calling yourself an artist versus calling yourself a designer
                  is so subjective and up to each person.”{' '}
                </p>
                <footer className='blockquote-footer quote-author text-right'>
                  Taylor H., New Orleans{' '}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <p>
            Perhaps the most important insight is one reiterated throughout both
            the surveys and the interviews is the acknowledgement that anyone
            can design. Most people have been naturally designing in some way
            and don’t know it. While formal training can provide a helpful
            foundation, knowledge can come from many sources. Often, community
            members and organizers without official design titles or training
            have valuable insights into their specific needs and have been
            adapting their own solutions to meet these needs. While the language
            and the resources used may be different, the same problem-solving
            intuition can be found across disciplines and backgrounds. Thus,
            formally trained designers can help guide the community design
            process by sharing their own knowledge and decentralizing creative
            input. By actively engaging community imagination and innovation
            there is more possibility to design in ways that minimize harm and
            maximize impact.{' '}
          </p>
          <h3>Understanding Power - The Problem </h3>
          <p>
            Power was mentioned 55 times (6 interviewees mentioned power
            dynamics/power structures). Nearly 80% of Designers surveyed (81)
            agreed or strongly agreed that they were willing to work with
            academic institutions to develop relationships to do community-based
            design work. Additionally, the survey responders indicated that
            racism, sexism, homophobia and/or transphobia and classism were
            barriers to design work by most respondents (92%, 80%, 73% and 93%
            respectively).
          </p>
          <p>
            Another reoccurring topic that appeared in the interviews was that
            current design practice and institutions can create significant
            barriers both to entry and for implementation. Historically, design
            practice has not considered the most marginalized and often has
            contributed to inequity. Because designers are often working in
            profit-focused places rather than community-oriented ones, it can be
            challenging to implement change within these existing power
            structures. Traditionally, designers and academics are limited by
            the institutions they work for and design systems that were not
            designed to accommodate the most marginalized. Denizen Designers can
            shift power imbalances by openly sharing knowledge and empowering
            communities to design for themselves. When they can, they strive to
            center the conversation on communities. Individual academics strive
            to involve communities at every phase and find a balance between
            being a facilitator and part of a collective.
          </p>

          <Card className='report-quote mb-3 '>
            <Card.Body>
              <blockquote className='blockquote mb-0'>
                <p className='quote-text'>
                  {' '}
                  “Who gets to be a professional about it? Who gets to have
                  access to that kind of decision-making power, and it’s not the
                  people who should.”{' '}
                </p>
                <footer className='blockquote-footer quote-author text-right'>
                  Ezra K., Oakland{' '}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>

          <h3>Space Making - The Solution</h3>
          <p>
            Community was mentioned 223 times in the interviews which stressed
            that community exposure is essential for designers. Denizen
            Designers take a community-facing approach to design. To position
            the community voice’s as their focus, they must actively listen to
            what needs are being voiced and prioritize meeting those needs
            first. A flashy design may not be what is most beneficial to the
            community, and Designers must divest themselves from the attachment
            to formal design practices that are not instigating necessary
            change. Accessible, diverse design cannot be superficially, so the
            goals of a Denizen Designer must be the goals of the people it was
            designed for.{' '}
          </p>
          <p>
            In conjunction with centering the communities need first, Designers
            mentioned listening 17 times as an essential tool for Designers to
            have. Listening is critical to empowering a community. By
            acknowledging a community’s contributions and knowledge base,
            Denizen Designers encourage solutions created by and for the people
            who understand their needs best. Communities are rich with ideas,
            creativity, and passion that can be encouraged and cultivated if it
            is valued. Denizen Designers can enable community members to see the
            power in their own skills and ideas and to use them as a resource to
            implement change.{' '}
          </p>

          <Card className='report-quote mb-3 '>
            <Card.Body>
              <blockquote className='blockquote mb-0'>
                <p className='quote-text'>
                  {' '}
                  “Design thinking is all about realizing you come with a set of
                  assumptions, and you challenge those assumptions, and you
                  actually let the other person tell you what’s happening.”{' '}
                </p>
                <footer className='blockquote-footer quote-author text-right'>
                  Jenny L, Los Angeles{' '}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>

          <h3>Personal Investment - The Process </h3>
          <p>
            Effective community work cannot happen without first having a
            foundation of trust. Many communities often have valid concerns
            about the intentions of designers and researchers. It is important
            to stay transparent about how their data will be used, the goals of
            a project, and how it will impact them. Denizen Designers can do
            this by involving their end-users at decision stages of their work
            and building relationships beyond surface-level community
            involvement. This trust goes both ways; communities have to have
            faith in the academics and designers, while designers have to have
            faith in a community’s ability to find solutions.{' '}
          </p>
          <p>
            Denizen Designers galvanize communities by getting them invested in
            the issues and problems around them. Many Denizen Designers had
            backgrounds in community organizing. They used the same strategies
            for mobilizing communities and applying them to design solutions.
            This is a process that takes commitment. Participatory design work
            often goes beyond the traditional design process; it is a growth and
            learning process for communities and designers. Designers may attend
            community functions and help with events, building connections that
            extend beyond what is required. The participatory design process
            allows them to ‘reach back’ and play a supportive role in
            communities, taking accountability for their work’s long-lasting
            impacts. The emotional impact of art and design can be used to
            spread messages and increase the visibility of voices that aren’t
            being heard.
          </p>

          <Card className='report-quote mb-3 '>
            <Card.Body>
              <blockquote className='blockquote mb-0'>
                <p className='quote-text'>
                  {' '}
                  “...being able to support their voice, their space, and how
                  you can encourage them to self-manage, and you can encourage
                  them to be active collaborators in research projects that
                  really even excite them...”{' '}
                </p>
                <footer className='blockquote-footer quote-author text-right'>
                  Anushka J., Baltimore{' '}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>

          <h3>Increasing access/Knowledge sharing – The Process </h3>
          <p>
            Access is mentioned 30 times, and designers repeatedly emphasized a
            lack of access to resources in their communities. Two kinds of
            access were discussed: access to design resources and design
            decision making power, as well as equitable access to more general
            resources (e.g. mental health facilities, safe sleep). The unequal
            distribution of resources is often what brings designers into
            communities to problem-solve. Design justice centers around
            identifying and addressing inequity, which often is most easily
            defined when seeing unequal access to resources like healthcare.
            Keeping this in mind, it is important to remember that access is not
            limited to a community’s access to resources outside of a design
            space, but within it as well. Designers often have access to
            resources not available in their communities. Designers with formal
            schooling mentioned their access to fabrication tools and lessons in
            design thinking, things that could help support the creativity of
            communities if they were more widely available.{' '}
          </p>
          <p>
            Additionally, end-users often do not even have access to the spaces
            where design decisions are being made, and the consequences of this
            are more critical when the designs have social impacts. Over 80%
            (83) of respondents disagreed or strongly disagreed with the
            statement “I think design is accessible to the communities that need
            it most”. Often, the Designer’s role is to use their expertise to
            create solutions people would not otherwise think of. While you’re
            designing, make sure you’re actively involving the community with
            decisions and giving the community tools to work with.
          </p>
          <p>
            Designers have as much to learn from the communities they work with
            as people have to learn from them. Participatory design dismantles
            the traditional roles of expert/student and allows designers,
            researchers, organizers, and community members to exchange their
            individual expertise to generate ideas together. By going into
            communities, a designer can learn more about their needs while
            sharing their own processes for implementing design to
            problem-solve.{' '}
          </p>

          <Card className='report-quote mb-3 '>
            <Card.Body>
              <blockquote className='blockquote mb-0'>
                <p className='quote-text'>
                  {' '}
                  “Our job is to be translators and to communicate and then
                  translate what we learn. We have to build relationships first
                  and create spaces for that relationship, building that up.”{' '}
                </p>
                <footer className='blockquote-footer quote-author text-right'>
                  N’Deye D., Baltimore{' '}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>

          <h3>Change Making - The Outcome </h3>
          <p>
            Design is more than money. Design work takes money and funding, but
            it doesn’t stop there. The way a building, webpage, or product is
            designed has lasting impacts. Designers have to consider the
            outcomes of their work beyond commercial interests in order to
            address problems.
          </p>
          <p>
            A very prevalent point that came up repeatedly throughout all the
            interviews was that design is a catalyst for change. Change was
            mentioned 81 times in the interviews. Designers have incredible
            potential as change-makers. By holding their own institutions
            accountable for how and what they design, designers can act as
            mediators between companies expanding their businesses and user
            bases. By doing this they can instigate change in communities and in
            their workplace, normalizing the validation of community involvement
            and participatory design practice.{' '}
          </p>
          <p>
            Denizen Designers are a part of an ongoing process of identifying
            and addressing community needs. By working closely with community
            members, they ensure that community members have the tools to
            continue developing ideas and creating solutions even after the
            designer is gone. To ensure this happens, a designer must be
            conscious of their projects’ longevity and impact, taking the time
            to think through the projected outcomes. The first solution may not
            be the best, so they must allow time for ideas to be thoughtfully
            considered. Change-making is a collaborative process. Having the
            input of many disciplines can go a long way towards ensuring
            solutions are comprehensive and designed to make systemic changes.{' '}
          </p>

          <Card className='report-quote mb-3 '>
            <Card.Body>
              <blockquote className='blockquote mb-0'>
                <p className='quote-text'>
                  {' '}
                  “I think that’s what design offers us over and over and over
                  again, the opportunities to see beyond the limitations of our
                  current moment and escape into the potential of the next
                  moment.”{' '}
                </p>
                <footer className='blockquote-footer quote-author text-right'>
                  Bryan L. Jr., New Orleans{' '}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>

          <h3>Survey Responses</h3>
          <p>
            The survey questions and responses were instrumental in creating the
            interview questions and provided a general overview on how the
            Denizen Designers felt on certain topics. These findings indicated
            that while Designers believed that design thinking and learning can
            be inclusive and accessible, there are many barriers that limit the
            extent of accessibly and inclusivity.{' '}
          </p>
          <p>
            In addition to collecting the previously mentioned demographic
            questions, we also asked some questions on how accessible the
            designers felt design was. These findings indicated that while
            designers believed that design thinking and learning can be
            inclusive and accessible, there are many barriers that limit the
            extent of accessibility and inclusivity. For example, 97 of
            designers feel that “racism or racial prejudices are a barrier for
            many interested in learning or doing design” and 98 designers also
            feel that “classism is a barrier for many interested in learning or
            doing design.”{' '}
          </p>
          <div className='report-img'>
            {' '}
            <Image
              src={BarriersGraphic}
              alt='Barriers To Design Graphic'
              fluid
            />
          </div>
          <div className='report-img'>
            {' '}
            <Image
              src={PerceptionsGraphic}
              alt='Perceptions of Design Graphic'
              fluid
            />
          </div>
          <div className='report-img'>
            {' '}
            <Image
              src={AcademiaGraphic}
              alt='Working with Academia Graphic'
              fluid
            />
          </div>
        </Element>
      </div>
    );
  }
}

export default Influence;
