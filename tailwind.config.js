/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "selector",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1535px",
        xl: "1279px",
        lg: "1023px",
        sm: "639px",
        md: "767px",
      },
      maxWidth: "100%",
    },

    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "836px" },
      sm: { max: "639px" },
      exsm: { max: "380px" },
    },

    extend: {
      colors: {
        "text-yellow-500": "#ffc312",
      },

      backgroundImage: {
        "green-repeating":
          "repeating-linear-gradient(135deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 2px,transparent 2px, transparent 4px),linear-gradient(45deg, rgb(18, 105, 233),rgb(166, 255, 155));",
        "blue-repeating":
          "repeating-linear-gradient(135deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 2px,transparent 2px, transparent 4px),linear-gradient(45deg, rgb(82, 85, 91),rgb(76, 83, 137));",
      },

      keyframes: {
        jello_horizontal: {
          "0%": {
            transform: "scale3D(1, 1, 1)",
          },
          "30%": {
            transform: "scale3D(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3D(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3D(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3D(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3D(1.05, 0.95, 1)",
          },
          "100%": {
            transform: "scale3D(1, 1, 1)",
          },
        },

        rotation: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(90deg)",
          },

          spin: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        },
      },

      animation: {
        jello_horizontal: "jello_horizontal 0.9s both",
        rotation: "rotation 0.5s ",
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },

  plugins: [],
};
