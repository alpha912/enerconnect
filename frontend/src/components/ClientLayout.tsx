'use client';

import { DarkModeProvider } from '@/hooks/useDarkMode';
import { Navigation } from './Navigation';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:text-white">
          {children}
        </main>
      </div>
    </DarkModeProvider>
  );
}
