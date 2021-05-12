import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Scroll from 'react-scroll';

var Element = Scroll.Element;

class Introduction extends Component {
  render() {
    return (
      <div className=''>
        <Element name='introduction'>
          <h2>Introduction</h2>
        </Element>
        <p>
          Participatory design can be traced back to the ‘70s, where it was
          coined in Scandinavia after the rise of workplace democracy and
          unionization. It was inherently political, and the changing workspaces
          invited a change in design practice that challenged historical systems
          of power through open dialogue and democratized input. Designers sided
          with the workers as the future users of their solutions. This
          cooperation between unions and employers resulted in legislation like
          the Worker Protection and Working Environment Act and better
          negotiation and representation for Scandinavian workers (Gregory,
          2003). These ideas have since been adopted by designers worldwide who
          take a collaborative approach to design, and various theories share
          the roots and principles of participatory design, including co-design,
          community-based participatory research (CBPR) and participatory action
          design/research (PAR). While the approaches and theories behind these
          design and research methods vary, these concepts share the common
          threads of repositioning designers within communities as participants.
          Rather than taking the role of expert telling communities what they
          need, partitioners of participatory design and Denizen Designers work
          closely with communities to identify their needs and build
          collaborative design solutions. Although participatory design has
          increasingly become more of a widely used design method, there are
          still groups and communities that are left behind. These communities
          can be left behind for a variety of reasons ranging from being hard to
          access, previous research/work having been done with the community, or
          simply being a perceived as not worth the time/energy investment.
          While not common, these limiting attitudes around participatory design
          not only prevent collaborate work between designers and researchers
          but can also stain relationships and trust. Therefore, it becomes
          imperative for the design community to consider several critical
          topics. The first is how are we [both as a design community and as
          individual designers] determining which communities to do
          participatory design with? Secondly how can in-depth or correct
          participatory design be better advocated for? Lastly how can we
          rebuild lost or broken community trust through participatory design.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vitae
          adipiscing augue mauris diam porta. Aenean nisi, erat vel ante
          fringilla semper libero aliquet laoreet. Eget pulvinar eu est vel.
          Faucibus egestas euismod feugiat sapien integer luctus odio. Interdum
          elit, diam eget nunc egestas. Augue felis magna tellus enim sed
          molestie enim mi. Sociis arcu etiam urna fermentum erat sodales
          libero. Sollicitudin purus pretium semper integer leo sollicitudin
          arcu sed. Ultrices ullamcorper nunc donec ac ullamcorper interdum
          proin sit.
        </p>
      </div>
      // </Element>
    );
  }
}

export default Introduction;
