// This is the base/main component that renders the rest

import React, { Component } from 'react';
import ParticipantsIndex from './participants_index';

class Interviews extends Component {
  render() {
    return (
      <div>
        <ParticipantsIndex />
      </div>
    );
  }
}

export default Interviews;
