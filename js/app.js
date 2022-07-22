import { query, renderWorks, category,setCategory } from './fun.js';
//  #######################
// toggel menu
query('.toggle').onclick = function() {
  this.classList.toggle('active');
  query('.menu').classList.toggle('active');
}


let audio = document.createElement('audio');
const request = new XMLHttpRequest();
request.onload = function() {
  if (request.readyState === 4 && request.status === 200) {

    // do a magic
    const data = JSON.parse(request.responseText);
    // console.log(data);
    // render my data

    query('.name').textContent = data.name;
    query('.age').textContent = `${new Date().getFullYear() - +data.age} Years old`;
    query('.from').textContent = data.from;
    query('.bio').textContent = data.bio;
    let skills = document.querySelectorAll('.skills .data span');
    for (let i in data.skills) {
      skills[i].textContent = data.skills[i];
    }

    // render works 
    for (let work of data.works) {
      renderWorks({
        src: work.src,
        name: work.name,
        ref: work.demo,
        dis: work.dis,
        filter: work.filter,
      });
      category.add(work.filter)
    }
    category.forEach(el => setCategory(el))
    // audio switch
    audio.src = data.mp3[0];
    // contact
    query('.github').href = data.contact.GitHub;
    query('.fb').href = data.contact.fb;
    query('.ln').href = data.contact.LinkedIn;
    query('.email').href = data.contact.email;
    query('.cw').href = data.contact.codeWars;
    // query('.loader').remove();
  } // end if
}
request.open('GET', './js/data.json');
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
