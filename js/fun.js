function query(el) {
  return document.querySelector(el);
}

function create(element, className = '') {
  let el = document.createElement(element);
  el.className = className;
  return el;
}

function renderWorks(count) {
  for (let i = 0; i < count; i++) {
    let card = create('div', `card c${i}`);
    let img = create('img');
    let imgd = create('div');
    imgd.appendChild(img, 'img');
    let info = create('div', 'info');
    let div = create('div');
    let h2 = create('h2', 'name');
    let link = create('a', 'demo');
    link.textContent = 'demo';
    let p = create('p', 'dis');
    card.appendChild(imgd);
    card.appendChild(info);
    info.appendChild(div);
    div.appendChild(h2);
    div.appendChild(link);
    info.appendChild(p);
    query('.works .container').appendChild(card);
  }
}


export {
  query,
  create,
  renderWorks
}
