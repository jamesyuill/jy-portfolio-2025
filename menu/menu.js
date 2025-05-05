const projectBall = document.getElementById('project-ball');
const experimentBall = document.getElementById('experiments-ball');
const playgroundBall = document.getElementById('playground-ball');
const contactBall = document.getElementById('contact-ball');

const width = window.innerWidth;
const height = window.innerHeight;

const halfWidth = width / 2;
const halfHeight = height / 2;

projectBall.style.backgroundColor = '#fa5252';
experimentBall.style.backgroundColor = '#ffa94d';
playgroundBall.style.backgroundColor = '#ffd43b';
// musicBall.style.backgroundColor = '#40c057';
contactBall.style.backgroundColor = '#4dabf7';

const shrinkFactor = 3;

onpageshow = (event) => {
  if (event.persisted) {
    void projectBall.offsetWidth;
    void experimentBall.offsetWidth;
    void playgroundBall.offsetWidth;
    void contactBall.offsetWidth;
    projectBall.className = 'menu-ball fadeUpAnimation';
    experimentBall.className = 'menu-ball fadeUpAnimation';
    playgroundBall.className = 'menu-ball fadeUpAnimation';
    contactBall.className = 'menu-ball fadeUpAnimation';
  }
};

//Ball size and font size
const menuBalls = document.querySelectorAll('.menu-ball');
menuBalls.forEach((item) => {
  item.style.fontSize = `${
    width < height ? width / shrinkFactor / 110 : height / shrinkFactor / 110
  }rem`;
  item.style.width = `${
    width < height ? width / shrinkFactor : height / shrinkFactor
  }px`;
  item.style.height = `${
    width < height ? width / shrinkFactor : height / shrinkFactor
  }px`;

  item.addEventListener('click', (e) => {
    const target = e.target;
    const targetText = e.target.innerText;
    target.className = 'menu-ball zoomIn';
    const zoomInAnimation = document.querySelector('.zoomIn');
    zoomInAnimation.addEventListener('animationend', () => {
      setTimeout(() => {
        window.location.replace(`../${targetText}/${targetText}.html`);
      }, 500);
    });
    menuBalls.forEach((item) => {
      if (item !== e.target) {
        item.classList.replace('fadeUpAnimation', 'fadeOutAnimation');
      }
    });
  });
});

const heightStep = height / 6;
const widthStep = width / 1.7;
const ballRadius = projectBall.offsetWidth / 3;
const quarterWidth = halfWidth / 2;
const quarterHeight = halfHeight / 2;

//Ball position
projectBall.style.position = 'absolute';
projectBall.style.top = `${quarterHeight - ballRadius}px`;
projectBall.style.left = `${halfWidth / 2 - ballRadius}px`;

experimentBall.style.position = 'absolute';
experimentBall.style.top = `${quarterHeight - ballRadius}px`;
experimentBall.style.right = `${quarterWidth - ballRadius}px`;

playgroundBall.style.position = 'absolute';
playgroundBall.style.bottom = `${quarterHeight - ballRadius}px`;
playgroundBall.style.left = `${halfWidth / 2 - ballRadius}px`;

contactBall.style.position = 'absolute';
contactBall.style.bottom = `${quarterHeight - ballRadius}px`;
contactBall.style.right = `${quarterWidth - ballRadius}px`;

window.addEventListener('resize', (e) => {
  let width = e.target.innerWidth;
  let height = e.target.innerHeight;
  let halfWidth = width / 2;
  let halfHeight = height / 2;
  let ballRadius = projectBall.offsetWidth / 3;
  let quarterWidth = halfWidth / 2;
  let quarterHeight = halfHeight / 2;

  menuBalls.forEach((item) => {
    item.style.fontSize = `${
      width < height ? width / shrinkFactor / 110 : height / shrinkFactor / 110
    }rem`;
    item.style.width = `${
      width < height ? width / shrinkFactor : height / shrinkFactor
    }px`;
    item.style.height = `${
      width < height ? width / shrinkFactor : height / shrinkFactor
    }px`;
  });

  projectBall.style.top = `${quarterHeight - ballRadius}px`;
  projectBall.style.left = `${halfWidth / 2 - ballRadius}px`;

  experimentBall.style.top = `${quarterHeight - ballRadius}px`;
  experimentBall.style.right = `${quarterWidth - ballRadius}px`;

  playgroundBall.style.bottom = `${quarterHeight - ballRadius}px`;
  playgroundBall.style.left = `${halfWidth / 2 - ballRadius}px`;

  contactBall.style.bottom = `${quarterHeight - ballRadius}px`;
  contactBall.style.right = `${quarterWidth - ballRadius}px`;
});
