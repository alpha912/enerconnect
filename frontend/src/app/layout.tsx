import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { DarkModeProvider } from '@/hooks/useDarkMode';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ENERConnect.EU - European Energy Research Network',
  description: 'European Network for Energy Research, Collaboration, and Knowledge Exchange',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <DarkModeProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navigation />
            <main className="font-mono">
              {children}
            </main>
            <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                {new Date().getFullYear()} ENERConnect.EU - European Network for Energy Research
              </div>
            </footer>
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}
