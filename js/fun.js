const query = (el) => document.querySelector(el);
let category = new Set();
category.add("all");
// ******************************************

function renderWorks({ src, name, ref, dis, filter }) {
  let card = document.createElement("div");
  card.className = `card ${filter} all`;
  card.innerHTML = `
      <div class="img">
        <img src=${src} alt="project img" loading="lazy">
      </div>
       <div class="info">
        <div>
          <h3 class="name">${name}</h3>
          <a href=${ref} class="demo" target="_blank">demo</a>
        </div>
        <p class="dis">${dis}</p>
      </div>
    `;
  query(".works .container").appendChild(card);
}

function setCategory(name) {
  let ul = document.querySelector(".filter ul");
  let li = document.createElement("li");
  li.textContent = name;
  li.setAttribute("data-filter", name);
  ul.appendChild(li);
  filter(li);
}

function filter(element) {
  element.addEventListener("click", function () {
    document
      .querySelectorAll(".filter ul li")
      .forEach((el) => el.classList.remove("active"));

    document
      .querySelectorAll(".all")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");

    document.querySelectorAll(`.${this.dataset.filter}`).forEach((el, i) => {
      setTimeout(() => el.classList.add("active"), 10 * i);
    });

    setTimeout(() => {
      window.scrollTo({
        top: my_works.offsetTop,
        behavior: "smooth",
      });
    }, 0);
  });
}
// ******************************************
function renderInfo(data) {
  const html = ` 
        <h1 class="name">${data.name}</h1>
        <p class="bio">${data.bio}</p>
        <p class="from">${data.from}</p>
        <p class="age">${new Date().getFullYear() - +data.age} Years old</p>
        <a class="cv" href="./resume.pdf" download>Download My CV</a>
        `;

  query(".info").innerHTML = html;
}
function renderSkills(data) {
  let skills = query(".skills");
  for (let i in data) {
    let li = document.createElement("li");
    li.innerHTML = `<img src="./imgs/svg/${data[i]}.svg" alt="" loading="lazy"/>`;
    skills.appendChild(li);
    // console.log(data[i]);
  }
}
function renderProjects(data) {
  for (let work of data) {
    category.add(work.filter);
    renderWorks({
      src: work.src,
      name: work.name,
      ref: work.demo,
      dis: work.dis,
      filter: work.filter,
    });
  }
  category.forEach((el) => setCategory(el));
  //   setTimeout(() => query("[data-filter=all]").click(), 4000);
}
function renderContact(data) {
  query(".github").href = data.GitHub;
  query(".fb").href = data.fb;
  query(".ln").href = data.LinkedIn;
  query(".email").href = data.email;
}

// ******************************************
function changeTheme(data) {
  query(".switch").onclick = function () {
    const ROOT = document.documentElement.style;
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      ROOT.setProperty("--text", data.theme_2.text);
      ROOT.setProperty("--bg", data.theme_2.bg);
      ROOT.setProperty("--sbg", data.theme_2.sbg);
      ROOT.setProperty("--light", data.theme_2.light);
    } else {
      ROOT.setProperty("--text", data.theme_1.text);
      ROOT.setProperty("--bg", data.theme_1.bg);
      ROOT.setProperty("--sbg", data.theme_1.sbg);
      ROOT.setProperty("--light", data.theme_1.light);
    }
    console.log(data);
  };
}
