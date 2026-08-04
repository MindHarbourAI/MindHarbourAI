/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712',
          900: '#0b0f19',
          850: '#111827',
          800: '#161e31',
          750: '#1e293b',
        },
        accent: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
        text: {
          main: '#f9fafb',
          muted: '#9ca3af',
          dim: '#6b7280',
          accent: '#60a5fa',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '-apple-system', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        cyan: '0 0 25px rgba(6, 182, 212, 0.3)',
        blue: '0 0 30px rgba(59, 130, 246, 0.35)',
        purple: '0 0 30px rgba(139, 92, 246, 0.35)',
      },
      maxWidth: {
        container: '1240px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.15)' },
        },
        rotateCube: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 1.5s infinite',
        cube: 'rotateCube 10s infinite linear',
      },
    },
  },
  plugins: [],
};
