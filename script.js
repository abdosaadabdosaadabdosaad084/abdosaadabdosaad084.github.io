const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
  links.classList.toggle("open");
});

document.querySelectorAll(".links a").forEach(link => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
  });
});
