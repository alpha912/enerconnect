'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const successStories = [
  {
    id: 1,
    title: 'Revolutionizing Urban Grid Management',
    institution: 'City of Copenhagen & DTU',
    location: 'Copenhagen, Denmark',
    year: 2024,
    category: 'Smart Cities',
    highlight: 'Reduced energy costs by 40% while improving reliability',
    story: `The City of Copenhagen, in collaboration with DTU, implemented a revolutionary smart grid management system that transformed how urban energy is distributed and consumed. The project not only achieved significant cost reductions but also improved grid reliability and sustainability.`,
    keyAchievements: [
      '40% reduction in energy costs',
      '60% improvement in grid reliability',
      '30% decrease in carbon emissions',
      'Winner of European Energy Innovation Award 2024'
    ],
    imageUrl: '/images/success-stories/copenhagen-grid.jpg',
    testimonial: {
      quote: "This innovation has completely transformed how we manage our city's energy infrastructure.",
      author: "Dr. Maria Hansen",
      role: "Chief Energy Officer, City of Copenhagen"
    }
  },
  {
    id: 2,
    title: 'Breakthrough in Energy Storage Technology',
    institution: 'KTH & Stockholm Energy',
    location: 'Stockholm, Sweden',
    year: 2024,
    category: 'Energy Storage',
    highlight: 'Novel battery technology with 2x capacity at half the cost',
    story: `A groundbreaking collaboration between KTH Royal Institute of Technology and Stockholm Energy led to the development of a revolutionary energy storage solution. The technology has been successfully implemented across multiple sites in Stockholm.`,
    keyAchievements: [
      '200% increase in storage capacity',
      '50% reduction in storage costs',
      '40% improvement in efficiency',
      'Patent pending technology'
    ],
    imageUrl: '/images/success-stories/stockholm-storage.jpg',
    testimonial: {
      quote: "This innovation represents a major leap forward in energy storage technology.",
      author: "Prof. Erik Lindström",
      role: "Lead Researcher, KTH"
    }
  },
  {
    id: 3,
    title: 'AI-Powered Grid Optimization',
    institution: 'Technical University of Munich',
    location: 'Munich, Germany',
    year: 2024,
    category: 'Artificial Intelligence',
    highlight: 'Machine learning system reduces grid losses by 35%',
    story: `The Technical University of Munich developed an AI-powered system that optimizes grid operations in real-time. The system has been successfully deployed across Bavaria, leading to significant improvements in grid efficiency and reliability.`,
    keyAchievements: [
      '35% reduction in grid losses',
      '25% improvement in power quality',
      '45% better demand prediction',
      'Successfully deployed in 5 cities'
    ],
    imageUrl: '/images/success-stories/munich-ai.jpg',
    testimonial: {
      quote: "The impact of this AI system on our grid operations has exceeded all expectations.",
      author: "Dr. Thomas Weber",
      role: "Grid Operations Director, Munich"
    }
  }
];

const categories = [
  'All',
  'Smart Cities',
  'Energy Storage',
  'Artificial Intelligence',
  'Renewable Energy',
  'Grid Management'
];

export default function SuccessStories() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = successStories.filter(story => {
    const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.institution.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Success Stories
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover how innovative energy solutions are making a real impact across Europe
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search success stories..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="space-y-12">
        {filteredStories.map((story) => (
          <div
            key={story.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700">
                {/* Image placeholder */}
                <div className="flex items-center justify-center text-gray-400">
                  [Image]
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                    {story.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {story.year}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {story.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {story.institution}
                </p>
                <p className="text-lg font-medium text-primary-500 mb-4">
                  {story.highlight}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {story.story}
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {story.keyAchievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <blockquote className="border-l-4 border-primary-500 pl-4 mb-6">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-2">
                    "{story.testimonial.quote}"
                  </p>
                  <footer>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {story.testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {story.testimonial.role}
                    </div>
                  </footer>
                </blockquote>
                <Link
                  href={`/innovation-showcase/success-stories/${story.id}`}
                  className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Share Success Story CTA */}
      <div className="mt-16 text-center bg-white dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Share Your Success Story
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Has your institution achieved remarkable results with an energy innovation?
          Share your story and inspire others in the community.
        </p>
        <Link
          href="/innovation-showcase/success-stories/submit"
          className="inline-block px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Submit Your Story
        </Link>
      </div>
    </div>
  );
}
