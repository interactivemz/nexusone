/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        bp900: "900px",
        bp600: "600px",
      },
      colors: {
        navy: "#0B1524",
        "navy-mid": "#111E33",
        "navy-card": "#0F1C2E",
        "navy-border": "#1C2E45",
        gold: "#C9A84C",
        "gold-light": "#E5C97A",
        "gold-pale": "rgba(201,168,76,.12)",
        "gold-line": "rgba(201,168,76,.3)",
        white: "#FFFFFF",
        "off-white": "#F4F1EB",
        muted: "#6B7E96",
        text: "#B8C8D8",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        wordmark: ["Cottox", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
