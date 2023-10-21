const btnCall = document.querySelector(".btn-tel");
const modalWindow = document.querySelector(".modal");
const modalChat = document.querySelector(".modal__chat");

export default btnCall.addEventListener('click', openerCall);

function openerCall() {
    modalChat.style.top = '-100vh';
    modalWindow.classList.add("modal--active");
}

