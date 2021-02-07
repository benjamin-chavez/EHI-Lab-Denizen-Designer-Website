import { hot } from 'react-hot-loader/root';
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

// Internal modules
// import AppDenizen from './components/app_denizen';
import ParticipantsIndex from './containers/app_denizen/participants_index';
import ParticipantsShow from './containers/app_denizen/participants_show';
// import DenizenHome from "./components/app_denizen/denizen_home";
// import ParticipantsShow from "./containers/app_denizen/participants_show";

import '../assets/stylesheets/application.scss';
// import LandingPage from './components/landing_page';

// Internal Modules | History of Participatory Design
import AppHopd from './components/app_hopd';

// const root = document.getElementById("root");
// if (root) {
//   ReactDOM.render(<App />, root);
// }

import AppDenizen from './components/app_denizen';
import LandingPage from './components/landing_page';

class HelloWorld extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Router>
          Greeting: {this.props.greeting}
          <p>dudessssssssdssss</p>
          <AppDenizen />
        </Router>
        //{' '} */}
        <Provider store={store}>
          {/* <AppDenizen /> */}
          <Router history={history}>
            {/* <div className='thin-container'> */}
            {/* <div> */}
            <Container>
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
                {/* <Redirect exact from='/' to='/denizendesigner/home' /> */}
              </Switch>
            </Container>
            {/* </div> */}
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
