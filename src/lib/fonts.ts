import localFont from 'next/font/local'

export const haffer = localFont({
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

