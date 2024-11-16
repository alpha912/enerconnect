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

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  // Convert markdown-style bold to JSX
  const formattedDescription = description.split('**').map((part, index) => 
    index % 2 === 0 ? part : <strong key={index} className="text-primary-500">{part}</strong>
  );

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-900 dark:text-white">{formattedDescription}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-6xl w-full items-center justify-between">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">About </span>
            <span className="text-primary-500">ENER</span>
            <span className="text-gray-900 dark:text-white">Connect</span>
            <span className="text-primary-500">.EU</span>
          </h1>
          <p className="text-xl mb-8 text-gray-900 dark:text-white">
            Building Europe's premier platform for energy research collaboration
          </p>
        </div>

        {/* Mission Statement */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-primary-500">Our Mission</h2>
          <p className="text-gray-900 dark:text-white">
            Our mission is to accelerate Europe's journey toward sustainable energy by centralizing knowledge,
            fostering collaboration, and enabling real-time sharing of project outcomes and insights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Vision Section */}
        <div className="bg-primary-500 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p>
            We envision a future where Europe leads the global energy transition through collaborative
            innovation and shared knowledge. Join us in building this sustainable future.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link
            href="https://github.com/alpha912/enerconnect/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Join Our Network
          </Link>
        </div>
      </div>
    </div>
  );
}
