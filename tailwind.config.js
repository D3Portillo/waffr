const tailwindcss = require("tailwindcss/defaultConfig");
const { sans } = tailwindcss.theme.fontFamily;
module.exports = {
  mode: "jit",
  content: ["pages/*.js", "pages/**/*.js", "components/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        waff: ["Michroma", ...sans],
      },
    },
  },
  plugins: [],
};
