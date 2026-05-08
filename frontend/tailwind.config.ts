import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#f2f2f2',
        accent: '#E95814',
        tertiary: '#D0D1D2',
        text: '#2c2c2c',
        'footer-light': '#414041',
        'footer-dark': '#383738',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        h1: ['3.25rem', { lineHeight: '4.5rem', fontWeight: '700' }],
        h2: ['3rem', { lineHeight: '3.6rem', fontWeight: '700' }],
        h3: ['2.1rem', { lineHeight: '2.5rem', fontWeight: '600' }],
        h4: ['1.45rem', { lineHeight: '1.74rem', fontWeight: '600' }],
        h5: ['1.05rem', { lineHeight: '1.26rem', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.6rem' }],
        menu: ['0.875rem', { lineHeight: '1.05rem' }],
      },
      boxShadow: {
        default: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
      screens: {
        'phone-only': { max: '599px' },
        'tablet-portrait-up': '768px',
        'tablet-landscape-up': '920px',
        desktop: '1200px',
        'big-desktop': '1800px',
      },
    },
  },
  plugins: [],
};

export default config;
