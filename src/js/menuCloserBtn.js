const menu = document.querySelector(".page__menu");
const closerBtn = document.querySelector(".btn--menu");

export default closerBtn.addEventListener('click', menuCloser);

function menuCloser() {
    menu.classList.remove("page__menu--active");
}