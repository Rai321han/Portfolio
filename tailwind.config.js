/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      fontFamily: {
        prosto: "'Prosto One', sans-serif",
        chaney: "'chaney', sans-serif",
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        primaryDim: "var(--primary-dim)",
        secondary: "var(--secondary)",
        secondaryDim: "var(--secondary-dim)",
        textColor: "var(--text-color)",
        textColorDim: "var(--text-color-dim)",
        iconColor: "var(--icon-color)",
        borderColor: "var(--border-color)",
        fadingColor: "var(--fadingColor)",
      },
    },
  },
  plugins: [],
};
