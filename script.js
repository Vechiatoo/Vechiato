const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const navLinks = nav.getElementsByTagName('a'); // Assume que os links estão dentro do elemento com id 'nav'

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function closeMenu() {
  nav.classList.remove('active');
  btnMobile.setAttribute('aria-expanded', false);
  btnMobile.setAttribute('aria-label', 'Abrir Menu');
}

// Adiciona o evento de clique a cada link do menu
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', closeMenu);
}

/* animações de pagina*/

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});