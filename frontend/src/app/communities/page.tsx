/**
 * @file c:/Code/enerconnect/frontend/src/app/communities/page.tsx
 * Communities page component displaying program and project communities
 */

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Type definitions for better type safety and documentation
interface CommunityType {
  title: string;
  description: string;
  link: string;
  stats: {
    [key: string]: string;
  };
}

interface FeaturedCommunity {
  type: 'Program' | 'Project';
  title: string;
  description: string;
  stats: {
    projects?: number;
    workgroups?: number;
    members: string;
  };
  link?: string;
  status?: string;
}

interface ArchivedCommunity {
  type: 'Program' | 'Project';
  title: string;
  description: string;
  stats: {
    publications: number;
    participants: string;
  };
  endDate: string;
}

// Community data with proper typing
const communityTypes: CommunityType[] = [
  {
    title: 'Research Programs',
    description: 'Active research programs across Europe',
    link: '/communities/programs',
    stats: {
      active: '25+',
      members: '500+',
      countries: '15+'
    }
  },
  {
    title: 'Research Projects',
    description: 'Ongoing research projects and initiatives',
    link: '/communities/projects',
    stats: {
      active: '100+',
      members: '1000+',
      collaborations: '50+'
    }
  }
];

const featuredCommunities: FeaturedCommunity[] = [
  {
    type: 'Program',
    title: 'Energy Storage Innovation',
    description: 'Leading research program focusing on next-generation energy storage technologies and grid integration solutions.',
    stats: {
      projects: 15,
      members: '300+'
    },
    link: '/communities/programs/energy-storage'
  },
  {
    type: 'Project',
    title: 'Smart Grid Integration',
    description: 'Collaborative project developing advanced solutions for smart grid deployment in urban environments.',
    stats: {
      workgroups: 8,
      members: '120+'
    },
    link: '/communities/projects/smart-grid'
  },
  {
    type: 'Project',
    title: 'Green Building Technologies',
    description: 'Research project exploring innovative approaches to energy-efficient building systems and materials.',
    stats: {
      workgroups: 6,
      members: '85+'
    },
    status: 'Accepting Members'
  }
];

const archivedCommunities: ArchivedCommunity[] = [
  {
    type: 'Program',
    title: 'Battery Storage Research',
    description: 'Completed research program on advanced battery storage technologies and grid applications.',
    stats: {
      publications: 25,
      participants: '180+'
    },
    endDate: '2023'
  },
  {
    type: 'Project',
    title: 'Urban Microgrids',
    description: 'Successfully implemented microgrid solutions in three European cities.',
    stats: {
      publications: 12,
      participants: '75+'
    },
    endDate: '2023'
  }
];

export default function Communities() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-8">
          <Image
            src="/icons/communities.png"
            alt="Communities Icon"
            width={96}
            height={96}
            className="filter dark:invert dark:brightness-90 opacity-80"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Program & Project Communities
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Join or create communities to collaborate on energy research initiatives
        </p>
      </div>

      {/* Community Explorer */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {communityTypes.map((type, index) => (
          <Link 
            key={index}
            href={type.link}
            className="group block p-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm 
              hover:shadow-lg transition-all duration-300 hover:-translate-y-1
              transform hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors">
              {type.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {type.description}
            </p>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(type.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-primary-500">{value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Create Community Section */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Create New Community
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Start a new research program or project community to collaborate with researchers across Europe
        </p>
        <Link
          href="/communities/create"
          className="inline-block px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold"
        >
          Create Community
        </Link>
      </div>

      {/* Featured Communities */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Featured Communities
          </h2>
          <div className="flex gap-4">
            <Link
              href="/communities/programs"
              className="text-primary-500 hover:text-primary-600 font-semibold flex items-center"
            >
              View All Programs
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/communities/projects"
              className="text-primary-500 hover:text-primary-600 font-semibold flex items-center"
            >
              View All Projects
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCommunities.map((community, index) => (
            index < 2 ? (
              <Link
                key={index}
                href={community.link || '#'}
                className="group block bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 
                  transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                  hover:scale-[1.02]"
              >
                <div className="text-primary-500 font-semibold mb-2">Featured {community.type}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {community.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {community.description}
                </p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{community.stats[community.type === 'Program' ? 'projects' : 'workgroups']} {community.type === 'Program' ? 'Projects' : 'Workgroups'}</span>
                  <span>{community.stats.members} Members</span>
                </div>
              </Link>
            ) : (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
              >
                <div className="text-primary-500 font-semibold mb-2">Featured {community.type}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {community.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {community.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <div>{community.stats.workgroups} Workgroups</div>
                    <div>{community.stats.members} Members</div>
                  </div>
                  <button
                    className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-semibold"
                  >
                    Request to Join
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Archived Communities */}
      <div className="mt-20 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Archived Communities
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Completed programs and projects with valuable research outcomes
            </p>
          </div>
          <Link
            href="/communities/archived"
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-semibold flex items-center"
          >
            View All Archives
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {archivedCommunities.map((community, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-6"
            >
              <div className="text-gray-500 font-semibold mb-2">
                {community.type} • Completed {community.endDate}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {community.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {community.description}
              </p>
              <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
                <span>{community.stats.publications} Publications</span>
                <span>{community.stats.participants} Participants</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
