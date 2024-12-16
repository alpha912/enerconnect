'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const policyUpdates = [
  {
    title: "EU Energy Efficiency Directive 2024",
    date: "2024-01-15",
    type: "Directive",
    status: "New",
    summary: "Updated guidelines for energy efficiency in research facilities and laboratories."
  },
  {
    title: "Renewable Energy Research Framework",
    date: "2024-01-10",
    type: "Framework",
    status: "Updated",
    summary: "Framework for conducting renewable energy research across EU member states."
  },
  {
    title: "Data Sharing Guidelines",
    date: "2024-01-05",
    type: "Guidelines",
    status: "Active",
    summary: "Guidelines for sharing research data between institutions and countries."
  }
];

const complianceResources = [
  {
    title: "Research Ethics Guidelines",
    category: "Ethics",
    lastUpdated: "2024-01",
    downloads: 450
  },
  {
    title: "Data Protection Standards",
    category: "Data Protection",
    lastUpdated: "2024-01",
    downloads: 380
  },
  {
    title: "Laboratory Safety Regulations",
    category: "Safety",
    lastUpdated: "2023-12",
    downloads: 520
  }
];

const policyCategories = [
  {
    name: "EU Green Deal",
    description: "Policies and guidelines related to the European Green Deal initiatives",
    documents: 45,
    lastUpdate: "2024-01"
  },
  {
    name: "Energy Research",
    description: "Research conduct and methodology guidelines for energy projects",
    documents: 32,
    lastUpdate: "2024-01"
  },
  {
    name: "Data Management",
    description: "Data handling, sharing, and protection policies",
    documents: 28,
    lastUpdate: "2023-12"
  },
  {
    name: "Collaboration",
    description: "Guidelines for cross-border research collaboration",
    documents: 35,
    lastUpdate: "2024-01"
  }
];

export default function PolicyCenter() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Policy Center
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Access policy updates, regulatory guides, and compliance resources for energy research
        </p>
      </div>

      {/* Latest Updates */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          Latest Policy Updates
        </h2>
        <div className="grid gap-6">
          {policyUpdates.map((update, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {update.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {update.summary}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  update.status === 'New'
                    ? 'bg-green-100 text-green-800'
                    : update.status === 'Updated'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {update.status}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{update.date}</span>
                <span>{update.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Policy Categories */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          Policy Categories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {policyCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {category.description}
              </p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{category.documents} Documents</span>
                <span>Updated: {category.lastUpdate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Resources */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          Compliance Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {complianceResources.map((resource, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <div className="text-sm text-primary-500 mb-2">{resource.category}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {resource.title}
              </h3>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Updated: {resource.lastUpdated}</span>
                <span>{resource.downloads} Downloads</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
