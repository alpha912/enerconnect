'use client';

import React, { useState } from 'react';

const communityTypes = [
  {
    id: 'program',
    title: 'Program Community',
    description: 'For long-term research initiatives that can host multiple projects',
    features: [
      'Host multiple research projects',
      'Long-term research goals',
      'Cross-institutional collaboration',
      'Resource sharing capabilities'
    ]
  },
  {
    id: 'project',
    title: 'Project Community',
    description: 'For specific research projects linked to a program',
    features: [
      'Focused research objectives',
      'Defined timeline and milestones',
      'Team collaboration tools',
      'Progress tracking'
    ]
  }
];

export default function CreateCommunity() {
  const [selectedType, setSelectedType] = useState('');
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Create New Community
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Start a new research program or project community
        </p>
      </div>

      {/* Step Indicator */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 1 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            1
          </div>
          <div className={`w-16 h-1 ${
            step >= 2 ? 'bg-primary-500' : 'bg-gray-200'
          }`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 2 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            2
          </div>
          <div className={`w-16 h-1 ${
            step >= 3 ? 'bg-primary-500' : 'bg-gray-200'
          }`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 3 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            3
          </div>
        </div>
      </div>

      {step === 1 && (
        <>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Select Community Type
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {communityTypes.map((type) => (
              <div
                key={type.id}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  selectedType === type.id
                    ? 'bg-primary-50 dark:bg-primary-900 border-2 border-primary-500'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500'
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        className="w-5 h-5 text-primary-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Community Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter community name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Describe your community's goals and objectives"
            />
          </div>

          {selectedType === 'project' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Parent Program
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="">Select a program</option>
                <option value="smart-grid">Smart Grid Integration</option>
                <option value="energy-storage">Energy Storage Solutions</option>
              </select>
            </div>
          )}
        </form>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Privacy Settings
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="public">Public - Anyone can view and join</option>
              <option value="restricted">Restricted - Approval required to join</option>
              <option value="private">Private - Invitation only</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tags
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter tags separated by commas"
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-12">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
        )}
        <button
          onClick={() => step < 3 ? setStep(step + 1) : console.log('Submit')}
          disabled={step === 1 && !selectedType}
          className={`px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors ${
            step === 1 && !selectedType ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {step === 3 ? 'Create Community' : 'Next'}
        </button>
      </div>
    </div>
  );
}
