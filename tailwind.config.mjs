/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#3730a3',
        secondary: '#7c3aed',
        accent: '#059669',
        code: '#64748b',
        'dark-bg': '#0a0a0a',
        'dark-primary': '#818cf8',
        'dark-secondary': '#a78bfa',
        'dark-accent': '#34d399',
        'dark-code': '#94a3b8',
      },
      fontSize: {
        '8xl': '6rem',
        '9xl': '8rem',
      },
    },
  },
  plugins: [],
}