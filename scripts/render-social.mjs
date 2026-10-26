import {chromium} from '@playwright/test';
import {readFile} from 'node:fs/promises';
const browser=await chromium.launch();
try{
  const page=await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});
  await page.setContent(`<style>body{margin:0}svg{display:block}</style>${await readFile(new URL('../docs/assets/studio-noord-social.svg',import.meta.url),'utf8')}`);
  await page.screenshot({path:new URL('../docs/assets/studio-noord-social.png',import.meta.url).pathname});
}finally{await browser.close();}
