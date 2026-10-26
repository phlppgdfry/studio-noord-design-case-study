import {defineConfig,devices} from '@playwright/test';
export default defineConfig({
  testDir:'./tests/browser',fullyParallel:true,forbidOnly:!!process.env.CI,
  retries:process.env.CI?1:0,workers:process.env.CI?2:4,
  reporter:process.env.CI?[['list'],['html',{open:'never'}]]:'list',
  use:{baseURL:process.env.PORTFOLIO_URL||'http://127.0.0.1:4186',trace:'retain-on-failure',screenshot:'only-on-failure'},
  projects:[
    {name:'desktop-chromium',use:{...devices['Desktop Chrome'],viewport:{width:1440,height:1000}}},
    {name:'small-320',use:{...devices['Desktop Chrome'],viewport:{width:320,height:800}}},
    {name:'mobile-chromium',use:{...devices['Pixel 5'],viewport:{width:390,height:844}}},
    {name:'tablet',use:{...devices['Desktop Chrome'],viewport:{width:768,height:1024}}},
    {name:'mobile-webkit',use:{...devices['iPhone 13'],viewport:{width:390,height:844}}},
    {name:'desktop-webkit',use:{...devices['Desktop Safari'],viewport:{width:1280,height:900}}}
  ],
  webServer:process.env.PORTFOLIO_URL?undefined:{command:'python3 -m http.server 4186 --directory docs --bind 127.0.0.1',url:'http://127.0.0.1:4186',reuseExistingServer:!process.env.CI}
});
