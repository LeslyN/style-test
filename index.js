document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector('.nav');

  document.querySelector("#btnNav").addEventListener("click", () => {
    nav.classList.add('nav--open');
  });

  document.querySelector(".nav__overlay").addEventListener("click", () => {
    nav.classList.remove('nav--open');
  });

  const trigger = document.getElementsByClassName('trigger__icon');
  for (i = 0; i < trigger.length; i++ ) {
    trigger[i].addEventListener('click', () => {
      const sublinks = document.querySelector('.sub__links')
      console.log('es trigger: ')
      sublinks.classList.toggle('active')
    })
  }

});