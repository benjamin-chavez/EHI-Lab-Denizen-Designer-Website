/* Load Spinner. Only used in a few places throughout the site due to time constraints. Any new laoder could go here to replace this one and could be implemented throughout the entire site. */

import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadSpinner = () => {
  return (
    <div className='spinner-container'>
      <Spinner animation='border' role='status' variant='info'>
        <span className='sr-only'>LOoading...</span>
      </Spinner>
    </div>
  );
};

export default LoadSpinner;
