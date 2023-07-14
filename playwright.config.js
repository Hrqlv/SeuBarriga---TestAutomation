const { PlaywrightTestConfig } = require("@playwright/test");

const config = {
  timeout: 60000,
  retries: 0,
  use: {
    headless: true,
    viewport: {
      width: 1000,
      height: 700,
    },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: true,
    screenshot: false,
  },
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
  ],
};

export default config;
