import localFont from 'next/font/local'

export const noeText = localFont({
  src: [
    {
      path: '../../public/fonts/NoeText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NoeText-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/NoeText-Bold.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

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
