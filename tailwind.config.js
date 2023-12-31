/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xsm': '380px',
      },
      fontFamily: {
        'minecraft': 'Minecraft'
      },
      boxShadow: {
        'custom-oval': '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        fadeinup: {
          "0%": { opacity: "1", transform: "translateY(24rem) scale(0.20)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        fadeoutdown: {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "1", transform: "translateY(24rem) scale(0.20)" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadedowncustom:{
          "0%":{ opacity: "1", transform: "translateY(0)"},
          "100%": { opacity: "0", transform: "translateY(2rem)" },
        }

      },
      animation: {
        fadeinup: "fadeinup .25s ease-out",
        fadeoutdown: "fadeoutdown .25s ease-out",
        fadein: "fadein .2s ease-out",
        fadedowncustom:"fadedowncustom .3s ease-out"
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
