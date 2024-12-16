'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    title: "Policy Center",
    icon: "📜",
    description: "Access policy updates, regulatory guides, and compliance resources for energy research.",
    link: "/knowledge-hub/policy",
    stats: {
      policies: "150+",
      guides: "45+",
      updates: "Monthly"
    }
  },
  {
    title: "Education Hub",
    icon: "📚",
    description: "Explore training materials, workshop calendars, and learning paths for energy research.",
    link: "/knowledge-hub/education",
    stats: {
      courses: "75+",
      workshops: "25+",
      learners: "1000+"
    }
  },
  {
    title: "Data Repository",
    icon: "📊",
    description: "Access research datasets, analysis tools, and documentation for energy projects.",
    link: "/knowledge-hub/resources",
    stats: {
      datasets: "200+",
      tools: "35+",
      users: "500+"
    }
  }
];

const featuredResources = [
  {
    title: "EU Energy Policy Guide 2024",
    type: "Policy Guide",
    date: "2024-01",
    downloads: 1250,
    category: "Policy"
  },
  {
    title: "Renewable Integration Workshop",
    type: "Training",
    date: "2024-02",
    participants: 180,
    category: "Education"
  },
  {
    title: "Grid Stability Dataset",
    type: "Dataset",
    date: "2024-01",
    downloads: 850,
    category: "Data"
  },
  {
    title: "Energy Storage Best Practices",
    type: "Guide",
    date: "2024-01",
    downloads: 720,
    category: "Education"
  }
];

export default function KnowledgeHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-8">
          <Image
            src="/icons/knowledge.png"
            alt="Knowledge Hub Icon"
            width={96}
            height={96}
            className="filter dark:invert dark:brightness-90 opacity-80"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Knowledge Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Access and share energy research knowledge across the European network
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {categories.map((category) => (
          <Link 
            href={category.link} 
            key={category.title}
            className="group bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {category.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary-500">
              {category.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {category.description}
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              {Object.entries(category.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-lg font-semibold text-primary-500">{value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Resources */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
          Featured Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredResources.map((resource, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-sm text-primary-500 mb-2">{resource.type}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {resource.title}
              </h3>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{resource.date}</span>
                <span>
                  {resource.downloads
                    ? `${resource.downloads} Downloads`
                    : `${resource.participants} Participants`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Access */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Access
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Get started with our most popular resources
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/knowledge-hub/policy/latest"
            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Latest Policies
          </Link>
          <Link
            href="/knowledge-hub/education/workshops"
            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 transition-colors"
          >
            Upcoming Workshops
          </Link>
        </div>
      </div>
    </div>
  );
}
