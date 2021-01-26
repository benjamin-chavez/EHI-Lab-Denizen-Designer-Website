import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
// import { useRouterHistory } from "react-router";
// import { createHistory as history } from "history";
import Container from 'react-bootstrap/Container';

// Internal modules
import AppDenizen from './components/app_denizen';
import ParticipantsIndex from './containers/app_denizen/participants_index';
import ParticipantsShow from './containers/app_denizen/participants_show';
// import DenizenHome from "./components/app_denizen/denizen_home";
// import ParticipantsShow from "./containers/app_denizen/participants_show";
import NavPrimary from './containers/app_denizen/nav_primary';
import '../assets/stylesheets/application.scss';
import LandingPage from './components/landing_page';

// Internal Modules | History of Participatory Design
import AppHopd from './components/app_hopd';

// const root = document.getElementById("root");
// if (root) {
//   ReactDOM.render(<App />, root);
// }

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    {/* <AppDenizen /> */}
    <Router history={history}>
      {/* <div className='thin-container'> */}
      <div>
        <Container>
          <NavPrimary />
          {/* <LandingPage /> */}

          <Switch>
            <Route path='/historyofparticipatorydesign' component={AppHopd} />
            <Route path='/historyofparticipatorydesign' component={AppHopd} />

            <Route path='/denizendesigner' component={AppDenizen} />
            <Redirect exact from='/' to='/denizendesigner/home' />
          </Switch>
        </Container>
      </div>
    </Router>
  </Provider>,
  root
);
