import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Banner from '@/components/banner'
import Footer from '@/components/footer'
import { trioGrotesk } from '@/lib/fonts'
import { baseUrl } from './sitemap'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: '@zanedb',
    template: '%s — @zanedb',
  },
  description: 'Zane is a web designer & friend based in San Francisco.',
  openGraph: {
    title: '@zanedb',
    description: 'Zane is a web designer & friend based in San Francisco.',
    url: baseUrl,
    siteName: '@zanedb',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://zanedb.com/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${trioGrotesk.variable} font-sans antialiased`}>
        <Banner />
        {/*<Nav />*/}
        <main className="p-4 py-6 md:p-8 lg:p-12 max-w-screen-md w-full mx-auto">
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  )
}
