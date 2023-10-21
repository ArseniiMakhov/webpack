const modalWindow = document.querySelector(".modal");
const btnClose = document.querySelector(".btn--close");
const modalChat = document.querySelector(".modal__chat");
const modalCall = document.querySelector(".modal__call");

export default btnClose.addEventListener('click', modalCloserBtn);

function modalCloserBtn() {
    modalWindow.classList.remove("modal--active");

    setTimeout(function() {
        modalCall.style.right = '0';
        modalChat.style.right = '0';
    }, 100);
}


