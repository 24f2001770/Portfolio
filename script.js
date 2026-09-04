const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
const theme=document.querySelector('.theme');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
theme?.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  theme.textContent=document.body.classList.contains('light')?'☀':'☾';
  localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark');
});
if(localStorage.getItem('theme')==='light'){document.body.classList.add('light');theme.textContent='☀';}
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  document.querySelector('.progress').style.width=(window.scrollY/h*100)+'%';
});
