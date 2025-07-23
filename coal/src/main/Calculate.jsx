import React, { useState } from 'react';
import TabNavigation from '/src/cal-comp/TabNavigation';
import TabContent from '/src/cal-comp/TabContent';

const Calculate = () => {
  const [activeTab, setActiveTab] = useState("House");

  return (
    <div className="app">
      <style>
        {`
          .app {
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          h1 {
            font-size: 1.5em;
            color: #006400;
          }

          p {
            font-size: 1em;
            color: #333;
          }

          a {
            color: #006400;
            text-decoration: none;
          }

          .tab-navigation {
            margin-bottom: 20px;
          }

          .tab-button {
            background-color: #f0f0f0;
            color: #333;
            padding: 10px;
            margin-right: 5px;
            border: 1px solid #ccc;
            cursor: pointer;
            border-radius: 4px;
          }

          .tab-button:hover {
            background-color: #ddd;
          }

          .tab-button.active {
            background-color: #4CAF50;
            color: white;
          }
        `}
      </style>

      <h1>Welcome to the Sudhar</h1>
    

     
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default Calculate;
