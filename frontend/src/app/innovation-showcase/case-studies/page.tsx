'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: 'Smart Grid Integration in Urban Areas',
    institution: 'Technical University of Munich',
    location: 'Munich, Germany',
    year: 2024,
    category: 'Grid Technology',
    impact: {
      efficiency: '+45%',
      cost: '-30%',
      sustainability: '+60%'
    },
    tags: ['Smart Grid', 'Urban Planning', 'Energy Efficiency'],
    summary: 'Implementation of AI-driven smart grid system in Munich metropolitan area, resulting in significant improvements in energy distribution efficiency.',
    imageUrl: '/images/case-studies/munich-smart-grid.jpg',
    status: 'Implemented'
  },
  {
    id: 2,
    title: 'Renewable Energy Storage Innovation',
    institution: 'KTH Royal Institute of Technology',
    location: 'Stockholm, Sweden',
    year: 2024,
    category: 'Storage',
    impact: {
      efficiency: '+35%',
      cost: '-25%',
      sustainability: '+40%'
    },
    tags: ['Energy Storage', 'Renewable Energy', 'Battery Technology'],
    summary: 'Development of advanced energy storage solution using novel materials, enabling more efficient renewable energy integration.',
    imageUrl: '/images/case-studies/stockholm-storage.jpg',
    status: 'Pilot Phase'
  },
  {
    id: 3,
    title: 'AI-Powered Energy Demand Prediction',
    institution: 'DTU - Technical University of Denmark',
    location: 'Copenhagen, Denmark',
    year: 2024,
    category: 'Software',
    impact: {
      efficiency: '+55%',
      cost: '-20%',
      sustainability: '+30%'
    },
    tags: ['Artificial Intelligence', 'Demand Prediction', 'Energy Management'],
    summary: 'Implementation of machine learning algorithms for precise energy demand forecasting, optimizing grid operations.',
    imageUrl: '/images/case-studies/copenhagen-ai.jpg',
    status: 'Operational'
  }
];

const filters = {
  categories: ['All', 'Grid Technology', 'Storage', 'Software', 'Hardware', 'Policy'],
  years: ['All', '2024', '2023', '2022'],
  status: ['All', 'Concept', 'Pilot Phase', 'Implemented', 'Operational']
};

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesYear = selectedYear === 'All' || study.year.toString() === selectedYear;
    const matchesStatus = selectedStatus === 'All' || study.status === selectedStatus;
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.institution.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesYear && matchesStatus && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Innovation Case Studies
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore detailed case studies of successful energy innovations across Europe
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search case studies..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {filters.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {filters.years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {filters.status.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCaseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700">
              {/* Image placeholder */}
              <div className="flex items-center justify-center text-gray-400">
                [Image]
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                  {study.status}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {study.year}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {study.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {study.institution}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-green-500 font-semibold">
                    {study.impact.efficiency}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Efficiency
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-blue-500 font-semibold">
                    {study.impact.cost}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Cost
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-500 font-semibold">
                    {study.impact.sustainability}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Sustainability
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {study.summary}
              </p>
              <Link
                href={`/innovation-showcase/case-studies/${study.id}`}
                className="inline-block w-full text-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                View Full Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Case Study CTA */}
      <div className="mt-16 text-center bg-white dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Share Your Success Story
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Have a successful energy innovation implementation? Submit your case study and share your insights with the community.
        </p>
        <Link
          href="/innovation-showcase/case-studies/submit"
          className="inline-block px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Submit Case Study
        </Link>
      </div>
    </div>
  );
}
