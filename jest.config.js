module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>/src"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  modulePaths: ["<rootDir>"],
};
