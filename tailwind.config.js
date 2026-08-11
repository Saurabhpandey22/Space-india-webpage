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
        cyan: {
          accent: '#61DAFB',
          glow: '#00F0FF',
        },
        amber: {
          accent: '#F2B441',
          gold: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(97, 218, 251, 0.3)',
        'amber-glow': '0 0 25px -5px rgba(242, 180, 65, 0.3)',
        'cosmic-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit': 'orbit 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
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
