import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider.js"

export default function slider() {
  tns({
      container: '.slider',
      items: 3,
      autoplay: false,
      nav: false,
      loop: false,
      prevButton: '.slider-btn_left',
      nextButton: '.slider-btn_right',
      gutter: 30,
      responsive: {
        768: {
          items: 2
        },
        576: {
          items: 2
        }
      }
    });

    
    tns({
      container: '.news__slider',
      autoplay: false,
      nav: false,
      loop: false,
      gutter: '30',
      prevButton: '.news__btn_left',
      nextButton: '.news__btn_right',
      responsive: {
        993: {
          items: 3
        },
        576: {
          items: 2
        }
      }
    });

    tns({
      container: '#one',
      prevButton: '.menu__btn_left-one',
      nextButton: '.menu__btn_right-one',
      items: 2,
      gutter: 30,
      autoplay: false,
      nav: false,
      loop: false,
      responsive: {
        768: {
          items: 3
        }
      }
    });
    tns({
      container: '#two',
      prevButton: '.menu__btn_left-one',
      nextButton: '.menu__btn_right-one',
      items: 2,
      gutter: 30,
      autoplay: false,
      nav: false,
      loop: false,
      responsive: {
        768: {
          items: 3
        }
      }
    });
    tns({
      container: '#three',
      prevButton: '.menu__btn_left-one',
      nextButton: '.menu__btn_right-one',
      items: 2,
      gutter: 30,
      autoplay: false,
      nav: false,
      loop: false,
      responsive: {
        768: {
          items: 3
        }
      }
    });
}