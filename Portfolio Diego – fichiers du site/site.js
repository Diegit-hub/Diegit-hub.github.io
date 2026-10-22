const nav = document.querySelector('.nav');
const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
const btn = document.querySelector('.menu-btn');
const list = document.querySelector('.nav ul');
if (btn && list) {
  btn.addEventListener('click', () => { const o = list.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
  list.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { list.classList.remove('open'); btn.setAttribute('aria-expanded', false); }));
}
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 }) : null;
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));
