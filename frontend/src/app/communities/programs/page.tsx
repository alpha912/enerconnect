'use client';

import React from 'react';
import Link from 'next/link';

const programs = [
  {
    name: 'Smart Grid Integration',
    description: 'Research on integrating renewable energy sources into existing power grids',
    projects: 8,
    members: 120,
    status: 'Active',
    tags: ['Smart Grid', 'Renewable Energy', 'Integration']
  },
  {
    name: 'Energy Storage Solutions',
    description: 'Developing innovative energy storage technologies for sustainable power systems',
    projects: 5,
    members: 85,
    status: 'Active',
    tags: ['Storage', 'Battery Technology', 'Grid Stability']
  },
  // Add more sample programs here
];

export default function Programs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Research Programs
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Explore and join active research programs across Europe
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search programs..."
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>

      {/* Programs List */}
      <div className="grid gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {program.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {program.description}
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {program.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {program.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{program.projects} Projects</span>
                <span>{program.members} Members</span>
              </div>
              <Link
                href={`/communities/programs/${index}`}
                className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
