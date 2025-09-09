document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#menu-btn");
  const collapsibleNav = document.querySelector("#collapsible-nav");

  let menuOpen = false;

  button.addEventListener("click", function () {
    if (menuOpen) {
      collapsibleNav.style.height = "0";
    } else {
      collapsibleNav.style.height = collapsibleNav.scrollHeight + "px";
    }
    menuOpen = !menuOpen;
    s;
  });
});
