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
          Discover groundbreaking energy innovations from EU-funded projects
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/innovation-showcase/map"
            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            View Innovation Map
          </Link>
          <Link
            href="#featured"
            className="px-6 py-3 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
          >
            Featured Innovations
          </Link>
        </div>
      </div>

      {/* Innovation Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {innovationMetrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">{metric.value}</div>
            <div className="text-gray-600 dark:text-gray-300">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Innovation Categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {innovationCategories.map((category, index) => (
            <Link
              key={index}
              href={`/innovation-showcase/map?category=${encodeURIComponent(category.name)}`}
              className="group p-6 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl text-gray-400 group-hover:text-primary-500">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-500">
                    {category.name}
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {category.count} projects
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transform group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Innovations */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Featured Innovations
          </h2>
          <Link
            href="/innovation-showcase/map"
            className="text-primary-500 hover:text-primary-600 flex items-center"
          >
            View All
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[...new Map(featuredInnovations.map(item => [item.title, item])).values()].map((innovation, index) => (
            <article
              key={index}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden h-full group hover:shadow-lg transition-all duration-300"
            >
              <header className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                    {innovation.category}
                  </span>
                </div>
              </header>
              <div className="flex flex-col flex-grow p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {innovation.title}
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {innovation.projectName}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                      Program
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {innovation.fundingProgram}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                      Stage
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {innovation.stage}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {innovation.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="text-sm font-medium text-green-600 dark:text-green-400">
                    Impact: {innovation.impact}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Innovation Stories Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Link
          href="/innovation-showcase/case-studies"
          className="group block bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500">
            Technical Case Studies →
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Explore detailed technical implementations and results from successful innovation projects.
            Learn about methodologies, challenges overcome, and measurable outcomes.
          </p>
          <div className="flex items-center text-primary-500">
            <span className="font-semibold">View Case Studies</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <Link
          href="/innovation-showcase/success-stories"
          className="group block bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500">
            Success Stories →
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Discover the impact and achievements of our most successful innovations through
            compelling stories, testimonials, and real-world applications.
          </p>
          <div className="flex items-center text-primary-500">
            <span className="font-semibold">Read Success Stories</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* EU Funding Programs */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          EU Funding Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {fundingPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {program.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {program.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                  <span>Total Projects</span>
                  <span className="font-medium">{program.totalProjects}</span>
                </div>
                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                  <span>Total Funding</span>
                  <span className="font-medium">{program.totalFunding}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {program.focus.map((item, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
