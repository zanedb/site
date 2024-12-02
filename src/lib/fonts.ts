import localFont from 'next/font/local'

export const trioGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/TrioGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TrioGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TrioGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-trio-grotesk',
})
