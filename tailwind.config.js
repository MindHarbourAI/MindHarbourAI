/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        zinc: {
          850: '#202023',
          950: '#09090b',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          150: '#ecebe9',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        brand: {
          blue: '#2563eb',
          'blue-dark': '#1d4ed8',
          emerald: '#10b981',
          'emerald-dark': '#059669',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        card: '0 4px 20px rgba(0,0,0,0.05)',
        hoverCard: '0 8px 30px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
