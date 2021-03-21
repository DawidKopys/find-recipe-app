import React from 'react';
import './RenderLoader.css';

const RenderLoader = ({ style = {} } = {}) => {
  return (
    <div className='loader recipe-finder-app__loader' style={style}>
      Loading ...
    </div>
  );
};

export default RenderLoader;
