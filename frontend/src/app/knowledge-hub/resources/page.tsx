import React from 'react';

export default function ResourceSharing() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <section className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Resource Sharing 📊</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Utilize our library of tools, datasets, and technical resources to support your research and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Tools & Software</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-gray-900 dark:text-gray-100">[Tool {i} - Coming Soon]</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Datasets</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-gray-900 dark:text-gray-100">[Dataset {i} - Coming Soon]</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Technical Documentation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'API Documentation',
              'Integration Guides',
              'Best Practices',
              'Case Studies',
              'Research Papers',
              'Technical Reports'
            ].map((doc) => (
              <div key={doc} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{doc}</h3>
                <p className="text-gray-600 dark:text-gray-300">[Documentation Description - Coming Soon]</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Resource Categories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Energy Data Analytics',
              'Simulation Tools',
              'Modeling Software',
              'Visualization Tools'
            ].map((category) => (
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
