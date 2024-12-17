'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DarkModeToggle } from './DarkModeToggle';
import Image from 'next/image';
import { useState } from 'react';

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { href: '/', label: 'Home' },
    { 
      href: '/communities', 
      label: 'Communities',
      subItems: [
        { href: '/communities/programs', label: 'Research Programs' },
        { href: '/communities/projects', label: 'Research Projects' },
        { href: '/communities/create', label: 'Create Community' },
      ]
    },
    { 
      href: '/research-network', 
      label: 'Expert Network',
      subItems: [
        { href: '/research-network/researchers', label: 'Researcher Directory' },
        { href: '/research-network/institutions', label: 'Institution Network' },
        { href: '/research-network/collaboration', label: 'Collaboration Tools' },
      ]
    },
    { 
      href: '/knowledge-hub', 
      label: 'Knowledge Hub',
      subItems: [
        { href: '/knowledge-hub/policy', label: 'Policy Center' },
        { href: '/knowledge-hub/education', label: 'Education Hub' },
        { href: '/knowledge-hub/data', label: 'Data Repository' },
      ]
    },
    { 
      href: '/innovation-showcase', 
      label: 'Innovation Showcase',
      subItems: [
        { href: '/innovation-showcase/case-studies', label: 'Case Studies' },
        { href: '/innovation-showcase/success-stories', label: 'Success Stories' },
        { href: '/innovation-showcase/map', label: 'Innovation Map' },
      ]
    },
    { href: '/about', label: 'About' }
  ];

  const toggleDropdown = (href: string) => {
    setOpenDropdown(openDropdown === href ? null : href);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/icons/favicon-32x32.png"
                alt="ENERConnect.EU Logo"
                width={32}
                height={32}
                className="dark:opacity-90"
              />
              <div className="font-mono">
                <span className="text-primary-500">ENER</span>
                <span className="text-gray-900 dark:text-white">Connect</span>
                <span className="text-primary-500">.EU</span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 ml-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.subItems ? (
                  <div>
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={`px-3 py-2 rounded-md text-sm font-mono ${
                          pathname === link.href
                            ? 'text-primary-500'
                            : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() => toggleDropdown(link.href)}
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          className={`h-4 w-4 transform ${openDropdown === link.href ? 'rotate-180' : ''} ${
                            pathname === link.href ? 'text-primary-500' : 'text-gray-600 dark:text-gray-300'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {openDropdown === link.href && (
                      <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm font-mono ${
                                pathname === subItem.href
                                  ? 'text-primary-500 bg-gray-50 dark:bg-gray-600'
                                  : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-600'
                              }`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-mono ${
                      pathname === link.href
                        ? 'text-primary-500'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.subItems ? (
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className={`flex-grow px-3 py-2 rounded-md text-base font-mono ${
                          pathname === link.href
                            ? 'text-primary-500 bg-gray-50 dark:bg-gray-700'
                            : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() => toggleDropdown(link.href)}
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          className={`h-4 w-4 transform ${openDropdown === link.href ? 'rotate-180' : ''} ${
                            pathname === link.href ? 'text-primary-500' : 'text-gray-600 dark:text-gray-300'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {openDropdown === link.href && (
                      <div className="mt-2 space-y-1">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block pl-6 pr-4 py-2 text-base font-mono ${
                              pathname === subItem.href
                                ? 'text-primary-500 bg-gray-50 dark:bg-gray-700'
                                : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-mono ${
                      pathname === link.href
                        ? 'text-primary-500 bg-gray-50 dark:bg-gray-700'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
