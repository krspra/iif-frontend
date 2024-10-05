/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px #65cbf0", // Small text shadow
        DEFAULT: "2px 2px 4px #65cbf0", // Default text shadow
        lg: "3px 3px 6px #65cbf0", // Large text shadow
      },
      screens: {
        custom1: "930px",
        custom2: "1110px",
        custom3: "500px",
      },
      colors: {
        blue: {
          1: "var(--primary-color)",
        },
        black: {
          1: "#524D3F",
        },
      },
      backgroundImage: {
        "custom-gradient": "var(--bg-gradient)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow-sm": {
          "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow-lg": {
          "text-shadow": "3px 3px 6px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-none": {
          "text-shadow": "none",
        },
      });
    },
  ],
};
