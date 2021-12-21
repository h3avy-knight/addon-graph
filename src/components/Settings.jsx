import React from 'react';

const Settings = () => {
  return (
    <div className='settings'>
      <div className='settings_row1'>
        <p>Chart type</p>
        {/* Dropdown for line */}
      </div>
      <div className='settings_row2'>
        <p>Time Range</p>
        {/* Dropdown for Time Range */}
      </div>
      <div className='settings_row3'>
        <p>chart Size</p>
        {/* Width & Height */}
      </div>
    </div>
  );
};

export default Settings;
