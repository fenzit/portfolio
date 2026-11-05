(() => {
'use strict';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const storage = { get(key) { try { return localStorage.getItem(key); } catch { return null; } }, set(key,value) { try { localStorage.setItem(key,value); } catch {} } };
const english = Object.fromEntries($$('[data-i18n]').map(el => [el.dataset.i18n, el.innerHTML]));
const russian = {
  skip:'Перейти к проектам',navWork:'Проекты',navAbout:'Обо мне',navContact:'Связаться ↗',heroRole:'BACKEND-РАЗРАБОТЧИК / SOFTWARE ENGINEER',heroName:'ПРИВЕТ, Я ДИЯС.',heroIntro:'Превращаю сложные идеи в системы,<br>которые приносят пользу.',explore:'Посмотреть проекты',heroFocus:'BACKEND-СИСТЕМЫ.<br>AI-ИНТЕГРАЦИИ.<br>ОСМЫСЛЕННАЯ ИНЖЕНЕРИЯ.',pauseMotion:'Остановить анимацию',selected:'ИЗБРАННЫЕ ПРОЕКТЫ',workTitle:'Идеи обретают форму.',workIntro:'Несколько проектов, к которым я приложил руку.',xLead:'Венчурная платформа.<br>Интеллектуальная основа.',xDescription:'Серверные сервисы, AI-скоринг и система уведомлений для интерактивной венчурной экосистемы.',viewCase:'Подробнее о проекте',xArt:'AI-СИСТЕМЫ / ПРОДУКТОВАЯ РАЗРАБОТКА',zLead:'Важное решение.<br>Осознанный первый шаг.',zDescription:'AI-ассистент, который помогает абитуриентам выбирать университет. ITFest 2025: третье место вместе с командой.',hackathon:'Хакатон',zArt:'ОБРАЗОВАНИЕ / 3-Е МЕСТО НА ITFEST',gLead:'Миллион точек.<br>Больше ясности.',gDescription:'Поиск закономерностей в 1,2 млн географических записей с помощью Python и кластеризации DBSCAN.',geodata:'Геоданные',gArt:'РАБОТА С ДАННЫМИ / 1,2 МЛН ЗАПИСЕЙ',aboutLabel:'ЧЕЛОВЕК ЗА КОДОМ',aboutTitle:'Любопытство.<br>И желание создавать.',aboutPrimary:'Я Дияс, разработчик из Алматы. Мне нравится момент, когда сложная задача становится понятной. Ещё больше — превращать это понимание в полезный продукт.',aboutSecondary:'Разрабатываю backend на Go и Python, интегрирую AI и работаю над full-stack задачами. За плечами — команда стартапа, фриланс-проекты и хакатоны с жёсткими дедлайнами.',download:'Скачать резюме',toolkit:'МОИ РАБОЧИЕ ИНСТРУМЕНТЫ',toolsNote:'ИНСТРУМЕНТ ПОД ЗАДАЧУ.',skillBackend:'Backend',skillData:'Данные и системы',skillDelivery:'Сборка и запуск',experienceLabel:'МОЙ ПУТЬ',experienceTitle:'Развитие в процессе.',expXRole:'Software Engineer Intern · Full-stack разработка',expXDescription:'Продуктовые сервисы, система уведомлений, AI-интеграции и базы данных в распределённой инженерной команде.',present:'СЕЙЧАС',freelance:'Самостоятельная работа',expFRole:'Backend-разработчик · Python / Django',expFDescription:'Система продаж с криптооплатой, автоматизация транзакций и развёртывание на Ubuntu с Nginx.',expected:'ОЖИДАЕМЫЙ ВЫПУСК',expEducation:'Business & Technology. Фундаментальные знания параллельно с практической разработкой.',recommendationLabel:'ВЗГЛЯД СО СТОРОНЫ',recommendationTitle:'Рекомендация от xVenture',quote:'«Высокий уровень самостоятельности, аналитический подход к решению сложных архитектурных задач, внимание к деталям».',quoteRole:'Технический директор · AI Startify / xVenture',readLetter:'Рекомендательное письмо',readAppreciation:'Благодарственное письмо',quoteNote:'ВЫДЕРЖКА ИЗ РЕКОМЕНДАТЕЛЬНОГО ПИСЬМА',contactLabel:'СЛЕДУЮЩАЯ ГЛАВА',contactLocation:'В АЛМАТЫ. С ШИРОКИМ ВЗГЛЯДОМ.',contactTitle:'ДАВАЙТЕ<br><em>СОЗДАВАТЬ.</em>',copyEmail:'Копировать email',footerNote:'СОЗДАНО СО СМЫСЛОМ.',backTop:'НАВЕРХ',caseStudy:'ИЗБРАННЫЕ ПРОЕКТЫ / КЕЙС'
};
const cases = {
  xventure:{image:'xventure.svg',name:'xVenture',eyebrow:'2026 / AI STARTIFY',en:{subtitle:'The systems behind an interactive venture ecosystem.',role:'Software Engineer Intern / Full-stack Developer. August 1 – September 27, 2026.',challenge:'Support an interactive venture platform with backend services, AI-generated assessments, and automated user communication.',contributions:['Contributed to server and client services with TypeScript, Fastify, and Next.js.','Designed and implemented notification generation and delivery, message-processing pipelines, activity triggers, and Telegram Bot API integration.','Worked on relational schemas and migrations with Drizzle ORM, PostgreSQL, and SQLite in WAL mode.','Contributed AI integrations for contextual personalization, expert assessments, and dynamic platform content.','Worked on API unit tests, Docker containerization, and GitLab CI/CD within Agile sprints.'],outcome:'Received a recommendation and a letter of appreciation from the technical director. The recommendation highlights independence, engineering judgment, and attention to detail.',links:[['Read recommendation','assets/Recommendation-xVenture.pdf'],['Letter of appreciation','assets/Appreciation-xVenture.pdf']]},ru:{subtitle:'Системы, на которых работает интерактивная венчурная экосистема.',role:'Software Engineer Intern / Full-stack Developer. 1 августа — 27 сентября 2026.',challenge:'Развитие венчурной платформы: серверные сервисы, AI-оценки и автоматизированные коммуникации с пользователями.',contributions:['Участвовал в разработке серверных и клиентских сервисов на TypeScript, Fastify и Next.js.','Спроектировал и внедрил генерацию и рассылку уведомлений, обработку очередей сообщений, триггеры активности и интеграцию Telegram Bot API.','Работал с реляционными схемами и миграциями в Drizzle ORM, PostgreSQL и SQLite в режиме WAL.','Участвовал в AI-интеграциях для персонализации контекста, экспертных оценок и динамического контента.','Работал над модульными тестами API, контейнеризацией Docker и GitLab CI/CD в Agile-спринтах.'],outcome:'Получил рекомендательное и благодарственное письма от технического директора. В рекомендации отмечены самостоятельность, инженерное мышление и внимание к деталям.',links:[['Рекомендательное письмо','assets/Recommendation-xVenture.pdf'],['Благодарственное письмо','assets/Appreciation-xVenture.pdf']]}},
  zerohub:{image:'zerohub.svg',name:'ZeroHub',eyebrow:'2025 / ITFEST / 3RD PLACE',en:{subtitle:'Helping applicants make sense of their next step.',role:'Backend Developer / Hackathon team member.',challenge:'Build an AI assistant for university applicants within a hackathon format.',contributions:['Designed the API for the applicant-facing AI assistant.','Integrated ML models into the backend workflow.','Collaborated with the team on a project combining a Python backend and a TypeScript frontend.'],outcome:'Our team took third place at ITFest 2025.',links:[['View source on GitHub','https://github.com/funster-a/hackathon-itfest'],['Open project','https://hackathon-itfest.vercel.app']]},ru:{subtitle:'Помочь абитуриентам разобраться со следующим шагом.',role:'Backend-разработчик / Участник команды хакатона.',challenge:'Разработать AI-ассистента для абитуриентов в рамках хакатона.',contributions:['Спроектировал API AI-ассистента для абитуриентов.','Интегрировал ML-модели в серверную часть.','Работал в команде над проектом с Python-backend и TypeScript-frontend.'],outcome:'Команда заняла третье место на ITFest 2025.',links:[['Исходный код на GitHub','https://github.com/funster-a/hackathon-itfest'],['Открыть проект','https://hackathon-itfest.vercel.app']]}},
  gps:{image:'gpsindrive.svg',name:'GPSInDrive',eyebrow:'DECENTRATON 4 / GEOSPATIAL DATA',en:{subtitle:'From a sea of coordinates to meaningful clusters.',role:'Backend Developer / Geospatial data processing.',challenge:'Process a large geospatial dataset and identify structure in the location data.',contributions:['Processed a dataset containing 1.2 million geospatial records.','Implemented DBSCAN clustering algorithms in Python.','Worked on the GPSInDrive project for Decentraton 4.'],outcome:'Applied density-based clustering to make patterns in the geospatial dataset easier to inspect.',links:[['View source on GitHub','https://github.com/fenzit/gpsInDriveDecent4']]},ru:{subtitle:'От множества координат к осмысленным кластерам.',role:'Backend-разработчик / Обработка геоданных.',challenge:'Обработать большой массив геоданных и выделить в нём пространственные закономерности.',contributions:['Обработал массив из 1,2 млн географических записей.','Реализовал алгоритмы кластеризации DBSCAN на Python.','Работал над GPSInDrive в рамках Decentraton 4.'],outcome:'Применил кластеризацию на основе плотности для анализа пространственных закономерностей в данных.',links:[['Исходный код на GitHub','https://github.com/fenzit/gpsInDriveDecent4']]}}
};
let language = storage.get('portfolio-language') === 'ru' ? 'ru' : 'en';
let openCase = null;
let lastTrigger = null;
const dialog = $('#case-dialog');
const escape = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function renderCase(key){
  const project=cases[key], data=project[language], ru=language==='ru';
  const labels=ru?['Роль и период','Задача','Мой вклад','Результат','Ссылки']:['Role & timeline','The challenge','My contribution','The outcome','Explore further'];
  $('#case-content').innerHTML=`<div class="case-hero"><span class="eyebrow">${project.eyebrow}</span><h2 id="case-title">${project.name}</h2><p class="case-subtitle">${escape(data.subtitle)}</p></div><img class="case-image" src="assets/${project.image}" alt="${ru?'Концептуальная иллюстрация проекта':'Conceptual project illustration'}" width="960" height="620"><p class="case-caption">${ru?'Концептуальная визуализация · Не скриншот продукта':'Conceptual visualization · Not a product screenshot'}</p><div class="case-details"><h3>${labels[0]}</h3><p>${escape(data.role)}</p><h3>${labels[1]}</h3><p>${escape(data.challenge)}</p><h3>${labels[2]}</h3><ul>${data.contributions.map(item=>`<li>${escape(item)}</li>`).join('')}</ul><h3>${labels[3]}</h3><p>${escape(data.outcome)}</p><h3>${labels[4]}</h3><div class="case-links">${data.links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener">${escape(label)} <span aria-hidden="true">↗</span></a>`).join('')}</div></div>`;
}
function setLanguage(lang){
  language=lang; document.documentElement.lang=lang; document.body.classList.toggle('is-russian',lang==='ru'); storage.set('portfolio-language',lang);
  $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;el.innerHTML=lang==='ru'?(russian[key]??english[key]):english[key];});
  $$('.lang-button').forEach(btn=>{const selected=btn.dataset.lang===lang;btn.classList.toggle('active',selected);btn.setAttribute('aria-pressed',String(selected));});
  $('#hero-title').innerHTML=lang==='ru'?'<span class="hero-line line-one">ЛОГИКА<span class="title-period">.</span></span><span class="hero-line line-two">В <em>ДВИЖЕНИИ.</em></span>':'<span class="hero-line line-one">LOGIC<span class="title-period">.</span></span><span class="hero-line line-two">IN <em>MOTION.</em></span>';
  document.title=lang==='ru'?'Дияс Туглуков — Software Engineer':'Diyas Tuglukov — Software Engineer';
  $('meta[name="description"]').content=lang==='ru'?'Дияс Туглуков, разработчик из Алматы. Backend-системы, AI-интеграции и избранные проекты.':'Diyas Tuglukov, software engineer in Almaty. Backend systems, AI integrations, and ideas engineered into working products.';
  $('#close-dialog').setAttribute('aria-label',lang==='ru'?'Закрыть кейс':'Close case study');
  $$('[data-project]').forEach(button=>button.setAttribute('aria-label',`${lang==='ru'?'Открыть кейс':'Explore'} ${cases[button.dataset.project].name}`));
  $('.languages').setAttribute('aria-label',lang==='ru'?'Язык':'Language');
  $('#reactor').parentElement.querySelector('.reactor-label').textContent=lang==='ru'?'РИС. 01 — ВНУТРЕННИЙ ДВИГАТЕЛЬ':'FIG. 01 — THE ENGINE WITHIN';
  if(openCase) renderCase(openCase); updateMotionControl(); updateMenuLabel();
}
$$('.lang-button').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
const menuToggle=$('.menu-toggle'), mobileNav=$('#mobile-nav');
function updateMenuLabel(){const expanded=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-label',language==='ru'?(expanded?'Закрыть меню':'Открыть меню'):(expanded?'Close navigation':'Open navigation'));}
function closeMenu(){menuToggle.setAttribute('aria-expanded','false');mobileNav.hidden=true;updateMenuLabel();}
menuToggle.addEventListener('click',()=>{const expanded=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(expanded));mobileNav.hidden=!expanded;updateMenuLabel();});
$$('a',mobileNav).forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
$$('[data-project]').forEach(button=>button.addEventListener('click',()=>{lastTrigger=button;openCase=button.dataset.project;renderCase(openCase);dialog.showModal();document.body.classList.add('modal-open');dialog.scrollTop=0;}));
function closeCase(){dialog.close();}
$('#close-dialog').addEventListener('click',closeCase);
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeCase();}});
dialog.addEventListener('close',()=>{openCase=null;document.body.classList.remove('modal-open');lastTrigger?.focus({preventScroll:true});});
let toastTimer;
function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2800);}
$('#copy-email').addEventListener('click',async()=>{const email='tuglukov.7.diyas@gmail.com';try{await navigator.clipboard.writeText(email);toast(language==='ru'?'Email скопирован':'Email copied');}catch{const textarea=document.createElement('textarea');textarea.value=email;textarea.style.cssText='position:fixed;left:-9999px';document.body.append(textarea);textarea.select();const copied=document.execCommand('copy');textarea.remove();toast(copied?(language==='ru'?'Email скопирован':'Email copied'):(language==='ru'?'Email: '+email:'Email: '+email));}});
function updateClock(){try{$('#local-time').textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Almaty',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());}catch{}}
updateClock();setInterval(updateClock,60000);
let scrollQueued=false;
function updateScroll(){const max=document.documentElement.scrollHeight-innerHeight;$('.scroll-progress').style.width=`${max>0?(scrollY/max)*100:0}%`;scrollQueued=false;}
addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateScroll);}},{passive:true});addEventListener('resize',updateScroll);
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused=storage.get('portfolio-motion')==='paused'||reducedMotion.matches;
function updateMotionControl(){const button=$('#motion-toggle');if(!button)return;button.setAttribute('aria-pressed',String(motionPaused));button.innerHTML=`<span class="motion-icon" aria-hidden="true">${motionPaused?'▷':'Ⅱ'}</span><span>${language==='ru'?(motionPaused?'Включить анимацию':'Остановить анимацию'):(motionPaused?'Resume motion':'Pause motion')}</span>`;document.body.classList.toggle('motion-paused',motionPaused);}
$('#motion-toggle').addEventListener('click',()=>{motionPaused=!motionPaused;storage.set('portfolio-motion',motionPaused?'paused':'running');updateMotionControl();reactor.start();});
reducedMotion.addEventListener('change',event=>{if(event.matches){motionPaused=true;updateMotionControl();reactor.start();}});
const reactor=(()=>{
  const canvas=$('#reactor'),ctx=canvas.getContext('2d');
  if(!ctx)return {start(){}};
  let w=0,h=0,dpr=1,frame=0,lastTime=0,visible=true,time=0,mouse={x:0,y:0,active:false};
  const segments=180,tubes=14,vertices=[];
  const center=u=>{const r=1.62+.58*Math.cos(3*u);return [r*Math.cos(2*u),r*Math.sin(2*u),.85*Math.sin(3*u)];};
  for(let i=0;i<segments;i++){
    const u=i/segments*Math.PI*2,c=center(u),next=center(u+.001),t=[next[0]-c[0],next[1]-c[1],next[2]-c[2]],len=Math.hypot(...t);t.forEach((_,k)=>t[k]/=len);
    let normal=[-t[1],t[0],0],nl=Math.hypot(...normal);normal=normal.map(v=>v/nl);
    const binormal=[t[1]*normal[2]-t[2]*normal[1],t[2]*normal[0]-t[0]*normal[2],t[0]*normal[1]-t[1]*normal[0]];
    for(let j=0;j<tubes;j++){const v=j/tubes*Math.PI*2,r=.19+.095*(1+Math.sin(u*3));vertices.push(c.map((x,k)=>x+r*(Math.cos(v)*normal[k]+Math.sin(v)*binormal[k])));}
  }
  function resize(){const r=canvas.getBoundingClientRect();w=r.width;h=r.height;dpr=Math.min(devicePixelRatio||1,1.75);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);if(motionPaused)draw();}
  function draw(){
    if(!w||!h)return;
    ctx.clearRect(0,0,w,h);
    const scale=Math.min(w,h)*.19,yaw=time*.15+mouse.x*.14,pitch=.7+Math.sin(time*.12)*.16+mouse.y*.12,cy=Math.cos(yaw),sy=Math.sin(yaw),cx=Math.cos(pitch),sx=Math.sin(pitch);
    const glow=ctx.createRadialGradient(w*.53,h*.5,0,w*.53,h*.5,scale*2.5);glow.addColorStop(0,'rgba(255,63,19,.075)');glow.addColorStop(.55,'rgba(255,63,19,.025)');glow.addColorStop(1,'rgba(255,63,19,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    const points=vertices.map(([x,y,z])=>{const rx=x*cy-z*sy,rz=x*sy+z*cy,ry=y*cx-rz*sx,depth=y*sx+rz*cx,p=5.6/(5.6-depth);return {x:w*.53+rx*scale*p,y:h*.5+ry*scale*p,z:depth};});
    ctx.lineWidth=.65;
    const step=w<550?2:1;
    for(let i=0;i<segments;i+=step){for(let j=0;j<tubes;j++){
      const p=points[i*tubes+j],q=points[((i+step)%segments)*tubes+j],n=points[i*tubes+(j+1)%tubes],depth=(p.z+2.8)/5.6,alpha=.07+depth*.52;
      ctx.strokeStyle=`rgba(255,${Math.round(73+depth*61)},${Math.round(34+depth*30)},${alpha})`;
      ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);if(i%3===0){ctx.moveTo(p.x,p.y);ctx.lineTo(n.x,n.y);}ctx.stroke();
      if(j===3&&i%7===0){ctx.fillStyle=`rgba(255,194,143,${.35+depth*.5})`;ctx.beginPath();ctx.arc(p.x,p.y,1.15*depth+.5,0,Math.PI*2);ctx.fill();}
    }}
    for(let k=0;k<5;k++){const index=(Math.floor(time*(20+k*3)+k*31)%segments+segments)%segments,p=points[index*tubes+3];ctx.shadowColor='#ff6138';ctx.shadowBlur=14;ctx.fillStyle='#ffd0ab';ctx.beginPath();ctx.arc(p.x,p.y,2,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}
    ctx.strokeStyle='rgba(188,164,144,.11)';ctx.lineWidth=.6;ctx.beginPath();ctx.ellipse(w*.53,h*.5,scale*2.75,scale*2.2,-.35,Math.PI*.1,Math.PI*1.55);ctx.stroke();
  }
  function animate(timestamp){frame=0;if(!visible||document.hidden||motionPaused){draw();return;}if(timestamp-lastTime>32){time+=Math.min((timestamp-lastTime)/1000,.05);lastTime=timestamp;draw();}frame=requestAnimationFrame(animate);}
  function start(){if(frame)cancelAnimationFrame(frame);frame=0;if(motionPaused||!visible||document.hidden){draw();return;}lastTime=performance.now();frame=requestAnimationFrame(animate);}
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;start();},{rootMargin:'150px'}).observe(canvas);
  $('.hero').addEventListener('pointermove',event=>{if(event.pointerType==='touch'||motionPaused)return;const rect=canvas.getBoundingClientRect();mouse.x=(event.clientX-rect.left)/rect.width-.5;mouse.y=(event.clientY-rect.top)/rect.height-.5;},{passive:true});
  $('.hero').addEventListener('pointerleave',()=>{mouse.x=0;mouse.y=0;});
  document.addEventListener('visibilitychange',start);resize();return {start};
})();
setLanguage(language);updateScroll();reactor.start();
if('IntersectionObserver' in window&&!reducedMotion.matches&&!motionPaused){const reveal=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');reveal.unobserve(entry.target);}});},{threshold:.07});$$('.section-heading,.project,.about-grid,.skill-row,.experience-row,blockquote').forEach(el=>{el.classList.add('reveal-ready');reveal.observe(el);});}
})();
