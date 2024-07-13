function toggleMenu() {
  const menu = document.getElementById('menu');
  const hamburger = document.getElementById('hamburger');
  menu.classList.toggle('show-menu');

  if (menu.classList.contains('show-menu')) {
      hamburger.innerHTML = '<img src="./images/cross.svg" width="30" height="30">';
  } else {
      hamburger.innerHTML = '<img src="./images/hamburger-menu.svg" width="30" height="30">';
  }
}
document.querySelectorAll('#menu .link').forEach(link => {
  link.addEventListener('click', () => {
      const menu = document.getElementById('menu');
      const hamburger = document.getElementById('hamburger');
      menu.classList.remove('show-menu');
      hamburger.innerHTML = '<img src="./images/hamburger-menu.svg" width="30" height="30" >';
  });
});