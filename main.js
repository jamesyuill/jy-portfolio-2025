//Header
const padding = 1.4;
const width = window.innerWidth / padding;
const height = window.innerHeight / padding;
const hero = document.getElementById('hero');
hero.style.width = `${width < height ? width : height}px`;
hero.style.height = `${width < height ? width : height}px`;
hero.style.fontSize = `${width < height ? width / 120 : height / 120}rem`;

window.addEventListener('resize', (e) => {
  let width = e.target.innerWidth / padding;
  let height = e.target.innerHeight / padding;
  hero.style.width = `${width < height ? width : height}px`;
  hero.style.height = `${width < height ? width : height}px`;
  hero.style.fontSize = `${width < height ? width / 120 : height / 120}rem`;
});

hero.addEventListener('click', (e) => {
  e.target.classList.add('zoomIn');

  const zoomInAnimation = document.querySelector('.zoomIn');
  zoomInAnimation.addEventListener('animationend', () => {
    window.location.href = './menu/menu.html';
  });
});
