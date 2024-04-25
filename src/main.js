import Swiper from 'swiper';
import 'swiper/css';

const nextEl = document.querySelector(swiper-button-next);


const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    direction: 'vertikal',
});
