/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f1fe',
          100: '#c5d9fc',
          200: '#9dc0fa',
          300: '#74a7f7',
          400: '#4b8ef5',
          500: '#1a73e8',
          600: '#1557b0',
          700: '#0f3d7d',
          800: '#0a264b',
          900: '#041019',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
