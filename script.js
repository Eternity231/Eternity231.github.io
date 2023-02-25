const page = document.querySelector('.page');
document.addEventListener('keyup', event => {
  if (event.keyCode === 39) { // 按下右箭头键
    page.classList.toggle('active');
  }
});
