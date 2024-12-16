'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const innovationHubs = [
  {
    id: 1,
    name: 'Copenhagen Energy Innovation Hub',
    location: 'Copenhagen, Denmark',
    coordinates: { lat: 55.6761, lng: 12.5683 },
    institutions: ['DTU', 'University of Copenhagen'],
    focus: ['Smart Grid', 'Wind Energy', 'Energy Storage'],
    activeProjects: 24,
    partners: 15
  },
  {
    id: 2,
    name: 'Munich Clean Tech Center',
    location: 'Munich, Germany',
    coordinates: { lat: 48.1351, lng: 11.5820 },
    institutions: ['Technical University of Munich', 'Fraunhofer Institute'],
    focus: ['Solar Technology', 'Grid Management', 'Energy Efficiency'],
    activeProjects: 31,
    partners: 22
  },
  {
    id: 3,
    name: 'Stockholm Energy Lab',
    location: 'Stockholm, Sweden',
    coordinates: { lat: 59.3293, lng: 18.0686 },
    institutions: ['KTH Royal Institute of Technology', 'Stockholm University'],
    focus: ['Battery Technology', 'Smart Buildings', 'District Heating'],
    activeProjects: 28,
    partners: 18
  }
];

const filterCategories = [
  'All',
  'Grid Technology',
  'Energy Storage',
  'Renewable Integration',
  'Smart Buildings',
  'Energy Markets',
  'Mobility Solutions'
];

export default function InnovationMap() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedHub, setSelectedHub] = useState<number | null>(null);
  const [mapView, setMapView] = useState('clusters'); // clusters, heatmap, markers

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && filterCategories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Innovation Map
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore energy innovation hubs and projects across Europe
        </p>
      </div>

      {/* Map Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category Filter
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {filterCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Map View
            </label>
            <select
              value={mapView}
              onChange={(e) => setMapView(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="clusters">Clusters</option>
              <option value="heatmap">Heat Map</option>
              <option value="markers">Markers</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time Period
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option>Last 12 Months</option>
              <option>Last 3 Years</option>
              <option>All Time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Map Container */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700">
            {/* Map placeholder - Replace with actual map component */}
            <div className="flex items-center justify-center text-gray-400">
              [Interactive Map Component]
            </div>
          </div>
        </div>

        {/* Hub Details */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Innovation Hubs
          </h2>
          <div className="space-y-6">
            {innovationHubs.map((hub) => (
              <div
                key={hub.id}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  selectedHub === hub.id
                    ? 'bg-primary-50 dark:bg-gray-700'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                onClick={() => setSelectedHub(hub.id)}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {hub.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {hub.location}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {hub.focus.map((area, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-primary-500 font-semibold">
                      {hub.activeProjects}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      Active Projects
                    </div>
                  </div>
                  <div>
                    <div className="text-primary-500 font-semibold">
                      {hub.partners}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      Partners
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { label: 'Innovation Hubs', value: '15+' },
          { label: 'Active Projects', value: '180' },
          { label: 'Partner Institutions', value: '45' },
          { label: 'Countries', value: '28' }
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center"
          >
            <div className="text-3xl font-bold text-primary-500 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Join the Innovation Network
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Add your institution to the map and connect with other innovators across Europe
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/innovation-showcase/map/register"
            className="px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Register Your Hub
          </Link>
          <button className="px-8 py-4 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
