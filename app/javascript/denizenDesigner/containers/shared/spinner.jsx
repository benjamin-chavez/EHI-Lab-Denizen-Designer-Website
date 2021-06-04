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
