import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { createHistory as history } from "history";

import NavPrimary from '../containers/app_denizen/nav_primary';

import NavSecondary from '../containers/app_hopd/nav_secondary';
import HopdTimeline from '../containers/app_hopd/timeline';
import HopdDataVis from '../containers/app_hopd/data_visualization';
import HopdPapers from '../containers/app_hopd/repository_of_papers';

const AppHopd = (props) => {
  return (
    <div>
      <NavPrimary />
      <NavSecondary />

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
    </div>
  );
};

export default AppHopd;
