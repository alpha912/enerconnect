'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    title: "Research Network",
    description: "Connect with EU researchers, institutions, and industry stakeholders to drive ",
    impact: "innovation",
    afterImpact: "."
  },
  {
    title: "Knowledge Exchange",
    description: "Access case studies, best practices, and datasets to enhance ",
    impact: "collaboration",
    afterImpact: "."
  },
  {
    title: "Project Showcases",
    description: "Share and discover groundbreaking energy projects that create lasting ",
    impact: "impact",
    afterImpact: " across Europe."
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm">
        {/* Hero Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/icons/favicon-512x512.png"
            alt="ENERConnect.EU Logo"
            width={196}
            height={196}
            className="dark:opacity-90"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-primary-500">ENER</span>
          <span className="text-gray-900 dark:text-white">Connect</span>
          <span className="text-primary-500">.EU</span>
        </h1>
        
        <p className="text-center text-xl mb-8 text-gray-900 dark:text-white">
          European Network for Energy Research, Collaboration, and Knowledge Exchange
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
                <span className="text-primary-500 font-semibold">{feature.impact}</span>
                {feature.afterImpact}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="https://github.com/alpha912/enerconnect"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Support Our Mission
          </Link>
        </div>
      </div>
    </div>
  );
}
