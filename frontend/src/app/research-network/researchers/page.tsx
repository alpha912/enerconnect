'use client';

import React, { useState } from 'react';

const researchers = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Senior Researcher',
    institution: 'Technical University of Munich',
    expertise: ['Smart Grids', 'Energy Storage', 'Power Systems'],
    country: 'Germany',
    publications: 45,
    projects: 8
  },
  {
    name: 'Prof. Marco Rossi',
    title: 'Professor of Energy Systems',
    institution: 'University of Milan',
    expertise: ['Renewable Energy', 'Grid Integration', 'Energy Policy'],
    country: 'Italy',
    publications: 78,
    projects: 12
  },
  {
    name: 'Dr. Elena Petrova',
    title: 'Research Director',
    institution: 'KTH Royal Institute of Technology',
    expertise: ['Energy Economics', 'Sustainability', 'Climate Policy'],
    country: 'Sweden',
    publications: 56,
    projects: 10
  },
  // Add more researchers...
];

const expertiseAreas = [
  'Smart Grids',
  'Energy Storage',
  'Power Systems',
  'Renewable Energy',
  'Grid Integration',
  'Energy Policy',
  'Energy Economics',
  'Sustainability',
  'Climate Policy'
];

const countries = ['Germany', 'Italy', 'Sweden', 'France', 'Spain', 'Netherlands'];

export default function Researchers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const filteredResearchers = researchers.filter(researcher => {
    const matchesSearch = researcher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      researcher.institution.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesExpertise = selectedExpertise.length === 0 ||
      researcher.expertise.some(exp => selectedExpertise.includes(exp));
    
    const matchesCountry = selectedCountries.length === 0 ||
      selectedCountries.includes(researcher.country);

    return matchesSearch && matchesExpertise && matchesCountry;
  });

  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise(prev =>
      prev.includes(expertise)
        ? prev.filter(e => e !== expertise)
        : [...prev, expertise]
    );
  };

  const toggleCountry = (country: string) => {
    setSelectedCountries(prev =>
      prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Researcher Directory
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Find and connect with leading researchers in energy-related fields
        </p>
      </div>

      {/* Filters */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-2">
          <input
            type="text"
            placeholder="Search by name or institution..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div>
          <select
            multiple
            value={selectedExpertise}
            onChange={(e) => {
              const values = Array.from(e.target.selectedOptions, option => option.value);
              setSelectedExpertise(values);
            }}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {expertiseAreas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        <div>
          <select
            multiple
            value={selectedCountries}
            onChange={(e) => {
              const values = Array.from(e.target.selectedOptions, option => option.value);
              setSelectedCountries(values);
            }}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {selectedExpertise.map(expertise => (
          <span
            key={expertise}
            onClick={() => toggleExpertise(expertise)}
            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm cursor-pointer hover:bg-primary-200"
          >
            {expertise} ×
          </span>
        ))}
        {selectedCountries.map(country => (
          <span
            key={country}
            onClick={() => toggleCountry(country)}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-200"
          >
            {country} ×
          </span>
        ))}
      </div>

      {/* Researchers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResearchers.map((researcher, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {researcher.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {researcher.title}
            </p>
            <p className="text-primary-500 mb-4">{researcher.institution}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {researcher.expertise.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{researcher.publications} Publications</span>
              <span>{researcher.projects} Projects</span>
            </div>

            <button className="w-full mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
