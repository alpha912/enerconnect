import React from 'react';

export default function ResearchNetwork() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Research Network</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Connect with Researchers</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Join our growing network of energy researchers, institutions, and industry experts across Europe.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <p className="text-gray-900 dark:text-gray-100">[Researcher Directory - Coming Soon]</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Collaboration Opportunities</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Discover potential partnerships and joint research opportunities in clean energy.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <p className="text-gray-900 dark:text-gray-100">[Collaboration Board - Coming Soon]</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Featured Research Groups</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <p className="text-gray-900 dark:text-gray-100">[Research Group Card {i} - Coming Soon]</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Upcoming Events</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <p className="text-gray-900 dark:text-gray-100">[Event Card {i} - Coming Soon]</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
