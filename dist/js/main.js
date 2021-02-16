const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

const home = document.querySelector('.home')
const aboutMe = document.querySelector('.about-me')
const projects = document.querySelector('.projects')
const contactMe = document.querySelector('.contact-me')
const fullQ = document.querySelector('.fullscreen')
const full = document.getElementById('fullscreen')

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
fullQ.addEventListener('click', exitFullscreen)

!(window.matchMedia("(max-width: 500px)").matches)

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}

function fullscreen(name) {
  full.style.background = `rgba(0,0,0,0.5) url('./img/${name}') no-repeat center`
  fullQ.classList.add('show')
}

function exitFullscreen() {
  full.style.background = ``
  fullQ.classList.remove('show')
}

window.smoothScroll = function(target) {
  var scrollContainer = target;
  //toggleMenu()
  do {
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 10);
  }
  
  home.classList.remove('current')
  aboutMe.classList.remove('current')
  projects.classList.remove('current')
  contactMe.classList.remove('current')

  scrollContainer.classList.add('current')

  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}