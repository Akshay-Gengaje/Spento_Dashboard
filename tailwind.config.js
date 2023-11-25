/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0672A3",
      },
      fontFamily: {
        Mitr: ["Mitr", "sans-serif"],
      },

      boxShadow: {
        "login-box-shadow": "box-shadow: 0px 0px 36px 1px rgba(0, 0, 0, 0.25);",
        userMenu: "box-shadow: 2px 2px 10px 0px rgba(61, 61, 61, 0.25);",
      },
      backgroundImage: {
        login: "url('/images/login_bg.png')",
      },
    },
  },
  plugins: [],
};
