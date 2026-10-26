import {chromium} from '@playwright/test';
import {links} from '../docs/data.mjs';
// Fresh, ephemeral context: no personal browser profile or saved Figma session.
const browser=await chromium.launch();
const context=await browser.newContext();
let inconclusive=false;
try{
  for(const key of ['design','prototype','figjam','slides','make']){
    const page=await context.newPage();
    try{
      const response=await page.goto(links[key],{waitUntil:'domcontentloaded',timeout:45000});
      await page.locator('body').waitFor();
      const blocked=await page.getByText(/request access|you don.t have access|ask to join|access denied/i).count();
      const content=await page.getByText(/Studio Noord/).count();
      const status=blocked?'access-request':content?'content-marker-visible':'not-established';if(status!=='content-marker-visible')inconclusive=true;
      console.log(JSON.stringify({source:key,url:page.url(),http:response?.status(),title:await page.title(),anonymous:status}));
    }catch(error){inconclusive=true;console.log(JSON.stringify({source:key,anonymous:'not-established',reason:error.message.split('\n')[0]}));}
    finally{await page.close();}
  }
}finally{await browser.close();}

if(inconclusive)process.exitCode=2; // Inconclusive is not a successful anonymous-access check.
