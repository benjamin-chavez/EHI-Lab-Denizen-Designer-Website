import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const participants_indexFC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <h1>Test</h1>
      <div data-aos='fade-up' className='grids'>
        <div data-aos='fade-up' className='boxes'>
          1
        </div>
        <div data-aos='fade-up' className='boxes'>
          2
        </div>
        <div className='boxes'>3</div>
        <div data-aos='fade-up' className='boxes'>
          4
        </div>
        <div data-aos='fade-up' className='boxes'>
          5
        </div>
      </div>
    </div>
  );
};

export default participants_indexFC;
