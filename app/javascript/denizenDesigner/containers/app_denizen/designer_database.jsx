import React, { Component } from 'react';
import DesignersIndex from './designers_index';
import ParticipantsIndex from './participants_index';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import queryString from 'query-string';

class DesignerDatabase extends Component {
  location = () => {
    useLocation();
  };

  renderDesignersIndex() {
    const city = location.pathname.split('/').pop();
    return (
      <div>
        <DesignersIndex city={city} />
      </div>
    );
  }

  render() {
    return (
      <div className='container'>
        <div>
          <ul className='designer-city-menu'>
            {/* <li className='designer-city-item selected'>ATL</li>
            <li className='designer-city-item'>BST</li>
            <li className='designer-city-item'>CHI</li>
            <li className='designer-city-item'>DT</li>
            <li className='designer-city-item'>ATL</li>
            <li className='designer-city-item'>ATL</li> */}

            <li className='designer-city-item '>
              <NavLink to='/denizendesigner/designerdatabase/ATL'>ATL</NavLink>
            </li>
            <li className='designer-city-item '>
              <NavLink to='/denizendesigner/designerdatabase/BST'>BST</NavLink>
            </li>
            <li className='designer-city-item '>
              <NavLink to='/denizendesigner/designerdatabase/CHI'>CHI</NavLink>
            </li>
            <li className='designer-city-item '>
              <NavLink to='/denizendesigner/designerdatabase/DT'>DT</NavLink>
            </li>
          </ul>
          {this.renderDesignersIndex()}
          {/* <ParticipantList /> */}
        </div>
      </div>
    );
  }
}

export default DesignerDatabase;
