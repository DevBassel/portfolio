function query(el) {
  return document.querySelector(el);
}

function create(el) {
  return document.createElement(el);
}

function renderWorks(count) {
  for (let i = 0; i < count; i++) {
    let card = create('div');
    card.className = `card c${i}`;
    let img = create('img');
    let imgd = create('div');
    imgd.appendChild(img);
    imgd.className = 'img';
    let info = create('div');
    info.className = 'info';
    let div = create('div');
    let h2 = create('h2');
    h2.className = 'name';
    let link = create('a');
    link.className = 'demo';
    link.textContent = 'demo';
    let p = create('p');
    p.className = 'dis';
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
