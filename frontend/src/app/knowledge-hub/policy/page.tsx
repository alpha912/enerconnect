import React from 'react';

export default function PolicyAlignment() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <section className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Policy Alignment 📜</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Stay updated with EU energy policies, regulations, and compliance standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Latest Policy Updates</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-gray-900 dark:text-gray-100">[Policy Update {i} - Coming Soon]</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Compliance Guidelines</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-gray-900 dark:text-gray-100">[Compliance Guideline {i} - Coming Soon]</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Policy Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'EU Green Deal Framework',
              'Renewable Energy Directives',
              'Energy Efficiency Standards'
            ].map((resource) => (
              <div key={resource} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{resource}</h3>
                <p className="text-gray-600 dark:text-gray-300">[Resource Description - Coming Soon]</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Policy Calendar</h2>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <p className="text-gray-900 dark:text-gray-100">[Interactive Policy Calendar - Coming Soon]</p>
          </div>
        </div>
      </section>
    </main>
  );
}
