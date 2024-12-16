'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    title: "Program & Project Communities",
    description: "Connect with energy research programs and projects across Europe. Join existing communities or ",
    impact: "create new ones",
    afterImpact: ".",
    link: "/communities",
    icon: "/icons/communities.png"
  },
  {
    title: "Expert Network",
    description: "Connect with EU researchers, institutions, and industry stakeholders to drive ",
    impact: "innovation",
    afterImpact: ".",
    link: "/research-network",
    icon: "/icons/expert.png"
  },
  {
    title: "Knowledge Hub",
    description: "Access case studies, best practices, and datasets to enhance ",
    impact: "collaboration",
    afterImpact: ".",
    link: "/knowledge-hub",
    icon: "/icons/knowledge.png"
  },
  {
    title: "Innovation Showcase",
    description: "Share and discover groundbreaking energy projects that create lasting ",
    impact: "impact",
    afterImpact: " across Europe.",
    link: "/innovation-showcase",
    icon: "/icons/innovation.png"
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
        
        <p className="text-center text-xl mb-12 text-gray-900 dark:text-white">
          European Network for Energy Research, Collaboration, and Knowledge Exchange
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <Link 
              href={feature.link} 
              key={index} 
              className="group block"
            >
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg 
                             transform transition-all duration-300 ease-in-out
                             hover:shadow-xl hover:scale-[1.02] hover:border-primary-500 dark:hover:border-primary-400
                             bg-white dark:bg-gray-800 text-center">
                <div className="flex justify-center mb-6">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} Icon`}
                    width={64}
                    height={64}
                    className="filter dark:invert dark:brightness-90 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-primary-500 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                  <span className="font-semibold text-primary-500 group-hover:text-primary-600 transition-colors">
                    {feature.impact}
                  </span>
                  {feature.afterImpact}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/communities"
            className="px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold"
          >
            Join Our Network
          </Link>
        </div>
      </div>
    </div>
  );
}
