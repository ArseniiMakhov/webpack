const text = document.querySelector('.history__text');
const showBtn = document.querySelector('.history__btn');

export default showBtn.addEventListener('click', function () {
    showBtn.classList.toggle('btn__show--active');
    text.classList.toggle('history__text--active');
    this.innerText = this.innerText === 'Читать далее' ? 'Скрыть' : 'Читать далее';
});

