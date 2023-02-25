/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      animation: {
        text: 'text 8s ease-in-out infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '4000% 4000%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '4000% 4000%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}