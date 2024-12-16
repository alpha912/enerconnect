'use client';

import React from 'react';
import Link from 'next/link';

const projects = [
  {
    name: 'Grid Stability Enhancement',
    program: 'Smart Grid Integration',
    description: 'Developing advanced control systems for grid stability with high renewable penetration',
    members: 45,
    timeline: '2024-2026',
    status: 'Active',
    tags: ['Control Systems', 'Grid Stability', 'Renewable Integration']
  },
  {
    name: 'Advanced Battery Storage',
    program: 'Energy Storage Solutions',
    description: 'Research on next-generation battery technologies for grid-scale energy storage',
    members: 32,
    timeline: '2024-2025',
    status: 'Active',
    tags: ['Battery Technology', 'Energy Storage', 'Grid Scale']
  },
  // Add more sample projects here
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Research Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Discover and participate in innovative energy research projects
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search projects..."
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
          <option value="">All Programs</option>
          <option value="smart-grid">Smart Grid Integration</option>
          <option value="energy-storage">Energy Storage Solutions</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>

      {/* Projects List */}
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h2>
                <Link
                  href={`/communities/programs`}
                  className="text-primary-500 hover:text-primary-600 mb-2 block"
                >
                  {project.program}
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {project.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
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
                <span>{project.members} Members</span>
                <span>Timeline: {project.timeline}</span>
              </div>
              <Link
                href={`/communities/projects/${index}`}
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
