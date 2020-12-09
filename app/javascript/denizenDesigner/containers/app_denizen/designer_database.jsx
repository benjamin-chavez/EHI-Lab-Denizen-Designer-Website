import React, { Component } from "react";
import DesignersIndex from "./designers_index";
import ParticipantsIndex from "./participants_index";

class DesignerDatabase extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <ul className='designer-city-menu'>
            <li className='designer-city-item selected'>ATL</li>
            <li className='designer-city-item'>BST</li>
            <li className='designer-city-item'>CHI</li>
            <li className='designer-city-item'>DT</li>
            <li className='designer-city-item'>ATL</li>
            <li className='designer-city-item'>ATL</li>
          </ul>
          <DesignersIndex />
          {/* <ParticipantList /> */}
        </div>
      </div>
    );
  }
}

export default DesignerDatabase;
