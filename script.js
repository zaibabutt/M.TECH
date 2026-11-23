// 1. MOBILE MENU
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');
if(btn){
  btn.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    btn.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{ nav.classList.remove('open'); btn.textContent='☰'; });
  });
}

// 2. SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      const el = document.querySelector(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    }
  });
});

// 3. ORDER FORM - VALIDATION + WHATSAPP
const form = document.getElementById('orderForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('oName').value.trim();
    const phone = document.getElementById('oPhone').value.trim();
    const service = document.getElementById('oService').value;
    const msg = document.getElementById('oMsg').value.trim();
    const err = document.getElementById('oError');
    if(!name){ err.textContent='Please fill your name'; return; }
    if(!phone){ err.textContent='Please fill WhatsApp number'; return; }
    if(!msg){ err.textContent='Please write your message / question'; return; }
    err.textContent='';
    const text = `Hello MUZEX TECHNOLOGIES!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(msg)}`;
    // APNA NUMBER YAHAN DALO - 92 ke sath, bina + ke
    const myNumber = '923001234567';
    window.open(`https://wa.me/${myNumber}?text=${text}`, '_blank');
  });
}