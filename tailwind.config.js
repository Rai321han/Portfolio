/** @type {import('tailwindcss').Config} */

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
        lg: "1220px",
        md: "720px",
        sm: "500px",
        xs: "400px",
        xxs: "350px",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        marquee: "marquee 20s linear infinite",
        imageChangeAnimation: "imageChangeAnimation 300ms ease-out",
        ScaleYanimation: "ScaleYanimation 300ms ease-in",
        ScaleXanimation: "ScaleXanimation 300ms ease-in-out",
        ScaleXanimationReverse: "ScaleXanimationReverse 300ms ease-in-out",
        moveShade: "moveShade 10s linear infinite",
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
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
        moveShade: {
          "0%": {
            top: "50",
            left: "0%",
          },
          "25%": {
            top: "0%",
            left: "50%",
          },
          "50%": {
            top: "50%",
            left: "100%",
          },
          "75%": {
            top: "100%",
            left: "50%",
          },
          "100%": {
            top: "50%",
            left: "0%",
          },
        },

        ScaleXanimationReverse: {
          "0%": { transform: "translateX(100%)", opacity: 0 },

          "70%": { transform: "translateX(50%)", opacity: 0.2 },

          "100%": { transform: "translateX(0%)", opacity: 1 },
        },

        ScaleXanimation: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },

          "50%": { transform: "translateX(-50%)", opacity: 0.2 },

          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },

      fontFamily: {
        prosto: "'Prosto One', sans-serif",
        chaney: "'chaney', sans-serif",
        clicker: "'Clicker Script', cursive",
        Inter: "'Inter', sans-serif",
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        grad1: "var(--primary-grad-1)",
        grad2: "var(--primary-grad-2)",
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
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
