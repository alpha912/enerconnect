import React from 'react';
import Link from 'next/link';

export default function KnowledgeHub() {
  const categories = [
    {
      title: "Policy Alignment",
      icon: "📜",
      description: "Stay updated with EU energy policies, regulations, and compliance standards.",
      link: "/knowledge-hub/policy"
    },
    {
      title: "Educational Resources",
      icon: "📚",
      description: "Access comprehensive training materials, webinars, and workshops.",
      link: "/knowledge-hub/education"
    },
    {
      title: "Resource Sharing",
      icon: "📊",
      description: "Utilize our library of tools, datasets, and technical resources.",
      link: "/knowledge-hub/resources"
    }
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Knowledge Exchange Hub</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <Link href={category.link} key={category.title}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{category.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Featured Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <p className="text-gray-900 dark:text-gray-100">[Featured Resource Card {i} - Coming Soon]</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Latest Updates</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <p className="text-gray-900 dark:text-gray-100">[Update Card {i} - Coming Soon]</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
