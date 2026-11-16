// Mejora progresiva: sin JavaScript, la navegación permanece visible.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
if (menuButton && menu) {
  const closeMenu = (restoreFocus = false) => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    if (restoreFocus) menuButton.focus();
  };
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  window.matchMedia('(min-width: 701px)').addEventListener('change', () => closeMenu());
}
// Cada control identifica explícitamente el contenido que despliega.
document.querySelectorAll('.more-btn').forEach(button => {
  const content = document.getElementById(button.getAttribute('aria-controls'));
  if (!content) return;
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    content.hidden = expanded;
    button.setAttribute('aria-expanded', String(!expanded));
    button.textContent = expanded ? 'Ver más +' : 'Ver menos −';
  });
});
// Solo validación local: no hay fetch, almacenamiento ni envío de datos.
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    document.querySelector('#form-status').textContent = 'Formulario validado. Es una demostración: tus datos no se enviaron ni se almacenaron.';
  });
  form.querySelector('fieldset').disabled = false;
  form.addEventListener('input', () => {
    document.querySelector('#form-status').textContent = '';
  });
}

/* INICIAR CADA PÁGINA DESDE ARRIBA */

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('pageshow', () => {
  // Respetar los enlaces a secciones específicas
  if (!window.location.hash) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }
});
