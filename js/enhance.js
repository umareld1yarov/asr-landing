/* ASR landing — visual enhancements */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('header');
  const bar = document.getElementById('scroll-progress');

  const onScroll = () => {
    const h = document.documentElement;
    const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
    if (bar) bar.style.transform = `scaleX(${p})`;
    if (header) header.classList.toggle('is-scrolled', h.scrollTop > 10);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll (skip the hero so first paint is instant)
  const targets = [...document.querySelectorAll('section[id] h2, section[id] .light-card')];
  targets.forEach((el, i) => { el.classList.add('reveal'); el.style.transitionDelay = `${(i % 4) * 70}ms`; });
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
  } else targets.forEach(el => el.classList.add('is-visible'));

  // Cursor-follow glow on cards
  document.addEventListener('pointermove', e => {
    const card = e.target.closest && e.target.closest('.light-card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });

  // 3D tilt for the hero phone
  const stage = document.querySelector('.phone-stage');
  const phone = stage && stage.querySelector('.device-frame-container');
  if (stage && phone && !reduce && matchMedia('(pointer: fine)').matches) {
    stage.addEventListener('pointermove', e => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      phone.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg)`;
    });
    stage.addEventListener('pointerleave', () => { phone.style.transform = ''; });
  }

  // Live "how much of today is gone" widget
  const ring = document.getElementById('day-ring');
  const label = document.getElementById('day-left');
  const isEn = () => !!document.querySelector('.lang-btn[data-lang="en"].bg-slate-900');
  const tick = () => {
    if (!ring || !label) return;
    const now = new Date();
    const mins = now.getHours() * 60 + now.getMinutes();
    const pct = Math.round((mins / 1440) * 100);
    ring.style.setProperty('--p', pct);
    ring.querySelector('b').textContent = pct + '%';
    const left = 1440 - mins, h = Math.floor(left / 60), m = left % 60;
    label.textContent = isEn()
      ? `${h} h ${m} min of today left — make them count`
      : `До конца дня: ${h} ч ${m} мин — проживите их осознанно`;
  };
  tick(); setInterval(tick, 20000);
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => setTimeout(tick, 50)));
})();
