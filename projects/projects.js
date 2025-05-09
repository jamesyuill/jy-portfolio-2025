import projectSlugs from './project-slugs.js';

const projectsGrid = document.getElementById('projects-grid');

projectSlugs.forEach((item) => {
  const cardDiv = document.createElement('div');
  cardDiv.setAttribute('class', 'project-card');
  const el = document.createElement('div');
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
  el.appendChild(img);
  el.appendChild(overlay);
  el.appendChild(title);
  el.appendChild(about);
  cardDiv.appendChild(el);
  cardDiv.appendChild(learnMoreButton);
  projectsGrid.appendChild(cardDiv);
});

const backArrow = document.getElementById('back-arrow');
backArrow.addEventListener('click', () => {
  window.location.href = '../menu/menu.html';
});
