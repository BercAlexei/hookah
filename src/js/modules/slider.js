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
        }
      }
    });

    tns({
      container: '.news__slider',
      items: 3,
      autoplay: false,
      nav: false,
      loop: false,
      gutter: '30',
      prevButton: '.news__btn_left',
      nextButton: '.news__btn_right',
      responsive: {
        768: {
          items: 2
        }
      }
    });
}