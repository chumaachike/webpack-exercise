import airbnb from './assets/airbnb.png';
import './style.css';

const title = document.createElement('h3');
title.textContent = 'Webpack made easy';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = airbnb;
page.appendChild(img);
