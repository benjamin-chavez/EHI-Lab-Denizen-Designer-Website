import React from 'react';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import NavPrimary from '../containers/app_denizen/nav_primary';
import HopdTimeline from '../containers/app_hopd/timeline';
import HopdDataVis from '../containers/app_hopd/data_visualization';
import HopdPapers from '../containers/app_hopd/repository_of_papers';

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
