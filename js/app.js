function APP() {
  renderInfo(data.info);
  renderSkills(data.skills);
  renderProjects(data.works);
  renderContact(data.contact);
  changeTheme(data.themes);


}

// ******************************************
query(".toggle").onclick = function () {
  this.classList.toggle("active");
  query(".menu").classList.toggle("active");
};
// ******************************************"

let active = "";
let sections = document.querySelectorAll("section");
window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 200) active = section.id;
  });
  query(".title").textContent = active.replace("_", " ");
});
// fetch data
// (async () => {
//   const req = await fetch("./js/data.json");
//   const res = await req.json();

//   renderInfo(res.info);
//   renderSkills(res.skills);
//   renderProjects(res.works);
//   renderContact(res.contact);
//   changeTheme(res.themes);
// })();

let scroll = 1;
let ul = query(".filter ul");
query(".filter .p").addEventListener("click", () => {
  ul.scrollTo({
    left: scroll - 300,
    behavior: "smooth",
  });
  scroll > 1 ? (scroll -= 100) : scroll;
});
query(".filter .n").addEventListener("click", () => {
  ul.scrollTo({
    left: scroll + 300,
    behavior: "smooth",
  });
  scroll < ul.offsetWidth ? (scroll += 100) : scroll;
});
// ******************************************

window.addEventListener("click", function (e) {
  const el = document.createElement("div");
  el.className = "pointer";
  el.style = `left: ${e.clientX}px; top:${e.clientY}px`;
  el.style.borderColor = `var(--green)`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 470);
});
// ******************************************

// ******************************************
// START APP ^_^
APP();
