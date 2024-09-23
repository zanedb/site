import type { Metadata } from 'next'
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
        <Nav />
      <body className={`${trioGrotesk.variable} font-sans bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}
