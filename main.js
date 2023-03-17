const menuButton = document.querySelector("header button");
const hamburgerIcon = menuButton.querySelector(".hamburger");
const closeIcon = menuButton.querySelector(".close");
const menu = document.querySelector(".menu");

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      hamburgerIcon.classList.remove("hide");
      closeIcon.classList.add("hide");
    }
  }
});

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  hamburgerIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
  menu.classList.toggle("show");
}
