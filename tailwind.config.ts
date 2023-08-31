/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#14151A",
          200: "#2B2F36",
          300: "#000",
          400: "#1E2329",
          500: "#0B0E11"
        },
        white: {
          100: "#ffffff",
          200: "#FBFBFB",
          300: "#EAECEF",
          400: "#707A8A"
        },
        
        gray: {
          100: "#474D57",
          200: "#F5F5F5",
          300: "#76808F",
          400: "#BFBFBF",
          500: "#AEB4BC",
          600: "#2B2F36",
          700: "#71738B",
          800: "#5c5c5c",
        },
        blue: {
          100: "#1F37B3",
          200: "#EBFBFF",
          300: "#0D1C68",
          400: "#87E9FF",
          500: "#D7F1FF",
        },
        red: {
          100: "#FF1D1D",
        },
        green: {
          100: "#02C0A9",
          900: "rgba(2, 192, 169, 0.20)",
        },
        purple: {
          100: "#869AFF",
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            ".btn__contain-shadow": {
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                background: "#1F37B3",
                backgroundImage: "linear-gradient(rgb(0 0 0/20%) 0 0)",
              },
            },
            ".btn__outline-shadow": {
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                background: "#1F37B3",
                color: "#ffffff",
              },
            },
          },
        },
      }),
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
