import experimentSlugs from './experiment-slugs.js';

const experimentGrid = document.getElementById('experiments-grid');

experimentSlugs.forEach((item) => {
  const cardDiv = document.createElement('div');
  cardDiv.setAttribute('class', 'experiment-card');
  const img = document.createElement('img');
  img.setAttribute('src', item.img);
  const overlay = document.createElement('div');
  overlay.setAttribute('class', 'overlay');
  overlay.innerHTML = `<p>${item.language}</p>`;
  const title = document.createElement('h2');
  title.innerText = item.title;
  const about = document.createElement('p');
  about.innerText = item.about;
  const learnMoreButton = document.createElement('a');
  learnMoreButton.innerText = 'Read more';
  learnMoreButton.setAttribute('href', item.href);
  cardDiv.appendChild(img);
  cardDiv.appendChild(overlay);
  cardDiv.appendChild(title);
  cardDiv.appendChild(about);
  cardDiv.appendChild(learnMoreButton);
  experimentGrid.appendChild(cardDiv);
});

const backArrow = document.getElementById('back-arrow');
backArrow.addEventListener('click', () => {
  window.location.href = '../menu/menu.html';
});
