// This is the base component for everything on the Denizen Designer portion of the website.

import React from 'react';

import NavPrimary from '../shared/nav_primary';
import DenizenHome from './HomeScreen/denizen_home';
import Interviews from './interviewsScreens/interviews';
import Report from './reportScreen/reportMain';
import DesignerDatabase from './designerDatabaseScreen/designer_database';
import Quotes from './QuotesScreen/quotes';
import Resources from './ResourcesScreen/resources';
import Footer from '../shared/footer';

import ParticipantsShow from './interviewsScreens/participants_show';

const AppDenizen = (props) => {
  return (
    <div id='wrapper'>
      <div id='content'>
        <NavPrimary />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default AppDenizen;
