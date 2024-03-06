let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");

  redes = document.querySelector(".botones");
  redes.classList.toggle("active");
};