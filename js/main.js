(function () {
  const cfg = window.ANDOX || {};

  // Botones de descarga: todos los [data-demo] usan DEMO_URL de config.js
  document.querySelectorAll('[data-demo]').forEach(a => {
    if (cfg.DEMO_URL) {
      a.href = cfg.DEMO_URL; a.target = '_blank'; a.rel = 'noopener';
    } else {
      a.addEventListener('click', e => {
        e.preventDefault();
        alert('El enlace de descarga de la demo aún no está configurado (js/config.js).');
      });
    }
  });
  document.querySelectorAll('[data-version]').forEach(n => n.textContent = cfg.VERSION || '');
  document.querySelectorAll('[data-year]').forEach(n => n.textContent = new Date().getFullYear());

  // Menú móvil
  const btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); } });

  // Ventana de módulos (pestañas)
  const tabs = [...document.querySelectorAll('.win [role=tab]')];
  const show = t => tabs.forEach(x => {
    const on = x === t;
    x.setAttribute('aria-selected', on);
    x.tabIndex = on ? 0 : -1;
    document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
  });
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => show(t));
    t.addEventListener('keydown', e => {
      const k = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
      if (!k) return;
      e.preventDefault();
      const n = tabs[(i + k + tabs.length) % tabs.length]; n.focus(); show(n);
    });
  });

})();
