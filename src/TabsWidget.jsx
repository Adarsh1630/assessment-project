import React, { useState } from 'react';

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const renderContent = () => {
    switch(activeTab) {
      case 'About Me':
        return <p>Hello! I'm Dave, your sales rep from Salesforce...</p>;
      case 'Experiences':
        return <p>Experience content goes here...</p>;
      case 'Recommended':
        return <p>Recommended content goes here...</p>;
      default:
        return null;
    }
  }

  return (
    <div className="bg-slate-700 p-10 rounded-lg h-1/2 ">
      <div className="flex space-x-4 justify-between align-center bg-gray-900 p-2 rounded-3xl">
        {['About Me', 'Experiences', 'Recommended'].map((tab) => (
          <button
            key={tab}
            className={`text-white py-2 px-4 rounded-3xl shadow-custom-soft hover:bg-gray-700 transition-all ${activeTab === tab ? 'bg-gray-700 ' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 text-gray-400">
        {renderContent()}
      </div>
    </div>
  );
}

export default TabsWidget;
