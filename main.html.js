// Smooth scroll for CTA and header/footer links
document.querySelectorAll('[data-scroll], .menu a, .footer .link-list a').forEach(el => {
  el.addEventListener('click', e => {
    const href = el.getAttribute('data-scroll') || el.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Fake submits
['contactForm','estimateForm'].forEach(id=>{
  const form = document.getElementById(id);
  form?.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('送信しました。追ってご連絡いたします。');
  });
});
