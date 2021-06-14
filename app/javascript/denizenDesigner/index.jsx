import { hot } from 'react-hot-loader/root';
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';
import ScrollToTop from './containers/shared/ScrollToTop';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

// Internal modules
import AppHopd from './containers/app_hopd/app_hopd';
import AppDenizen from './containers/app_denizen/app_denizen';
import LandingPage from './containers/shared/landing_page';
import Dashboard from './containers/dashboard/dashboard';
import EditParticipant from './containers/dashboard/edit_participant';
import NewParticipant from './containers/dashboard/new_participant';

class HelloWorld extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router history={history}>
            <ScrollToTop />
            <Container fluid>
              <Switch>
                <Route
                  path='/historyofparticipatorydesign'
                  component={AppHopd}
                />
                <Route
                  path='/historyofparticipatorydesign'
                  component={AppHopd}
                />
                <Route path='/denizendesigner' component={AppDenizen} />
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route
                  exact
                  path='/dashboard/newparticipant'
                  component={NewParticipant}
                />
                <Route
                  exact
                  path='/dashboard/editparticipant/:id'
                  component={EditParticipant}
                />
              </Switch>
            </Container>
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};
export default hot(HelloWorld);
