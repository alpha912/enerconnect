'use client';

import React from 'react';
import Link from 'next/link';

const features = [
  {
    title: "Research Communities",
    description: "A **collaborative platform** for research communities to connect, share resources, and drive innovation. Create and join **thematic groups**, manage **research programs**, and foster **cross-border collaboration**.",
    icon: "👥"
  },
  {
    title: "Expert Network",
    description: "Connect with leading **researchers**, **institutions**, and **industry experts** across Europe. Build your professional network and discover **collaboration opportunities** in clean energy research.",
    icon: "🔬"
  },
  {
    title: "Knowledge Hub",
    description: "Access comprehensive **policy resources**, **educational materials**, and **research data**. Stay informed with the latest developments in energy research and policy.",
    icon: "📚"
  },
  {
    title: "Innovation Showcase",
    description: "Explore groundbreaking **research outcomes**, **success stories**, and **innovative solutions** through our interactive innovation map and case studies.",
    icon: "💡"
  }
];

const mission = {
  title: "Our Mission",
  description: "To empower European energy research communities by providing a collaborative platform that facilitates knowledge sharing, accelerates innovation, and strengthens cross-border partnerships for a sustainable energy future."
};

const vision = {
  title: "Our Vision",
  description: "To be the cornerstone of European energy research collaboration, where diverse communities come together to drive breakthrough innovations and shape the future of sustainable energy systems."
};

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  // Convert markdown-style bold to JSX
  const formattedDescription = description.split('**').map((part, index) => 
    index % 2 === 0 ? part : <strong key={index} className="text-primary-500">{part}</strong>
  );

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-900 dark:text-white">{formattedDescription}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        About ENERConnect.EU
      </h1>
      
      <div className="grid grid-cols-1 gap-8 mt-12 mb-16 max-w-3xl mx-auto">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary-500">Our Mission</h2>
          <p className="text-gray-900 dark:text-white">
            {mission.description}
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        What We Offer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>

      <div className="bg-primary-500 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p>
          {vision.description}
        </p>
      </div>

      <div className="text-center mt-16">
        <Link
          href="/network"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200"
        >
          Join Our Network
        </Link>
      </div>
    </div>
  );
}
