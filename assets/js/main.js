menuToggle = document.getElementById("nav-toggle");
menuClose = document.getElementById("nav-close");
navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.add("active");
});

menuClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
});
