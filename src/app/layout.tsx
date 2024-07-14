import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Nav from '@/components/nav'

const haffer = localFont({
  src: [
    {
      path: '../../public/fonts/Haffer-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Haffer-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Haffer-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Haffer-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Haffer-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-haffer',
})

export const metadata: Metadata = {
  title: '@zanedb',
  description: 'Zane is a developer & friend based in San Francisco.',
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
