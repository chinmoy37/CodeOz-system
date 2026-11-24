/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        codeoz: {
          orange: '#FF5A00',
          'orange-hover': '#FF701A',
          'orange-glow': 'rgba(255, 90, 0, 0.35)',
          'orange-subtle': '#FFF4ED',
          dark: '#0B0F19',
          'dark-surface': '#111827',
          'dark-card': '#161F30',
          'dark-border': '#1F2937',
          gray: '#64748B',
          light: '#F8FAFC',
        },
        solar: {
          DEFAULT: '#FF5A00',
          hover: '#FF701A',
          glow: 'rgba(255, 90, 0, 0.4)',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', '"Rubik"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'orange-glow': '0 0 25px rgba(255, 90, 0, 0.35)',
        'orange-glow-lg': '0 0 45px rgba(255, 90, 0, 0.55)',
        'card-soft': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'card-dark': '0 14px 40px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
