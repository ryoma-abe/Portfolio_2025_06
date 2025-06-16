/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: '#000000',
        secondary: '#4B5563',
        accent: '#0066FF',
        code: '#10B981',
        'dark-primary': '#FFFFFF',
        'dark-secondary': '#9CA3AF',
        'dark-bg': '#111827',
        'dark-surface': '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        '8xl': '5.5rem',
        '9xl': '7rem',
      },
    },
  },
  plugins: [],
}