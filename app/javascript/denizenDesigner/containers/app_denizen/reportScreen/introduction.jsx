import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Scroll from 'react-scroll';

var Element = Scroll.Element;

class Introduction extends Component {
  render() {
    return (
      <div className='trElement'>
        <Element name='introduction' className='pt-3'>
          <h2>Introduction</h2>
          <p>
            Participatory design can be traced back to the ‘70s, where it was
            coined in Scandinavia after the rise of workplace democracy and
            unionization. It was inherently political, and the changing
            workspaces invited a change in design practice that challenged
            historical systems of power through open dialogue and democratized
            input. Designers sided with the workers as the future users of their
            solutions. This cooperation between unions and employers resulted in
            legislation like the Worker Protection and Working Environment Act
            and better negotiation and representation for Scandinavian workers
            (Gregory, 2003). These ideas have since been adopted by designers
            worldwide who take a collaborative approach to design, and various
            theories share the roots and principles of participatory design,
            including co-design, community-based participatory research (CBPR)
            and participatory action design/research (PAR). While the approaches
            and theories behind these design and research methods vary, these
            concepts share the common threads of repositioning designers within
            communities as participants. Rather than taking the role of expert
            telling communities what they need, partitioners of participatory
            design and Denizen Designers work closely with communities to
            identify their needs and build collaborative design solutions.
            Although participatory design has increasingly become more of a
            widely used design method, there are still groups and communities
            that are left behind. These communities can be left behind for a
            variety of reasons ranging from being hard to access, previous
            research/work having been done with the community, or simply being a
            perceived as not worth the time/energy investment. While not common,
            these limiting attitudes around participatory design not only
            prevent collaborate work between designers and researchers but can
            also stain relationships and trust. Therefore, it becomes imperative
            for the design community to consider several critical topics. The
            first is how are we [both as a design community and as individual
            designers] determining which communities to do participatory design
            with? Secondly how can in-depth or correct participatory design be
            better advocated for? Lastly how can we rebuild lost or broken
            community trust through participatory design.
          </p>
        </Element>

        <h3>Why the Denizen Designer Project </h3>
        <p>
          The Denizen Designer Project was particularly inspired by Dr.
          Harrington’s work with African American Elders in Chicago. During that
          research project, participatory design influenced and informed the
          approaches for the research process. Due to the versatility of
          participatory design (PD) and community-based participatory design
          (CBPD), it became apparent that there was a need to showcase other
          Designers’ work to encourage more PD community work to be done.
          Participatory design can be used alongside existing community-building
          strategies as a method to empower and support work already happening
          in those communities with the collaborative efforts of researchers and
          designers. Lastly and most importantly, one of the goals of the
          Denizen Designer Project intends to build up a sense of a community
          and a network of practitioners who use participatory design. Creating
          this network would allow Designers to learn from each other and feel
          supported by a network of like-minded individuals improving their
          communities through design. Finally, the creation of a variety of
          resources in a several mediums would allow others, whether they are
          community members or academics, to learn about participatory design
          and how to effectively use it as a tool.{' '}
        </p>
        <h3>What is a Denizen Designer? </h3>
        <p>
          According to Merriam-Webster, a denizen is an “inhabitant” or “one
          that frequents a place”. In the Denizen Designer Project, we wanted to
          spotlight those engaging in social and participatory design in their
          own communities. Thus, a Denizen Designer is one who leverages design
          as a social practice, or as a catalyst to address social challenges in
          their local environments. While the word ‘citizen’ is a tempting
          alternative, we recognized documentation status within a country does
          not dictate one’s ability to affect change in their community.{' '}
        </p>
      </div>
      // </Element>
    );
  }
}

export default Introduction;
