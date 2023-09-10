const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    boxShadow: {
      whiterock: "5px 5px 0px #E7DFCA",
      sun: "5px 5px 0px #FACC44",
      cinnabar: "5px 5px 0px #E64B36",
      persian: "5px 5px 0px #C7312D",
      stiletto: "5px 5px 0px #9A2B40",
      tawny: "5px 5px 0px #702647"
    },
    extend: {
      colors: {
        blueGray: colors.slate,
        lightBlue: colors.sky,
        blue: colors.blue,
        beta: {
          100: "#E7DFCA",
          200: "#FACC44",
          300: "#E64B36",
          400: "#C7312D",
          500: "#9A2B40",
          600: "#702647"
        }
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ],
        display: [
          '"Permanent Marker"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ]
        // Ensure fonts with spaces have " " surrounding it.
      },
      fontSize: {
        "9xl": "7rem",
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "10rem",
        "13xl": "11rem",
        "14xl": "12rem",
        "15xl": "13rem",
        "16xl": "14rem",
        "17xl": "15rem",
        "18xl": "16rem",
        "19xl": "17rem",
        "20xl": "18rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
