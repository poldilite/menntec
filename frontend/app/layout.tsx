import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { PageLoader } from './components/PageLoader'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '600', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MennTEC - Innovative Beratung und Entwicklung',
  description: 'MennTEC bietet hochwertige IT-Beratung, Webentwicklung und digitale Lösungen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <PageLoader />
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
