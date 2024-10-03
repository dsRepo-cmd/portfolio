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
    transitionDuration: {
      DEFAULT: "150ms",
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
        "hero-bg": "url('./public/hero-bg.jpg')",
        "orange-gradient":
          "linear-gradient(109deg, rgba(75, 75, 75, 0.03) 0%, rgba(75, 75, 75, 0.03) 36%,rgba(5, 5, 5, 0.03) 36%, rgba(5, 5, 5, 0.03) 60%,rgba(230, 230, 230, 0.03) 60%, rgba(230, 230, 230, 0.03) 76%,rgba(204, 204, 204, 0.03) 76%, rgba(204, 204, 204, 0.03) 83%,rgba(30, 30, 30, 0.03) 83%, rgba(30, 30, 30, 0.03) 91%,rgba(119, 119, 119, 0.03) 91%, rgba(119, 119, 119, 0.03) 96%,rgba(27, 27, 27, 0.03) 96%, rgba(27, 27, 27, 0.03) 100%),linear-gradient(357deg, rgba(159, 159, 159, 0.03) 0%, rgba(159, 159, 159, 0.03) 7%,rgba(227, 227, 227, 0.03) 7%, rgba(227, 227, 227, 0.03) 26%,rgba(204, 204, 204, 0.03) 26%, rgba(204, 204, 204, 0.03) 28%,rgba(181, 181, 181, 0.03) 28%, rgba(181, 181, 181, 0.03) 34%,rgba(138, 138, 138, 0.03) 34%, rgba(138, 138, 138, 0.03) 36%,rgba(44, 44, 44, 0.03) 36%, rgba(44, 44, 44, 0.03) 74%,rgba(130, 130, 130, 0.03) 74%, rgba(130, 130, 130, 0.03) 100%),linear-gradient(132deg, rgba(191, 191, 191, 0.03) 0%, rgba(191, 191, 191, 0.03) 24%,rgba(174, 174, 174, 0.03) 24%, rgba(174, 174, 174, 0.03) 31%,rgba(19, 19, 19, 0.03) 31%, rgba(19, 19, 19, 0.03) 42%,rgba(242, 242, 242, 0.03) 42%, rgba(242, 242, 242, 0.03) 70%,rgba(131, 131, 131, 0.03) 70%, rgba(131, 131, 131, 0.03) 75%,rgba(167, 167, 167, 0.03) 75%, rgba(167, 167, 167, 0.03) 77%,rgba(64, 64, 64, 0.03) 77%, rgba(64, 64, 64, 0.03) 100%),linear-gradient(90deg, rgb(245, 198, 84),rgb(209, 69, 18))",
        "blue-gradient":
          "linear-gradient(177deg, rgba(122, 122, 122, 0.05) 0%, rgba(122, 122, 122, 0.05) 40%,rgba(64, 64, 64, 0.05) 40%, rgba(64, 64, 64, 0.05) 100%),linear-gradient(300deg, rgba(200, 200, 200, 0.1) 0%, rgba(200, 200, 200, 0.1) 62%,rgba(39, 39, 39, 0.1) 62%, rgba(39, 39, 39, 0.1) 100%),linear-gradient(28deg, rgba(243, 243, 243, 0.01) 0%, rgba(243, 243, 243, 0.01) 58%,rgba(154, 154, 154, 0.01) 58%, rgba(154, 154, 154, 0.01) 100%),linear-gradient(318deg, rgba(136, 136, 136, 0.04) 0%, rgba(136, 136, 136, 0.04) 58%,rgba(205, 205, 205, 0.04) 58%, rgba(205, 205, 205, 0.04) 100%),linear-gradient(297deg, rgba(240, 240, 240, 0.09) 0%, rgba(240, 240, 240, 0.09) 53%,rgba(146, 146, 146, 0.09) 53%, rgba(146, 146, 146, 0.09) 100%),linear-gradient(10deg, rgba(19, 19, 19, 0.1) 0%, rgba(19, 19, 19, 0.1) 18%,rgba(125, 125, 125, 0.1) 18%, rgba(125, 125, 125, 0.1) 100%),linear-gradient(84deg, rgba(146, 146, 146, 0.08) 0%, rgba(146, 146, 146, 0.08) 10%,rgba(123, 123, 123, 0.08) 10%, rgba(123, 123, 123, 0.08) 100%),linear-gradient(90deg, rgb(71, 65, 230),rgb(121, 231, 221))",
        "green-gradient":
          "linear-gradient(45deg, rgba(135, 135, 135, 0.04) 0%, rgba(135, 135, 135, 0.04) 4%,rgba(73, 73, 73, 0.04) 4%, rgba(73, 73, 73, 0.04) 5%,rgba(161, 161, 161, 0.04) 5%, rgba(161, 161, 161, 0.04) 8%,rgba(22, 22, 22, 0.04) 8%, rgba(22, 22, 22, 0.04) 14%,rgba(46, 46, 46, 0.04) 14%, rgba(46, 46, 46, 0.04) 70%,rgba(199, 199, 199, 0.04) 70%, rgba(199, 199, 199, 0.04) 80%,rgba(0, 0, 0, 0.04) 80%, rgba(0, 0, 0, 0.04) 100%),linear-gradient(45deg, rgba(56, 56, 56, 0.1) 0%, rgba(56, 56, 56, 0.1) 36%,rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.1) 62%,rgba(197, 197, 197, 0.1) 62%, rgba(197, 197, 197, 0.1) 71%,rgba(255, 255, 255, 0.1) 71%, rgba(255, 255, 255, 0.1) 75%,rgba(168, 168, 168, 0.1) 75%, rgba(168, 168, 168, 0.1) 98%,rgba(249, 249, 249, 0.1) 98%, rgba(249, 249, 249, 0.1) 100%),linear-gradient(0deg, rgba(42, 42, 42, 0.05) 0%, rgba(42, 42, 42, 0.05) 9%,rgba(254, 254, 254, 0.05) 9%, rgba(254, 254, 254, 0.05) 11%,rgba(109, 109, 109, 0.05) 11%, rgba(109, 109, 109, 0.05) 28%,rgba(250, 250, 250, 0.05) 28%, rgba(250, 250, 250, 0.05) 86%,rgba(191, 191, 191, 0.05) 86%, rgba(191, 191, 191, 0.05) 100%),linear-gradient(135deg, rgba(175, 175, 175, 0.05) 0%, rgba(175, 175, 175, 0.05) 12%,rgba(195, 195, 195, 0.05) 12%, rgba(195, 195, 195, 0.05) 34%,rgba(10, 10, 10, 0.05) 34%, rgba(10, 10, 10, 0.05) 56%,rgba(241, 241, 241, 0.05) 56%, rgba(241, 241, 241, 0.05) 81%,rgba(244, 244, 244, 0.05) 81%, rgba(244, 244, 244, 0.05) 82%,rgba(36, 36, 36, 0.05) 82%, rgba(36, 36, 36, 0.05) 84%,rgba(161, 161, 161, 0.05) 84%, rgba(161, 161, 161, 0.05) 99%,rgba(81, 81, 81, 0.05) 99%, rgba(81, 81, 81, 0.05) 100%),linear-gradient(0deg, rgba(146, 146, 146, 0.05) 0%, rgba(146, 146, 146, 0.05) 22%,rgba(239, 239, 239, 0.05) 22%, rgba(239, 239, 239, 0.05) 31%,rgba(147, 147, 147, 0.05) 31%, rgba(147, 147, 147, 0.05) 33%,rgba(209, 209, 209, 0.05) 33%, rgba(209, 209, 209, 0.05) 77%,rgba(129, 129, 129, 0.05) 77%, rgba(129, 129, 129, 0.05) 88%,rgba(20, 20, 20, 0.05) 88%, rgba(20, 20, 20, 0.05) 100%),linear-gradient(90deg, rgb(125, 116, 141),rgb(26, 181, 231),rgb(7, 239, 70))",
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
      },
      animation: {
        jello_horizontal: "jello_horizontal 0.9s both",
      },
    },
  },
  plugins: [],
};
