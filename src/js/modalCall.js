const btnCall = document.querySelector(".btn-tel");
const modalWindow = document.querySelector(".modal");
const modalChat = document.querySelector(".modal__chat");

export default btnCall.addEventListener('click', openerCall);

function openerCall() {
    modalChat.style.right = '-100%';
    modalWindow.classList.add("modal--active");
}

