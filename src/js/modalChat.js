const btnChat = document.querySelectorAll(".btn-chat");
const modalWindow = document.querySelector(".modal");
const modalCall = document.querySelector(".modal__call");

export default btnChat.forEach(function (btn) {
    btn.addEventListener('click', openerChat)
})

function openerChat() {
    modalCall.style.right = '-100%';
    modalWindow.classList.add("modal--active");
}