'use client';

import React from 'react';
import { Navigation } from './Navigation';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} ENERConnect.EU - European Network for Energy Research, Collaboration, and Knowledge Exchange
          </div>
        </div>
      </footer>
    </div>
  );
}
