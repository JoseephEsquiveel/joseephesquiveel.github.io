const burger=document.querySelector('.burger'), menu=document.getElementById('menu');
const drops=[...document.querySelectorAll('.menu li > button')];
function closeDrops(except){drops.forEach(b=>{if(b!==except){b.setAttribute('aria-expanded','false');b.nextElementSibling.classList.remove('open')}})}
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
drops.forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();const o=b.nextElementSibling.classList.toggle('open');b.setAttribute('aria-expanded',o);closeDrops(b)}));
document.addEventListener('click',()=>closeDrops());
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrops()});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{closeDrops();menu.classList.remove('open');burger.setAttribute('aria-expanded','false');
  const t=document.querySelector(a.getAttribute('href'));if(t&&t.tagName==='DETAILS')t.open=true}));
