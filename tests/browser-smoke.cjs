// Run against the local development server with Playwright available.
const {chromium}=require('playwright');
(async()=>{const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH || '/usr/bin/chromium',args:['--no-sandbox']});const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));const responses=[];page.on('response',r=>{if(r.status()>=400)responses.push(r.url()+' '+r.status())});await page.goto('http://127.0.0.1:8000',{waitUntil:'networkidle'});
const assert=(v,m)=>{if(!v)throw new Error(m);console.log('PASS',m)};
assert(await page.locator('.product-card').count()===6,'six product ranges rendered');
await page.getByRole('button',{name:'Drives & motion',exact:true}).click();assert(await page.locator('.product-card').count()===2,'category filtering');
await page.getByLabel('Search products').fill('Siemens');assert(await page.locator('.product-card').count()===2,'brand search within category');
await page.getByLabel('Search products').fill('no matching part');assert(await page.locator('.product-card').count()===0,'empty search state');assert((await page.locator('#catalog-status').textContent()).includes('No matching'),'empty search guidance');
await page.getByLabel('Search products').fill('');await page.getByRole('button',{name:'All products',exact:true}).click();await page.getByRole('button',{name:'View PLCs & I/O modules'}).click();assert(await page.locator('dialog').isVisible(),'product dialog opens');await page.keyboard.press('Escape');assert(!await page.locator('dialog').isVisible(),'Escape closes dialog');
await page.locator('[data-service="engineering"]').click();assert(await page.getByRole('dialog',{name:'Engineering & integration'}).isVisible(),'service details available');await page.keyboard.press('Escape');
assert(await page.locator('form').count()===0,'profile website has no inquiry form');
assert(await page.locator('#contact a[href="mailto:info@recreateengineers.com"]').count()===1,'direct business email available');
assert(await page.locator('#contact a[href="tel:+8801819884221"]').count()===1,'direct business phone available');
assert(await page.evaluate(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0)),'all local images loaded');
assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'desktop no horizontal overflow');
await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:8000/home.html',{waitUntil:'networkidle'});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'mobile no horizontal overflow');await page.getByRole('button',{name:'Open navigation'}).click();assert(await page.locator('#nav').isVisible(),'mobile menu opens');await page.locator('#nav a[href="#products"]').click();assert(!await page.locator('#nav').isVisible(),'mobile navigation closes after selection');
await page.getByRole('button',{name:'View Sensors & instrumentation'}).click();assert(await page.locator('dialog').isVisible(),'mobile product dialog');await page.getByRole('button',{name:'Close details'}).click();
for(const width of [320,768,1024,1920]){await page.setViewportSize({width,height:900});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'no overflow at '+width+'px');}
await page.setViewportSize({width:1440,height:1000});await page.locator('#partners').scrollIntoViewIfNeeded();await page.mouse.move(0,0);
assert(await page.locator('.logo-group:not([aria-hidden]) img').count()===12,'twelve supplier logos');
const position=()=>page.locator('.logo-track').evaluate(e=>{const m=new DOMMatrixReadOnly(getComputedStyle(e).transform);return {x:m.m41,y:m.m42};});const before=await position();await page.waitForTimeout(350);const after=await position();assert(before.x!==after.x&&before.y===after.y,'logos scroll horizontally');
assert(await page.locator('.logo-pause').count()===0,'no logo pause button');
await page.emulateMedia({reducedMotion:'reduce'});assert(await page.locator('.logo-track').evaluate(e=>getComputedStyle(e).animationName)==='none','reduced motion disables scrolling');assert(await page.locator('.brand-logos').evaluate(e=>e.scrollHeight<=e.clientHeight+1),'all original logos accessible with reduced motion');
assert(!errors.length,'no browser JavaScript errors '+errors.join(','));assert(!responses.length,'no failed HTTP assets '+responses.join(','));console.log('COMPLETE');await browser.close();})().catch(e=>{console.error(e);process.exit(1)});
