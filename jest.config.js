module.exports = {
    testEnvironment: 'jsdom', // Simulates a browser environment for testing React components
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Add custom setup (e.g., jest-dom)
  };