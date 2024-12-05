import React from 'react';

export default function EducationalResources() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <section className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Educational Resources 📚</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Access comprehensive training materials, webinars, and workshops to enhance expertise in clean energy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Training Materials</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-gray-900 dark:text-gray-100">[Training Module {i} - Coming Soon]</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Upcoming Webinars</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-gray-900 dark:text-gray-100">[Webinar {i} - Coming Soon]</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Workshops</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <p className="text-gray-900 dark:text-gray-100">[Workshop {i} - Coming Soon]</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Learning Paths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Renewable Energy Fundamentals',
              'Smart Grid Technologies',
              'Energy Storage Solutions',
              'Policy & Regulation'
            ].map((path) => (
              <div key={path} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{path}</h3>
                <p className="text-gray-600 dark:text-gray-300">[Path Description - Coming Soon]</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Educational Calendar</h2>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <p className="text-gray-900 dark:text-gray-100">[Interactive Educational Calendar - Coming Soon]</p>
          </div>
        </div>
      </section>
    </main>
  );
}
