const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");

menuBtn.addEventListener("click", function () {
  console.log("Button on");
  menu.classList.toggle("active");
});
