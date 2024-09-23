import type { Metadata } from 'next'
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
      <body className={`${haffer.variable} font-sans`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
