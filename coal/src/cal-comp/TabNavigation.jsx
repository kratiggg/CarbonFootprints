import React, { useState } from 'react';

const TabNavigation = ({ onTabSelect }) => {
  const tabs = ["Exploration and Drilling", "Extraction", "Transportaion", "Ventilation", "Water-Management", "Processing and Handling", "Results"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabSelect(tab);
  };

  return (
    <div className="tab-navigation">
      {tabs.map((tab, index) => (
        <button 
          key={index} 
          className={`tab-button ${tab === activeTab ? 'active' : ''}`} 
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
