'use strict';
const drawings = {
 plc: '<path d="m47 37 95-10 28 15-95 13z" fill="#667075"/><path d="M47 37v70l28 16V55z" fill="#89959a"/><path d="m75 55 95-13v70l-95 11z" fill="#d2d8da"/><path d="m84 65 39-5v29l-39 5z" fill="#3a4347"/><path d="m84 98 39-5v15l-39 4z" fill="#9ba8ad"/><g stroke="#525f64" stroke-width="2"><path d="m135 56 25-4m-25 10 25-4m-25 10 25-4m-25 10 25-4m-25 10 25-4m-25 10 25-4m-25 10 25-4m-25 10 25-4"/></g><path d="m88 72 16-2m-16 6 10-1" stroke="#7ec7e7" stroke-width="2"/><circle cx="117" cy="66" r="2" fill="#77cef4"/>',
 hmi: '<path d="m37 35 127-9 13 12-127 11z" fill="#6a7275"/><path d="m37 35 13 14v76l-13-12z" fill="#525d62"/><path d="m50 49 127-11v76L50 125z" fill="#909fa5"/><path d="m60 58 107-9v57l-107 9z" fill="#2d3437"/><path d="m71 70 32-3v26l-32 3z" fill="#505d62"/><path d="m111 67 45-4m-45 9 45-4m-45 10 45-4" stroke="#73858d" stroke-width="2"/><path d="m112 95 8-11 9 4 9-14 12 5" fill="none" stroke="#77cef4" stroke-width="2"/><circle cx="115" cy="112" r="3" fill="#4c585d"/>',
 drive: '<path d="m70 21 58-8 23 15-58 8z" fill="#6b7a81"/><path d="M70 21v105l23 16V36z" fill="#9ba8ad"/><path d="m93 36 58-8v106l-58 8z" fill="#ced4d6"/><path d="m101 45 41-5v23l-41 6z" fill="#384145"/><path d="m108 53 24-3" stroke="#77cef4" stroke-width="3"/><g fill="#5f6e74"><circle cx="110" cy="80" r="4"/><circle cx="131" cy="77" r="4"/></g><g stroke="#7b8c93" stroke-width="2"><path d="m102 97 40-5m-40 11 40-5m-40 11 40-5m-40 11 40-5m-40 11 40-5"/><path d="M77 40v69m6-65v69"/></g>',
 motor: '<path d="m60 56 69-13 32 26-69 15z" fill="#a0acb2"/><path d="m92 84 69-15v38l-69 15z" fill="#74868e"/><ellipse cx="77" cy="89" rx="30" ry="35" fill="#b0babe"/><ellipse cx="77" cy="89" rx="20" ry="25" fill="#5f6e74"/><ellipse cx="77" cy="89" rx="11" ry="15" fill="#cbd2d5"/><path d="m42 88 28-6 8 6-28 7z" fill="#85949b"/><path d="M42 88v10l8 7V95l28-7v-6" fill="#adb7bc"/><path d="m110 42 22-4 12 9-23 6z" fill="#bfc7cb"/><path d="m110 42 11 11v12l-11-8zm11 11 23-6v13l-23 5z" fill="#7d8d94"/><g stroke="#5b696f" stroke-width="2"><path d="m107 83 42-9m-42 16 42-9m-42 16 42-9m-42 16 42-9"/></g><path d="m93 126 55-12 14 10-55 13z" fill="#566369"/>',
 sensor: '<path d="m71 102 30-8 29 9-29 9z" fill="#65747b"/><path d="M71 102v16l30 10v-16z" fill="#94a1a7"/><path d="m101 112 29-9v16l-29 9z" fill="#788990"/><path d="M88 92V46l26-4v48l-13 9z" fill="#bec6ca"/><ellipse cx="101" cy="44" rx="16" ry="8" fill="#7f9097"/><path d="M87 46v44m6-43v44m15-45v45" stroke="#919fa5" stroke-width="2"/><path d="M95 36V23l13-3v14z" fill="#424c51"/><ellipse cx="101" cy="22" rx="7" ry="4" fill="#697980"/><path d="M130 109q48 10 42-34t14-37" fill="none" stroke="#343c40" stroke-width="4"/><circle cx="186" cy="36" r="4" fill="#88979e"/>',
 panel: '<path d="m55 23 84-11 22 15-84 12z" fill="#7e8e95"/><path d="M55 23v110l22 14V39z" fill="#95a3a9"/><path d="m77 39 84-12v109l-84 11z" fill="#ccd2d5"/><path d="m87 49 64-9v83l-64 9z" fill="#87969d"/><path d="m93 57 25-3v18l-25 4z" fill="#404a4e"/><path d="m124 53 20-2v19l-20 2z" fill="#acb7bb"/><g fill="#4f5b60"><path d="m93 85 12-2v23l-12 2zm18-2 12-2v23l-12 2zm19-3 13-2v23l-13 2z"/></g><path d="m91 115 55-8" stroke="#77cef4" stroke-width="2"/><circle cx="154" cy="83" r="2" fill="#3d474b"/>'
};
const products = [
 {name:'PLCs & I/O modules',category:'control',tag:'AUTOMATION & CONTROL',art:'plc',brands:'Siemens · Beckhoff',description:'Programmable logic controllers and I/O cards for industrial automation.',details:['Siemens PLC products','PLC I/O cards','Beckhoff I/O cards','Industrial PCs, software and Profibus requirements']},
 {name:'Human machine interfaces',category:'control',tag:'AUTOMATION & CONTROL',art:'hmi',brands:'Siemens · Mitsubishi · Schneider',description:'Operator interfaces for visibility and control of your industrial processes.',details:['Siemens, Mitsubishi and Schneider HMI','Allen-Bradley, Panasonic and Omron','Delta, Weintek and Pro-face']},
 {name:'Variable frequency drives',category:'motion',tag:'DRIVES & MOTION',art:'drive',brands:'Siemens · Danfoss · Delta',description:'Frequency inverters for industrial motor speed control.',details:['Siemens and Delta inverters','Danfoss drives','Yaskawa and Fuji inverters','Lenze frequency and servo inverters']},
 {name:'Motors & motion control',category:'motion',tag:'DRIVES & MOTION',art:'motor',brands:'Lenze · Siemens',description:'Components for precise movement and industrial power transmission.',details:['Three-phase AC motors','Gearboxes and geared motors','Servo controls and servo valves','Rotary encoders']},
 {name:'Sensors & instrumentation',category:'power',tag:'POWER & SENSING',art:'sensor',brands:'SICK · WIKA · Omron',description:'Sensing and control components for industrial measurement.',details:['Pressure transmitters','Controllers and SCRs','Transducers','Industrial sensors']},
 {name:'Electrical & power systems',category:'power',tag:'POWER & SENSING',art:'panel',brands:'Schneider Electric · ABB · Siemens',description:'Electrical distribution and protection for your operation.',details:['PFI, HT-LT, MCC, PCC, MDB and DB panels','ACB, MCCB, MCB and circuit breakers','Motor starters, overload relays and contactors','Substation, generator and ATS solutions']}
];
const services = {
 motion:{name:'Drives & motion systems',description:'Choose the right components for motor control, speed regulation and precision movement.',details:['Variable frequency and servo inverters','Three-phase AC motors and gearboxes','Rotary encoders, servo controls and valves','Products from Siemens, Lenze, Danfoss, Delta, Yaskawa and Fuji']},
 electrical:{name:'Power & electrical solutions',description:'Electrical solutions for industrial distribution, protection and motor control.',details:['PFI, HT-LT, MCC, PCC, MDB and DB panels','Power and motor control centers','Substation solutions and electrical works','Generators and automatic transfer switches']},
 engineering:{name:'Engineering & integration',description:'Practical support for industrial automation projects, new installations and existing-system upgrades.',details:['PLC and drive automation projects','New automation system setup','Automation upgrades','Washing machine, dryer IR and packaging machine automation','Industrial product supply and spare parts']}
};
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');nav.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
matchMedia('(min-width: 851px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
const catalog=document.querySelector('#catalog');
const status=document.querySelector('#catalog-status');
const search=document.querySelector('#product-search');
let filter='all';
function renderProducts(){
 const query=search.value.toLowerCase().trim();
 const visible=products.filter(p=>(filter==='all'||p.category===filter)&&[p.name,p.brands,p.description,...p.details].join(' ').toLowerCase().includes(query));
 catalog.replaceChildren();
 visible.forEach(product=>{
  const button=document.createElement('button');button.className='product-card';button.type='button';
  button.setAttribute('aria-label','View '+product.name);
  button.innerHTML=`<div class="product-art"><span class="product-code">RE / ${String(products.indexOf(product)+1).padStart(2,'0')} — PRODUCT RANGE</span><svg viewBox="0 0 220 160" aria-hidden="true">${drawings[product.art]}</svg><span class="art-cross">+</span></div><div class="product-content"><small>${product.tag}</small><h3>${product.name}</h3><p>${product.brands}</p><div class="product-link">Explore range <span><svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></div></div>`;
  button.addEventListener('click',()=>showDetails(product));catalog.append(button);
 });
 status.textContent=visible.length?`${visible.length} product ${visible.length===1?'range':'ranges'}${query?' matching your search':''}. Illustrations represent product categories.`:'No matching products. Try a brand or component name, or contact us for help.';
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});renderProducts();}));
search.addEventListener('input',renderProducts);
renderProducts();
const dialog=document.querySelector('#detail-dialog');
function showDetails(item){
 const container=document.querySelector('#dialog-content');container.replaceChildren();
 const heading=document.createElement('h2');heading.id='detail-title';heading.textContent=item.name;
 const description=document.createElement('p');description.id='detail-description';description.textContent=item.description;
 const list=document.createElement('ul');item.details.forEach(text=>{const li=document.createElement('li');li.textContent=text;list.append(li);});
 const note=document.createElement('p');note.textContent='Product ranges shown are an overview of our capabilities. Specifications and availability vary by manufacturer and model.';
 container.append(heading,description,list,note);dialog.showModal();document.body.classList.add('modal-open');
}
document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>showDetails(services[button.dataset.service])));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
document.querySelector('#year').textContent=String(new Date().getFullYear());
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const id=entry.target.id;nav.querySelectorAll('a').forEach(link=>{const active=link.getAttribute('href')==='#'+id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -65% 0px',threshold:0});
['main','about','solutions','products','contact'].forEach(id=>observer.observe(document.getElementById(id)));
// Preserve the contact anchor used by the previous site.
if(location.hash==='#Contact')document.querySelector('#contact').scrollIntoView();

// Progressive motion: content stays visible if JavaScript or observation is unavailable.
const logoTrack = document.querySelector('.logo-track');
const logoOriginal = logoTrack.querySelector('.logo-group');
const logoCopy = logoOriginal.cloneNode(true);
logoCopy.setAttribute('aria-hidden', 'true');
logoCopy.querySelectorAll('img').forEach(image => image.alt = '');
logoTrack.append(logoCopy);
logoTrack.classList.add('is-looping');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });
  document.querySelectorAll('.section-intro, .solution-card, .about-art, .about-copy, .process-grid > div, .contact-layout > div').forEach((element, index) => {
    element.classList.add('reveal');
    element.style.transitionDelay = `${(index % 4) * 55}ms`;
    revealObserver.observe(element);
  });
  document.documentElement.classList.add('motion-ready');
}
