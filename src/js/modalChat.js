const btnChat = document.querySelector(".btn-chat");
const modalWindow = document.querySelector(".modal");
const modalCall = document.querySelector(".modal__call");

export default btnChat.addEventListener('click', openerChat);

function openerChat() {
    modalCall.style.top = '-100vh';
    modalWindow.classList.add("modal--active");
}