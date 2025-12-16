// This is the base component for everything on the History of Participatory Design portion of the website.

import React from 'react';

import NavPrimary from '../shared/nav_primary';
import HopdTimeline from './timeline';
import HopdDataVis from './data_visualization';
import HopdPapers from './repository_of_papers';

const AppHopd = (props) => {
  return (
    <div>
      <NavPrimary />
      {props.children}
    </div>
  );
};

export default AppHopd;
