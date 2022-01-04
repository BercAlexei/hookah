export default function mene () {
    const humburger = document.querySelector('.humburger'),
          menu = document.querySelector('.nav-menu'),
          link = menu.querySelectorAll('li'),
          body = document.querySelector('body');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger_active');
        body.classList.toggle('hidden');
        menu.classList.toggle('nav-menu_active');
    })

    link.forEach(item => {
        item.addEventListener('click', ()=> {
            humburger.classList.toggle('humburger_active');
            menu.classList.toggle('nav-menu_active');
            body.classList.toggle('hidden');
        })
    })
}