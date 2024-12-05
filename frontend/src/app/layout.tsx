import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { DarkModeProvider } from '@/hooks/useDarkMode';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ENERConnect.EU - European Energy Research Network',
  description: 'European Network for Energy Research, Collaboration, and Knowledge Exchange',
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/icons/favicon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/favicon-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    shortcut: [{ url: '/icons/favicon-96x96.png' }],
    other: [
      { rel: 'apple-touch-icon', url: '/icons/favicon-152x152.png' },
      { rel: 'mask-icon', url: '/icons/favicon-512x512.png', color: '#1a73e8' }
    ]
  }
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
              <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/icons/favicon-96x96.png"
                    alt="ENERConnect.EU Logo"
                    width={48}
                    height={48}
                    className="dark:opacity-90"
                  />
                </div>
                <p className="mb-2">{new Date().getFullYear()} ENERConnect.EU - European Network for Energy Research</p>
                <p className="text-xs max-w-2xl mx-auto mb-4">
                  ENERConnect.EU [Independent Project]: A community-driven, open-source platform connecting researchers, institutions, and stakeholders across Europe to accelerate energy transition through open collaboration. Not affiliated with any official organizations.
                </p>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  Icons made by <a href="https://www.flaticon.com/authors/canticons" title="Canticons" className="text-primary-500 hover:underline">Canticons</a> from <a href="https://www.flaticon.com/" title="Flaticon" className="text-primary-500 hover:underline">www.flaticon.com</a>
                </div>
              </div>
            </footer>
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}
