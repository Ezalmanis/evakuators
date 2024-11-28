import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.orange,
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
  darkMode: "class",
};
