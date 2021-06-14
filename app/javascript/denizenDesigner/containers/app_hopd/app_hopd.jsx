import React from 'react';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import NavPrimary from '../shared/nav_primary';
import HopdTimeline from './timeline';
import HopdDataVis from './data_visualization';
import HopdPapers from './repository_of_papers';

const AppHopd = (props) => {
  return (
    <div>
      <NavPrimary />
      {/* <NavSecondary /> */}

      <Route
        exact
        path='/historyofparticipatorydesign/timeline'
        component={HopdTimeline}
      />
      <Route
        exact
        path='/historyofparticipatorydesign/datavisualization'
        component={HopdDataVis}
      />
      <Route
        exact
        path='/historyofparticipatorydesign/repositoryofpapers'
        component={HopdPapers}
      />
      <Switch>
        <Redirect
          exact
          from='/historyofparticipatorydesign'
          to='/historyofparticipatorydesign/timeline'
        />
      </Switch>
    </div>
  );
};

export default AppHopd;
