import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules'

Swiper.use([Pagination]);

export default new Swiper('.gadgets', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 16,
    width: 240,
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        722: {
            spaceBetween: null,
        },
    },
});