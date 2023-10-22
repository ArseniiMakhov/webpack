const menu = document.querySelector(".page__menu");
const menuBackground = document.querySelector(".menu__background");

export default menuBackground.addEventListener('click', menuCloser);

function menuCloser() {
    menu.classList.remove("page__menu--active");
}