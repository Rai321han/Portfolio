/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        pdSecLarge: "var(--padding-section-lg)",
        pdSecMedium: "var(--padding-section-md)",
        pdSecSmall: "var(--padding-section-sm)",

        pdIconLarge: "var(--padding-icon-lg)",
        pdIconSmall: "var(--padding-icon-sm)",
      },

      screens: {
        lg: "1024px",
        md: "800px",
        sm: "500px",
        xs: "400px",
        xxs: "350px",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        imageChangeAnimation: "imageChangeAnimation 300ms ease-out",
        ScaleYanimation: "ScaleYanimation 300ms ease-in",
        ScaleXanimation: "ScaleXanimation 300ms ease-in-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        imageChangeAnimation: {
          "0%": { transform: "scale(90%)" },

          "100%": { transform: "scale(100%)" },
        },
        ScaleYanimation: {
          "0%": { transform: "scaleY(60%)" },

          "100%": { transform: "scaleY(100%)" },
        },

        ScaleXanimation: {
          "0%": { transform: "scaleX(0%)" },

          "100%": { transform: "scaleX(100%)" },
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
