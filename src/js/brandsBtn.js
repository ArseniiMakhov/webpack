const brandsBtn = document.querySelector('.brands__btn');
const content = document.querySelector('.brands__navigation');

brandsBtn.addEventListener('click', function() {
    brandsBtn.classList.toggle('btn__show--active');
    content.classList.toggle('brands__navigation--active');
    this.innerText = this.innerText === 'Показать все' ? 'Скрыть' : 'Показать все';
})