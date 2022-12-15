module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "roboto": ["Roboto Condensed Bold", "sans-serif"]
      },
      container: {
        center: true,
      },
      fontSize: {
        // Mobile
        "m-xs": ["13px", "19.5px"],
        "m-sm": ["15px", "22px"],
        "m-lg": ["20px", "24px"],
        "m-2xl": ["28px", "33px"],
        "m-button": ["14px", "14px"],

        // Desktop/Tablet
        xxs: ["12px", "18px"],
        xs: ["16px", "24px"],
        sm: ["18px", "27px"],
        md: ["22px", "33px"],
        lg: ["32px", "48px"],
        heading4: ["20px", "24px"],
        heading3: ["24px", "28px"],
        heading2: ["36px", "43px"],
        heading1: ["64px", "76px"],
        button: ["16px", "16px"],
        input: ["15px", "16.5px"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1920px",
      },
      height: {
        button: "51px",
      },
      borderRadius: {
        xs: "4px",
        md: "8px",
        "3xl": "32px",
      },
      colors: {
        black: "#16120B",
        dark: "#303030",
        "custom-dark": "#474646",
        "gray-100": "#F3F3F3",
        "gray-150": "#F7F7F7",
        "gray-200": "#EBEBEA",
        "gray-300": "#DCDCDA",
        "gray-400": "#C5C4C2",
        "gray-500": "#A2A09D",
        "gray-600": "#73716D",
        "gray-800": "#45413C",
        "accent-300": "#D9A689",
        "accent-500": "#9A735E",
        "green-500": "#469F97",
        "red-500": "#FF647C",
        "orange-500": "#FFA26B",
        "yellow-500": "#FFCF5C",
        "border-100": "#DCDCDA",
        "border-300": "#C5C4C2",
        "border-500": "#A2A09D",
        "green-600": "#30AA8D",
        white: "#FFFFFF",
      },
      boxShadow: {
        md: "0px 0px 8px #b9bfcc",
        lg: "0px 4px 25px #B9BFCC",
        card: "0px 4px 25px rgba(185, 191, 204, 0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
}
