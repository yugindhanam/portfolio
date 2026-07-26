/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -30px)' },
        },
        orbFloat2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-20px, 20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px #10b981' },
          '50%': { boxShadow: '0 0 20px #10b981, 0 0 30px rgba(16,185,129,0.3)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },
      },
      animation: {
        blink: 'blink 0.8s step-end infinite',
        shimmer: 'shimmer 2s ease infinite',
        'orb-1': 'orbFloat 8s ease-in-out infinite',
        'orb-2': 'orbFloat2 10s ease-in-out infinite',
        'orb-3': 'orbFloat 12s ease-in-out infinite reverse',
        'glow-pulse': 'glowPulse 2s ease infinite',
        heartbeat: 'heartbeat 1.5s ease infinite',
      },
    },
  },
  plugins: [],
}
