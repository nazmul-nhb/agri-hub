import { useState } from 'react';
import SectionWrapper from "../components/SectionWrapper";
import SectionTitle from "../components/SectionTitle";
import { pestControlData } from '../mock-data/pest-control';

const PestControlStrategies = () => {
  const [activeTab, setActiveTab] = useState('biological');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <SectionWrapper>
      <SectionTitle title="Pest Control Strategies" />

      <p className="text-lg text-gray-700 mb-8">
        Effective pest control is essential for maintaining healthy crops. Integrated Pest Management (IPM)
        strategies combine biological controls, organic remedies, and careful monitoring to manage pest populations.
        Here are some practical tips and strategies to prevent and treat pest infestations.
      </p>

      {/* Tab Navigation */}
      <div className="flex flex-wrap sm:flex-nowrap border-b-2 border-primary mb-6">
        {pestControlData.map(tab => (
          <button
            key={tab.id}
            className={`py-2 px-4 text-lg font-semibold ${activeTab === tab.id ? 'border-b-4 border-primary text-primary' : 'text-gray-700'}`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {pestControlData.map(tab => (
        activeTab === tab.id && (
          <div key={tab.id} className="flex flex-wrap justify-between mb-12">
            <div className="w-full sm:w-1/2">
              <h3 className="text-xl font-semibold text-green-600 mb-4">{tab.title}</h3>
              <ul className="list-disc ml-6">
                {tab.description.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <img src={tab.image} alt={tab.title} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        )
      ))}
    </SectionWrapper>
  );
};

export default PestControlStrategies;
