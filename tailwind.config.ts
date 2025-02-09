/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-trio-grotesk)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        accent: 'hsl(24, 54%, 67%)',
        accentDark: 'hsl(24, 54%, 57%)',
        motif: 'hsl(354, 32%, 95%)',
        motifDark: 'hsl(354, 32%, 15%)',
        motifText: 'hsl(354, 32%, 59%)',
      },
    },
  },
  plugins: [],
}
