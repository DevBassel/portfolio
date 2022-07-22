const query = (el) => document.querySelector(el);


function renderWorks({ src, name, ref, dis, filter }) {
  let card = document.createElement('div');
  card.className = `card ${filter} all`;
  card.innerHTML = `
      <div class="img">
        <img src=${src} alt="project img">
      </div>
       <div class="info">
        <div>
          <h2 class="name">${name}</h2>
          <a href=${ref} class="demo" target="_blank">demo</a>
        </div>
        <p class="dis">${dis}</p>
      </div>
    `;
  query('.works .container').appendChild(card);
}
let category = new Set();
category.add('all')

function setCategory(name) {
  let ul = document.querySelector('.filter ul');
  let li = document.createElement('li');
  li.textContent = name;
  li.setAttribute('data-filter', name);
  ul.appendChild(li);
  filter(li);
}

function filter(element) {
  element.addEventListener('click', function() {
    document.querySelectorAll('.all').forEach(el => el.classList.remove('active'));
    document.querySelectorAll(`.${this.dataset.filter}`)
      .forEach((el,i) => {
        setTimeout(() => el.classList.add('active'), 300 * i);
      });
  });
}

export {
  query,
  renderWorks,
  category,
  setCategory,
}
