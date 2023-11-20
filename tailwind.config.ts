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
    container: {
      center: true,
      padding: "40px",
      screens: {
        xl: "1280px",
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {

      fontFamily: {
        sans: ["var(--font-soleil)"],
      },
      colors: {
        black: {
          100: "#14151A",
          200: "#2B2F36",
          300: "#000",
          400: "#1E2329",
          500: "#0B0E11",
        },
        white: {
          100: "#ffffff",
          200: "#FBFBFB",
          300: "#EAECEF",
          400: "#707A8A",
          500: "#2B3139",
          600: "#FAFAFA",
          700: "#F8F8F8",
          800: "#F0F0F0",
        },
        grey: {
          100: "#EDEDED",
          200: "#EEEEEE",
          300: "#E0E0E0",
          700: "#616161",
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
          900: "#FAFAFA",
        },
        blue: {
          100: "#1F37B3",
          200: "#EBFBFF",
          300: "#0D1C68",
          400: "#87E9FF",
          500: "#D7F1FF",
          600: "#C6EAFF",
          700: "#0B76A4",
          800: "#0068b5",
          900: "#F4F8FF"
        },
        red: {
          100: "#FF1D1D",
          200: "#FF3333",
        },
        green: {
          100: "#02C0A9",
          200: "#1EB725",
          300: "#D8FFE5",
          400: "#02E755",
          900: "rgba(2, 192, 169, 0.20)",
        },
        purple: {
          100: "#869AFF",
        },
        orange: {
          100: "#FFE2C9",
          200: "#E56700",
        },
      },
      boxShadow: {
        "3xl":
          "rgba(20, 21, 26, 0.1) 0px 0px 1px, rgba(71, 77, 87, 0.16) 0px 16px 32px, rgba(20, 21, 26, 0.16) 0px 8px 16px",
        "4xl": "0px 4px 10px 0px rgba(67, 67, 67, 0.15)",
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
