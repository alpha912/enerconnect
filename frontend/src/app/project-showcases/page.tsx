import React from 'react';

export default function ProjectShowcases() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Project Showcases</h1>

        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-gray-900 dark:text-gray-100">[Featured Project {i} - Coming Soon]</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Success Stories</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Discover how research projects are making real-world impact across Europe.
            </p>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-gray-900 dark:text-gray-100">[Success Story {i} - Coming Soon]</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Innovation Pipeline</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore upcoming and ongoing research projects shaping the future of energy.
            </p>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-gray-900 dark:text-gray-100">[Innovation Project {i} - Coming Soon]</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Project Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Renewable Energy', 'Smart Grids', 'Energy Storage'].map((category) => (
              <div key={category} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{category}</h3>
                <p className="text-gray-600 dark:text-gray-300">[Category Description - Coming Soon]</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
