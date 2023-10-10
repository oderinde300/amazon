/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
        // roboto: ["var(--font-roboto)"],
        // latoo: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};
