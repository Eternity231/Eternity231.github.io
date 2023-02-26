const pages = document.querySelectorAll('.page');
const home = document.querySelector('#home');
const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const arrow = document.querySelector('.arrow');
const nextPage = document.querySelector('.next-page');
const prevPage = document.querySelector('.prev-page');
const page3 = document.querySelector('#page3');

arrow.addEventListener('click', () => {
  home.classList.remove('active');
  page1.classList.add('active');
});

pages.forEach(page => {
  page.addEventListener('transitionend', () => {
    if (page.classList.contains('active')) {
      page.style.zIndex = 1;
    } else {
      page.style.zIndex = -1;
    }
  });
});
