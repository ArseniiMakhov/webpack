import 'swiper/swiper.scss'
import 'swiper/modules/pagination.scss'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules'

Swiper.use([Pagination]);

export default new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    width: 240,
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    scrollbar: {
        enabled: false,
    },
});

 


