'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const discussionGroups = [
  {
    title: 'Energy Storage Technologies',
    description: 'Discussion forum focused on advances in energy storage, including batteries, thermal storage, and emerging technologies.',
    topics: [
      'Battery Technologies',
      'Thermal Energy Storage',
      'Hydrogen Storage',
      'Grid Integration'
    ],
    icon: '🔋',
    activeMembers: 245,
    discussions: 56
  },
  {
    title: 'Smart Grid Integration',
    description: 'Cross-cutting group exploring the intersection of smart grids, IoT, and renewable energy integration.',
    topics: [
      'Grid Modernization',
      'IoT Applications',
      'Demand Response',
      'Grid Resilience'
    ],
    icon: '🔌',
    activeMembers: 189,
    discussions: 34
  },
  {
    title: 'Green Building Solutions',
    description: 'Focused discussions on energy efficiency in buildings, sustainable materials, and smart building technologies.',
    topics: [
      'Energy Efficient Design',
      'Smart Building Systems',
      'Sustainable Materials',
      'Building Standards'
    ],
    icon: '🏢',
    activeMembers: 312,
    discussions: 78
  },
  {
    title: 'Policy & Regulations',
    description: 'Cross-cutting group discussing energy policies, regulations, and their impact on innovation and implementation.',
    topics: [
      'EU Energy Policy',
      'Carbon Pricing',
      'Standards & Certification',
      'Market Mechanisms'
    ],
    icon: '📜',
    activeMembers: 423,
    discussions: 92
  }
];

const upcomingDiscussions = [
  {
    title: 'Future of Energy Storage',
    date: '2024-12-20',
    type: 'Expert Panel',
    participants: 50,
    status: 'Open',
    description: 'Discussion on emerging trends and challenges in energy storage technologies.'
  },
  {
    title: 'Smart Grid Integration Challenges',
    date: '2024-12-28',
    type: 'Round Table',
    participants: 100,
    status: 'Limited Spots',
    description: 'Addressing key challenges in smart grid deployment and integration.'
  },
  {
    title: 'Green Building Innovation Forum',
    date: '2025-01-15',
    type: 'Workshop',
    participants: 200,
    status: 'Early Bird',
    description: 'Interactive session on innovative approaches to sustainable building design.'
  }
];

export default function Collaboration() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Thematic Discussion Groups
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join expert-led discussion groups focused on key energy innovation topics. Connect with peers, share insights, and explore cross-cutting themes in energy technology and policy.
          </p>
        </div>

        {/* Discussion Groups Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {discussionGroups.map((group, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{group.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {group.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {group.description}
              </p>
              <div className="space-y-2">
                {group.topics.map((topic, i) => (
                  <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="mr-2">•</span>
                    {topic}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{group.activeMembers} active members</span>
                <span>{group.discussions} discussions</span>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Discussions Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Upcoming Discussions
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingDiscussions.map((event, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    {event.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <div>Date: {event.date}</div>
                  <div>Type: {event.type}</div>
                  <div>Participants: {event.participants}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Hub Link */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Looking for Resources?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Visit our Knowledge Hub for comprehensive resources, research papers, and best practices in energy innovation.
            </p>
            <Link
              href="/knowledge-hub"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Visit Knowledge Hub
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
