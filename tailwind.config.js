/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#0A0E1A', // Deep space dark background
          900: '#101B33', // Deep navy gradient end
          850: '#131B2E', // Card surface background
          800: '#1A243B', // Card hover / border background
          700: '#263554', // Border muted stroke
        },
        tiranga: {
          saffron: '#FF671F',
          saffronGlow: '#FF7722',
          white: '#FFFFFF',
          green: '#046A38',
          greenGlow: '#10B981',
          chakra: '#000080',
          chakraBlue: '#1E3A8A',
          chakraLight: '#2563EB',
        },
        cyan: {
          accent: '#00F0FF',
          glow: '#00F0FF',
        },
        amber: {
          accent: '#FF7722',
          gold: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(0, 240, 255, 0.35)',
        'amber-glow': '0 0 25px -5px rgba(255, 119, 34, 0.35)',
        'saffron-glow': '0 0 25px -5px rgba(255, 103, 31, 0.4)',
        'green-glow': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'chakra-glow': '0 0 25px -5px rgba(37, 99, 235, 0.4)',
        'cosmic-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit': 'orbit 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
