export default function mene () {
    const humburger = document.querySelector('.humburger'),
          menu = document.querySelector('.nav-menu'),
          link = menu.querySelectorAll('li'),
          body = document.querySelector('body'),
          social = document.querySelector('.header__social'),
          overlay = document.querySelector('.overlay');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger_active');
        body.classList.toggle('hidden');
        menu.classList.toggle('nav-menu_active');
        social.classList.toggle('header__social_active');
        overlay.classList.toggle('overlay_active');
    });

    link.forEach(item => {
        item.addEventListener('click', ()=> {
            humburger.classList.toggle('humburger_active');
            menu.classList.toggle('nav-menu_active');
            body.classList.toggle('hidden');
            social.classList.toggle('header__social_active');
            overlay.classList.toggle('overlay_active');
        })
    });
}