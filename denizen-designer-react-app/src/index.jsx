import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Internal modules
import AppHopd from './containers/app_hopd/app_hopd';
import AppDenizen from './containers/app_denizen/app_denizen';
import LandingPage from './containers/shared/landing_page';
import Dashboard from './containers/dashboard/dashboard';
import EditParticipant from './containers/dashboard/edit_participant';
import NewParticipant from './containers/dashboard/new_participant';

// Denizen Designer components
import DenizenHome from './containers/app_denizen/HomeScreen/denizen_home';
import Interviews from './containers/app_denizen/interviewsScreens/interviews';
import Report from './containers/app_denizen/reportScreen/reportMain';
import DesignerDatabase from './containers/app_denizen/designerDatabaseScreen/designer_database';
import Quotes from './containers/app_denizen/QuotesScreen/quotes';
import Resources from './containers/app_denizen/ResourcesScreen/resources';
import ParticipantsShow from './containers/app_denizen/interviewsScreens/participants_show';

// History of Participatory Design components
import HopdTimeline from './containers/app_hopd/timeline';
import HopdDataVis from './containers/app_hopd/data_visualization';
import HopdPapers from './containers/app_hopd/repository_of_papers';

// Import main stylesheet
import './assets/stylesheets/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={LandingPage} />
          
          {/* History of Participatory Design routes */}
          <Route path="historyofparticipatorydesign" component={AppHopd}>
            <Route path="timeline" component={HopdTimeline} />
            <Route path="datavisualization" component={HopdDataVis} />
            <Route path="repositoryofpapers" component={HopdPapers} />
            <IndexRoute component={HopdTimeline} />
          </Route>
          
          {/* Denizen Designer routes */}
          <Route path="denizendesigner" component={AppDenizen}>
            <Route path="home" component={DenizenHome} />
            <Route path="interviews" component={Interviews} />
            <Route path="interviews/:id" component={ParticipantsShow} />
            <Route path="report" component={Report} />
            <Route path="designerdatabase" component={DesignerDatabase} />
            <Route path="designerdatabase/:city" component={DesignerDatabase} />
            <Route path="quotes" component={Quotes}>
              <Route path=":category" component={Quotes} />
            </Route>
            <Route path="resources" component={Resources} />
            <IndexRoute component={DenizenHome} />
          </Route>
          
          {/* Dashboard routes */}
          <Route path="dashboard" component={Dashboard} />
          <Route path="dashboard/newparticipant" component={NewParticipant} />
          <Route path="dashboard/editparticipant/:id" component={EditParticipant} />
        </Route>
      </Router>
    </Provider>
  );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
