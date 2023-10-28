import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules'

Swiper.use([Pagination]);

export default new Swiper('.prices__table', {
    direction: 'horizontal',
    width: 260,
    height: 200,
    loop: false,
    spaceBetween: 16,
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});