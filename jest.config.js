const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/contracts/(.*)$": "<rootDir>/contracts/$1",
    "^@/assets/(.*)$": "<rootDir>/assets/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  reporters: ["default", "github-actions"],
  displayName: {
    name: "WxFRR",
    color: "blue",
  },
};

module.exports = createJestConfig(config);
