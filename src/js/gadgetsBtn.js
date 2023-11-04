const gadgetsBtn = document.querySelector('.gadgets__btn');
const content = document.querySelector('.gadgets__navigation');

gadgetsBtn.addEventListener('click', function() {
    gadgetsBtn.classList.toggle('btn__show--active');
    content.classList.toggle('gadgets__navigation--active');
    this.innerText = this.innerText === 'Показать все' ? 'Скрыть' : 'Показать все';
})