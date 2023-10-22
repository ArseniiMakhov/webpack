const menu = document.querySelector(".page__menu");
const closerBtn = document.querySelectorAll(".btn--close");

export default closerBtn.forEach(function(btn) {
    btn.addEventListener('click', menuCloser)
})

function menuCloser() {
    menu.classList.remove("page__menu--active");
}