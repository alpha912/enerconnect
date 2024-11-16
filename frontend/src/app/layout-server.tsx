import { Metadata } from 'next';
import RootLayout from './layout';

export const metadata: Metadata = {
  title: 'ENERConnect.EU - European Energy Research Network',
  description: 'European Network for Energy Research, Collaboration, and Knowledge Exchange',
};

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayout>{children}</RootLayout>;
}
