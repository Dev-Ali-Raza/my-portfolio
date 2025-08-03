AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});


const toggle = document.getElementById('modeToggle');
const body = document.body;
const navbar = document.querySelector('.navbar');

function setMode(mode) {
  if (mode === 'light') {
    body.classList.add('light-mode');
    navbar.classList.remove('bg-dark');
    navbar.classList.add('bg-light', 'navbar-light');
    toggle.checked = true;
  } else {
    body.classList.remove('light-mode');
    navbar.classList.add('bg-dark');
    navbar.classList.remove('bg-light', 'navbar-light');
    toggle.checked = false;
  }
}

setMode('dark');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    setMode('light');
  } else {
    setMode('dark');
  }
});