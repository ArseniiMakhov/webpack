const burgerBtn = document.querySelector(".btn--burger");
const menu = document.querySelector(".page__menu");

export default burgerBtn.addEventListener('click', menuOpener);

function menuOpener() {
    menu.classList.add("page__menu--active");
}