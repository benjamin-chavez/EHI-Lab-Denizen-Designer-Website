import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

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

        {/* <NavSecondary /> */}
        <Route path='/denizendesigner/home' component={DenizenHome} />
        <Route
          exact
          path='/denizendesigner/interviews'
          component={Interviews}
        />
        <Route exact path='/denizendesigner/report' component={Report} />
        <Route
          path='/denizendesigner/designerdatabase'
          component={DesignerDatabase}
        />
        <Route path='/denizendesigner/quotes' component={Quotes} />

        <Route exact path='/denizendesigner/resources' component={Resources} />
        <Route
          path='/denizendesigner/interviews/:id'
          component={ParticipantsShow}
        />

        <Switch>
          <Redirect exact from='/denizendesigner' to='/denizendesigner/home' />
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default AppDenizen;
