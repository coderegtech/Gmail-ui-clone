/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#d4d4d4",
        "primary-light": "#f2f2f2",
        secondary: "#2c2c2c",
        "secondary-dark": "#161616",
      },
      boxShadow: {
        "primary-light": "0px 0px 5px rgba(200, 200, 200, 0.1)",
      },
    },
  },
  plugins: [],
};
