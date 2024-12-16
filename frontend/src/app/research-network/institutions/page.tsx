'use client';

import React, { useState } from 'react';

const institutions = [
  {
    name: 'Technical University of Munich',
    type: 'University',
    country: 'Germany',
    researchAreas: ['Smart Grids', 'Energy Storage', 'Power Systems'],
    researchers: 85,
    activeProjects: 12,
    description: 'Leading research institution in energy systems and sustainable technologies.'
  },
  {
    name: 'KTH Royal Institute of Technology',
    type: 'University',
    country: 'Sweden',
    researchAreas: ['Renewable Energy', 'Energy Economics', 'Sustainability'],
    researchers: 65,
    activeProjects: 9,
    description: 'Premier technical university focusing on sustainable energy solutions.'
  },
  {
    name: 'European Energy Research Center',
    type: 'Research Center',
    country: 'Netherlands',
    researchAreas: ['Grid Integration', 'Energy Policy', 'Climate Research'],
    researchers: 45,
    activeProjects: 15,
    description: 'Dedicated research center for advancing European energy initiatives.'
  },
  // Add more institutions...
];

const institutionTypes = ['University', 'Research Center', 'Industry Partner', 'Government Agency'];
const researchFields = [
  'Smart Grids',
  'Energy Storage',
  'Power Systems',
  'Renewable Energy',
  'Grid Integration',
  'Energy Policy',
  'Energy Economics',
  'Sustainability',
  'Climate Research'
];

export default function Institutions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedField, setSelectedField] = useState('');

  const filteredInstitutions = institutions.filter(institution => {
    const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      institution.country.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = !selectedType || institution.type === selectedType;
    
    const matchesField = !selectedField ||
      institution.researchAreas.includes(selectedField);

    return matchesSearch && matchesType && matchesField;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Institution Network
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Explore research centers, universities, and industry partners across Europe
        </p>
      </div>

      {/* Filters */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-2">
          <input
            type="text"
            placeholder="Search by name or country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Types</option>
            {institutionTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <select
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Research Fields</option>
            {researchFields.map(field => (
              <option key={field} value={field}>{field}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Institutions Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredInstitutions.map((institution, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {institution.name}
                </h2>
                <p className="text-primary-500 mb-2">{institution.type}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {institution.description}
                </p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {institution.country}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {institution.researchAreas.map((area, areaIndex) => (
                <span
                  key={areaIndex}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{institution.researchers} Researchers</span>
                <span>{institution.activeProjects} Active Projects</span>
              </div>
              <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
