(() => {
  const menuButton = document.querySelector("#menu-button");
  const menuList = document.querySelector("#menu-list");

  menuButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    menuList.classList.toggle("showed");
    menuButton.classList.toggle("crossed");
  });
})();
