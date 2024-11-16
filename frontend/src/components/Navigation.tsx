'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DarkModeToggle } from './DarkModeToggle';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center font-mono">
              <span className="text-primary-500">ENER</span>
              <span className="text-gray-900 dark:text-white">Connect</span>
              <span className="text-primary-500">.EU</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-mono ${
                pathname === '/'
                  ? 'text-primary-500'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-mono ${
                pathname === '/about'
                  ? 'text-primary-500'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500'
              }`}
            >
              About
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
