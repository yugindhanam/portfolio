/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#6366f1',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          rose: '#f43f5e',
          emerald: '#10b981',
          dark: '#030712',
          card: 'rgba(15, 23, 42, 0.65)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-indigo': '0 0 25px rgba(99, 102, 241, 0.4)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.4)',
        'glow-violet': '0 0 25px rgba(139, 92, 246, 0.4)',
        'pro-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
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
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(25px, -25px) scale(1.05)' },
        },
        orbFloat2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(1.05)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 12px #10b981' },
          '50%': { boxShadow: '0 0 24px #10b981, 0 0 35px rgba(16,185,129,0.3)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' },
        },
      },
      animation: {
        blink: 'blink 0.8s step-end infinite',
        shimmer: 'shimmer 2.2s ease infinite',
        'orb-1': 'orbFloat 9s ease-in-out infinite',
        'orb-2': 'orbFloat2 11s ease-in-out infinite',
        'orb-3': 'orbFloat 13s ease-in-out infinite reverse',
        'glow-pulse': 'glowPulse 2s ease infinite',
        heartbeat: 'heartbeat 1.5s ease infinite',
      },
    },
  },
  plugins: [],
}
