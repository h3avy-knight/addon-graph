import React from 'react';

const AddonChart = () => {
  return (
    <div className='Addon-chart__graph'>
      <div className='graph'></div>
      <button style={{ marginRight: '7px' }}>copy as image</button>
      <button style={{ background: '#866CFF', color: '#fff' }}>
        insert Chart
      </button>
    </div>
  );
};

export default AddonChart;
