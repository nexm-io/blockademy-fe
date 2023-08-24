/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: {
        100: "#14151A",
      },
      white: {
        100: "#ffffff",
      },
      gray: {
        100: "#474D57",
        200: "#F5F5F5",
        300: "#76808F",
      },
      blue: {
        100: "#1F37B3",
        200: "#EBFBFF",
      },
      green: {
        100: "#02C0A9",
        900: "rgba(2, 192, 169, 0.20)",
      },
    },
  },

  plugins: [],
};
