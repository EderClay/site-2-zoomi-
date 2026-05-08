const cursor=document.getElementById('cursor');
const dot=cursor.querySelector('.cursor-dot');
const ring=cursor.querySelector('.cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});
(function anim(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(anim)})();
document.querySelectorAll('a,button,input,textarea,select,.service-item,.cloud-card,.seal-card,.why-item').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.width='56px';ring.style.height='56px';ring.style.borderColor='rgba(255,117,31,.9)'});
  el.addEventListener('mouseleave',()=>{ring.style.width='40px';ring.style.height='40px';ring.style.borderColor='rgba(255,117,31,.6)'});
});
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>60));
const pc=document.getElementById('particles');
for(let i=0;i<28;i++){const p=document.createElement('div');p.className='p';const s=Math.random()*4+1;p.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;background:${Math.random()>.5?'rgba(255,117,31,.35)':'rgba(20,100,164,.4)'};animation-duration:${Math.random()*20+15}s;animation-delay:-${Math.random()*20}s`;pc.appendChild(p)}
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>obs.observe(el));
function toggleSvc(item){const o=item.classList.contains('open');document.querySelectorAll('.service-item.open').forEach(i=>{if(i!==item)i.classList.remove('open')});item.classList.toggle('open',!o)}
function handleSubmit(e){e.preventDefault();const btn=e.target.querySelector('button[type=submit]');const orig=btn.innerHTML;btn.innerHTML='✓ Mensagem enviada com sucesso!';btn.style.background='linear-gradient(135deg,#22c55e,#16a34a)';btn.disabled=true;setTimeout(()=>{btn.innerHTML=orig;btn.style.background='';btn.disabled=false;e.target.reset()},3500)}
