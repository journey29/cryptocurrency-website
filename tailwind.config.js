/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "global-color-primary": "#151515",
        "global-color-secondary": "#202020",
        "global-color-green": "#CBFC01",
        gray: "#808080",
        "light-black": "rgba(0,0,0, .5)",
      },
      backgroundImage: {
        about: "url(./assets/images/about/photo-01.jpg)",
      },
      height:{
        "1px":"1px"
      },
      screens: {
        xl: "1160px",
        ml:"960px",
        md: "768px",
        sl: "450px",
        sm: "320px",
      },
    },
  },
  plugins: [],
};
