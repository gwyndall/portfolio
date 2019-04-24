// Import lit-html functions
import { html, render } from 'lit-html';

// Define a template function
const myTemplate = name =>
  html`
  <canvas id="smallCanvas" width="256" height="106"></canvas><a href="index.html" id="home"><img src="images/WheatLogo.png" alt="wheat logo" id="logosm" width="80"> Home</a> <a href="graphics.html" id="graphics">Graphics</a><a href="web.html" id="web">Web</a><a href="about.html" id="about">About</a>
  `;

// Render the template with some data
render(myTemplate('lit-html'), document.body('#navBar'));


