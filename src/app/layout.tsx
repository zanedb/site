import type { Metadata } from 'next'
import Banner from '@/components/banner'
import { trioGrotesk } from '@/lib/fonts'
import './globals.css'
// import Nav from '@/components/nav'

export const metadata: Metadata = {
  title: '@zanedb',
  description: 'Zane is a web designer & friend based in San Francisco.',
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
        <main className="p-8 md:p-12 max-w-screen-md w-full mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
