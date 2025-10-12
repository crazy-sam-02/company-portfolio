/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 10px 0px #a78bfa, 0 0 20px 0px #a78bfa80',
          },
          '50%': {
            boxShadow: '0 0 20px 5px #a78bfa, 0 0 40px 10px #a78bfa80',
          },
        }
      }
    },
  },
  plugins: [],
}