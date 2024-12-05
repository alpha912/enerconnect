import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ENERConnect.EU - European Energy Research Network',
  description: 'European Network for Energy Research, Collaboration, and Knowledge Exchange',
  keywords: 'energy research, european network, energy collaboration, research network, energy transition, knowledge exchange',
  authors: [{ name: 'ENERConnect.EU Team' }],
  openGraph: {
    title: 'ENERConnect.EU - European Energy Research Network',
    description: 'European Network for Energy Research, Collaboration, and Knowledge Exchange',
    images: [
      {
        url: '/icons/favicon-512x512.png',
        width: 512,
        height: 512,
        alt: 'ENERConnect.EU Logo',
      }
    ],
    locale: 'en_EU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENERConnect.EU - European Energy Research Network',
    description: 'European Network for Energy Research, Collaboration, and Knowledge Exchange',
    images: ['/icons/favicon-512x512.png'],
  },
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
    other: [
      { rel: 'apple-touch-icon', url: '/icons/favicon-152x152.png' },
      { rel: 'manifest', url: '/manifest.json' }
    ]
  },
  themeColor: '#1a73e8',
  manifest: '/manifest.json'
}
