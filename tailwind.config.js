/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": {
            "border-color": "transparent",
          },
          "50%": {
            "border-color": "white",
          },
        },
      },
      animation: {
        typing: "typing 2s infinite",
      },
      colors: {
        text: "#e9e6e8",
      },
    },
  },
  plugins: [],
};
