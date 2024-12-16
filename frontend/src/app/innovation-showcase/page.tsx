'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const featuredInnovations = [
  {
    title: 'Smart Grid Integration Platform',
    projectName: 'GridFlex Europe',
    fundingProgram: 'Horizon Europe',
    grantId: 'HE-2023-123456',
    fundingAmount: '€2.5M',
    duration: '2023-2025',
    category: 'Grid Technology',
    institution: 'Technical University of Munich',
    impact: '45% improved grid efficiency',
    image: '/images/innovations/smart-grid.jpg',
    tags: ['AI', 'Smart Grid', 'Energy Management'],
    stage: 'Pilot Implementation'
  },
  {
    title: 'Advanced Energy Storage Solution',
    projectName: 'StorageNext',
    fundingProgram: 'LIFE Programme',
    grantId: 'LIFE-2023-789012',
    fundingAmount: '€1.8M',
    duration: '2023-2024',
    category: 'Storage',
    institution: 'KTH Royal Institute of Technology',
    impact: '30% cost reduction in energy storage',
    image: '/images/innovations/energy-storage.jpg',
    tags: ['Battery Tech', 'Renewable Energy', 'Storage'],
    stage: 'Market Testing'
  },
  {
    title: 'Renewable Energy Forecasting System',
    projectName: 'ForecastRE',
    fundingProgram: 'Innovation Fund',
    grantId: 'IF-2023-345678',
    fundingAmount: '€3.2M',
    duration: '2023-2025',
    category: 'Software',
    institution: 'DTU - Technical University of Denmark',
    impact: '85% prediction accuracy',
    image: '/images/innovations/forecasting.jpg',
    tags: ['Machine Learning', 'Forecasting', 'Renewables'],
    stage: 'Operational'
  }
];

const innovationCategories = [
  { name: 'Grid Technology', count: 45, icon: '', program: 'Horizon Europe' },
  { name: 'Energy Storage', count: 32, icon: '', program: 'Innovation Fund' },
  { name: 'Renewable Integration', count: 38, icon: '', program: 'LIFE' },
  { name: 'Smart Buildings', count: 27, icon: '', program: 'Horizon Europe' },
  { name: 'Energy Markets', count: 23, icon: '', program: 'Innovation Fund' },
  { name: 'Mobility Solutions', count: 19, icon: '', program: 'LIFE' }
];

const fundingPrograms = [
  {
    name: 'Horizon Europe',
    description: "EU's key funding programme for research and innovation",
    totalProjects: 85,
    totalFunding: '€320M',
    focus: ['Research', 'Innovation', 'Deployment']
  },
  {
    name: 'Innovation Fund',
    description: 'Supporting innovative low-carbon technologies',
    totalProjects: 45,
    totalFunding: '€180M',
    focus: ['Demonstration', 'Market Entry']
  },
  {
    name: 'LIFE Programme',
    description: "EU's funding instrument for environment and climate action",
    totalProjects: 38,
    totalFunding: '€150M',
    focus: ['Implementation', 'Policy Support']
  }
];

const innovationMetrics = [
  { label: 'Funded Projects', value: '180+' },
  { label: 'Total Funding', value: '€650M' },
  { label: 'Partner Institutions', value: '45' },
  { label: 'Success Rate', value: '85%' }
];

export default function InnovationShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Innovation Showcase
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Discover groundbreaking energy innovations from EU-funded research projects
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/innovation-showcase/submit"
            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Submit Project Innovation
          </Link>
          <Link
            href="/innovation-showcase/map"
            className="px-6 py-3 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
          >
            View Innovation Map
          </Link>
        </div>
      </div>

      {/* Innovation Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {innovationMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center"
          >
            <div className="text-3xl font-bold text-primary-500 mb-2">
              {metric.value}
            </div>
            <div className="text-gray-600 dark:text-gray-300">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Funding Programs */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          EU Funding Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {fundingPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {program.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {program.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-primary-500 font-semibold">
                    {program.totalProjects}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Projects
                  </div>
                </div>
                <div>
                  <div className="text-primary-500 font-semibold">
                    {program.totalFunding}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Total Funding
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {program.focus.map((item, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 rounded-full text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Innovations */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          Featured Project Innovations
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredInnovations.map((innovation, index) => (
            <div
              key={index}
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
                  <span className="text-sm text-primary-500">{innovation.category}</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                    {innovation.stage}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {innovation.title}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Project: {innovation.projectName}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {innovation.fundingProgram} | Grant: {innovation.grantId}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {innovation.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {innovation.fundingAmount}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      Funding
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {innovation.duration}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      Duration
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    {innovation.impact}
                  </span>
                  <Link
                    href={`/innovation-showcase/case-studies/${index + 1}`}
                    className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {innovationCategories.map((category, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg text-center transition-colors ${
                selectedCategory === category.name
                  ? 'bg-primary-50 dark:bg-gray-700'
                  : 'bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className="font-medium text-gray-900 dark:text-white mb-1">
                {category.name}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                {category.program}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {category.count} projects
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Have a Funded Project Innovation?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Share your EU-funded project's innovations and success stories with the energy research community
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/innovation-showcase/submit"
            className="px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Submit Your Innovation
          </Link>
          <Link
            href="/innovation-showcase/guidelines"
            className="px-8 py-4 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
          >
            Submission Guidelines
          </Link>
        </div>
      </div>
    </div>
  );
}
