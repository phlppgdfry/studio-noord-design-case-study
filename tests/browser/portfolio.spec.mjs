import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.beforeEach(async({page})=>{await page.goto('/');await expect(page.getByRole('tab',{name:'Boeken',exact:true})).toBeVisible();});
async function tab(page,name){await page.getByRole('tab',{name,exact:true}).click();}
async function noOverflow(page){expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);}

test('identity, all labs and narrow layouts remain usable without runtime errors',async({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.reload();await expect(page).toHaveTitle(/Studio Noord/);
  await expect(page.getByRole('heading',{level:1})).toContainText('Van eerste idee');
  await noOverflow(page);
  for(const name of ['Boeken','Design system','Draw','Motion','FigJam','Slides','AI & Make']){await tab(page,name);await expect(page.getByRole('tabpanel')).toBeVisible();await noOverflow(page);}
  expect(errors).toEqual([]);
});
test('invalid booking recovers and receipt preserves time, venue, total and stock',async({page})=>{
  await page.getByRole('button',{name:'Bekijk workshop',exact:true}).click();
  const dialog=page.getByRole('dialog');await page.getByRole('button',{name:'Bevestig demoboeking',exact:true}).click();
  await expect(page.getByRole('textbox',{name:'Naam',exact:true})).toBeFocused();
  await expect(dialog.locator('[aria-invalid="true"]')).toHaveCount(3);
  await page.getByRole('button',{name:'Gebruik fictieve demogegevens'}).click();
  await page.getByRole('button',{name:'Eén plaats meer'}).click();
  await page.getByRole('button',{name:'Bevestig demoboeking',exact:true}).click();
  await expect(dialog).toContainText('10:00–12:30');await expect(dialog).toContainText('De Winkelhaak');
  await expect(dialog).toContainText('2 plaatsen');await expect(dialog).toContainText('70,00');
  await expect(dialog).toContainText('Er is geen e-mail verstuurd');
  await page.getByRole('button',{name:'Terug naar programma',exact:true}).click();
  await expect(page.getByRole('tabpanel')).toContainText('4 plaatsen beschikbaar');
  await expect(page.getByRole('button',{name:'Bekijk workshop',exact:true})).toBeFocused();
});
test('sold-out, empty results and favorites have clear recovery paths',async({page})=>{
  await page.getByRole('button',{name:/^Letters buiten de lijnen Za/}).click();
  await expect(page.getByRole('button',{name:'Volzet',exact:true})).toBeDisabled();
  await page.getByRole('searchbox',{name:'ZOEK'}).fill('onbestaand');
  await expect(page.getByRole('tabpanel')).toContainText('Geen workshops gevonden');
  await page.getByRole('button',{name:'Wis de filters'}).click();
  await page.getByRole('button',{name:'Favoriet: Van vorm naar beweging',exact:true}).click();
  await page.getByRole('button',{name:'Favorieten',exact:true}).click();
  await expect(page.locator('[data-select]')).toHaveCount(1);
  await page.getByRole('button',{name:'Favoriet: Van vorm naar beweging',exact:true}).click();
  await expect(page.getByRole('tabpanel')).toContainText('Geen workshops gevonden');
  await expect(page.getByRole('button',{name:'Wis de filters'})).toBeFocused();
});
test('afternoon choice and final available places preserve confirmation and keyboard recovery',async({page})=>{
  await page.getByRole('combobox',{name:'DISCIPLINE'}).selectOption('Grafisch');
  await page.getByRole('button',{name:'Bekijk workshop',exact:true}).click();
  await page.getByRole('button',{name:'Gebruik fictieve demogegevens'}).click();
  await page.getByRole('button',{name:'Eén plaats meer'}).click();await page.getByRole('button',{name:'Eén plaats meer'}).click();
  await page.getByRole('button',{name:'Bevestig demoboeking',exact:true}).click();
  await expect(page.getByRole('dialog')).toContainText('16:00–18:00');await expect(page.getByRole('dialog')).toContainText('90,00');
  await page.getByRole('button',{name:'Terug naar programma',exact:true}).click();
  await expect(page.getByRole('button',{name:'Volzet',exact:true})).toBeDisabled();
  await expect(page.getByRole('button',{name:/^Druk je eigen richting Za/})).toBeFocused();
});
test('expanded case, sharing metadata and research downloads stay available',async({page,request})=>{
  await page.locator('.process-details>summary').click();await expect(page.locator('.iteration-grid')).toBeVisible();await noOverflow(page);
  await expect(page.locator('.process-body')).toContainText('geen deelnemers getest');
  await page.locator('.native-previews summary').click();await expect(page.locator('.native-preview-grid img')).toHaveCount(2);await noOverflow(page);
  const image=await page.locator('meta[property="og:image"]').getAttribute('content');expect(image).toMatch(/studio-noord-social.png$/);
  for(const path of ['assets/studio-noord-social.png','assets/native-pitch.png','assets/native-figjam.png','research/session-kit.md','research/session-results.csv'])expect((await request.get(path)).ok()).toBe(true);
});
test('complete reset restores every visible lab and evidence filter',async({page})=>{
  await tab(page,'Design system');await page.getByRole('button',{name:'Donker',exact:true}).click();await page.getByRole('button',{name:'Compact',exact:true}).click();
  await tab(page,'Draw');await page.getByRole('button',{name:'Warmte',exact:true}).click();
  await tab(page,'Motion');await page.getByLabel('Duur',{exact:false}).selectOption('6000');await page.getByLabel('Curve',{exact:false}).selectOption('linear');
  await tab(page,'Slides');await page.getByRole('button',{name:'Volgende',exact:true}).click();
  await tab(page,'AI & Make');await page.getByRole('button',{name:'Toon richting 2'}).click();
  await page.getByRole('button',{name:'Gepland',exact:true}).click();
  await page.getByRole('button',{name:'Wis lokale demo-instellingen'}).click();
  await expect(page.getByRole('tab',{name:'Boeken',exact:true})).toBeFocused();
  await expect(page.locator('#evidence-rows tr')).toHaveCount(10);
  await tab(page,'Design system');await expect(page.getByRole('button',{name:'Licht',exact:true})).toHaveAttribute('aria-pressed','true');await expect(page.getByRole('button',{name:'Comfortabel',exact:true})).toHaveAttribute('aria-pressed','true');
  await tab(page,'Draw');await expect(page.getByRole('button',{name:'Noordlicht',exact:true})).toHaveAttribute('aria-pressed','true');
  await tab(page,'Motion');await expect(page.getByLabel('Duur',{exact:false})).toHaveValue('4000');await expect(page.getByLabel('Curve',{exact:false})).toHaveValue('ease-in-out');await expect(page.locator('#motion-time')).toHaveText('0.00 s');
  await tab(page,'Slides');await expect(page.getByRole('button',{name:'Vorige',exact:true})).toBeDisabled();
  await tab(page,'AI & Make');await expect(page.getByRole('button',{name:'Toon richting 1'})).toHaveAttribute('aria-pressed','true');
});
test('keyboard tabs, modal focus containment and Escape work',async({page})=>{
  await page.getByRole('tab',{name:'Boeken',exact:true}).focus();await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('tab',{name:'Design system',exact:true})).toBeFocused();
  await page.keyboard.press('Home');await page.getByRole('button',{name:'Bekijk workshop',exact:true}).click();
  await page.keyboard.press('Shift+Tab');
  expect(await page.evaluate(()=>document.querySelector('dialog').contains(document.activeElement))).toBe(true);
  await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(page.getByRole('button',{name:'Bekijk workshop',exact:true})).toBeFocused();
});
test('Figma deep link selects the intended workshop without creating a booking',async({page})=>{
  await page.goto('/?workshop=druk#playground');
  await expect(page.locator('#booking-inspector h3')).toHaveText('Druk je eigen richting');
  await expect(page.locator('[data-select="druk"]')).toHaveAttribute('aria-pressed','true');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.getByRole('button',{name:'Bekijk workshop',exact:true}).click();await expect(page.getByRole('dialog')).toContainText('16:00–18:00');
});
test('tour can be completed with reduced motion without obscuring its controls',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.getByRole('button',{name:'Start de 2-minutentour'}).click();
  for(let step=1;step<6;step++){await expect(page.locator('#tour-progress')).toHaveText(`RONDLEIDING / ${step} VAN 6`);await page.getByRole('button',{name:'Volgende',exact:true}).click();}
  await page.getByRole('button',{name:'Naar het bewijs',exact:true}).click();await expect(page.locator('#tour')).toBeHidden();
  expect(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
});
test('WCAG automated scan covers each lab and booking dialog',async({page})=>{
  for(const name of ['Boeken','Design system','Draw','Motion','FigJam','Slides','AI & Make']){
    await tab(page,name);const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
    expect(results.violations,`${name}: ${JSON.stringify(results.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})))}`).toEqual([]);
  }
  await tab(page,'Boeken');await page.getByRole('button',{name:'Bekijk workshop',exact:true}).click();
  expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations).toEqual([]);
});
