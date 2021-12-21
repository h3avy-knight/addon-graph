import React from 'react';

const Datasets = () => {
  return (
    <div className='dataset'>
      <div className='row-1'>
        <p>Dataset1</p>
        <div className='row'></div>
      </div>
      <div className='row-2'>
        <div>
          <p>Data Source</p>
          {/* Dropdown for Data source */}
        </div>
        <div>
          <p>Metric</p>
          {/* Select Metric */}
        </div>
      </div>
      <div> Add Dataset</div>
    </div>
  );
};

export default Datasets;
