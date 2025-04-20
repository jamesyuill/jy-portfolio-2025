import playgroundSlugs from './playground-slugs.js';

const playgroundGrid = document.getElementById('playground-grid');

playgroundSlugs.forEach((item) => {
  const cardDiv = document.createElement('div');
  cardDiv.setAttribute('class', 'playground-card');
  const el = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('src', item.img_src);
  const title = document.createElement('h2');
  title.innerText = item.title;
  const visitButton = document.createElement('a');
  visitButton.innerText = 'Visit';
  visitButton.setAttribute('href', item.img_url);

  el.appendChild(img);
  el.appendChild(title);
  cardDiv.appendChild(el);
  cardDiv.appendChild(visitButton);
  playgroundGrid.appendChild(cardDiv);
});

const backArrow = document.getElementById('back-arrow');
backArrow.addEventListener('click', () => {
  window.location.href = '../menu/menu.html';
});
