import type { Metadata } from 'next';
import { Footer } from './components';
import './globals.css';

export const metadata: Metadata = {
  title: 'MennTEC - Innovative Beratung und Entwicklung',
  description: 'MennTEC bietet hochwertige IT-Beratung, Webentwicklung und digitale Lösungen.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
