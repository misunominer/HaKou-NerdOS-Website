document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  menuToggle?.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  mainNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  const tabs = document.querySelectorAll('.ui-tab');
  const shots = document.querySelectorAll('.ui-shot');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      shots.forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.target);
      if (target) target.classList.add('active');
    });
  });

  // Very subtle pointer parallax. Disabled automatically for reduced motion.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const chappi = document.querySelector('.hero-chappi img');
    window.addEventListener('pointermove', (e) => {
      if (!chappi || window.innerWidth < 900) return;
      const x = (e.clientX / window.innerWidth - .5) * 8;
      const y = (e.clientY / window.innerHeight - .5) * 5;
      chappi.style.marginLeft = `${x}px`;
      chappi.style.marginBottom = `${-y}px`;
    }, {passive:true});
  }
});