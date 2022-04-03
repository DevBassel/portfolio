import { query, renderWorks } from './fun.js';
//  #######################

// toggel menu
query('.toggle').onclick = function() {
  this.classList.toggle('active');
  query('.menu').classList.toggle('active');
}
let audio = document.createElement('audio');

const request = new XMLHttpRequest();
request.open('GET', './js/data.json');
request.onload = function() {
  // do a magic
  const data = JSON.parse(request.responseText);
  console.log(data);
  // render my data
  query('.name').textContent = data.name;
  query('.bio').textContent = data.bio;
  let skills = document.querySelectorAll('.skills .data span');
  for (let i in data.skills) {
    skills[i].textContent = data.skills[i];
  }

  // render works data
  renderWorks(data.works.length);
  for (let i in data.works) {
    query(`.card.c${i} img`).src = data.works[i].src
    query(`.card.c${i} .name`).textContent = data.works[i].name;
    query(`.card.c${i} .demo`).href = data.works[i].demo;
    query(`.card.c${i} .dis`).textContent = data.works[i].dis;
  }
  // audio switch
      audio.src = data.mp3[0];


}
request.send();

let active = '';
let sections = document.querySelectorAll('section');
window.addEventListener('scroll', function() {
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 200)
      active = section.id;
  });
  query('.title').textContent = active.replace('_', ' ');
});
query('.switch').onclick = function() {
  this.classList.toggle('active');
  this.classList.contains('active') ?
    audio.play() : audio.pause();
}

window.addEventListener('click', function(e) {
  const el = document.createElement('div');
  el.className = 'pointer';
  el.style = `left: ${e.clientX}px; top:${e.clientY}px`;
  el.style.borderColor = `var(--green)`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 470)
});