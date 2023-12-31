const modalWindow = document.querySelector(".modal");
const modalChat = document.querySelector(".modal__chat");
const modalCall = document.querySelector(".modal__call");
const modalBackground = document.querySelector(".modal__background");


export default modalBackground.addEventListener('click', modalCloser);

function modalCloser() {
    modalWindow.classList.remove('modal--active');
    
    setTimeout(function() {
        modalCall.style.right = '0';
        modalChat.style.right = '0';
    }, 100);
}