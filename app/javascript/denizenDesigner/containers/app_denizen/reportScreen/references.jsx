import React, { Component } from 'react';

import Scroll from 'react-scroll';

var Element = Scroll.Element;

class References extends Component {
  render() {
    return (
      <div className='trElement '>
        <Element name='references' className='pt-3 References-Element'>
          <h2>References</h2>
          <p>
            Minkler, M., Blackwell, A. G., Thompson, M., & Tamir, H. (2003).
            Community-based participatory research: implications for public
            health funding. American journal of public health, 93(8), 1210-1213.{' '}
          </p>
          <p>
            Sabiescu, A. G., David, S., van Zyl, I., & Cantoni, L. (2014,
            October). Emerging spaces in community-based participatory design:
            reflections from two case studies. In Proceedings of the 13th
            Participatory Design Conference: Research Papers- Volume 1 (pp.
            1-10). ACM.{' '}
          </p>
          <p className='wordwrapBiBi'>
            Sanders, E.-N., & Stappers, P. (2008). Co-creation and the new
            landscapes of design. CoDesign, 4(1), 5–18.
            https://doi-org.ezproxy.depaul.edu/10.1080/15710880701875068{' '}
          </p>
          <p>
            Smith, S. E., Willms, D. G., & Johnson, N. A. (1997). Nurtured by
            knowledge: Learning to do participatory action research. IDRC,
            Ottawa, ON, CA.{' '}
          </p>
          <p>
            Snell, P., Miguel, N., & East, J. (2009). Changing directions:
            Participatory action research as a parent involvement strategy.
            Educational Action Research, 17(2), 239-258.{' '}
          </p>
          <p>
            Steen, M. (2013). Co-design as a process of joint inquiry and
            imagination. Design Issues, 29(2), 16-28.{' '}
          </p>
          <p>
            Wallerstein, N. B., & Duran, B. (2006). Using community-based
            participatory research to address health disparities. Health
            promotion practice, 7(3), 312-323.{' '}
          </p>
        </Element>
      </div>
    );
  }
}

export default References;
