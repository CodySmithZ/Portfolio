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
        "bg-top": "#0e0f25",
        "bg-bottom": "#494FBF",

        "green-main": {
          100: "#005c53",
          200: "#00534b",
          300: "#004a42",
          400: "#00403a",
          500: "#003732",
          600: "#002e2a",
          700: "#002521",
          800: "#001c19",
          900: "#001211",
        },
      },
    },
  },
  plugins: [],
};
