'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const networkStats = {
  researchers: '1,500+',
  institutions: '200+',
  countries: '25+',
  collaborations: '350+'
};

const featuredExperts = [
  {
    name: 'Dr. Sarah Johnson',
    institution: 'Technical University of Munich',
    expertise: ['Smart Grids', 'Energy Storage', 'Power Systems'],
    country: 'Germany'
  },
  {
    name: 'Prof. Marco Rossi',
    institution: 'University of Milan',
    expertise: ['Renewable Energy', 'Grid Integration', 'Energy Policy'],
    country: 'Italy'
  },
  {
    name: 'Dr. Elena Petrova',
    institution: 'KTH Royal Institute of Technology',
    expertise: ['Energy Economics', 'Sustainability', 'Climate Policy'],
    country: 'Sweden'
  }
];

const featuredInstitutions = [
  {
    name: 'Technical University of Munich',
    country: 'Germany',
    type: 'University',
    expertise: ['Renewable Energy', 'Smart Grids', 'Energy Storage'],
    activeProjects: 15
  },
  {
    name: 'SINTEF Energy Research',
    country: 'Norway',
    type: 'Research Institute',
    expertise: ['Energy Systems', 'Hydrogen', 'Grid Integration'],
    activeProjects: 12
  },
  {
    name: 'Delft University of Technology',
    country: 'Netherlands',
    type: 'University',
    expertise: ['Sustainable Energy', 'Energy Efficiency', 'Power Systems'],
    activeProjects: 18
  }
];

const topDiscussions = [
  {
    title: 'Future of Energy Storage Technologies',
    topic: 'Energy Storage',
    participants: 45,
    lastActive: '2024-12-15',
    responses: 128
  },
  {
    title: 'Smart Grid Integration Challenges in Urban Areas',
    topic: 'Smart Grids',
    participants: 38,
    lastActive: '2024-12-16',
    responses: 95
  },
  {
    title: 'EU Policy Impact on Green Building Standards',
    topic: 'Policy & Regulations',
    participants: 52,
    lastActive: '2024-12-14',
    responses: 156
  }
];

export default function ResearchNetwork() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-8">
          <Image
            src="/icons/expert.png"
            alt="Expert Network Icon"
            width={96}
            height={96}
            className="filter dark:invert dark:brightness-90 opacity-80"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Expert Network
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Connect with researchers and institutions across Europe to drive innovation in energy research
        </p>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {Object.entries(networkStats).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">{value}</div>
            <div className="text-gray-600 dark:text-gray-300 capitalize">{key.replace('_', ' ')}</div>
          </div>
        ))}
      </div>

      {/* Directory Links */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Link
          href="/research-network/researchers"
          className="group bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500">
            Researcher Directory →
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Find and connect with leading researchers in energy-related fields across Europe.
            Filter by expertise, institution, or research interests.
          </p>
        </Link>

        <Link
          href="/research-network/institutions"
          className="group bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500">
            Institution Network →
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore research centers, universities, and industry partners.
            Discover collaboration opportunities and joint research initiatives.
          </p>
        </Link>
      </div>

      {/* Featured Experts */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Featured Experts
          </h2>
          <Link
            href="/research-network/researchers"
            className="text-primary-500 hover:text-primary-600 font-semibold flex items-center"
          >
            View All
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredExperts.map((expert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {expert.name}
              </h3>
              <p className="text-primary-500 mb-4">{expert.institution}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {expert.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {expert.country}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Institutions */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Featured Institutions
          </h2>
          <Link
            href="/research-network/institutions"
            className="text-primary-500 hover:text-primary-600 font-semibold flex items-center"
          >
            View All
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredInstitutions.map((institution, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {institution.name}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                <span>{institution.country}</span>
                <span>•</span>
                <span>{institution.type}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {institution.expertise.map((area, areaIndex) => (
                  <span
                    key={areaIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-primary-500 text-sm">
                {institution.activeProjects} Active Projects
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Discussions Section */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Discussions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Join the conversation on trending energy innovation topics
            </p>
          </div>
          <Link
            href="/research-network/collaboration"
            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Explore More
          </Link>
        </div>
        
        <div className="grid gap-6">
          {topDiscussions.map((discussion, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {discussion.title}
                </h3>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 rounded-full text-sm">
                  {discussion.topic}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                <span>{discussion.participants} participants</span>
                <span>•</span>
                <span>{discussion.responses} responses</span>
                <span>•</span>
                <span>Last active: {new Date(discussion.lastActive).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
