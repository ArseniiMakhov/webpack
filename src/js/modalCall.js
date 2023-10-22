const btnCall = document.querySelectorAll(".btn-tel");
const modalWindow = document.querySelector(".modal");
const modalChat = document.querySelector(".modal__chat");

export default btnCall.forEach(function (btn) {
    btn.addEventListener('click', openerCall);
})

function openerCall() {
    modalChat.style.right = '-100%';
    modalWindow.classList.add("modal--active");
}

