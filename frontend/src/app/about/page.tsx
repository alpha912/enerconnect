'use client';

import React from 'react';
import Link from 'next/link';

const features = [
  {
    title: "Research Network",
    description: "A **centralized network** connecting researchers, institutions, and industry stakeholders across Europe. Facilitating **idea exchange** and fostering **interdisciplinary partnerships**.",
    icon: "🔬"
  },
  {
    title: "Knowledge Exchange Hub",
    description: "Access our curated repository of **case studies**, **best practices**, and **open-access datasets** from EU-funded energy projects.",
    icon: "💡"
  },
  {
    title: "Project Showcases",
    description: "Share **progress**, **outcomes**, and **innovations** on our platform. Bridge the gap between **research** and **market applications**.",
    icon: "🚀"
  },
  {
    title: "Policy Alignment",
    description: "Stay updated with **EU energy policies**, **regulations**, and **compliance standards**. Navigate evolving regulations with confidence.",
    icon: "📜"
  },
  {
    title: "Educational Resources",
    description: "Access comprehensive **training materials**, **webinars**, and **workshops** to enhance expertise in clean energy.",
    icon: "📚"
  },
  {
    title: "Resource Sharing",
    description: "Utilize our library of **tools**, **datasets**, and **technical resources**. Promoting **open access** to EU-funded project information.",
    icon: "📊"
  }
];

const mission = {
  title: "Our Mission",
  description: "To accelerate Europe's energy transition by fostering collaboration, knowledge sharing, and innovation across the research community."
};

const vision = {
  title: "Our Vision",
  description: "A connected European energy research ecosystem that drives sustainable solutions and shapes the future of energy."
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
            Our mission is to accelerate Europe's journey toward sustainable energy by centralizing knowledge,
            fostering collaboration, and enabling real-time sharing of project outcomes and insights.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        What We Offer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          We envision a future where Europe leads the global energy transition through collaborative
          innovation and shared knowledge. Join us in building this sustainable future.
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
