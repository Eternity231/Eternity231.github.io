const pages = document.querySelectorAll('.page');
const home = document.querySelector('#home');
const page2 = document.querySelector('#page2');
const arrow = document.querySelector('.arrow');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

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

// 点击 Prev 按钮回到第一页
prevButton.addEventListener('click', () => {
  page2.classList.remove('active');
  home.classList.add('active');
});

// 点击 Next 按钮跳转到第三页（示例）
nextButton.addEventListener('click', () => {
  alert('Go to Page 3'); // 替换为跳转代码
});
