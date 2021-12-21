import React, { useState } from 'react';
import Datasets from './Datasets';
import Settings from './Settings';
import Styles from './Styles';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('datasets');

  const handleClick = (data) => {
    setActiveTab(data);
  };

  return (
    <div className='Addon__Chart-tabs'>
      <div className='tabs'>
        <button onClick={() => handleClick('datasets')}>Dataset</button>
        <button onClick={() => handleClick('setting')}>Settings</button>
        <button onClick={() => handleClick('styles')}>Styles</button>
      </div>
      {activeTab === 'datasets' && <Datasets />}
      {activeTab === 'setting' && <Settings />}
      {activeTab === 'styles' && <Styles />}
      <div></div>
    </div>
  );
};

export default Tabs;
