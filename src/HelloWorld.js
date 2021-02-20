import React from 'react';
import './HelloWorld.css';
import Image from './javascript_illustration.svg';

const HelloWorld = () => {
  return (
    <div className='center'>
      <h3>Hello World!</h3>
      <img src={Image} alt='Computer' />
    </div>
  );
};

export default HelloWorld;
