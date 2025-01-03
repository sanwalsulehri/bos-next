'use client'
import React, { useState } from 'react';

const FeatureComparison = () => {
  const [expandedSection, setExpandedSection] = useState('general');

  const plans = ['Essential', 'Professional', 'Ultimate'];

  const sections = [
    {
      id: 'general',
      title: 'General',
      features: [
        {
          name: 'Web, Desktop & Mobile app',
          availability: ['Essential', 'Professional', 'Ultimate']
        },
        {
          name: 'Dark/light theme',
          availability: ['Essential', 'Professional', 'Ultimate']
        },
        {
          name: 'Multiple currencies',
          availability: ['Essential', 'Professional', 'Ultimate']
        }
      ],
    },
    {
      id: 'permissions',
      title: 'Permission builder',
      features: [
        {
          name: 'Permission builder',
          availability: ['Ultimate']
        }
      ],
    },
    {
      id: 'timeTracking',
      title: 'Time tracking',
      features: []  // Add specific features when needed
    },
    {
      id: 'taskProject',
      title: 'Task & Project',
      features: []
    },
    {
      id: 'salesBudgeting',
      title: 'Sales & Budgeting',
      features: []
    },
    {
      id: 'customFields',
      title: 'Custom Fields',
      features: []
    },
    {
      id: 'invoicing',
      title: 'Invoicing',
      features: []
    }
  ];

  return (
    <div className="max-w-7xl bg-white md:hidden shadow-lg  md:mx-auto rounded-2xl mx-4 py-8">
      {sections.map((section) => (
        <div key={section.id} className=" bg-white  ">
          {/* Section Header */}
          <div className="flex items-center justify-between py-6 px-4 border-b border-gray-100">
            <h2 className="text-[24px] text-[#1D1F2C] font-medium">{section.title}</h2>
            <button 
              className="w-[36px] h-[36px] bg-[#E6F2FF] rounded-full flex items-center justify-center"
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
            >
              {expandedSection === section.id ? (
                <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L1 1" stroke="#28303F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1V13M13 7H1" stroke="#28303F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>

          {/* Features Grid */}
          {expandedSection === section.id && section.features.length > 0 && (
            <div className="py-8 px-4 space-y-10">
              {section.features.map((feature, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
                  <div className="bg-[#F6F8FA] sm:bg-transparent rounded-[6px] p-3.5 sm:p-0">
                    <span className="text-[#4A4C56] font-medium">{feature.name}</span>
                  </div>
                  {plans.map((plan) => (
                    <div key={plan} className="grid grid-cols-2 px-2">
                      <h1>{plan}</h1>
                      <svg 
                        className={`h-5 w-5 ${feature.availability.includes(plan) ? 'text-green-500' : 'text-gray-300'}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeatureComparison; 