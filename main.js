console.log(
  '\x1b[35m%s\x0b',
  'Hello friends! Enjoy my minimal, lightweight website! Be sure to stop by my experiments page for fun times'
);

window.number = chooseNumber();

console.log(
  'guess the number between 1-10:\n\nplease enter your number below, using the following function call - myNumberIs(yourguess)'
);

function chooseNumber() {
  return Math.round(Math.random() * 10);
}

function myNumberIs(num) {
  if (num === number) {
    console.log('congrats! you win nothing at all');
  } else {
    console.log('sorry, that was not it');
  }
}

window.myNumberIs = myNumberIs;

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
  e.preventDefault();
  e.target.classList.add('zoomIn');

  // const zoomInAnimation = document.querySelector('.zoomIn');
  // zoomInAnimation.addEventListener('animationend', () => {
  // hero.style.transform = 'scale(1500%)';
  setTimeout(() => {
    window.location.href = './menu/menu.html';
  }, 500);
  // });
});
