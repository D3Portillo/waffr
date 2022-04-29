module.exports = {
  plugins: ["jest-dom", "react"],
  extends: ["next/core-web-vitals"],
  rules: {
    "no-unused-vars": ["error", { vars: "all" }],
    "no-undef": "error",
    "react/prop-types": "error",
    "react/default-props-match-prop-types": "error",
  },
  env: {
    jest: true,
  },
};
