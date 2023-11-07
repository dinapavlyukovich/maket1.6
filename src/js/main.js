import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';

const sliderBrands = document.querySelector('.swiper-container-1')

const swiper1 = new Swiper(sliderBrands, {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
        breakpoints: {
        300: {
            slidesPerView: 'auto',
            spaceBetween: -50,
        },
        767: {
            enabled: false,
            onAny() {
                swiper1.destroy(true, true);
            }
        }

    }
});  

const sliderBrands2 = document.querySelector('.swiper-container-2')

const swiper2 = new Swiper(sliderBrands2, {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
        breakpoints: {
        300: {
            slidesPerView: 'auto',
            spaceBetween: -50,
        },
        767: {
            enabled: false,
            onAny() {
                swiper2.destroy(true, true);
            }
        }
 
    }
 }); 

 const swiper3 = new Swiper('.swiper-container-3', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
        breakpoints: {
        300: {
            slidesPerView: 'auto',
            spaceBetween: -50,
            
        },
        767: {
            enabled: false,
            onAny() {
                swiper3.destroy(true, true);
            }
        }
 
    }
 }); 