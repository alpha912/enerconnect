'use client';

import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to ENERConnect.EU
        </h1>
        
        <p className="text-center text-xl mb-8">
          European Network for Energy Research, Collaboration, and Knowledge Exchange
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Feature Cards */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">Research Network</h3>
            <p className="text-gray-600">Connect with EU researchers, institutions, and industry stakeholders.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">Knowledge Exchange</h3>
            <p className="text-gray-600">Access case studies, best practices, and open datasets.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">Project Showcases</h3>
            <p className="text-gray-600">Share and discover innovative energy projects across Europe.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/join"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Support Our Mission
          </a>
        </div>
      </div>
    </div>
  )
}
