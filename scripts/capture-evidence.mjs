import {chromium,webkit} from '@playwright/test';
import {mkdir} from 'node:fs/promises';
const root=new URL('../design/screenshots/',import.meta.url);await mkdir(root,{recursive:true});
const target=process.env.PORTFOLIO_URL||'http://127.0.0.1:4186/';
for(const [name,engine,width,height] of [['desktop',chromium,1440,1000],['mobile-390',webkit,390,844],['small-320',chromium,320,800]]){
  const browser=await engine.launch();
  try{
    const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});await page.goto(target);await page.getByRole('tab',{name:'Boeken',exact:true}).waitFor();
    await page.screenshot({path:new URL(`portfolio-${name}.png`,root).pathname});
    if(width===390){
      await page.getByRole('button',{name:'Bekijk workshop',exact:true}).click();await page.getByRole('button',{name:'Gebruik fictieve demogegevens'}).click();await page.getByRole('button',{name:'Eén plaats meer'}).click();await page.getByRole('button',{name:'Bevestig demoboeking',exact:true}).click();
      await page.screenshot({path:new URL('booking-mobile-390.png',root).pathname});
      await page.getByRole('button',{name:'Sluiten',exact:true}).click();await page.locator('#toast').waitFor({state:'hidden'});await page.locator('.process-details>summary').click();await page.locator('.iteration-grid').scrollIntoViewIfNeeded();await page.screenshot({path:new URL('iteration-mobile-390.png',root).pathname});
    }
  }finally{await browser.close();}
}
