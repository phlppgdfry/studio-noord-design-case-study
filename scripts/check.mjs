import {readFile,readdir,stat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
import {evidence,links,decisions} from '../docs/data.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const html=await readFile(resolve(root,'docs/index.html'),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(ids).size,ids.length,'HTML ids must be unique');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){const path=match[1];if(!/^(https?:|data:)/.test(path))await stat(resolve(root,'docs',path.split('?')[0]));}
for(const file of ['app.mjs','model.mjs','data.mjs'])execFileSync(process.execPath,['--check',resolve(root,'docs',file)]);
assert.equal(evidence.length,10);assert.equal(new Set(evidence.map(e=>e.id)).size,10);
for(const url of Object.values(links))assert.equal(new URL(url).protocol,'https:');
for(const item of evidence){assert.ok(['Native Figma','Webdemo','Repository','Gepland'].includes(item.status));assert.equal(new URL(item.url).protocol,'https:');}
assert.equal(decisions.length,4);
JSON.parse(await readFile(resolve(root,'docs/assets/tokens.json'),'utf8'));
const required=['README.md','case-study/brief.md','case-study/decisions.md','case-study/research-plan.md','case-study/accessibility.md','case-study/handoff.md','case-study/validation.md','design/DESIGN.md'];
for(const path of required){assert.ok((await readFile(resolve(root,path),'utf8')).length>150,`${path} needs substantive content`);}
for(const path of ['case-study/expert-review.md','docs/research/session-kit.md'])assert.ok((await readFile(resolve(root,path),'utf8')).length>500);
assert.equal((await readFile(resolve(root,'docs/research/session-results.csv'),'utf8')).trim().split('\n').length,1,'Do not fabricate participant results');
assert.ok(html.includes('property="og:image"'));assert.ok(html.includes('rel="canonical"'));
const social=await readFile(resolve(root,'docs/assets/studio-noord-social.png'));
assert.equal(social.readUInt32BE(16),1200);assert.equal(social.readUInt32BE(20),630);
const publicFiles=await readdir(resolve(root,'docs'));
assert.ok(publicFiles.includes('.nojekyll'));
console.log('PASS: JavaScript syntax, local assets, HTML ids, evidence links, tokens and case dossier.');
