const pages = document.querySelectorAll('.page');
const home = document.querySelector('#home');
const page2 = document.querySelector('#page2');
const arrow = document.querySelector('.arrow');

// 点击箭头按钮跳转到第二页
arrow.addEventListener('click', () => {
  home.classList.remove('active');
  page2.classList.add('active');
});

// 切换页面时添加或删除 active 类
pages.forEach(page => {
  page.addEventListener('transitionend', () => {
    if (page.classList.contains('active')) {
      page.style.zIndex = 1;
    } else {
      page.style.zIndex = -1;
    }
  });
});
