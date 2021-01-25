import React, { Component } from 'react';
import DesignersIndex from './designers_index';
import ParticipantsIndex from './participants_index';

class Interviews extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <ParticipantsIndex />
        </div>
      </div>
    );
  }
}

export default Interviews;
